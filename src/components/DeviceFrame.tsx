import type { CSSProperties } from 'react'

type DeviceFrameProps = {
  src: string
  alt: string
  caption?: string
  width?: number
}

export function DeviceFrame({ src, alt, caption, width = 200 }: DeviceFrameProps) {
  const style: CSSProperties = { width, aspectRatio: '402 / 874' }
  return (
    <figure className="m-0">
      <div className="glass rounded-[26px] p-[7px]" style={style}>
        <img src={src} alt={alt} className="h-full w-full rounded-[20px] object-cover" />
      </div>
      {caption ? (
        <figcaption className="mt-2 font-mono text-[11px] text-ink-3">{caption}</figcaption>
      ) : null}
    </figure>
  )
}