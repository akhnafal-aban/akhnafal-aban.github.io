import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'motion/react'

gsap.registerPlugin(ScrollTrigger)

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
    label: 'Method HTTP dibatasi enum, bukan string bebas',
    text: 'Menulis "GET" sebagai string di banyak tempat rawan salah ketik, dan typo semacam itu baru ketahuan saat aplikasi jalan. Enum ini membatasi nilai yang sah ke lima method yang tersedia, lengkap dengan autocomplete dari compiler.',
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
    label: 'Satu fungsi untuk semua request keluar',
    text: 'Semua request lewat fungsi ini, jadi base URL, header Content-Type, dan method selalu seragam. URLSession.shared.data(for:) versi async dan await menghapus closure bersarang, dan error mengalir lewat throws ke pemanggilnya.',
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
    label: 'Decode: satu baris untuk perbedaan nama field',
    text: 'Backend Go menulis field dalam snake_case seperti current_value, sementara Swift memakai camelCase. ConvertFromSnakeCase menangani perbedaan itu di semua struct sekaligus, jadi tidak perlu CodingKeys manual; tanggal diurus dengan strategi iso8601.',
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
    label: 'Encode: arah sebaliknya saat mengirim data',
    text: 'Ketika mengirim body, encoder menulis convertToSnakeCase supaya struct Swift sampai ke server Go dalam format yang disepakati. Kedua strategi ini simetris, sehingga satu konvensi nama dipertahankan bolak-balik tanpa dipikirkan per field.',
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

export function CodeSlide({ id }: { id?: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !wrap.current) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.code-card')
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
    <section id={id} ref={wrap} className="relative snap-start bg-[#1e1e1e]">
      <div id="code-intro" className="flex h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
        <div className="mx-auto w-full text-center">
          <h2 className="m-0 mb-2 text-[clamp(1.8rem,3.6vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#f2f2f2]">
            Api.swift: lapisan jaringan yang saya tulis sendiri, tanpa library.
          </h2>
          <p className="m-0 font-mono text-[12px] text-[#8e8e93]">
            empat blok kode, masing-masing muncul bersama penjelasannya seiring scroll
          </p>
        </div>
      </div>

      {blocks.map((b, ci) => (
        <div key={b.file} className="code-card sticky top-0 flex h-[100dvh] items-center px-6 sm:px-12 lg:px-20">
          <div className="grid w-full grid-cols-1 gap-6 rounded-[26px] border border-white/10 bg-[#161616] p-6 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-10 lg:p-10">
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
              <h3 className="m-0 mb-4 text-[clamp(1.15rem,2vw,1.5rem)] font-semibold leading-[1.25] text-[#f2f2f2]">
                {b.label}
              </h3>
              <p className="m-0 text-[14.5px] leading-[1.65] text-[#b8b8bd]">{b.text}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}