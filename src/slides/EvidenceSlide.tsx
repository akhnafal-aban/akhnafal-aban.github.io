import { motion, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'
import { DeviceFrame } from '../components/DeviceFrame'
import dashScreen from '../../content/personal/asset-tracker/media/ui-01-dashboard.png'

const rows = [
  {
    label: 'Video demo',
    value: 'PLACEHOLDER · 15 sampai 30 detik, loop dalam frame device',
    note: 'rekaman simulator boleh',
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
    <Slide id={id} last>
      <h2 className="m-0 mb-10 max-w-[24rem] text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Bukti pendukung.
      </h2>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          <DeviceFrame
            src={dashScreen}
            alt="Dashboard Asset Tracker, dipakai sebagai poster video demo"
            caption="Poster video demo · media/asset-tracker/demo.mp4"
            width={220}
          />
          <span className="glass absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="#1d1d1f" />
            </svg>
          </span>
        </motion.div>

        <div className="flex w-full max-w-[34rem] flex-col gap-6">
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
      </div>
    </Slide>
  )
}