import { motion, useReducedMotion } from 'motion/react'
import { Slide, EASE } from '../components/Slide'

const lines = [
  'Banyak aplikasi bisnis mengambil dan mengirim data melalui API. Karena itu, developer iOS perlu memahami cara berkomunikasi dengan server dan menangani data yang diterima.',
  'Saya sendiri lebih sering bekerja di backend, termasuk membuat API. Lewat Asset Tracker, saya ingin mencoba sisi lainnya, yaitu menggunakan API dari aplikasi iOS dan memastikan proses pertukaran datanya berjalan dengan benar.',
  'Aplikasi ini menggunakan URLSession untuk mengambil data dan SwiftUI untuk menampilkannya. Backend-nya saya buat menggunakan Go dan jalankan secara lokal. Dengan setup ini, saya bisa menguji sendiri seluruh prosesnya, mulai dari database hingga data ditampilkan di aplikasi.',
]

export function MasalahSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE },
    },
  }

  return (
    <Slide id={id}>
      <div className="mx-auto flex max-w-[46rem] flex-col items-center">
        <p className="m-0 mb-10 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">
          01 · Masalah
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="flex flex-col gap-6"
        >
          {lines.map((t, i) => (
            <motion.p
              key={i}
              variants={item}
              className="m-0 mx-auto max-w-[38rem] text-center text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.65] text-ink-2"
            >
              {t}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </Slide>
  )
}