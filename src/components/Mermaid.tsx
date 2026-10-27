import { useEffect, useState } from 'react'

type MermaidProps = {
  chart: string
  caption?: string
}

export function Mermaid({ chart, caption }: MermaidProps) {
  const [svg, setSvg] = useState<string | null>(null)

  useEffect(() => {
    let alive = true
    const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`
    setSvg(null)
    import('mermaid')
      .then(async (mm) => {
        const m = mm.default
        m.initialize({
          startOnLoad: false,
          theme: 'base',
          fontFamily: 'ui-monospace, "SF Mono", "JetBrains Mono", monospace',
          themeVariables: {
            primaryColor: '#f5f5f7',
            primaryTextColor: '#1d1d1f',
            primaryBorderColor: '#c7c7cc',
            lineColor: '#8e8e93',
            fontSize: '14px',
          },
        })
        const result = await m.render(id, chart)
        if (alive) setSvg(result.svg)
      })
      .catch(() => {
        if (alive) setSvg('')
      })
    return () => {
      alive = false
    }
  }, [chart])

  return (
    <figure className="m-0">
      {svg === null ? (
        <span className="font-mono text-[12px] text-ink-3">memuat diagram…</span>
      ) : svg === '' ? (
        <span className="font-mono text-[12px] text-ink-3">diagram gagal dirender</span>
      ) : (
        <div className="overflow-x-auto [&>svg]:block [&>svg]:h-auto" dangerouslySetInnerHTML={{ __html: svg }} />
      )}
      {caption ? (
        <figcaption className="mt-3 font-mono text-[11px] text-ink-3">{caption}</figcaption>
      ) : null}
    </figure>
  )
}