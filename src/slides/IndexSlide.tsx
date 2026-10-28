import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Slide, EASE } from '../components/Slide'
import { LiquidGlassTabs, type ProjectKind } from '../components/LiquidGlassTabs'
import { projects, type Project } from '../data/projects'

type IndexSlideProps = {
  id?: string
  onPick: (view: string) => void
}

function ProjectCard({ p, reduce, onPick }: { p: Project; reduce: boolean | null; onPick: (v: string) => void }) {
  const body = (
    <>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[13px] text-ios-blue">{p.no}</span>
        <span className="text-[clamp(1.2rem,2vw,1.5rem)] font-semibold tracking-[-0.01em]">{p.title}</span>
        {!p.view && (
          <span className="ml-auto font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-3">
            konten menyusul
          </span>
        )}
      </div>
      <ul className="idx-pts m-0 mt-3 flex list-none flex-col gap-1.5 p-0">
        {p.points.map((pt) => (
          <li key={pt} className="flex gap-2.5 text-[13px] leading-[1.45] text-ink-2">
            <span className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full bg-ink-3" />
            {pt}
          </li>
        ))}
      </ul>
    </>
  )

  const cls =
    'idx-card block w-full rounded-2xl border border-ink/10 bg-panel p-5 text-left md:p-6 ' +
    (p.view ? 'cursor-pointer transition-transform hover:-translate-y-0.5' : '')

  return (
    <motion.li
      layout
      className="list-none"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
    >
      {p.view ? (
        <motion.button
          type="button"
          onClick={() => onPick(p.view as string)}
          className={cls}
          whileHover={reduce ? undefined : { y: -3 }}
          whileTap={reduce ? undefined : { scale: 0.99 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          {body}
        </motion.button>
      ) : (
        <div className={cls}>{body}</div>
      )}
    </motion.li>
  )
}

export function IndexSlide({ id, onPick }: IndexSlideProps) {
  const [kind, setKind] = useState<ProjectKind>('personal')
  const reduce = useReducedMotion()
  const shown = projects.filter((p) => p.kind === kind)

  const reveal = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  }
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  }

  return (
    <Slide id={id} align="start">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center"
      >
        <motion.h2
          variants={item}
          className="m-0 mb-6 text-center text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
        >
          Jelajahi Proyek Saya
        </motion.h2>

        <motion.div variants={item} className="mb-6">
          <LiquidGlassTabs value={kind} onChange={setKind} />
        </motion.div>

        <div className="flex w-full flex-1 items-start justify-center">
          {shown.length > 0 ? (
            <motion.ul layout className="idx-list m-0 flex w-full list-none flex-col gap-3 p-0">
              <AnimatePresence mode="popLayout" initial={false}>
                {shown.map((p) => (
                  <ProjectCard key={p.no} p={p} reduce={reduce} onPick={onPick} />
                ))}
              </AnimatePresence>
            </motion.ul>
          ) : (
            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="m-0 mt-10 max-w-[30ch] text-center text-[14px] leading-[1.6] text-ink-3"
            >
              Belum ada proyek team yang dipublikasikan di halaman ini. Kartu akan ditambahkan setelah
              proyeknya siap ditampilkan.
            </motion.p>
          )}
        </div>

        <motion.p variants={item} className="m-0 mt-4 pb-6 font-mono text-[12px] text-ink-2">
          {kind === 'personal' ? 'klik salah satu kartu untuk membaca proyeknya' : 'proyek team menyusul'}
        </motion.p>
      </motion.div>
    </Slide>
  )
}