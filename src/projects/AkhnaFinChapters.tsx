import { Slide } from '../components/Slide'
import { ProjectCover } from '../components/ProjectCover'
import { GallerySlide } from '../slides/GallerySlide'
import { DemoVideo } from '../components/DemoVideo'
import { motion, useReducedMotion } from 'motion/react'

import dash from '../../content/projects/03-akhnafin/media/thumbs/ui-01-dashboard.jpg'
import trans from '../../content/projects/03-akhnafin/media/thumbs/ui-02-transactions.jpg'
import quickadd from '../../content/projects/03-akhnafin/media/thumbs/ui-03-quickadd.jpg'
import manual from '../../content/projects/03-akhnafin/media/thumbs/ui-04-manual-form.jpg'
import settings from '../../content/projects/03-akhnafin/media/thumbs/ui-05-settings.jpg'

import demoText from '../../content/projects/03-akhnafin/media/demo-text-entry.mp4'
import demoTextPoster from '../../content/projects/03-akhnafin/media/demo-text-entry-poster.jpg'
import demoReceipt from '../../content/projects/03-akhnafin/media/demo-receipt.mp4'
import demoReceiptPoster from '../../content/projects/03-akhnafin/media/demo-receipt-poster.jpg'

const shots = [
  { src: dash, alt: 'Dashboard AkhnaFin', caption: 'Dashboard dengan ringkasan periode dan hutang' },
  { src: quickadd, alt: 'QuickAdd text entry', caption: 'QuickAdd untuk mencatat lewat kalimat' },
  { src: manual, alt: 'Form manual', caption: 'Form manual dengan nominal, kategori, dan tanggal' },
  { src: trans, alt: 'Daftar transaksi', caption: 'Daftar transaksi per periode' },
  { src: settings, alt: 'Pengaturan', caption: 'Pengaturan aplikasi' },
]

const masalahLines = [
  'Saya sering malas kalau harus membuka aplikasi keuangan, pilih kategori, ketik nominal, lalu simpan. Prosesnya terasa panjang untuk sesuatu yang seharusnya cuma butuh lima detik.',
  'AkhnaFin saya buat sebagai aplikasi personal untuk mempersingkat proses pencatatan itu. Cukup ketik satu kalimat seperti "kopi 25rb tadi pagi", atau foto resi belanja, dan aplikasi mengubahnya menjadi transaksi yang siap dikonfirmasi.',
  'Dengan catatan yang terkumpul rapi, pengelolaan dan evaluasi pengeluaran bisa dilakukan tanpa perlu mengingat semuanya di kepala.',
]

const aiPoints = [
  {
    title: 'Satu kalimat cukup',
    note: 'Ketik "makan siang 35rb di warteg" dalam bahasa Indonesia dan model GLM via W&B Inference menguraikannya menjadi nominal, merchant, dan perkiraan kategori. Karena parsing lewat LLM, bahasa bebas: campur Indonesia dan English pun terbaca.',
  },
  {
    title: 'Foto resi langsung jadi draft',
    note: 'Ambil foto resi belanja, Vision membaca teksnya, lalu hasilnya masuk ke pipeline yang sama. Nominal, tanggal, dan nama toko diekstrak otomatis.',
  },
  {
    title: 'Selalu draft, tidak pernah auto-save',
    note: 'Apa pun jalur inputnya, hasilnya selalu berupa draft yang bisa diedit sebelum disimpan. Tidak ada data yang masuk tanpa persetujuan saya.',
  },
]

const modularPoints = [
  {
    title: 'Empat modul dalam satu package',
    note: 'AkhnaFinKit berisi AkhnaFinCore untuk model dan enum, ServiceInterfaces untuk protokol dan mock, Persistence untuk repository, dan Services untuk implementasi konkret.',
  },
  {
    title: 'App target hanya UI',
    note: 'Semua logika hidup di package. App target hanya menyusun antarmuka dan melakukan wiring dependensi lewat composition root.',
  },
  {
    title: 'Test cepat tanpa simulator',
    note: 'Karena logika terpisah dari UI, semua unit test bisa dijalankan lewat swift test dalam hitungan detik, tanpa perlu membuka simulator.',
  },
]

const devPoints = [
  {
    title: 'Dikembangkan dengan OpenChamber',
    note: 'Sesi pengembangan berjalan lewat OpenChamber, agent yang membaca kode, menulis test, dan melakukan refactoring. Saya yang menentukan arsitektur dan kriteria terima; eksekusi detailnya banyak dibantu agent.',
  },
  {
    title: 'Jejak sesi terdokumentasi',
    note: 'Setiap sesi tercatat di folder Docs dengan ringkasan teknis, keputusan yang diambil, dan referensi dokumentasi Apple yang dipakai. Progress bisa ditelusuri dari commit pertama sampai fitur terakhir.',
  },
  {
    title: 'Verifikasi tetap manual',
    note: '39 unit test hijau dan dua fitur inti diuji langsung di perangkat. Agent mempercepat penulisan, tapi keputusan akhir dan pengujian tetap saya yang lakukan.',
  },
]

type ACProps = { id?: string }

function MasalahSlide({ id }: ACProps) {
  const reduce = useReducedMotion()
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  }
  return (
    <Slide id={id}>
      <div className="mx-auto flex max-w-[46rem] flex-col items-center">
        <p className="m-0 mb-10 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">
          03 · Masalah
        </p>
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="flex flex-col gap-6">
          {masalahLines.map((t, i) => (
            <motion.p key={i} variants={item} className="m-0 mx-auto max-w-[38rem] text-center text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.65] text-ink-2">
              {t}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </Slide>
  )
}

function DemoSlide({ id }: ACProps) {
  const reduce = useReducedMotion()
  return (
    <Slide id={id}>
      <h2 className="m-0 mb-4 text-center text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Dua cara mencatat dalam hitungan detik.
      </h2>
      <p className="m-0 mb-12 text-center font-mono text-[12px] text-ink-3">
        rekaman asli dari perangkat
      </p>
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-start justify-center gap-12"
      >
        <DemoVideo
          src={demoText}
          poster={demoTextPoster}
          alt="Demo mencatat pengeluaran lewat teks"
          caption="Catat lewat teks: ketik satu kalimat, draft langsung muncul"
        />
        <DemoVideo
          src={demoReceipt}
          poster={demoReceiptPoster}
          alt="Demo mencatat pengeluaran lewat foto resi"
          caption="Catat lewat resi: foto struk belanja, data terisi otomatis"
        />
      </motion.div>
    </Slide>
  )
}

function AiSlide({ id }: ACProps) {
  const reduce = useReducedMotion()
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  }
  return (
    <Slide id={id}>
      <h2 className="m-0 mb-4 text-center text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Bagaimana AI membantu pencatatan saya.
      </h2>
      <p className="m-0 mb-12 text-center font-mono text-[12px] text-ink-3">
        parsing lewat GLM di W&B Inference
      </p>
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        {aiPoints.map((p) => (
          <motion.div key={p.title} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}
            className="grid grid-cols-1 gap-1 border-t border-ink/10 py-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-6">
            <span className="text-[15px] font-medium text-ink">{p.title}</span>
            <span className="text-[15px] leading-[1.5] text-ink-2 md:text-[17px]">{p.note}</span>
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}

function ModularSlide({ id }: ACProps) {
  const reduce = useReducedMotion()
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  }
  return (
    <Slide id={id}>
      <h2 className="m-0 mb-4 text-center text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Modular lewat package lokal.
      </h2>
      <p className="m-0 mb-12 text-center font-mono text-[12px] text-ink-3">
        logika di package, UI di app target
      </p>
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        {modularPoints.map((p) => (
          <motion.div key={p.title} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}
            className="grid grid-cols-1 gap-1 border-t border-ink/10 py-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-6">
            <span className="text-[15px] font-medium text-ink">{p.title}</span>
            <span className="text-[15px] leading-[1.5] text-ink-2 md:text-[17px]">{p.note}</span>
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}

function DevSlide({ id }: ACProps) {
  const reduce = useReducedMotion()
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  }
  return (
    <Slide id={id}>
      <h2 className="m-0 mb-4 text-center text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Dikembangkan dengan bantuan AI.
      </h2>
      <p className="m-0 mb-12 text-center font-mono text-[12px] text-ink-3">
        jujur soal prosesnya
      </p>
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        {devPoints.map((p) => (
          <motion.div key={p.title} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}
            className="grid grid-cols-1 gap-1 border-t border-ink/10 py-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-6">
            <span className="text-[15px] font-medium text-ink">{p.title}</span>
            <span className="text-[15px] leading-[1.5] text-ink-2 md:text-[17px]">{p.note}</span>
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}

function BuktiSlide({ id }: ACProps) {
  const reduce = useReducedMotion()
  const reveal = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  }
  return (
    <Slide id={id}>
      <h2 className="m-0 mb-10 text-center text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Bukti pendukung untuk proyek ini.
      </h2>
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className="border-t border-ink/10 pt-5">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">TestFlight</span>
          </div>
          <div className="mt-2">
            <a
              href="https://testflight.apple.com/join/jK1Jf6zw"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13px] text-ios-blue no-underline [overflow-wrap:anywhere]"
            >
              https://testflight.apple.com/join/jK1Jf6zw
            </a>
          </div>
          <p className="m-0 mt-2 text-[13px] text-ink-3">tersedia untuk penguji via TestFlight</p>
        </motion.div>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className="border-t border-ink/10 pt-5">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">GitHub</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://github.com/akhnafal-aban/AkhnaFin"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ios-blue px-5 py-2.5 text-[14px] font-semibold text-white no-underline shadow-[0_6px_18px_rgba(10,132,255,0.35)] transition-transform active:scale-[0.98]"
            >
              AkhnaFin · iOS
            </a>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}

export function AkhnaFinChapters() {
  return (
    <>
      <ProjectCover
        id="cover-akhnafin"
        caseLabel="CASE STUDY 03 OF 03"
        title="AkhnaFin"
        subtitle="Aplikasi keuangan personal untuk mempersingkat pencatatan pengeluaran. Cukup satu kalimat atau satu foto resi."
        metas={['iOS · Personal', 'SwiftUI', 'SwiftData · CloudKit']}
        images={{
          backLeft: { src: quickadd, alt: 'QuickAdd text entry' },
          backRight: { src: manual, alt: 'Form manual' },
          front: { src: dash, alt: 'Dashboard AkhnaFin' },
        }}
      />
      <MasalahSlide id="af-masalah" />
      <DemoSlide id="af-demo" />
      <AiSlide id="af-ai" />
      <GallerySlide id="af-ui" shots={shots} />
      <ModularSlide id="af-modular" />
      <DevSlide id="af-dev" />
      <BuktiSlide id="af-bukti" />
    </>
  )
}