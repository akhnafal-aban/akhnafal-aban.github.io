import { motion, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'

const steps = [
  {
    no: '01',
    title: 'View',
    note: 'SwiftUI menampilkan data dan menangkap aksi pengguna',
  },
  {
    no: '02',
    title: 'View model',
    note: '@Observable, memanggil Api dan menyimpan state layar',
  },
  {
    no: '03',
    title: 'Api',
    note: 'Satu lapisan networking, dipakai semua layar',
  },
  {
    no: '04',
    title: 'Server Go',
    note: 'Backend di mesin lokal yang sama, merespons JSON',
  },
]

const principles = [
  {
    title: 'Single Entry Point',
    note: 'Hanya Api.swift yang menyentuh URLSession. Layar mana pun kirim dan terima data lewat pintu yang sama.',
  },
  {
    title: 'Networking Abstraction',
    note: 'View hanya berinteraksi dengan ViewModel. ViewModel meneruskan request ke Api.swift yang mengenkapsulasi URL, header, dan HTTP method.',
  },
  {
    title: 'JSON Decoding & Data Modeling',
    note: 'Respons JSON di-decode menjadi struct Swift melalui Decodable sebelum diteruskan ke ViewModel. View menerima data bertipe kuat yang siap ditampilkan.',
  },
]

const folders = [
  { lvl: 0, name: 'App/', note: 'entry point + config' },
  { lvl: 0, name: 'Core/', note: 'tidak kenal UI' },
  { lvl: 1, name: 'Model/', note: 'struct hasil decode' },
  { lvl: 1, name: 'Network/', note: 'Api.swift' },
  { lvl: 1, name: 'Services/', note: 'WebSocket Binance' },
  { lvl: 0, name: 'Screens/', note: 'semua UI' },
  { lvl: 1, name: 'Root/, Main/, Toolbar/, Components/', note: 'pasangan view + view model per fitur' },
]

export function ArsitekturSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()
  const col = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <Slide id={id}>
      <h2 className="m-0 mb-8 text-center text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Saya menggunakan Design Pattern MVVM.
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
        <motion.div
          variants={col}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-ink/10 bg-panel p-6"
        >
          <p className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Aliran data</p>
          <ol className="m-0 list-none p-0">
            {steps.map((s) => (
              <li key={s.no} className="flex gap-3 border-t border-ink/10 py-3 first:border-t-0 first:pt-0">
                <span className="font-mono text-[12px] text-ios-blue">{s.no}</span>
                <div className="min-w-0 flex-1">
                  <p className="m-0 text-[14px] font-medium text-ink">{s.title}</p>
                  <p className="m-0 mt-1 text-[12px] leading-[1.45] text-ink-3">{s.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          variants={col}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-ink/10 bg-panel p-6"
        >
          <p className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Tiga hal Utama</p>
          <div className="flex flex-col gap-5">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-ios-blue/40 pl-4">
                <p className="m-0 text-[14px] font-medium text-ink">{p.title}</p>
                <p className="m-0 mt-1 text-[12.5px] leading-[1.55] text-ink-2">{p.note}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={col}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-ink/10 bg-panel p-6"
        >
          <p className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Struktur folder</p>
          <ul className="m-0 list-none p-0">
            {folders.map((f) => (
              <li
                key={f.name}
                className="flex items-baseline justify-between gap-3 border-t border-ink/10 py-2.5 first:border-t-0 first:pt-0"
                style={{ paddingLeft: f.lvl * 18 }}
              >
                <span className="font-mono text-[12.5px] text-ink">{f.name}</span>
                <span className="text-right font-mono text-[11px] text-ink-3">{f.note}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Slide>
  )
}
