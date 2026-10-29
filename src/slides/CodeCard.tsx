import { motion, useReducedMotion } from 'motion/react'

export type CodeBlock = {
  file: string
  label: string
  text: string
  code: React.ReactNode
}

type CodeCardProps = {
  b: CodeBlock
  ci: number
  total: number
}

export function CodeCard({ b, ci, total }: CodeCardProps) {
  const reduce = useReducedMotion()
  return (
    <section className="relative min-h-[100dvh] w-full snap-start">
      <div className="flex min-h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.975 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid w-full grid-cols-1 gap-6 rounded-[26px] border border-ink/10 bg-panel p-6 shadow-[0_24px_60px_rgba(29,29,31,0.08)] lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-10 lg:p-10"
        >
          <div className="min-w-0">
            <p className="m-0 mb-3 truncate font-mono text-[11px] text-ink-3">{b.file}</p>
            <pre className="m-0 overflow-x-auto font-mono text-[12px] leading-[1.65] text-[#1d1d1f] md:text-[12.5px]">
              <code>{b.code}</code>
            </pre>
          </div>
          <div className="flex flex-col justify-center border-t border-ink/10 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="m-0 mb-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ios-blue">
              Blok {ci + 1} dari {total}
            </p>
            <h3 className="m-0 mb-4 text-[clamp(1.1rem,1.8vw,1.4rem)] font-semibold leading-[1.25]">
              {b.label}
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.65] text-ink-2">{b.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}