import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  ChartLineUp, Wind, Lightning, Atom, AirplaneTakeoff, MusicNote,
  HourglassMedium, type Icon,
} from '@phosphor-icons/react'
import { Slide, EASE } from '../components/Slide'
import { LiquidGlassTabs, type ProjectKind } from '../components/LiquidGlassTabs'
import { projects, type Project } from '../data/projects'

type IndexSlideProps = {
  id?: string
  onPick: (view: string) => void
}

const iconMap: Record<string, Icon> = {
  ChartLineUp,
  Wind,
  Lightning,
  Atom,
  AirplaneTakeoff,
  MusicNote,
}

function getIcon(name: string): Icon {
  return iconMap[name] ?? ChartLineUp
}

function ProjectCard({ p, reduce, onPick }: { p: Project; reduce: boolean | null; onPick: (v: string) => void }) {
  const IconComp = getIcon(p.icon)
  const isLive = Boolean(p.view)

  const body = (
    <>
      <div className="flex items-center gap-4">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-300"
          style={{ backgroundColor: isLive ? `${p.accent}14` : '#6e6e7314' }}
        >
          <IconComp
            size={19}
            weight="duotone"
            color={isLive ? p.accent : '#6e6e73'}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </span>
        <div className="min-w-0 flex-1">
          <span className="text-[clamp(1.1rem,1.8vw,1.35rem)] font-semibold tracking-[-0.01em] text-ink">
            {p.title}
          </span>
          <span className="ml-2 font-mono text-[11px] text-ink-3">{p.no}</span>
        </div>
        {!isLive && (
          <span className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-[#8b8b90]"
            style={{ backgroundColor: '#6e6e730d', border: '1px dashed #8b8b9050' }}>
            <HourglassMedium size={13} weight="fill" color="#8b8b90" />
            Coming Soon
          </span>
        )}
      </div>
      <ul className="idx-pts m-0 mt-3 flex list-none flex-col gap-1.5 pl-[52px]">
        {p.points.map((pt) => (
          <li key={pt} className="flex gap-2.5 text-[13px] leading-[1.45] text-ink-2">
            <span
              className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full transition-colors duration-300"
              style={{ backgroundColor: isLive ? `${p.accent}60` : '#6e6e7360' }}
            />
            {pt}
          </li>
        ))}
      </ul>
    </>
  )

  const baseCls =
    'idx-card group relative block w-full overflow-hidden rounded-2xl border bg-panel p-5 text-left transition-all duration-300 md:p-6 '

  return (
    <motion.li
      layout
      className="list-none"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
    >
      {isLive ? (
        <motion.button
          type="button"
          onClick={() => onPick(p.view as string)}
          className={baseCls}
          style={{
            borderColor: 'rgba(29,29,31,0.08)',
            cursor: 'pointer',
          }}
          whileHover={reduce ? undefined : { y: -3 }}
          whileTap={reduce ? undefined : { scale: 0.99 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          onHoverStart={() => {}}
        >
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100"
            style={{ backgroundColor: p.accent, borderRadius: '2px 2px 0 0' }}
          />
          <span
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: `0 4px 24px ${p.accent}18, inset 0 0 0 1px ${p.accent}25` }}
          />
          {body}
        </motion.button>
      ) : (
        <div
          className={baseCls}
          style={{
            borderColor: 'rgba(29,29,31,0.06)',
            borderStyle: 'dashed',
            backgroundColor: 'rgba(255,255,255,0.5)',
          }}
        >
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px]"
            style={{
              background: `repeating-linear-gradient(90deg, ${p.accent}30 0, ${p.accent}30 6px, transparent 6px, transparent 12px)`,
            }}
          />
          <div style={{ opacity: 0.75 }}>{body}</div>
        </div>
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
              Coming Soon..
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