import { cn } from '@/lib/cn'

export function Marquee({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  const doubled = [...items, ...items]
  return (
    <div
      className={cn(
        'relative overflow-hidden border-y-4 border-ink bg-volt py-2',
        className,
      )}
      role="presentation"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-6 px-3">
        {doubled.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-display text-sm font-black uppercase tracking-tight text-ink"
          >
            <span aria-hidden className="text-lg leading-none">
              ✦
            </span>
            {it}
          </span>
        ))}
      </div>
    </div>
  )
}
