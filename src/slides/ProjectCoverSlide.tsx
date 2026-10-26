import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Slide } from '../components/Slide'
import { GlassChip } from '../components/Glass'
import { DeviceFrame } from '../components/DeviceFrame'
import dashScreen from '../../content/personal/asset-tracker/media/ui-01-dashboard.png'

export function ProjectCoverSlide() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35'],
  })
  const revealY = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])

  return (
    <Slide>
      <div ref={ref} className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="mb-5">
            <GlassChip>CASE STUDY 01 OF 03</GlassChip>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              style={reduce ? undefined : { y: revealY }}
              className="m-0 whitespace-nowrap text-[clamp(3rem,7.5vw,6.8rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Asset Tracker
            </motion.h2>
          </div>

          <p className="mt-6 max-w-[34ch] text-[clamp(1rem,1.6vw,1.25rem)] leading-snug text-ink-2">
            SwiftUI dan REST API Go buatan sendiri. Latihan mengonsumsi API dari sisi iOS.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 font-mono text-[12px] text-ink-3">
            <span className="rounded-full bg-ink/[0.06] px-3 py-1">iOS · Personal</span>
            <span className="rounded-full bg-ink/[0.06] px-3 py-1">Prototype</span>
            <span className="rounded-full bg-ink/[0.06] px-3 py-1">Peran: Solo</span>
          </div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <DeviceFrame
            src={dashScreen}
            alt="Dashboard Asset Tracker, data live dari API lokal"
            caption="Dashboard · data live dari API lokal"
            width={210}
          />
        </motion.div>
      </div>
    </Slide>
  )
}