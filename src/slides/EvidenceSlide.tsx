import { motion, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'

const rows = [
  {
    label: 'Video demo',
    value: 'PLACEHOLDER',
    note: 'rekaman simulator asli berdurasi 15 sampai 30 detik akan dipasang di sini',
  },
  {
    label: 'TestFlight',
    value: 'N/A',
    note: 'prototipe pembelajaran, tidak didistribusikan',
  },
]

export function EvidenceSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()
  const reveal = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <Slide id={id}>
      <h2 className="m-0 mb-10 text-center text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Bukti pendukung untuk proyek ini.
      </h2>

      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        {rows.map((r) => (
          <motion.div
            key={r.label}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="border-t border-ink/10 pt-5"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">{r.label}</span>
              <span className="text-right font-mono text-[13px] text-ink">{r.value}</span>
            </div>
            <p className="m-0 mt-2 text-[13px] text-ink-3">{r.note}</p>
          </motion.div>
        ))}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="border-t border-ink/10 pt-5"
        >
          <p className="m-0 mb-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">GitHub</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/akhnafal-aban/Asset-Tracker"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ios-blue px-5 py-2.5 text-[14px] font-semibold text-white no-underline shadow-[0_6px_18px_rgba(10,132,255,0.35)] transition-transform active:scale-[0.98]"
            >
              Asset-Tracker · iOS
            </a>
            <a
              href="https://github.com/akhnafal-aban/asset-tracker-be"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink/[0.06] px-5 py-2.5 text-[14px] font-medium text-ink no-underline transition-transform active:scale-[0.98]"
            >
              asset-tracker-be · Go
            </a>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}