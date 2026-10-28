import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'
import { LiquidGlassTabs, type ProjectKind } from '../components/LiquidGlassTabs'
import { projects, type Project } from '../data/projects'

function ProjectCard({ p, reduce }: { p: Project; reduce: boolean | null }) {
  const body = (
    <>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[13px] text-ios-blue">{p.no}</span>
        <span className="text-[clamp(1.2rem,2vw,1.5rem)] font-semibold tracking-[-0.01em]">{p.title}</span>
        {!p.live && (
          <span className="ml-auto font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-3">
            konten menyusul
          </span>
        )}
      </div>
      <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0">
        {p.points.map((pt) => (
          <li key={pt} className="flex gap-2.5 text-[13.5px] leading-[1.5] text-ink-2">
            <span className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full bg-ink-3" />
            {pt}
          </li>
        ))}
      </ul>
    </>
  )

  const cls =
    'block w-full rounded-2xl border border-ink/10 bg-panel p-6 text-left no-underline transition-transform md:p-7 ' +
    (p.live ? 'hover:-translate-y-0.5' : '')

  if (!p.live) {
    return (
      <motion.li layout className="list-none">
        <div className={cls}>{body}</div>
      </motion.li>
    )
  }

  return (
    <motion.li layout className="list-none">
      <motion.a
        href={p.anchor}
        className={cls}
        whileHover={reduce ? undefined : { y: -3 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {body}
      </motion.a>
    </motion.li>
  )
}

export function IndexSlide({ id }: { id?: string }) {
  const [kind, setKind] = useState<ProjectKind>('personal')
  const reduce = useReducedMotion()
  const shown = projects.filter((p) => p.kind === kind)

  return (
    <Slide id={id}>
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
        <h2 className="m-0 mb-8 text-center text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
          Jelajahi Proyek Saya
        </h2>

        <div className="mb-10">
          <LiquidGlassTabs value={kind} onChange={setKind} />
        </div>

        <motion.ul layout className="m-0 flex w-full list-none flex-col gap-4 p-0">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p) => (
              <ProjectCard key={p.no} p={p} reduce={reduce} />
            ))}
          </AnimatePresence>
        </motion.ul>

        {shown.length === 0 && (
          <p className="m-0 mt-4 max-w-[30ch] text-center text-[14px] leading-[1.6] text-ink-3">
            Belum ada proyek team yang dipublikasikan di halaman ini. Kartu akan ditambahkan setelah
            proyeknya siap ditampilkan.
          </p>
        )}

        <p className="m-0 mt-6 font-mono text-[11.5px] text-ink-3">
          {kind === 'personal' ? 'proyek yang saya kerjakan sendiri atau bersama tim kecil' : 'proyek team menyusul'}
        </p>
      </div>
    </Slide>
  )
}