import type { ComponentType } from 'react'
import { AssetTrackerChapters } from './AssetTrackerChapters'

export type ProjectDef = {
  title: string
  Chapters: ComponentType
}

// Struktur tiap proyek bebas berbeda: buat file Chapters tersendiri
// (contoh: BreathingAppChapters.tsx), lalu daftarkan di sini.
export const registry: Record<string, ProjectDef> = {
  'asset-tracker': {
    title: 'Asset Tracker',
    Chapters: AssetTrackerChapters,
  },
}