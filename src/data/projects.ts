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
      'Dashboard, model aset dan kategori, pengaturan, dan integrasi API',
      'Mengonsumsi REST API Go buatan sendiri lewat URLSession',
      'MVVM dengan satu lapisan Api',
    ],
  },
  {
    no: '02',
    title: 'Breathing App',
    kind: 'personal',
    points: [
      'Aplikasi napas dan gerak, Apple Developer Academy Challenge 1',
      'Dibangun bersama tim',
      'SwiftUI',
    ],
  },
  {
    no: '03',
    title: 'AkhnaFin',
    kind: 'personal',
    points: [
      'Lima jalur input: Siri, bahasa natural, suara, OCR struk, manual',
      'Semua input menjadi draft yang bisa diedit sebelum disimpan',
      'SwiftData dan CloudKit',
    ],
  },
]