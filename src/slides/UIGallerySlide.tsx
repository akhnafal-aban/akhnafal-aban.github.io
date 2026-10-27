import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'motion/react'
import { DeviceFrame } from '../components/DeviceFrame'

import ui1 from '../../content/personal/asset-tracker/media/thumbs/ui-01-dashboard.jpg'
import ui2 from '../../content/personal/asset-tracker/media/thumbs/ui-02-assets.jpg'
import ui3 from '../../content/personal/asset-tracker/media/thumbs/ui-03-asset-detail.jpg'
import ui4 from '../../content/personal/asset-tracker/media/thumbs/ui-04-add-asset.jpg'
import ui5 from '../../content/personal/asset-tracker/media/thumbs/ui-05-settings.jpg'
import ui6 from '../../content/personal/asset-tracker/media/thumbs/ui-06-bitcoin.jpg'

gsap.registerPlugin(ScrollTrigger)

const shots = [
  { src: ui1, alt: 'Dashboard Asset Tracker', caption: 'Dashboard, total nilai dihitung langsung dari GET /assets' },
  { src: ui2, alt: 'Daftar aset', caption: 'Daftar aset dari API, lengkap dengan pencarian' },
  { src: ui3, alt: 'Detail aset MacBook Pro M4', caption: 'Detail aset: harga beli, nilai saat ini, dan total return' },
  { src: ui4, alt: 'Form tambah aset', caption: 'Form tambah aset; tombol Save aktif setelah kolom wajib terisi' },
  { src: ui5, alt: 'Halaman settings', caption: 'Halaman pengaturan, berisi pilihan mata uang dan tampilan' },
  { src: ui6, alt: 'Tab harga Bitcoin', caption: 'Halaman harga Bitcoin; feed WebSocket belum menerima data' },
]

const FRAME_W = 300

export function UIGallerySlide({ id }: { id?: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const counter = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return
    const ctx = gsap.context(() => {
      const trackEl = track.current!
      const frames = gsap.utils.toArray<HTMLElement>('.g-frame')
      const dots = gsap.utils.toArray<HTMLElement>('.g-dot')
      const counterEl = counter.current
      const dist = () => Math.max(trackEl.scrollWidth - window.innerWidth, 0)
      let lastActive = -1

      const tween = gsap.to(trackEl, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrap.current,
          start: 'top top',
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      frames.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          containerAnimation: tween,
          start: 'left center',
          end: 'right center',
          scrub: true,
          onUpdate(self) {
            const p = Math.max(0, Math.min(1, self.progress))
            const peak = Math.sin(p * Math.PI)
            gsap.set(el, { scale: 0.84 + 0.16 * peak, opacity: 0.38 + 0.62 * peak })
            if (peak > 0.92 && lastActive !== i) {
              lastActive = i
              if (counterEl) {
                counterEl.textContent = `${String(i + 1).padStart(2, '0')} / ${String(frames.length).padStart(2, '0')}`
              }
              dots.forEach((d, di) => {
                gsap.set(d, { opacity: di === i ? 1 : 0.28 })
              })
            }
          },
        })
      })
    }, wrap)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section id={id} className="relative min-h-[100dvh] w-full snap-start overflow-hidden">
      <div ref={wrap} className="relative">
        <div className="flex h-[100dvh] items-center">
          {reduce ? (
            <div className="flex gap-8 overflow-x-auto px-6 pb-6">
              {shots.map((s) => (
                <div key={s.caption} className="shrink-0 opacity-100">
                  <DeviceFrame src={s.src} alt={s.alt} caption={s.caption} width={220} />
                </div>
              ))}
            </div>
          ) : (
            <div
              ref={track}
              className="flex items-start will-change-transform"
              style={{ gap: 90, paddingLeft: 'calc(50vw - 150px)', paddingRight: 'calc(50vw - 150px)' }}
            >
              {shots.map((s) => (
                <div key={s.caption} className="g-frame shrink-0" style={{ width: FRAME_W }}>
                  <DeviceFrame src={s.src} alt={s.alt} width={FRAME_W} />
                  <p className="g-cap m-0 mt-4 font-mono text-[13px] leading-[1.5] text-ink-3">
                    {s.caption}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-3">
        {reduce ? (
          <span className="font-mono text-[12px] text-ink-3">01 / 06</span>
        ) : (
          <>
            <span ref={counter} className="font-mono text-[12px] text-ink-3">01 / 06</span>
            <div className="flex gap-2">
              {shots.map((s) => (
                <span key={s.caption} className="g-dot h-[5px] w-[5px] rounded-full bg-ink" />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}