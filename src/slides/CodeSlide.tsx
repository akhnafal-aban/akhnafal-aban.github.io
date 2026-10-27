import { motion, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'

const kw = 'text-[#ff7ab2]'
const str = 'text-[#fc6a5d]'
const cm = 'text-[#7f8c98]'
const typ = 'text-[#41a1c0]'
const pln = 'text-[#e6e6e6]'

const block = [
  {
    label: '1 · HTTPMethod',
    text: 'Method HTTP dibatasi enum. Salah ketik string seperti "GTE" tidak mungkin lagi terjadi.',
  },
  {
    label: '2 · Api.request',
    text: 'Semua request lewat satu fungsi ini, jadi base URL, header Content-Type, dan method selalu seragam. URLSession.shared.data(for:) versi async dan await juga menghapus closure bersarang, dengan error yang mengalir lewat throws.',
  },
  {
    label: '3 · Decode',
    text: 'Backend Go menulis snake_case, Swift memakai camelCase. Satu baris convertFromSnakeCase menangani mapping nama di semua struct, tanpa CodingKeys manual. Tanggal diatasi iso8601.',
  },
  {
    label: '4 · Encode',
    text: 'Saat mengirim data arahnya terbalik: encoder memakai convertToSnakeCase supaya struct Swift sampai ke server dalam format yang disepakati. Kedua strategi ini simetris, jadi satu konvensi dipertahankan bolak-balik.',
  },
]

export function CodeSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <Slide id={id}>
      <div className="absolute inset-0 bg-[#1e1e1e]" />

      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,3fr)]">
        <div>
          <h2 className="m-0 mb-1 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#f2f2f2]">
            Api.swift: lapisan jaringan yang saya tulis sendiri, tanpa library.
          </h2>
          <p className="m-0 mb-8 font-mono text-[12px] text-[#8e8e93]">
            Empat blok utamanya, beserta penjelasan singkat di sebelah kanan.
          </p>

          <pre className="m-0 overflow-x-auto rounded-2xl border border-white/10 bg-[#161616] p-6 font-mono text-[12.5px] leading-[1.7] md:text-[13.5px]">
            <code>
              <span className={kw}>enum</span> <span className={typ}>HTTPMethod</span>: <span className={typ}>String</span> {'{'}
              {'\n'}  <span className={kw}>case</span> get = <span className={str}>"GET"</span>, post = <span className={str}>"POST"</span>, put = <span className={str}>"PUT"</span>
              {'\n'}  <span className={kw}>case</span> patch = <span className={str}>"PATCH"</span>, delete = <span className={str}>"DELETE"</span>
              {'\n'}{'}'}
              {'\n'}
              {'\n'}<span className={kw}>struct</span> <span className={typ}>Api</span> {'{'}
              {'\n'}  <span className={kw}>static func</span> <span className={pln}>request</span>(endpoint: <span className={typ}>String</span>, method: <span className={typ}>HTTPMethod</span>, body: <span className={typ}>Data?</span> = <span className={kw}>nil</span>) <span className={kw}>async throws</span> -&gt; <span className={typ}>Data</span> {'{'}
              {'\n'}    <span className={kw}>var</span> request = <span className={typ}>URLRequest</span>(url: <span className={typ}>URL</span>(string: <span className={str}>"\(AppConfig.baseURL)\(endpoint)"</span>)!)
              {'\n'}    request.httpMethod = method.rawValue
              {'\n'}    request.setValue(<span className={str}>"application/json"</span>, forHTTPHeaderField: <span className={str}>"Content-Type"</span>)
              {'\n'}    request.httpBody = body
              {'\n'}
              {'\n'}    <span className={kw}>let</span> (data, _) = <span className={kw}>try await</span> <span className={typ}>URLSession</span>.shared.data(<span className={kw}>for</span>: request)
              {'\n'}    <span className={kw}>return</span> data
              {'\n'}  {'}'}
              {'\n'}
              {'\n'}  <span className={kw}>static func</span> <span className={pln}>send</span>&lt;<span className={typ}>T</span>: <span className={typ}>Decodable</span>&gt;(endpoint: <span className={typ}>String</span>, method: <span className={typ}>HTTPMethod</span> = .get, type: <span className={typ}>T</span>.<span className={typ}>Type</span>) <span className={kw}>async throws</span> -&gt; <span className={typ}>T</span> {'{'}
              {'\n'}    ...
              {'\n'}    <span className={kw}>let</span> decoder = <span className={typ}>JSONDecoder</span>()
              {'\n'}    decoder.keyDecodingStrategy = .convertFromSnakeCase
              {'\n'}    decoder.dateDecodingStrategy = .iso8601
              {'\n'}    <span className={kw}>return try</span> decoder.decode(<span className={typ}>T</span>.<span className={kw}>self</span>, from: data)
              {'\n'}  {'}'}
              {'\n'}
              {'\n'}  <span className={cm}>// overload dengan body: encoder convertToSnakeCase, lalu request ke server</span>
              {'\n'}{'}'}
            </code>
          </pre>
        </div>

        <div className="flex flex-col gap-5 lg:pt-16">
          {block.map((b) => (
            <motion.div
              key={b.label}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="m-0 mb-2 font-mono text-[12px] uppercase tracking-[0.12em] text-[#41a1c0]">{b.label}</p>
              <p className="m-0 text-[14px] leading-[1.6] text-[#b8b8bd]">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  )
}