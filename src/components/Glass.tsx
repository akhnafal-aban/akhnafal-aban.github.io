export function GlassChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[12px] leading-none text-ink">
      {children}
    </span>
  )
}
