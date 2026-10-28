import { useEffect, useRef } from 'react'
import { CAT_GRID, catFrames, palette, type CatMood } from './catFrames'

type PixelCatProps = {
  mood: CatMood
  size?: number
}

function drawFrame(ctx: CanvasRenderingContext2D, rows: string[]) {
  ctx.clearRect(0, 0, CAT_GRID, CAT_GRID)
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x]
      const color = palette[ch]
      if (!color) continue
      ctx.fillStyle = color
      ctx.fillRect(x, y, 1, 1)
    }
  })
}

export function PixelCat({ mood, size = 96 }: PixelCatProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const raf = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let last = 0

    const loop = (t: number) => {
      const interval = mood === 'talk' ? 190 : mood === 'happy' ? 240 : 2600
      if (t - last > interval) {
        last = t
        frame = (frame + 1) % 2
      }

      let rows = catFrames.idleOpen
      if (mood === 'talk') {
        rows = frame === 0 ? catFrames.talkOpen : catFrames.talkClosed
      } else if (mood === 'happy') {
        rows = catFrames.happy
      } else {
        rows = frame === 0 ? catFrames.idleOpen : catFrames.idleBlink
      }

      drawFrame(ctx, rows)
      raf.current = requestAnimationFrame(loop)
    }

    raf.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf.current)
  }, [mood])

  return (
    <canvas
      ref={canvasRef}
      width={CAT_GRID}
      height={CAT_GRID}
      aria-hidden="true"
      style={{ width: size, height: size, imageRendering: 'pixelated' }}
    />
  )
}