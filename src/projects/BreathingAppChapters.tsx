import { BreathingAppCover } from './BreathingAppCover'
import { Slide } from '../components/Slide'
import { CodeCard } from '../slides/CodeCard'
import { motion, useReducedMotion } from 'motion/react'

const kw = 'text-[#a12ba6]'
const str = 'text-[#c0392b]'
const typ = 'text-[#0b5f8a]'
const cm = 'text-[#8a8f98]'

import ui1 from '../../content/projects/02-breathing-app/media/thumbs/ui-01-home-heart.jpg'
import ui2 from '../../content/projects/02-breathing-app/media/thumbs/ui-02-home-calm.jpg'
import ui3 from '../../content/projects/02-breathing-app/media/thumbs/ui-03-home-stiff.jpg'
import ui4 from '../../content/projects/02-breathing-app/media/thumbs/ui-04-breathing-desc.jpg'
import ui5 from '../../content/projects/02-breathing-app/media/thumbs/ui-05-countdown.jpg'
import ui6 from '../../content/projects/02-breathing-app/media/thumbs/ui-06-letsgo.jpg'
import ui7 from '../../content/projects/02-breathing-app/media/thumbs/ui-07-inhale.jpg'
import ui8 from '../../content/projects/02-breathing-app/media/thumbs/ui-08-hold.jpg'
import ui9 from '../../content/projects/02-breathing-app/media/thumbs/ui-09-exhale.jpg'
import ui10 from '../../content/projects/02-breathing-app/media/thumbs/ui-10-welldone.jpg'

const shots = [
  { src: ui1, alt: 'Halaman utama dengan kartu jantung', caption: 'Halaman utama How Do You Feel dengan kartu jantung' },
  { src: ui2, alt: 'Halaman utama dengan kartu tenang', caption: 'Halaman utama dengan kartu butuh tenang' },
  { src: ui3, alt: 'Halaman utama dengan kartu kaku', caption: 'Halaman utama dengan kartu badan kaku' },
  { src: ui4, alt: 'Penjelasan napas 4-7-8', caption: 'Penjelasan teknik napas 4-7-8 dengan tombol mulai' },
  { src: ui5, alt: 'Hitungan mundur', caption: 'Hitungan mundur sebelum sesi dimulai' },
  { src: ui6, alt: 'Let us go', caption: 'Tanda sesi siap dimulai' },
  { src: ui7, alt: 'Fase inhale', caption: 'Fase inhale dengan hitungan' },
  { src: ui8, alt: 'Fase hold', caption: 'Fase hold dengan hitungan' },
  { src: ui9, alt: 'Fase exhale', caption: 'Fase exhale dengan hitungan' },
  { src: ui10, alt: 'Selesai', caption: 'Welldone saat satu siklus selesai' },
]

const stack = [
  {
    name: 'SwiftUI',
    why: 'Framework UI deklaratif dari Apple. Semua tampilan, navigasi, dan state ditulis dalam satu bahasa yang sama.',
  },
  {
    name: 'State · @State',
    why: 'Belajar bagaimana @State memicu render ulang saat nilainya berubah. Inti dari semua animasi dan pergantian layar di aplikasi ini.',
  },
  {
    name: 'Timer.publish',
    why: 'Kombinasi Framework dan Combine untuk menghitung setiap detik. Dari sini saya belajar event-driven: view merespons tiap tick timer tanpa perlu loop manual.',
  },
  {
    name: 'fullScreenCover',
    why: 'Navigasi antar layar penuh. Setiap transisi dari menu ke sesi latihan, lalu ke layar selesai, ditangani modifier ini.',
  },
]

const masalahLines = [
  'Breathing App adalah project iOS pertama saya, dibuat untuk Apple Developer Academy Challenge 1. Sebelum ini saya belum pernah menulis satu baris SwiftUI pun.',
  'Fokus utamanya bukan fitur, tapi belajar fondasinya: bagaimana menyusun tampilan dengan VStack, bagaimana state bekerja, dan bagaimana satu template view bisa dipakai berulang kali dengan input berbeda.',
  'Hasilnya sebuah aplikasi panduan napas 4-7-8 yang bisa dipakai dari awal sampai akhir, dari memilih perasaan sampai menyelesaikan satu siklus latihan.',
]

const codeBlocks = [
  {
    file: 'UI/CardView.swift · MainView.swift',
    label: 'Satu template untuk semua kartu',
    text: 'FeatureCard adalah struct yang menyimpan gambar, judul, dan tujuan navigasi. Tiga kartu di halaman utama dibuat dari satu array featureCard. Setiap kartu dirender oleh CardView yang sama, yang hanya menerima imageName dan title. Jadi, menambah perasaan baru cukup menambah satu baris di array, tanpa menulis view baru dari nol.',
    code: (
      <>
        <span className={kw}>struct</span> <span className={typ}>FeatureCard</span>: <span className={typ}>Identifiable</span> {'{'}
        {'\n'}    <span className={kw}>let</span> id = <span className={typ}>UUID</span>()
        {'\n'}    <span className={kw}>let</span> imageName: <span className={typ}>String</span>
        {'\n'}    <span className={kw}>let</span> title: <span className={typ}>String</span>
        {'\n'}    <span className={kw}>let</span> route: <span className={typ}>AnyView</span>
        {'\n'}{'}'}
        {'\n'}
        {'\n'}<span className={cm}>// MainView.swift: cukup ubah array ini</span>
        {'\n'}<span className={kw}>let</span> featureCard: [<span className={typ}>FeatureCard</span>] = [
        {'\n'}    <span className={typ}>FeatureCard</span>(imageName: <span className={str}>"Heart Rate"</span>,
        {'\n'}                title: <span className={str}>"deg-deg-an?"</span>,
        {'\n'}                route: <span className={typ}>AnyView</span>(<span className={typ}>BreathingDescView</span>())),
        {'\n'}    <span className={typ}>FeatureCard</span>(imageName: <span className={str}>"Wavy"</span>,
        {'\n'}                title: <span className={str}>"need calm?"</span>,
        {'\n'}                route: <span className={typ}>AnyView</span>(<span className={typ}>SoothingMusicView</span>())),
        {'\n'}    <span className={typ}>FeatureCard</span>(imageName: <span className={str}>"Wong Strict"</span>,
        {'\n'}                title: <span className={str}>"Kaku?"</span>,
        {'\n'}                route: <span className={typ}>AnyView</span>(<span className={typ}>MovementView</span>())),
        {'\n'}{']'}
      </>
    ),
  },
  {
    file: 'Features/Breathing/BreathingStartPointView.swift',
    label: 'State menggerakkan tampilan',
    text: 'Hitungan mundur 3-2-1 dikendalikan oleh tiga property @State: startCountDown untuk angka yang tampil, isFinished untuk berpindah dari angka ke pesan, dan showNext untuk membuka layar berikutnya. Timer.publish mengirim sinyal setiap detik, lalu onReceive memprosesnya: kurangi angka, dan kalau sudah habis, set isFinished jadi true. Begitu isFinished berubah, SwiftUI otomatis mengganti tampilan dari angka ke tulisan tanpa perlu memanipulasi UI secara manual.',
    code: (
      <>
        <span className={kw}>@State private var</span> startCountDown: <span className={typ}>Int</span> = <span className={str}>3</span>
        {'\n'}<span className={kw}>@State private var</span> isFinished = <span className={kw}>false</span>
        {'\n'}<span className={kw}>@State private var</span> showNext = <span className={kw}>false</span>
        {'\n'}
        {'\n'}<span className={kw}>let</span> timer = <span className={typ}>Timer</span>.publish(every: <span className={str}>1</span>, on: .main, <span className={kw}>in</span>: .common).autoconnect()
        {'\n'}
        {'\n'}<span className={kw}>var</span> body: <span className={kw}>some</span> <span className={typ}>View</span> {'{'}
        {'\n'}    <span className={kw}>if</span> !isFinished {'{'}
        {'\n'}        <span className={typ}>Text</span>(<span className={str}>"\\(startCountDown)"</span>)
        {'\n'}    {'}'} <span className={kw}>else</span> {'{'}
        {'\n'}        <span className={typ}>Text</span>(<span className={str}>"Let's Go!"</span>)
        {'\n'}    {'}'}
        {'\n'}{'}'}
        {'\n'}
        {'\n'}.onReceive(timer) {'{'} _ <span className={kw}>in</span>
        {'\n'}    <span className={kw}>if</span> startCountDown {'>'} <span className={str}>1</span> {'{'}
        {'\n'}        startCountDown -= <span className={str}>1</span>
        {'\n'}    {'}'} <span className={kw}>else</span> {'{'}
        {'\n'}        isFinished = <span className={kw}>true</span>
        {'\n'}    {'}'}
        {'\n'}{'}'}
      </>
    ),
  },
  {
    file: 'Features/Breathing/BreathingGuidingView.swift',
    label: 'Algoritma siklus 4-7-8',
    text: 'Satu siklus terdiri dari tiga fase: inhale, hold, dan exhale. Setiap fase punya hitungan mundur sendiri yang diatur oleh property onPart. Timer berjalan setiap detik dan mengurangi startCountDown. Kalau hitungan habis, onPart bertambah satu dan hitungan direset sesuai fase berikutnya. Setelah ketiga fase selesai, cycleCount bertambah dan aplikasi menampilkan pesan selesai. Satu timer yang sama menggerakkan seluruh siklus, hanya berpindah antar fase.',
    code: (
      <>
        <span className={kw}>@State private var</span> onPart: <span className={typ}>Int</span> = <span className={str}>1</span>
        {'\n'}<span className={kw}>@State private var</span> cycleCount = <span className={str}>0</span>
        {'\n'}
        {'\n'}.onReceive(timer) {'{'} _ <span className={kw}>in</span>
        {'\n'}    <span className={kw}>if</span> startCountDown {'>'} <span className={str}>1</span> {'{'}
        {'\n'}        startCountDown -= <span className={str}>1</span>
        {'\n'}    {'}'} <span className={kw}>else</span> {'{'}
        {'\n'}        <span className={kw}>if</span> onPart {'<'} <span className={str}>4</span> {'{'}
        {'\n'}            onPart += <span className={str}>1</span>
        {'\n'}        {'}'} <span className={kw}>else</span> {'{'}
        {'\n'}            cycleCount += <span className={str}>1</span>
        {'\n'}            <span className={kw}>if</span> cycleCount == maxCycle {'{'}
        {'\n'}                isFinished = <span className={kw}>true</span>
        {'\n'}                <span className={kw}>return</span>
        {'\n'}            {'}'}
        {'\n'}        {'}'}
        {'\n'}        <span className={kw}>switch</span> onPart {'{'}
        {'\n'}        <span className={kw}>case</span> <span className={str}>1</span>: startCountDown = <span className={str}>2</span>  <span className={cm}>{'// inhale'}</span>
        {'\n'}        <span className={kw}>case</span> <span className={str}>2</span>: startCountDown = <span className={str}>2</span>  <span className={cm}>{'// hold'}</span>
        {'\n'}        <span className={kw}>case</span> <span className={str}>3</span>: startCountDown = <span className={str}>2</span>  <span className={cm}>{'// exhale'}</span>
        {'\n'}        <span className={kw}>case</span> <span className={str}>4</span>: startCountDown = <span className={str}>5</span>
        {'\n'}        <span className={kw}>default</span>: <span className={kw}>break</span>
        {'\n'}        {'}'}
        {'\n'}    {'}'}
        {'\n'}{'}'}
      </>
    ),
  },
]

const principles = [
  {
    title: 'Template kartu dari satu array',
    note: 'Tiga kartu di halaman utama hanya data di array featureCard. Setiap kartu punya gambar, judul, dan tujuan navigasi masing-masing.',
  },
  {
    title: 'State sebagai pemicu tampilan',
    note: 'Perubahan nilai @State seperti isFinished dan onPart langsung direspons SwiftUI dengan menggambar ulang layar. Tidak ada manipulasi UI manual.',
  },
  {
    title: 'Satu timer untuk seluruh siklus',
    note: 'Timer.publish yang sama menggerakkan hitungan mundur, perpindahan fase, dan penanda selesai. Cukup satu sumber detak per detik.',
  },
]

const folders = [
  { lvl: 0, name: 'App/', note: 'entry point' },
  { lvl: 0, name: 'Features/', note: 'fitur per folder' },
  { lvl: 1, name: 'Home/', note: 'halaman utama + pager' },
  { lvl: 1, name: 'Breathing/', note: 'desc, start, guiding' },
  { lvl: 1, name: 'Movement/, SoothingMusic/', note: 'placeholder' },
  { lvl: 0, name: 'UI/', note: 'CardView + FeatureCard' },
  { lvl: 0, name: 'Docs/, Assets', note: 'desain + gambar' },
]

type BACProps = { id?: string }

function MasalahSlide({ id }: BACProps) {
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
          02 · Masalah
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

function StackSlide({ id }: BACProps) {
  const reduce = useReducedMotion()
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  }
  return (
    <Slide id={id}>
      <h2 className="m-0 mb-8 text-center text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
        Empat hal yang saya pelajari di sini.
      </h2>
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        {stack.map((s) => (
          <motion.div key={s.name} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}
            className="grid grid-cols-1 gap-1 border-t border-ink/10 py-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-6">
            <span className="font-mono text-[15px] text-ios-blue">{s.name}</span>
            <span className="text-[15px] leading-[1.5] text-ink-2 md:text-[17px]">{s.why}</span>
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}

function ArsitekturSlide({ id }: BACProps) {
  const reduce = useReducedMotion()
  const col = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  }
  return (
    <Slide id={id}>
      <h2 className="m-0 mb-8 text-center text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
        Saya menggunakan Design Pattern MVVM.
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
        <motion.div variants={col} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-ink/10 bg-panel p-6">
          <p className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Aliran data</p>
          <ol className="m-0 list-none p-0">
            {[
              { no: '01', t: 'FeatureCard', n: 'Array yang menyimpan semua perasaan' },
              { no: '02', t: 'CardView', n: 'Template visual untuk setiap kartu' },
              { no: '03', t: 'TabView', n: 'Pager yang menggeser antar kartu' },
              { no: '04', t: 'Sheet', n: 'Membuka fitur sesuai route di kartu' },
            ].map((s) => (
              <li key={s.no} className="flex gap-3 border-t border-ink/10 py-3 first:border-t-0 first:pt-0">
                <span className="font-mono text-[12px] text-ios-blue">{s.no}</span>
                <div className="min-w-0 flex-1">
                  <p className="m-0 text-[14px] font-medium text-ink">{s.t}</p>
                  <p className="m-0 mt-1 text-[12px] leading-[1.45] text-ink-3">{s.n}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
        <motion.div variants={col} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-ink/10 bg-panel p-6">
          <p className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Tiga hal utama</p>
          <div className="flex flex-col gap-5">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-ios-blue/40 pl-4">
                <p className="m-0 text-[14px] font-medium text-ink">{p.title}</p>
                <p className="m-0 mt-1 text-[12.5px] leading-[1.55] text-ink-2">{p.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={col} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-ink/10 bg-panel p-6">
          <p className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Struktur folder</p>
          <ul className="m-0 list-none p-0">
            {folders.map((f) => (
              <li key={f.name} className="flex items-baseline justify-between gap-3 border-t border-ink/10 py-2.5 first:border-t-0 first:pt-0" style={{ paddingLeft: f.lvl * 18 }}>
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

function CodeSlide({ id }: BACProps) {
  return (
    <div id={id} className="relative">
      <section className="relative min-h-[100dvh] w-full snap-start">
        <div id="bac-code-intro" className="flex min-h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
          <div className="mx-auto w-full text-center">
            <h2 className="m-0 mb-2 text-[clamp(1.8rem,3.6vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Kode inti Breathing App, dari template sampai algoritma.
            </h2>
            <p className="m-0 font-mono text-[12px] text-ink-3">
              tiga blok kode, masing-masing satu slide, dijelaskan satu per satu
            </p>
          </div>
        </div>
      </section>
      {codeBlocks.map((b, ci) => (
        <CodeCard key={b.file} b={b} ci={ci} total={3} />
      ))}
    </div>
  )
}

function UiIntroSlide({ id }: BACProps) {
  return (
    <Slide id={id}>
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="m-0 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          Enough with the internals. Lemme show you the UI.
        </h2>
        <p className="m-0 mt-6 max-w-[46ch] text-[clamp(1rem,1.6vw,1.25rem)] leading-[1.6] text-ink-2">
          Semua layar ini hasil satu project yang saya tulis dari nol tanpa template UI. Dari halaman
          sampai sesi selesai, semua digerakkan state dan timer yang sama.
        </p>
      </div>
    </Slide>
  )
}

function UiGallery({ id }: BACProps) {
  return (
    <section id={id} className="relative min-h-[100dvh] w-full snap-start overflow-hidden">
      <div className="relative">
        <div className="flex h-[100dvh] items-center">
          <div
            className="flex items-start will-change-transform"
            style={{ gap: 90, paddingLeft: 'calc(50vw - 150px)', paddingRight: 'calc(50vw - 150px)' }}
          >
            {shots.map((s) => (
              <div key={s.caption} className="shrink-0" style={{ width: 300 }}>
                <div className="glass rounded-[26px] p-[7px]" style={{ width: 300, aspectRatio: '402 / 874' }}>
                  <img src={s.src} alt={s.alt} loading="lazy" decoding="async"
                    className="h-full w-full rounded-[20px] object-cover" />
                </div>
                <p className="m-0 mt-4 font-mono text-[13px] leading-[1.5] text-ink-3">{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-3">
          <span className="font-mono text-[12px] text-ink-3">01 / 10</span>
          <div className="flex gap-2">
            {shots.map((s) => (
              <span key={s.caption} className="h-[5px] w-[5px] rounded-full bg-ink" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const bacEvidence = [
  {
    label: 'TestFlight',
    value: 'N/A',
    note: 'project pembelajaran Academy, tidak didistribusikan',
  },
]

function BuktiSlide({ id }: BACProps) {
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
        {bacEvidence.map((r) => (
          <motion.div key={r.label} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
            className="border-t border-ink/10 pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">{r.label}</span>
              <span className="text-right font-mono text-[13px] text-ink">{r.value}</span>
            </div>
            <p className="m-0 mt-2 text-[13px] text-ink-3">{r.note}</p>
          </motion.div>
        ))}
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className="border-t border-ink/10 pt-5">
          <p className="m-0 mb-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">GitHub</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/akhnafal-aban/BreathingApp"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ios-blue px-5 py-2.5 text-[14px] font-semibold text-white no-underline shadow-[0_6px_18px_rgba(10,132,255,0.35)] transition-transform active:scale-[0.98]"
            >
              BreathingApp · iOS
            </a>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}

export function BreathingAppChapters() {
  return (
    <>
      <BreathingAppCover id="cover-breathing-app" />
      <MasalahSlide id="ba-masalah" />
      <StackSlide id="ba-stack" />
      <ArsitekturSlide id="ba-arsitektur" />
      <CodeSlide id="ba-code" />
      <UiIntroSlide id="ba-ui-intro" />
      <UiGallery id="ba-ui" />
      <BuktiSlide id="ba-bukti" />
    </>
  )
}