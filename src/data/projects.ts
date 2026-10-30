export type ProjectKind = 'personal' | 'team'

export type Project = {
  no: string
  title: string
  kind: ProjectKind
  points: string[]
  view?: string
  accent: string
  icon: string
}

export const projects: Project[] = [
  {
    no: '01',
    title: 'Asset Tracker',
    kind: 'personal',
    view: 'asset-tracker',
    accent: '#10b981',
    icon: 'ChartLineUp',
    points: [
      'Dashboard, model aset dan kategori, pengaturan, dan integrasi API',
      'Mengonsumsi REST API Go buatan sendiri lewat URLSession',
      'MVVM dengan satu lapisan Api',
    ],
  },
  {
    no: '02',
    title: 'Breathing App',
    kind: 'personal',
    view: 'breathing-app',
    accent: '#06b6d4',
    icon: 'Wind',
    points: [
      'Aplikasi panduan pernafasan melalui CountDown, Apple Developer Academy Challenge 1',
      'Aplikasi iOS pertama saya.'
    ],
  },
  {
    no: '03',
    title: 'AkhnaFin',
    kind: 'personal',
    view: 'akhnafin',
    accent: '#0a84ff',
    icon: 'Lightning',
    points: [
      'Lima jalur input pencatatan: Siri, bahasa natural, suara, OCR struk, manual',
      'Semua input menjadi draft yang bisa diedit sebelum disimpan',
      'SwiftData dan CloudKit',
    ],
  },
  {
    no: '04',
    title: 'GayaGerakSeru',
    kind: 'team',
    accent: '#a78bfa',
    icon: 'Atom',
    points: [
      'Simulasi fisika gesekan dengan RealityKit untuk edukasi',
      'Objek meluncur di bidang miring dengan tingkat kekasaran yang bisa diatur',
      'Apple Developer Academy Challenge 2',
    ],
  },
  {
    no: '05',
    title: 'Arrive',
    kind: 'team',
    accent: '#fb923c',
    icon: 'AirplaneTakeoff',
    points: [
      'Apple Developer Academy Challenge 5',
      'Kolaborasi tim',
    ],
  },
  {
    no: '06',
    title: 'BiteBeat',
    kind: 'team',
    accent: '#f472b6',
    icon: 'MusicNote',
    points: [
      'Menganalisis musik dan merekomendasikan pasangan makanan menggunakan Apple Intelligence',
      'Foundation Models untuk memetakan kualitas musik ke saran menu',
      'Apple Developer Academy Challenge 2',
    ],
  },
]