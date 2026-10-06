import { cn } from '@/lib/cn'

const accentBg: Record<string, string> = {
  acid: 'bg-acid',
  punch: 'bg-punch',
  volt: 'bg-volt',
  slime: 'bg-slime',
  foam: 'bg-foam',
}
const accentText: Record<string, string> = {
  acid: 'text-ink',
  punch: 'text-paper',
  volt: 'text-paper',
  slime: 'text-ink',
  foam: 'text-ink',
}

export function SectionHeader({
  index,
  kicker,
  title,
  accent = 'acid',
  blurb,
}: {
  index: string
  kicker: string
  title: string
  accent?: 'acid' | 'punch' | 'volt' | 'slime' | 'foam'
  blurb?: string
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center border-2 border-ink font-display text-base font-black shadow-brutal-sm',
            accentBg[accent],
            accentText[accent],
          )}
        >
          {index}
        </span>
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-widest">
            {kicker}
          </p>
          <h2 className="font-display text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl">
            {title}
          </h2>
        </div>
      </div>
      {blurb && (
        <p className="max-w-md border-l-4 border-ink pl-3 font-sans text-sm font-medium">
          {blurb}
        </p>
      )}
    </div>
  )
}
