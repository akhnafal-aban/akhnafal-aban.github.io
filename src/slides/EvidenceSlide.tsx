import { lazy, Suspense, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'

const LazyTrailer = lazy(() => import('../components/TrailerPlayer'))

const rows = [
  {
    label: 'Video demo',
    value: 'Trailer interaktif, 30 detik, diputar di panel kiri',
    note: 'diputar otomatis dan loop; rekaman simulator asli akan menggantikan trailer ini',
  },
  {
    label: 'TestFlight',
    value: 'N/A',
    note: 'prototipe pembelajaran, tidak didistribusikan',
  },
]

function TrailerPlaceholder() {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-ink/10 bg-[#161616]">
      <div className="flex items-center gap-3 font-mono text-[12px] text-[#8e8e93]">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7L8 5z" fill="#f2f2f2" />
          </svg>
        </span>
        trailer dimuat saat slide ini didekati
      </div>
    </div>
  )
}

export function EvidenceSlide({ id }: { id?: string }) {
  const readerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(readerRef, { once: true, margin: '900px 0px' })
  const reduce = useReducedMotion()
  const reveal = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <Slide id={id} last>
      <h2 className="m-0 mb-10 max-w-[24rem] text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Bukti pendukung untuk proyek ini.
      </h2>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative w-full max-w-[600px]"
        >
          <div ref={readerRef} className="relative">
            {inView ? (
              <Suspense fallback={<TrailerPlaceholder />}>
                <LazyTrailer />
              </Suspense>
            ) : (
              <TrailerPlaceholder />
            )}
          </div>
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