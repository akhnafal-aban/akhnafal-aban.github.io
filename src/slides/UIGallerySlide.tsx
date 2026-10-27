import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'motion/react'
import { DeviceFrame } from '../components/DeviceFrame'

import ui1 from '../../content/personal/asset-tracker/media/ui-01-dashboard.png'
import ui2 from '../../content/personal/asset-tracker/media/ui-02-assets.png'
import ui3 from '../../content/personal/asset-tracker/media/ui-03-asset-detail.png'
import ui4 from '../../content/personal/asset-tracker/media/ui-04-add-asset.png'
import ui5 from '../../content/personal/asset-tracker/media/ui-05-settings.png'
import ui6 from '../../content/personal/asset-tracker/media/ui-06-bitcoin.png'

gsap.registerPlugin(ScrollTrigger)

const shots = [
  { src: ui1, alt: 'Dashboard Asset Tracker', caption: 'Dashboard · total dihitung live dari GET /assets' },
  { src: ui2, alt: 'Daftar aset', caption: 'Assets · tujuh aset dari API, dengan pencarian' },
  { src: ui3, alt: 'Detail aset MacBook Pro M4', caption: 'Detail · harga beli, nilai kini, total return' },
  { src: ui4, alt: 'Form tambah aset', caption: 'Tambah · Save aktif setelah kolom wajib terisi' },
  { src: ui5, alt: 'Halaman settings', caption: 'Settings · pilihan mata uang dan tampilan' },
  { src: ui6, alt: 'Tab harga Bitcoin', caption: 'Bitcoin · feed WebSocket, belum menerima tick' },
]

export function UIGallerySlide({ id }: { id?: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return
    const ctx = gsap.context(() => {
      const trackEl = track.current!
      const dist = () => Math.max(trackEl.scrollWidth - window.innerWidth, 0)
      gsap.to(trackEl, {
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
    }, wrap)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section id={id} className="relative min-h-[100dvh] w-full snap-start overflow-hidden">
      <div ref={wrap} className="relative">
        <div className="flex h-[100dvh] items-center">
          <div className="mb-6 mt-10 w-full px-6 sm:px-12 lg:px-20">
            <div className="mb-8 flex items-end justify-between gap-6">
              <h2 className="m-0 max-w-[22rem] text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
                Enam layar, satu aplikasi yang sama.
              </h2>
              <p className="m-0 hidden font-mono text-[12px] text-ink-3 md:block">
                geser ke samping mengikuti scroll
              </p>
            </div>

            {reduce ? (
              <div className="flex gap-8 overflow-x-auto pb-6">
                {shots.map((s) => (
                  <div key={s.caption} className="shrink-0">
                    <DeviceFrame src={s.src} alt={s.alt} caption={s.caption} width={190} />
                  </div>
                ))}
              </div>
            ) : (
              <div ref={track} className="flex items-start gap-16 will-change-transform">
                {shots.map((s) => (
                  <div key={s.caption} className="shrink-0">
                    <DeviceFrame src={s.src} alt={s.alt} caption={s.caption} width={230} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}