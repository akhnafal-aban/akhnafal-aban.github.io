# Konvensi Konten Proyek

Satu folder per proyek, bernomor sesuai urutan tampil di index:

```
projects/
├─ 01-asset-tracker/
├─ 02-breathing-app/
└─ 03-akhnafin/
```

Aturan:

- Nama folder diawali angka dua digit (`01-`, `02-`, ...) sesuai urutan proyek di deck.
- File konten di dalam folder juga diawali angka (`01-masalah.md`, `02-stack.md`, ...)
  supaya urutan slide pasti mengikuti nama file.
- Struktur tiap proyek boleh berbeda. Asset Tracker memakai arc
  masalah, stack, arsitektur, kode, UI, bukti. Proyek lain bebas memakai arc sendiri;
  yang penting urutannya jelas dari nama file.
- Media (screenshot, video) taruh di `media/` dalam folder proyek yang sama.
  Untuk dipakai di web, buat versi ringan di `media/thumbs/` (mis. JPEG 600px).

Kode sisi deck:

- Slide chapter proyek didaftarkan di `src/projects/registry.ts`.
- Satu proyek satu file Chapters (contoh: `src/projects/AssetTrackerChapters.tsx`),
  boleh menyusun slide apa pun dengan urutan apa pun.
- Metadata kartu di index (judul, poin, personal/team) ada di `src/data/projects.ts`.