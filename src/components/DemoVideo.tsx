import { useRef } from 'react'

type DemoVideoProps = {
  src: string
  poster: string
  caption: string
  alt: string
}

export function DemoVideo({ src, poster, caption, alt }: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="glass rounded-[26px] p-[7px]" style={{ width: 210, aspectRatio: '402 / 874' }}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
          className="h-full w-full rounded-[20px] object-cover"
        />
      </div>
      <p className="m-0 max-w-[220px] text-center font-mono text-[12px] leading-[1.5] text-ink-3">
        {caption}
      </p>
    </div>
  )
}