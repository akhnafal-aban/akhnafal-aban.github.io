import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Slide } from '../components/Slide'
import { GlassChip } from '../components/Glass'
import { DeviceFrame } from '../components/DeviceFrame'
import dashScreen from '../../content/personal/asset-tracker/media/ui-01-dashboard.png'
import assetsScreen from '../../content/personal/asset-tracker/media/ui-02-assets.png'
import addScreen from '../../content/personal/asset-tracker/media/ui-04-add-asset.png'

export function ProjectCoverSlide({ id }: { id?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35'],
  })
  const revealY = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])

  return (
    <Slide id={id}>
      <div ref={ref} className="flex flex-col gap-14 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-16">
        <div className="min-w-0 flex-1">
          <div className="mb-5">
            <GlassChip>CASE STUDY 01 OF 03</GlassChip>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              style={reduce ? undefined : { y: revealY }}
              className="m-0 whitespace-nowrap text-[clamp(2.2rem,5vw,6rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Asset Tracker
            </motion.h2>
          </div>

          <p className="mt-6 max-w-[36ch] text-[clamp(1rem,1.6vw,1.25rem)] leading-snug text-ink-2">
            Aplikasi pelacak aset yang saya bangun untuk belajar mengonsumsi REST API dari sisi iOS, dengan backend Go yang saya tulis sendiri.
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
          className="relative mt-6 flex items-start gap-4 md:mt-0 md:block md:h-[540px] md:w-[400px] md:shrink-0 lg:h-[600px] lg:w-[470px]"
        >
          <div className="w-[104px] shrink-0 md:absolute md:right-[190px] md:top-[52px] md:w-[168px] md:-rotate-6 lg:right-[225px] lg:top-[60px] lg:w-[195px]">
            <DeviceFrame src={addScreen} alt="Form tambah aset Asset Tracker" />
          </div>
          <div className="w-[104px] shrink-0 md:absolute md:left-[198px] md:top-0 md:w-[160px] md:rotate-3 lg:left-[235px] lg:w-[185px]">
            <DeviceFrame src={assetsScreen} alt="Daftar aset Asset Tracker" />
          </div>
          <div className="relative w-[112px] shrink-0 md:left-[6px] md:top-[115px] md:w-[195px] lg:left-[8px] lg:top-[130px] lg:w-[225px]">
            <DeviceFrame src={dashScreen} alt="Dashboard Asset Tracker" />
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}