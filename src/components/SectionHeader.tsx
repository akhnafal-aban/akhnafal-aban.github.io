import { cn } from '@/lib/cn'

export function SectionHeader({
  number,
  title,
  dark = false,
}: {
  number: string
  title: string
  dark?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center border-2 border-current font-display text-base font-black shadow-brutal-sm',
          dark ? 'bg-paper text-ink' : 'bg-acid text-ink',
        )}
      >
        {number}
      </span>
      <h2
        className={cn(
          'font-display text-2xl font-black uppercase leading-none tracking-tighter sm:text-3xl',
          dark ? 'text-paper' : 'text-ink',
        )}
      >
        {title}
      </h2>
    </div>
  )
}
