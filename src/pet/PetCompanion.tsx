import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { PixelCat } from './PixelCat'
import { petMessages, type PetContext } from './catFrames'

type PetCompanionProps = {
  context: PetContext
}

type Heart = { id: number; x: number }

export function PetCompanion({ context }: PetCompanionProps) {
  const reduce = useReducedMotion()
  const [msgIndex, setMsgIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [mood, setMood] = useState<'idle' | 'talk' | 'happy'>('idle')
  const [hearts, setHearts] = useState<Heart[]>([])
  const heartId = useRef(0)

  const messages = petMessages[context]
  const fullText = messages[msgIndex % messages.length]

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
  }, [fullText, reduce])

  const pet = () => {
    setMood('happy')
    const newHearts = [0, 1, 2].map((i) => ({ id: heartId.current++, x: -12 + i * 12 }))
    setHearts((h) => [...h, ...newHearts])
    window.setTimeout(() => {
      setHearts((h) => h.filter((it) => !newHearts.some((n) => n.id === it.id)))
    }, 2600)
    window.setTimeout(() => setMood('idle'), 3000)
  }

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {typed && (
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

      <div className="relative">
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
          type="button"
          onClick={pet}
          aria-label="Elus kucing"
          className="pointer-events-auto block cursor-pointer rounded-2xl border-none bg-transparent p-0"
          animate={mood === 'happy' && !reduce ? { rotate: [0, -6, 6, -3, 3, 0], y: [0, -3, 0] } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <PixelCat mood={mood} size={88} />
        </motion.button>
      </div>
    </div>
  )
}