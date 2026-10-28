import { motion } from 'motion/react'

export type ProjectKind = 'personal' | 'team'

type LiquidGlassTabsProps = {
  value: ProjectKind
  onChange: (v: ProjectKind) => void
}

const tabs: { key: ProjectKind; label: string }[] = [
  { key: 'personal', label: 'Personal' },
  { key: 'team', label: 'Team' },
]

export function LiquidGlassTabs({ value, onChange }: LiquidGlassTabsProps) {
  return (
    <div className="lg-shell" role="tablist" aria-label="Filter proyek">
      {tabs.map((t) => {
        const selected = value === t.key
        return (
          <button
            key={t.key}
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(t.key)}
            className="relative rounded-full px-5 py-2 text-[13px] font-medium text-ink transition-colors"
            style={{ color: selected ? '#1d1d1f' : '#6e6e73' }}
          >
            {selected && (
              <motion.span
                layoutId="lg-tab-pill"
                className="lg-pill absolute inset-0 rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{t.label}</span>
          </button>
        )
      })}
    </div>
  )
}