import type { ComponentType } from 'react'
import { AssetTrackerChapters } from './AssetTrackerChapters'
import { BreathingAppChapters } from './BreathingAppChapters'
import { AkhnaFinChapters } from './AkhnaFinChapters'

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
  'breathing-app': {
    title: 'Breathing App',
    Chapters: BreathingAppChapters,
  },
  'akhnafin': {
    title: 'AkhnaFin',
    Chapters: AkhnaFinChapters,
  },
}