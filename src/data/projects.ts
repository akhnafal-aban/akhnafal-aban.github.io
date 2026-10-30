export type ProjectKind = 'personal' | 'team'

export type Project = {
  no: string
  title: string
  kind: ProjectKind
  points: string[]
  view?: string
}

export const projects: Project[] = [
  {
    no: '01',
    title: 'Asset Tracker',
    kind: 'personal',
    view: 'asset-tracker',
    points: [
      'Aplikasi pelacak aset dengan Dashboard, kategori aset, manajemen pengguna, dan pengaturan',
      'Lapisan networking sendiri untuk integrasi API Asset, AssetCategory, dan User',
      'Arsitektur MVVM',
    ],
  },
  {
    no: '02',
    title: 'Breathing App',
    kind: 'personal',
    view: 'breathing-app',
    points: [
      'Sesi pernapasan berbasis timer dengan state machine empat fase',
      'Animasi hitung mundur, pelacakan siklus, dan transisi antar fase yang otomatis',
      'Proyek iOS pertama saya, dibuat untuk Apple Developer Academy Challenge 1',
    ],
  },
  {
    no: '03',
    title: 'AkhnaFin',
    kind: 'personal',
    points: [
      'Pencatatan pengeluaran lewat App Intents/Siri, bahasa natural dengan Foundation Models, suara dengan Speech, OCR struk dengan Vision, dan entri massal',
      'Arsitektur modular dengan Swift package lokal (AkhnaFinKit), empat modul dipisahkan oleh protokol',
      'SwiftData dan CloudKit',
    ],
    view: 'akhnafin',
  },
  {
    no: '04',
    title: 'GayaGerakSeru',
    kind: 'team',
    points: [
      'Simulasi gesekan interaktif memakai physics materials dari RealityKit',
      'Bidang miring dan permukaan dengan kekasaran yang bisa diatur',
    ],
  },
  {
    no: '05',
    title: 'Arrive',
    kind: 'team',
    points: [
      'Membangun komponen inti wayfinding AR: ARTrackingService, route renderer beranimasi, konfigurasi penanda stasiun, dan registry tujuan',
      'Navigasi indoor di Stasiun Sudirman',
    ],
  },
  {
    no: '06',
    title: 'BiteBeat',
    kind: 'team',
    points: [
      'Pencarian makanan berbasis lokasi dengan model SwiftData, Core Location, dan nearby search dari MapKit',
      'State pemilihan makanan dipusatkan, memisahkan pengelolaan state dari komponen UI',
    ],
  },
]