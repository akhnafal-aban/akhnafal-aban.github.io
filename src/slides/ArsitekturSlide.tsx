import { motion, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'
import { Mermaid } from '../components/Mermaid'

const chart = `flowchart LR
  subgraph iOS
    V["View · SwiftUI"] -->|".task { }"| VM["ViewModel · @Observable"]
    VM -->|"Api.send()"| A["Api.swift · Core/Network"]
  end
  A -->|"URLSession"| BE["Backend Go · :8080"]
  BE -->|"JSON snake_case"| A
  A -->|"Model · Decodable"| VM
  VM -->|"pembaruan @Observable"| V`

const tree = `Asset Tracker/
├─ App/
│   └─ AppConfig.swift   # baseURL + env
├─ Core/
│   ├─ Model/            # struct hasil decode
│   ├─ Network/          # Api.swift, satu pintu HTTP
│   └─ Services/         # WebSocket Binance
└─ Screens/
    ├─ Root/             # TabView
    ├─ Main/             # per fitur: Dashboard, Assets…
    ├─ Toolbar/          # AddAsset
    └─ Components/       # row + card reusable`

export function ArsitekturSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()
  const reveal = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <Slide id={id}>
      <h2 className="m-0 mb-2 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
        MVVM. Tiga huruf, satu arah aliran data.
      </h2>
      <p className="m-0 mb-10 max-w-[40rem] text-[15px] leading-[1.55] text-ink-2 md:text-[17px]">
        View memanggil ViewModel, ViewModel memanggil satu lapisan Api, dan data balik lewat model
        yang terdecode. UI tidak pernah menyentuh URLSession langsung.
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <Mermaid chart={chart} caption="Aliran data: dari layar sampai server Go, lalu balik lagi" />
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="m-0 mb-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">Struktur folder</p>
          <pre className="m-0 overflow-x-auto rounded-2xl bg-panel p-5 font-mono text-[13px] leading-[1.65] text-ink-2 shadow-[0_1px_3px_rgba(29,29,31,0.06)]">
            {tree}
          </pre>
        </motion.div>
      </div>
    </Slide>
  )
}