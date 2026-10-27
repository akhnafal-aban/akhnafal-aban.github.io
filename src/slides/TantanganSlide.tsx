import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'motion/react'

gsap.registerPlugin(ScrollTrigger)

type Field = { label: string; text: string }

const challenges: { title: string; tag: string; fields: Field[] }[] = [
  {
    title: 'Dua bahasa, satu kontrak data',
    tag: 'serialisasi JSON',
    fields: [
      { label: 'Masalah', text: 'Backend Go menulis snake_case (current_value), Swift memakai camelCase (currentValue). Tanpa penanganan, decode gagal atau property kosong.' },
      { label: 'Analisis', text: 'Respons GET /assets dicek langsung lewat curl, lalu dibandingkan dengan struct di Core/Model/Asset.swift.' },
      { label: 'Solusi', text: 'Dua strategi simetris di satu tempat: keyDecodingStrategy convertFromSnakeCase untuk baca, keyEncodingStrategy convertToSnakeCase untuk kirim. Nama field tidak perlu ditangani per struct.' },
      { label: 'Hasil', text: 'Komunikasi bolak-balik berjalan tanpa satu pun CodingKeys manual.' },
    ],
  },
  {
    title: 'Aplikasi bergantung pada backend yang menyala',
    tag: 'lingkungan lokal',
    fields: [
      { label: 'Masalah', text: 'Semua data diambil dari localhost:8080. Kalau server Go mati, aplikasi menampilkan state kosong tanpa penjelasan.' },
      { label: 'Analisis', text: 'Untuk project belajar, ini disengaja. Server mati sama dengan aplikasi kosong, umpan balik jujur yang memaksa saya menguji jalur API sebelum mempercayai UI.' },
      { label: 'Solusi', text: 'Urutan kerja tetap: jalankan go run ./cmd/api, pastikan endpoint merespons, baru luncurkan aplikasi di simulator. Localhost simulator menunjuk ke mesin Mac yang sama.' },
      { label: 'Hasil', text: 'Dashboard menghitung total portofolio dari data endpoint asli, bukan angka statis.' },
    ],
  },
]

export function TantanganSlide({ id }: { id?: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !wrap.current) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stack-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cards[cards.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false,
        })
        gsap.to(card, {
          scale: 0.93,
          opacity: 0.45,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        })
      })
    }, wrap)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section id={id} ref={wrap} className="relative snap-start">
      <div className="flex h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
        <div>
          <h2 className="m-0 mb-8 max-w-[26rem] text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            Dua hal yang paling sulit.
          </h2>
          <p className="m-0 font-mono text-[12px] text-ink-3">tiap kartu menimpa kartu sebelumnya · scroll</p>
        </div>
      </div>

      {challenges.map((c, ci) => (
        <div key={c.title} className="stack-card sticky top-0 flex h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
          <div className="w-full rounded-3xl border border-ink/10 bg-panel p-8 shadow-[0_24px_60px_rgba(29,29,31,0.08)] md:p-12">
            <p className="m-0 mb-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ios-blue">
              Tantangan {ci + 1} · {c.tag}
            </p>
            <h3 className="m-0 mb-8 text-[clamp(1.4rem,2.6vw,2.1rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
              {c.title}
            </h3>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              {c.fields.map((f) => (
                <div key={f.label}>
                  <p className="m-0 mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{f.label}</p>
                  <p className="m-0 text-[15px] leading-[1.6] text-ink-2">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}