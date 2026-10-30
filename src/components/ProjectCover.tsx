import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Slide } from './Slide'
import { GlassChip } from './Glass'
import { DeviceFrame } from './DeviceFrame'

type CoverImage = { src: string; alt: string }

type ProjectCoverProps = {
  id?: string
  caseLabel: string
  title: string
  subtitle: string
  metas: string[]
  images: {
    backLeft: CoverImage
    backRight: CoverImage
    front: CoverImage
  }
}

export function ProjectCover({ id, caseLabel, title, subtitle, metas, images }: ProjectCoverProps) {
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
            <GlassChip>{caseLabel}</GlassChip>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              style={reduce ? undefined : { y: revealY }}
              className="m-0 whitespace-nowrap text-[clamp(2.2rem,5vw,6rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              {title}
            </motion.h2>
          </div>

          <p className="mt-6 max-w-[36ch] text-[clamp(1rem,1.6vw,1.25rem)] leading-snug text-ink-2">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 font-mono text-[12px] text-ink-3">
            {metas.map((m) => (
              <span key={m} className="rounded-full bg-ink/[0.06] px-3 py-1">
                {m}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="cover-phones relative mt-6 flex items-start gap-2 md:mt-0 md:block md:h-[540px] md:w-[400px] md:shrink-0 lg:h-[600px] lg:w-[470px]"
        >
          <div className="w-[28%] shrink-0 md:absolute md:right-[190px] md:top-[52px] md:w-[168px] md:-rotate-6 lg:right-[225px] lg:top-[60px] lg:w-[195px]">
            <DeviceFrame src={images.backLeft.src} alt={images.backLeft.alt} />
          </div>
          <div className="w-[28%] shrink-0 md:absolute md:left-[198px] md:top-0 md:w-[160px] md:rotate-3 lg:left-[235px] lg:w-[185px]">
            <DeviceFrame src={images.backRight.src} alt={images.backRight.alt} />
          </div>
          <div className="relative w-[36%] shrink-0 md:-left-[28px] md:top-[115px] md:w-[195px] lg:-left-[46px] lg:top-[130px] lg:w-[225px]">
            <DeviceFrame src={images.front.src} alt={images.front.alt} />
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}