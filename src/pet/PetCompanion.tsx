import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from 'motion/react'
import { PixelCat } from './PixelCat'
import { petMessages, type PetContext } from './catFrames'

type PetCompanionProps = {
  context: PetContext
}

type Heart = { id: number; x: number }

const PEEK_VISIBLE = 36 // piksel kucing yang tetap terlihat saat mengintip
const CAT_SIZE = 88

export function PetCompanion({ context }: PetCompanionProps) {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<'active' | 'peek'>('peek')
  const [msgIndex, setMsgIndex] = useState(0)
  const [peekGreet, setPeekGreet] = useState(false)
  const [typed, setTyped] = useState('')
  const [mood, setMood] = useState<'idle' | 'talk' | 'happy'>('idle')
  const [hearts, setHearts] = useState<Heart[]>([])
  const heartId = useRef(0)
  const catRef = useRef<HTMLButtonElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Saat halaman pertama dibuka, kucing sudah menyembunyikan diri:
  // mengintip dari tepi kanan, menunggu diklik.
  // Posisi diukur tanpa transform aktif supaya idempoten
  // (aman terhadap eksekusi ganda di StrictMode).
  useLayoutEffect(() => {
    const cat = catRef.current?.getBoundingClientRect()
    if (!cat) return
    const untransformedLeft = cat.left - x.get()
    const targetX = window.innerWidth - PEEK_VISIBLE - untransformedLeft
    x.set(targetX)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const messages = petMessages[context]
  const [hint, setHint] = useState<string | null>(null)
  const [greetText, setGreetText] = useState('Kembali nyaa..')
  const hintFired = useRef(false)
  const firstSummon = useRef(true)
  const fullText = hint ?? (peekGreet ? greetText : messages[msgIndex % messages.length])

  // Ganti pesan berkala sesuai konteks.
  useEffect(() => {
    setMsgIndex(0)
  }, [context])

  useEffect(() => {
    const rotate = window.setInterval(() => {
      setMsgIndex((i) => i + 1)
    }, 9000)
    return () => window.clearInterval(rotate)
  }, [])

  // Efek ketik per karakter; reduced motion menampilkan langsung.
  useEffect(() => {
    if (mode !== 'active') return
    if (reduce) {
      setTyped(fullText)
      setMood('idle')
      return
    }
    setTyped('')
    setMood('talk')
    let i = 0
    const typer = window.setInterval(() => {
      i += 1
      setTyped(fullText.slice(0, i))
      if (i >= fullText.length) {
        window.clearInterval(typer)
        setMood('idle')
      }
    }, 26)
    return () => window.clearInterval(typer)
  }, [fullText, reduce, mode])

  useEffect(() => {
    if (!peekGreet) return
    const t = window.setTimeout(() => setPeekGreet(false), 3600)
    return () => window.clearTimeout(t)
  }, [peekGreet])

  // Petunjuk sekali, setelah kucing pertama kali dimunculkan:
  // kasih tahu bahwa dia bisa disembunyikan lagi ke tepi.
  useEffect(() => {
    if (mode !== 'active' || hintFired.current) return
    hintFired.current = true
    const show = window.setTimeout(() => {
      setHint('Tarik aku ke pinggir kalau mau aku sembunyi nyaa..')
    }, 7000)
    const hide = window.setTimeout(() => setHint(null), 13500)
    return () => {
      window.clearTimeout(show)
      window.clearTimeout(hide)
    }
  }, [mode])

  const pet = () => {
    setMood('happy')
    const newHearts = [0, 1, 2].map((i) => ({ id: heartId.current++, x: -12 + i * 12 }))
    setHearts((h) => [...h, ...newHearts])
    window.setTimeout(() => {
      setHearts((h) => h.filter((it) => !newHearts.some((n) => n.id === it.id)))
    }, 2600)
    window.setTimeout(() => setMood('idle'), 3000)
  }

  const springBack = () => {
    if (reduce) {
      x.set(0)
      y.set(0)
    } else {
      animate(x, 0, { type: 'spring', stiffness: 260, damping: 26 })
      animate(y, 0, { type: 'spring', stiffness: 260, damping: 26 })
    }
    setMode('active')
    setGreetText(firstSummon.current ? 'Halo nyaa! Klik aku kalau mau diajak ngobrol..' : 'Kembali nyaa..')
    firstSummon.current = false
    setPeekGreet(true)
    setMood('happy')
    window.setTimeout(() => setMood('idle'), 1500)
  }

  const didDrag = useRef(false)

  const onCatClick = () => {
    if (didDrag.current) {
      didDrag.current = false
      return
    }
    if (mode === 'peek') {
      springBack()
    } else {
      pet()
    }
  }

  const onDragEnd = (_: unknown, info: { offset: { x: number; y: number } }) => {
    const cat = catRef.current?.getBoundingClientRect()
    if (!cat) return
    const W = window.innerWidth
    const H = window.innerHeight
    const moved = Math.hypot(info.offset.x, info.offset.y)
    if (moved >= 8) didDrag.current = true

    setMood('idle')

    const snapTo = (targetLeft?: number, targetTop?: number) => {
      const x0 = x.get()
      const y0 = y.get()
      const dx = targetLeft !== undefined ? targetLeft - cat.left : 0
      const dy = targetTop !== undefined ? targetTop - cat.top : 0
      if (reduce) {
        x.set(x0 + dx)
        y.set(y0 + dy)
      } else {
        animate(x, x0 + dx, { type: 'spring', stiffness: 300, damping: 30 })
        animate(y, y0 + dy, { type: 'spring', stiffness: 300, damping: 30 })
      }
      setMode('peek')
      setTyped('')
      setMood('idle')
    }

    // Digeser melewati tepi: kucing mengintip dan diam.
    if (cat.left < -30) {
      snapTo(-(CAT_SIZE - PEEK_VISIBLE))
      return
    }
    if (cat.right > W + 30) {
      snapTo(W - PEEK_VISIBLE)
      return
    }
    if (cat.bottom > H + 30) {
      snapTo(undefined, H - 30)
      return
    }
  }

  return (
    <motion.div
      style={{ x, y }}
      drag
      dragMomentum={false}
      dragElastic={0.12}
      onDragStart={() => setMood('happy')}
      onDragEnd={onDragEnd}
      className="fixed bottom-5 right-5 z-[60] flex cursor-grab touch-none select-none flex-col items-end gap-2 active:cursor-grabbing sm:bottom-6 sm:right-6"
    >
      <AnimatePresence>
        {mode === 'active' && typed && (
          <motion.div
            key={fullText}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass pointer-events-none max-w-[230px] rounded-2xl px-4 py-2.5 text-[13px] leading-[1.5] text-ink"
          >
            <p aria-live="polite" className="m-0">
              {typed}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={
          mode === 'active' && mood !== 'happy' && !reduce
            ? { y: [0, -3, 0] }
            : { y: 0 }
        }
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <AnimatePresence>
          {hearts.map((h) => (
            <motion.span
              key={h.id}
              initial={reduce ? { opacity: 1, y: 0, x: h.x } : { opacity: 1, y: 0, x: h.x }}
              animate={reduce ? { opacity: 1, y: 0, x: h.x } : { opacity: 0, y: -46, x: h.x }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.4, ease: 'easeOut' }}
              className="pointer-events-none absolute -top-2 left-1/2 text-[15px] text-[#f2a7b3]"
            >
              ♥
            </motion.span>
          ))}
        </AnimatePresence>

        <motion.button
          ref={catRef}
          type="button"
          aria-label="Elus kucing"
          onClick={onCatClick}
          className="pointer-events-auto block cursor-grab touch-none select-none rounded-2xl border-none bg-transparent p-0 active:cursor-grabbing"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          animate={mood === 'happy' && !reduce ? { rotate: [0, -6, 6, -3, 3, 0], y: [0, -3, 0] } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <PixelCat mood={mode === 'peek' ? 'idle' : mood} size={CAT_SIZE} />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}