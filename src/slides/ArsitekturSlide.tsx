import { motion, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'
import { Mermaid } from '../components/Mermaid'

const flow = `flowchart LR
  subgraph Screen[" "]
    direction TB
    V1["DashboardView"] --- VM1["DashboardViewModel"]
    V2["AssetView"] --- VM2["AssetViewModel"]
    V3["AddAssetView"] --- VM3["AddAssetViewModel"]
    V4["CryptoDashboardView"] --- VM4["CryptoDashboardViewModel"]
  end

  VM1 --> A
  VM2 --> A
  VM3 --> A
  VM4 --> A

  A["Api.swift<br/>Core/Network"] -->|"URLSession async"| Srv["Backend Go<br/>:8080"]
  A -->|"JSON snake_case balik"| M["Model · Decodable<br/>Core/Model"]
  M --> VM1
  M --> VM2
  M --> VM3
  M --> VM4
  W["BinanceWebSocketService<br/>Core/Services"] -.-> V4
  W -.->|"stream harga BTC"| V4`

const tree = `Asset Tracker/
├─ App/
│   ├─ AppConfig.swift
│   └─ AssetTrackerApp.swift
├─ Core/
│   ├─ Model/
│   │   ├─ Asset.swift
│   │   ├─ AssetCategory.swift
│   │   ├─ TradePrice.swift
│   │   ├─ User.swift
│   │   └─ AppSettings.swift
│   ├─ Network/
│   │   └─ Api.swift
│   └─ Services/
│       └─ BinanceWebSocketService.swift
└─ Screens/
    ├─ Root/
    │   └─ AppRootView.swift
    ├─ Main/
    │   ├─ Dashboard/
    │   │   ├─ DashboardView.swift
    │   │   └─ DashboardViewModel.swift
    │   ├─ Assets/
    │   │   ├─ AssetView.swift
    │   │   ├─ AssetViewModel.swift
    │   │   ├─ AssetDetailView.swift
    │   │   └─ AssetDetailViewModel.swift
    │   ├─ Crypto/
    │   │   ├─ CryptoDashboardView.swift
    │   │   └─ CryptoDashboardViewModel.swift
    │   └─ Settings/
    │       └─ SettingsView.swift
    ├─ Toolbar/
    │   ├─ AddAssetView.swift
    │   └─ AddAssetViewModel.swift
    └─ Components/
        ├─ AssetRowView.swift
        └─ StatCardView.swift`

export function ArsitekturSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()
  const reveal = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <Slide id={id}>
      <h2 className="m-0 mb-2 text-center text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
        Aplikasi ini memakai pola MVVM.
      </h2>
      <p className="m-0 mb-6 mx-auto max-w-[44rem] text-center text-[14px] leading-[1.5] text-ink-2 md:text-[15px]">
        Setiap layar memiliki pasangan view dan view model. View model memanggil satu lapisan Api, dan hasilnya kembali sebagai model yang sudah terdecode, sehingga UI tidak menyentuh URLSession secara langsung.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-ink/10 bg-panel p-4 md:p-6"
        >
          <Mermaid chart={flow} />
          <p className="m-0 mt-3 font-mono text-[11px] text-ink-3">
            Empat pasangan view dan view model memanggil Api lewat URLSession; data balik mengalir lewat model.
          </p>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="m-0 mb-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">
            Struktur folder
          </p>
          <pre className="m-0 overflow-x-auto rounded-2xl border border-ink/10 bg-panel p-4 font-mono text-[11px] leading-[1.5] text-ink-2 md:text-[11.5px]">
            {tree}
          </pre>
        </motion.div>
      </div>
    </Slide>
  )
}