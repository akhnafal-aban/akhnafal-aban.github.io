import { motion, useReducedMotion } from 'motion/react'

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
    file: 'App/AssetTrackerApp.swift · App/AppRootView.swift',
    label: 'App Entry Point & Tab Navigation',
    text: 'Saat aplikasi dibuka, AssetTrackerApp menampilkan AppRootView sebagai layar pertama. Di sini, AppSettings juga dimasukkan ke environment supaya pengaturan mata uang bisa dipakai dari layar lain. AppRootView mengatur empat tab, sedangkan isi masing-masing tab ditangani oleh view tersendiri. Jadi, kode navigasi tidak bercampur dengan kode untuk menampilkan setiap fitur.',
    code: (
      <>
        <span className={typ}>AssetTrackerApp.swift</span>
        {'\n'}<span className={kw}>@main</span>
        {'\n'}<span className={kw}>struct</span> <span className={typ}>AssetTrackerApp</span>: <span className={typ}>App</span> {'{'}
        {'\n'}    <span className={kw}>var</span> body: <span className={kw}>some</span> <span className={typ}>Scene</span> {'{'}
        {'\n'}        <span className={typ}>WindowGroup</span> {'{'}
        {'\n'}            <span className={typ}>AppRootView</span>().environment(appSettings)
        {'\n'}        {'}'}
        {'\n'}    {'}'}
        {'\n'}{'}'}
        {'\n'}
        {'\n'}<span className={typ}>AppRootView.swift</span>
        {'\n'}    <span className={kw}>var</span> body: <span className={kw}>some</span> <span className={typ}>View</span> {'{'}
        {'\n'}        <span className={typ}>TabView</span> {'{'}
        {'\n'}            <span className={typ}>Tab</span>(<span className={str}>"Dashboard"</span>, systemImage: <span className={str}>"chart.pie.fill"</span>) {'{'} <span className={typ}>DashboardView</span>() {'}'}
        {'\n'}            <span className={typ}>Tab</span>(<span className={str}>"Assets"</span>, systemImage: <span className={str}>"list.bullet.rectangle.portrait"</span>) {'{'} <span className={typ}>AssetView</span>() {'}'}
        {'\n'}            <span className={typ}>Tab</span>(<span className={str}>"Settings"</span>, systemImage: <span className={str}>"gearshape"</span>) {'{'} <span className={typ}>SettingsView</span>() {'}'}
        {'\n'}            <span className={typ}>Tab</span>(<span className={str}>"Bitcoin"</span>, systemImage: <span className={str}>"bitcoinsign.circle.fill"</span>) {'{'} <span className={typ}>CryptoDashboardView</span>() {'}'}
        {'\n'}        {'}'}
        {'\n'}    {'}'}
      </>
    ),
  },
  {
    file: 'Screens/Main/Assets/AssetView.swift · AssetViewModel.swift',
    label: 'MVVM pada Daftar Aset',
    text: 'Di bagian ini, AssetView fokus menampilkan daftar aset. Saat layar muncul, .task memanggil getAssets() di AssetViewModel. ViewModel yang mengambil data dari server lewat Api.send, lalu menyimpan hasilnya ke property assets. Karena menggunakan @Observable, perubahan data bisa langsung diikuti SwiftUI untuk memperbarui tampilan. Untuk sekarang, error masih saya tangani dengan print, belum ditampilkan sebagai pesan di layar.',
    code: (
      <>
        <span className={typ}>AssetViewModel.swift</span>
        {'\n'}<span className={kw}>@Observable</span>
        {'\n'}<span className={kw}>final class</span> <span className={typ}>AssetViewModel</span> {'{'}
        {'\n'}    <span className={kw}>var</span> assets: [<span className={typ}>Asset</span>] = []
        {'\n'}
        {'\n'}    <span className={kw}>func</span> getAssets() <span className={kw}>async</span> {'{'}
        {'\n'}        <span className={kw}>do</span> {'{'}
        {'\n'}            <span className={kw}>let</span> response = <span className={kw}>try await</span> <span className={typ}>Api</span>.send(
        {'\n'}                endpoint: <span className={str}>"/assets"</span>,
        {'\n'}                type: <span className={typ}>AssetResponse</span>.<span className={kw}>self</span>
        {'\n'}            )
        {'\n'}            assets = response.data
        {'\n'}        {'}'} <span className={kw}>catch</span> {'{'}
        {'\n'}            <span className={typ}>print</span>(error)
        {'\n'}        {'}'}
        {'\n'}    {'}'}
        {'\n'}{'}'}
        {'\n'}
        {'\n'}<span className={typ}>AssetView.swift</span>
        {'\n'}    <span className={kw}>@State private var</span> viewModel = <span className={typ}>AssetViewModel</span>()
        {'\n'}    ...
        {'\n'}        <span className={typ}>List</span>(filteredAssets) {'{'} asset <span className={kw}>in</span>
        {'\n'}            <span className={typ}>NavigationLink</span>(value: asset) {'{'}
        {'\n'}                <span className={typ}>AssetRowView</span>(asset: asset, categoryName: asset.category?.name)
        {'\n'}            {'}'}
        {'\n'}        {'}'}
        {'\n'}        .task {'{'}
        {'\n'}            <span className={kw}>await</span> viewModel.getAssets()
        {'\n'}        {'}'}
      </>
    ),
  },
  {
    file: 'Screens/Main/Dashboard/DashboardView.swift · Screens/Components/AssetRowView.swift',
    label: 'Layout Composition dengan SwiftUI',
    text: 'Untuk dashboard yang isinya cukup panjang, saya menggunakan ScrollView dengan VStack untuk menyusun konten dari atas ke bawah. Jarak antarbagian cukup diatur lewat spacing. Sementara itu, di daftar aset, HStack membagi baris menjadi bagian kiri dan kanan. Spacer mengisi ruang kosong di tengah, jadi nama aset tetap di kiri dan nilainya terdorong ke kanan tanpa perlu mengatur posisi secara manual.',
    code: (
      <>
        <span className={typ}>DashboardView.swift</span>
        {'\n'}    <span className={kw}>var</span> body: <span className={kw}>some</span> <span className={typ}>View</span> {'{'}
        {'\n'}        <span className={typ}>NavigationStack</span> {'{'}
        {'\n'}            <span className={typ}>ScrollView</span> {'{'}
        {'\n'}                <span className={typ}>VStack</span>(spacing: <span className={str}>20</span>) {'{'}
        {'\n'}                    <span className={cm}>{'// kartu total nilai'}</span>
        {'\n'}                    <span className={cm}>{'// chart performance'}</span>
        {'\n'}                    <span className={cm}>{'// alokasi aset, quick stats, aset terbaru'}</span>
        {'\n'}                {'}'}
        {'\n'}            {'}'}
        {'\n'}        {'}'}
        {'\n'}    {'}'}
        {'\n'}
        {'\n'}<span className={typ}>AssetRowView.swift</span>
        {'\n'}    <span className={typ}>HStack</span>(spacing: <span className={str}>12</span>) {'{'}
        {'\n'}        <span className={typ}>VStack</span>(alignment: .leading, spacing: <span className={str}>4</span>) {'{'}
        {'\n'}            <span className={typ}>Text</span>(asset.name)
        {'\n'}            <span className={typ}>Text</span>(categoryName ?? <span className={str}>"Unknown"</span>)
        {'\n'}        {'}'}
        {'\n'}        <span className={typ}>Spacer</span>()
        {'\n'}        <span className={typ}>VStack</span>(alignment: .trailing, spacing: <span className={str}>4</span>) {'{'}
        {'\n'}            <span className={typ}>Text</span>(asset.currentValue, format: .currency(code: appSettings.selectedCurrency))
        {'\n'}            <span className={cm}>{'// perubahan nilai, hijau atau merah'}</span>
        {'\n'}        {'}'}
        {'\n'}    {'}'}
      </>
    ),
  },
]

function CodeCard({ b, ci }: { b: Block; ci: number }) {
  const reduce = useReducedMotion()
  return (
    <section className="relative min-h-[100dvh] w-full snap-start">
      <div className="flex min-h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.975 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid w-full grid-cols-1 gap-6 rounded-[26px] border border-ink/10 bg-panel p-6 shadow-[0_24px_60px_rgba(29,29,31,0.08)] lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-10 lg:p-10"
        >
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
        </motion.div>
      </div>
    </section>
  )
}

export function UiCodeSlide({ id }: { id?: string }) {
  return (
    <div id={id} className="relative">
      <section className="relative min-h-[100dvh] w-full snap-start">
        <div id="uicode-intro" className="flex min-h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
          <div className="mx-auto w-full text-center">
            <h2 className="m-0 mb-2 text-[clamp(1.8rem,3.6vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Cara kode UI aplikasi ini tersusun.
            </h2>
            <p className="m-0 font-mono text-[12px] text-ink-3">
            </p>
          </div>
        </div>
      </section>

      {blocks.map((b, ci) => (
        <CodeCard key={b.file} b={b} ci={ci} />
      ))}
    </div>
  )
}
