import { motion, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'

const verified = [
  'Backend Go berjalan lokal di port 8080 dengan endpoint CRUD aset.',
  'GET /assets terpakai: total portofolio di dashboard dihitung dari data API, bukan angka statis. Saat demo, total terhitung Rp 98,1 juta dari aset tersimpan.',
  'POST /assets terpakai: form tambah aset mengirim data ke server, dan aset baru muncul di daftar.',
  'Layering bersih di dua sisi: handler lalu service lalu repository di Go, dan satu pintu Api di iOS.',
  'Satu catatan jujur: tab Bitcoin masih menampilkan nilai awal, karena feed WebSocket belum pernah menerima tick.',
]

const lessons = [
  'Kontrak JSON adalah keputusan desain nomor satu: nama field, format tanggal, status code. Kedua sisi menulis dengan asumsi yang sama.',
  'Manual dulu, library kemudian. Setelah memakai URLSession langsung, saya bisa menilai Alamofire dengan dasar, bukan kebiasaan.',
  'Tiga utang teknis di Api.swift sudah dicatat: URL di-force unwrap, status HTTP tidak dicek, error hanya di-print. Perbaikan berikutnya sudah terpetakan.',
  'MVVM membantu project yang datanya datang dari jaringan, tapi itu alat, bukan aturan. Arsitektur mengikuti kebutuhan.',
]

export function HasilSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()
  const col = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <Slide id={id}>
      <h2 className="m-0 mb-10 max-w-[24rem] text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Hasil yang bisa dibuktikan, dan catatan untuk langkah selanjutnya.
      </h2>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div variants={col} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <p className="m-0 mb-5 font-mono text-[12px] uppercase tracking-[0.14em] text-ios-blue">
            Hasil · terverifikasi
          </p>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {verified.map((v) => (
              <li key={v} className="flex gap-3 text-[15px] leading-[1.6] text-ink-2">
                <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-ios-blue" />
                {v}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={col} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <p className="m-0 mb-5 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">
            Pelajaran
          </p>
          <ol className="m-0 flex list-none flex-col gap-4 p-0">
            {lessons.map((l, i) => (
              <li key={l} className="flex gap-4 text-[15px] leading-[1.6] text-ink-2">
                <span className="font-mono text-[13px] text-ios-blue">{String(i + 1).padStart(2, '0')}</span>
                {l}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </Slide>
  )
}