import { motion, useReducedMotion } from 'motion/react'
import { Slide, EASE } from '../components/Slide'

const lines = [
  'Hampir semua aplikasi bisnis menyimpan datanya di server, dan satu-satunya jembatan dari server itu ke aplikasi iOS adalah API. Karena itu, kemampuan membaca dan mengirim data lewat API menjadi hal dasar untuk developer iOS.',
  'Latar belakang saya di backend, jadi saya lebih sering berada di sisi yang membuat API. Asset Tracker saya bangun untuk menutup kekosongan di sisi sebaliknya, tempat setiap request harus benar-benar diuji sebelum dipercaya.',
  'Aplikasinya mengambil data lewat URLSession dan menampilkannya di SwiftUI, sedangkan backend Go berjalan di mesin lokal yang sama. Hasilnya satu loop penuh yang saya jalani sendiri, dari database sampai layar.',
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
        <p className="m-0 mb-8 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">
          01 · Masalah
        </p>
        <h2 className="m-0 mb-10 max-w-[42rem] text-center text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold leading-[1.15] tracking-[-0.03em] [text-wrap:balance]">
          Saya terbiasa membuat API, dan belum pernah memakai API itu dari aplikasi iOS.
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="flex flex-col gap-5"
        >
          {lines.map((t, i) => (
            <motion.p
              key={i}
              variants={item}
              className="m-0 mx-auto max-w-[36rem] text-center text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.6] text-ink-2"
            >
              {t}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </Slide>
  )
}