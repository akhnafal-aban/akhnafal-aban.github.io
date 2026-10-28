import { motion, useReducedMotion } from 'motion/react'

const kw = 'text-[#ff7ab2]'
const str = 'text-[#fc6a5d]'
const typ = 'text-[#41a1c0]'
const pln = 'text-[#e6e6e6]'

type Block = {
  file: string
  label: string
  text: string
  code: React.ReactNode
}

const blocks: Block[] = [
  {
    file: 'Core/Network/Api.swift · baris 75 sampai 81',
    label: 'HTTP Method dengan Type Safety',
    text: 'HTTP method didefinisikan menggunakan enum agar pemanggil hanya dapat memilih lima case yang tersedia. Pendekatan ini mengurangi risiko typo dari penggunaan string bebas dan memanfaatkan autocomplete di Xcode. Saya suka style pendefinisian ini karena lebih rapi.',
    code: (
      <>
        <span className={kw}>enum</span> <span className={typ}>HTTPMethod</span>: <span className={typ}>String</span> {'{'}
        {'\n'}  <span className={kw}>case</span> get = <span className={str}>"GET"</span>
        {'\n'}  <span className={kw}>case</span> post = <span className={str}>"POST"</span>
        {'\n'}  <span className={kw}>case</span> put = <span className={str}>"PUT"</span>
        {'\n'}  <span className={kw}>case</span> patch = <span className={str}>"PATCH"</span>
        {'\n'}  <span className={kw}>case</span> delete = <span className={str}>"DELETE"</span>
        {'\n'}{'}'}
      </>
    ),
  },
  {
    file: 'Core/Network/Api.swift · baris 11 sampai 23',
    label: 'Centralized Request Handling',
    text: 'Semua HTTP request diproses melalui satu fungsi. Base URL, HTTP method, header Content-Type, dan request body dikelola di satu tempat agar implementasinya konsisten. URLSession menggunakan async/await untuk menangani operasi jaringan, sementara throws meneruskan error ke pemanggil. Lewat bagian ini, saya mulai memahami sisi lain dari komunikasi API, yaitu bagaimana aplikasi di frontend mengirim request dan menangani respons dari server.',
    code: (
      <>
        <span className={kw}>static func</span> <span className={pln}>request</span>(
        {'\n'}    endpoint: <span className={typ}>String</span>,
        {'\n'}    method: <span className={typ}>HTTPMethod</span>,
        {'\n'}    body: <span className={typ}>Data?</span> = <span className={kw}>nil</span>
        {'\n'}) <span className={kw}>async throws</span> -&gt; <span className={typ}>Data</span>
        {'\n'}
        {'\n'}    <span className={kw}>var</span> request = <span className={typ}>URLRequest</span>(url: <span className={typ}>URL</span>(string: <span className={str}>"\(AppConfig.baseURL)\(endpoint)"</span>)!)
        {'\n'}    request.httpMethod = method.rawValue
        {'\n'}    request.setValue(<span className={str}>"application/json"</span>, forHTTPHeaderField: <span className={str}>"Content-Type"</span>)
        {'\n'}    request.httpBody = body
        {'\n'}
        {'\n'}    <span className={kw}>let</span> (data, _) = <span className={kw}>try await</span> <span className={typ}>URLSession</span>.shared.data(<span className={kw}>for</span>: request)
        {'\n'}    <span className={kw}>return</span> data
      </>
    ),
  },
  {
    file: 'Core/Network/Api.swift · baris 25 sampai 40',
    label: 'JSON Decoding & Data Mapping',
    text: 'Respons JSON di-decode menjadi tipe Swift yang memenuhi Decodable. Strategi convertFromSnakeCase mengonversi key seperti current_value menjadi currentValue, sedangkan strategi iso8601 menangani decoding tanggal. Dengan begitu, field umum tidak perlu dipetakan satu per satu melalui CodingKeys.',
    code: (
      <>
        <span className={kw}>static func</span> <span className={pln}>send</span>&lt;<span className={typ}>T</span>: <span className={typ}>Decodable</span>&gt;(
        {'\n'}    endpoint: <span className={typ}>String</span>,
        {'\n'}    method: <span className={typ}>HTTPMethod</span> = .get,
        {'\n'}    type: <span className={typ}>T</span>.<span className={typ}>Type</span>
        {'\n'}) <span className={kw}>async throws</span> -&gt; <span className={typ}>T</span> {'{'}
        {'\n'}    <span className={kw}>let</span> data = <span className={kw}>try await</span> <span className={pln}>request</span>(endpoint: endpoint, method: method)
        {'\n'}
        {'\n'}    <span className={kw}>let</span> decoder = <span className={typ}>JSONDecoder</span>()
        {'\n'}    decoder.keyDecodingStrategy = .convertFromSnakeCase
        {'\n'}    decoder.dateDecodingStrategy = .iso8601
        {'\n'}
        {'\n'}    <span className={kw}>return try</span> decoder.decode(<span className={typ}>T</span>.<span className={kw}>self</span>, from: data)
        {'\n'}{'}'}
      </>
    ),
  },
  {
    file: 'Core/Network/Api.swift · baris 42 sampai 72',
    label: 'JSON Encoding & Request Serialization',
    text: 'Bedanya dengan fungsi send sebelumnya, versi ini juga menangani proses encoding data sebelum dikirim ke server. JSONEncoder mengubah nama properti camelCase menjadi snake_case dan mengonversi tanggal ke format ISO 8601 agar format request body sesuai dengan konvensi yang digunakan backend.',
    code: (
      <>
        <span className={kw}>static func</span> <span className={pln}>send</span>&lt;<span className={typ}>T</span>: <span className={typ}>Decodable</span>, <span className={typ}>U</span>: <span className={typ}>Encodable</span>&gt;(
        {'\n'}    endpoint: <span className={typ}>String</span>,
        {'\n'}    method: <span className={typ}>HTTPMethod</span> = .get,
        {'\n'}    body: <span className={typ}>U?</span> = <span className={kw}>nil</span>,
        {'\n'}    type: <span className={typ}>T</span>.<span className={typ}>Type</span>
        {'\n'}) <span className={kw}>async throws</span> -&gt; <span className={typ}>T</span> {'{'}
        {'\n'}    <span className={kw}>let</span> encodedBody: <span className={typ}>Data?</span>
        {'\n'}
        {'\n'}    <span className={kw}>if let</span> body {'{'}
        {'\n'}        <span className={kw}>let</span> encoder = <span className={typ}>JSONEncoder</span>()
        {'\n'}        encoder.keyEncodingStrategy = .convertToSnakeCase
        {'\n'}        encoder.dateEncodingStrategy = .iso8601
        {'\n'}        encodedBody = <span className={kw}>try</span> encoder.encode(body)
        {'\n'}    {'}'} <span className={kw}>else</span> {'{'} encodedBody = <span className={kw}>nil</span> {'}'}
        {'\n'}
        {'\n'}    <span className={kw}>let</span> data = <span className={kw}>try await</span> <span className={pln}>request</span>(
        {'\n'}        endpoint: endpoint,
        {'\n'}        method: method,
        {'\n'}        body: encodedBody
        {'\n'}    )
        {'\n'}    <span className={kw}>return try</span> <span className={typ}>JSONDecoder</span>().decode(<span className={typ}>T</span>.<span className={kw}>self</span>, from: data)
        {'\n'}{'}'}
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
          className="grid w-full grid-cols-1 gap-6 rounded-[26px] border border-white/10 bg-[#161616] p-6 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-10 lg:p-10"
        >
          <div className="min-w-0">
            <p className="m-0 mb-3 truncate font-mono text-[11px] text-[#7f8c98]">{b.file}</p>
            <pre className="m-0 overflow-x-auto font-mono text-[12px] leading-[1.65] text-[#e6e6e6] md:text-[13px]">
              <code>{b.code}</code>
            </pre>
          </div>
          <div className="flex flex-col justify-center border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="m-0 mb-3 font-mono text-[12px] uppercase tracking-[0.12em] text-[#41a1c0]">
              Blok {ci + 1} dari 4
            </p>
            <h3 className="m-0 mb-4 text-[clamp(1.1rem,1.8vw,1.4rem)] font-semibold leading-[1.25] text-[#f2f2f2]">
              {b.label}
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.65] text-[#b8b8bd]">{b.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function CodeSlide({ id }: { id?: string }) {
  return (
    <div id={id} className="relative bg-[#1e1e1e]">
      <section className="relative min-h-[100dvh] w-full snap-start">
        <div id="code-intro" className="flex min-h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
          <div className="mx-auto w-full text-center">
            <h2 className="m-0 mb-2 text-[clamp(1.8rem,3.6vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#f2f2f2]">
              Api.swift: Networking Layer Built from Scratch
            </h2>
            <p className="m-0 font-mono text-[12px] text-[#8e8e93]">
              Lapisan networking yang dibangun menggunakan URLSession dari Foundation, tanpa bergantung pada third-party networking libraries.
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
