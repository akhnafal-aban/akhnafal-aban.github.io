import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'motion/react'

gsap.registerPlugin(ScrollTrigger)

const kw = 'text-[#a12ba6]'
const str = 'text-[#c0392b]'
const typ = 'text-[#0b5f8a]'
const cm = 'text-[#8a8f98]'

type Block = {
  file: string
  label: string
  text: string
  code: React.ReactNode
}

const blocks: Block[] = [
  {
    file: 'Screens/Main/Dashboard/DashboardView.swift · baris 23 sampai 55',
    label: 'Tulang punggung dashboard: ScrollView berisi VStack',
    text: 'Semua bagian dashboard tersusun dalam VStack vertikal dengan jarak antar blok 20 poin. Kartu total nilai memakai VStack kedua agar label dan angka rata kiri. Chart menggambar dua mark sekaligus: LineMark untuk garis dan AreaMark sebagai bayangan di bawahnya, keduanya membaca data dari array yang sama supaya posisinya selalu sinkron.',
    code: (
      <>
        <span className={kw}>var</span> body: <span className={kw}>some</span> <span className={typ}>View</span> {'{'}
        {'\n'}    <span className={typ}>NavigationStack</span> {'{'}
        {'\n'}        <span className={typ}>ScrollView</span> {'{'}
        {'\n'}            <span className={typ}>VStack</span>(spacing: <span className={str}>20</span>) {'{'}
        {'\n'}                <span className={typ}>VStack</span>(alignment: .leading, spacing: <span className={str}>8</span>) {'{'}
        {'\n'}                    <span className={typ}>Text</span>(<span className={str}>"Total Portfolio Value"</span>)
        {'\n'}                    <span className={typ}>Text</span>(viewModel.totalValue, format: .currency(code: appSettings.selectedCurrency))
        {'\n'}                {'}'}
        {'\n'}                <span className={typ}>Chart</span> {'{'}
        {'\n'}                    <span className={typ}>ForEach</span>(performanceData, id: \.month) {'{'} item <span className={kw}>in</span>
        {'\n'}                        <span className={typ}>LineMark</span>(x: .value(<span className={str}>"Month"</span>, item.month), y: .value(<span className={str}>"Value"</span>, item.value))
        {'\n'}                            .interpolationMethod(.catmullRom)
        {'\n'}                        <span className={typ}>AreaMark</span>(x: .value(<span className={str}>"Month"</span>, item.month), y: .value(<span className={str}>"Value"</span>, item.value))
        {'\n'}                    {'}'}
        {'\n'}                {'}'}
        {'\n'}            {'}'}
        {'\n'}        {'}'}
        {'\n'}    {'}'}
        {'\n'}{'}'}
      </>
    ),
  },
  {
    file: 'Screens/Components/AssetRowView.swift · baris 9 sampai 44',
    label: 'Pola baris daftar: Spacer memisahkan dua sisi',
    text: 'Setiap baris adalah satu HStack: ikon kategori di kiri, lalu VStack untuk nama dan kategori, lalu Spacer yang mendorong blok kanan ke ujung. Nilai dan perubahannya disimpan di VStack rata kanan. Warna hijau atau merah tidak ditulis manual, melainkan ditentukan oleh property isProfitable, jadi warna selalu mengikuti data.',
    code: (
      <>
        <span className={typ}>HStack</span>(spacing: <span className={str}>12</span>) {'{'}
        {'\n'}    <span className={typ}>Circle</span>()
        {'\n'}        .fill(<span className={typ}>Color</span>.accentColor.opacity(<span className={str}>0.1</span>))
        {'\n'}        .frame(width: <span className={str}>40</span>, height: <span className={str}>40</span>)
        {'\n'}    <span className={typ}>VStack</span>(alignment: .leading, spacing: <span className={str}>4</span>) {'{'}
        {'\n'}        <span className={typ}>Text</span>(asset.name)
        {'\n'}        <span className={typ}>Text</span>(categoryName ?? <span className={str}>"Unknown"</span>)
        {'\n'}    {'}'}
        {'\n'}    <span className={typ}>Spacer</span>()
        {'\n'}    <span className={typ}>VStack</span>(alignment: .trailing, spacing: <span className={str}>4</span>) {'{'}
        {'\n'}        <span className={typ}>Text</span>(asset.currentValue, format: .currency(code: appSettings.selectedCurrency))
        {'\n'}        <span className={typ}>Text</span>(asset.valueChange, format: .currency(code: <span className={str}>"IDR"</span>).sign(strategy: .always()))
        {'\n'}            .foregroundStyle(asset.isProfitable ? .green : .red)
        {'\n'}    {'}'}
        {'\n'}{'}'}
      </>
    ),
  },
  {
    file: 'Screens/Main/Toolbar/AddAssetView.swift · baris 18 sampai 68',
    label: 'Form dan validasi yang dijamin oleh disabled',
    text: 'Form memberi dua bagian berlabel tanpa perlu membuat container manual. Input harga memakai TextField versi value dengan format currency, bukan string, sehingga nilainya selalu Double. Validasi sederhana: tombol Save hanya bisa ditekan setelah nama dan harga pembelian terisi, cukup lewat satu baris disabled dengan dua kondisi.',
    code: (
      <>
        <span className={typ}>Form</span> {'{'}
        {'\n'}    <span className={typ}>Section</span>(<span className={str}>"Basic Information"</span>) {'{'}
        {'\n'}        <span className={typ}>TextField</span>(<span className={str}>"Asset Name"</span>, text: $name)
        {'\n'}        <span className={typ}>Picker</span>(<span className={str}>"Category"</span>, selection: $selectedCategoryId) {'{'} <span className={cm}>/* kategori */</span> {'}'}
        {'\n'}    {'}'}
        {'\n'}    <span className={typ}>Section</span>(<span className={str}>"Financial Details"</span>) {'{'}
        {'\n'}        <span className={typ}>TextField</span>(<span className={str}>"Purchase Price"</span>, value: $purchasePrice, format: .currency(code: <span className={str}>"IDR"</span>))
        {'\n'}        <span className={typ}>DatePicker</span>(<span className={str}>"Purchase Date"</span>, selection: $purchaseDate, displayedComponents: .date)
        {'\n'}    {'}'}
        {'\n'}{'}'}
        {'\n'}.toolbar {'{'}
        {'\n'}    <span className={typ}>ToolbarItem</span>(placement: .confirmationAction) {'{'}
        {'\n'}        <span className={typ}>Button</span>(<span className={str}>"Save"</span>) {'{'} <span className={typ}>Task</span> {'{'} <span className={kw}>await</span> viewModel.addAsset(...) {'}'} {'}'}
        {'\n'}            .disabled(name.isEmpty || purchasePrice == <span className={kw}>nil</span>)
        {'\n'}    {'}'}
        {'\n'}{'}'}
      </>
    ),
  },
]

export function UiCodeSlide({ id }: { id?: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !wrap.current) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.uicode-card')
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
          scale: 0.94,
          opacity: 0.35,
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
      <div id="uicode-intro" className="flex h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
        <div className="mx-auto w-full text-center">
          <h2 className="m-0 mb-2 text-[clamp(1.8rem,3.6vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
            Kode UI-nya sendiri, dengan komposisi SwiftUI yang sederhana.
          </h2>
          <p className="m-0 font-mono text-[12px] text-ink-3">
            tiga blok kode, masing-masing muncul bersama penjelasannya seiring scroll
          </p>
        </div>
      </div>

      {blocks.map((b, ci) => (
        <div key={b.file} className="uicode-card sticky top-0 flex h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
          <div className="grid w-full grid-cols-1 gap-6 rounded-[26px] border border-ink/10 bg-panel p-6 shadow-[0_24px_60px_rgba(29,29,31,0.08)] lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-10 lg:p-10">
            <div className="min-w-0">
              <p className="m-0 mb-3 truncate font-mono text-[11px] text-ink-3">{b.file}</p>
              <pre className="m-0 overflow-x-auto font-mono text-[12px] leading-[1.65] text-[#1d1d1f] md:text-[12.5px]">
                <code>{b.code}</code>
              </pre>
            </div>
            <div className="flex flex-col justify-center border-t border-ink/10 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="m-0 mb-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ios-blue">
                Blok {ci + 1} dari 3
              </p>
              <h3 className="m-0 mb-4 text-[clamp(1.1rem,1.8vw,1.4rem)] font-semibold leading-[1.25]">
                {b.label}
              </h3>
              <p className="m-0 text-[14.5px] leading-[1.65] text-ink-2">{b.text}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}