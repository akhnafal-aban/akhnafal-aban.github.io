// Data sprite kucing pixel 16x16.
// Konvensi karakter: '.' transparan, 'o' outline, 'f' bulu, 'p' pink,
// 'e' mata, 'n' hidung, 'm' mulut tertutup, 'w' mulut terbuka, 'b' collar.

export const CAT_GRID = 16

export const palette: Record<string, string> = {
  o: '#2f2a26',
  f: '#f6d9a0',
  p: '#f2a7b3',
  e: '#2f2a26',
  n: '#e08598',
  m: '#2f2a26',
  w: '#8a4a55',
  b: '#0a84ff',
}

// Baris dasar tubuh (tanpa variasi mata dan mulut).
const baseRows = [
  '................',
  '..oo........oo..',
  '.oppo......oppo.',
  '.oooooooooooooo.',
  '.offffffffffffo.',
  '.offffffffffffo.',
  '.offffffffffffo.',
  '.offfffnnfffffo.',
  '.offfmmmmfffffo.',
  '.opffffffffffpo.',
  '.oooooooooooooo.',
  '..obbbbbbbbbbo..',
  '...offffffffo...',
  '....oooooooo....',
  '................',
  '................',
]

function replace(rows: string[], r: number, from: number, to: number, ch: string): string[] {
  const next = [...rows]
  const arr = next[r].split('')
  for (let c = from; c <= to; c++) arr[c] = ch
  next[r] = arr.join('')
  return next
}

function withEyes(rows: string[], kind: 'open' | 'line'): string[] {
  let out = [...rows]
  if (kind === 'open') {
    out = replace(out, 5, 3, 4, 'e')
    out = replace(out, 6, 3, 4, 'e')
    out = replace(out, 5, 11, 12, 'e')
    out = replace(out, 6, 11, 12, 'e')
  } else {
    out = replace(out, 6, 3, 4, 'e')
    out = replace(out, 6, 11, 12, 'e')
  }
  return out
}

// Frame final.
export const catFrames = {
  // Mata terbuka, mulut kecil.
  idleOpen: withEyes(baseRows, 'open'),
  // Kedip atau ekspresi senang: mata jadi garis.
  idleBlink: withEyes(baseRows, 'line'),
  // Ngobrol: mata terbuka, mulut terbuka.
  talkOpen: (() => {
    let out = withEyes(baseRows, 'open')
    out = replace(out, 8, 6, 9, 'w')
    return out
  })(),
  // Ngobrol: mata terbuka, mulut tertutup.
  talkClosed: withEyes(baseRows, 'open'),
  // Diajak elus: mata senang + senyum lebar.
  happy: (() => {
    let out = withEyes(baseRows, 'line')
    out = replace(out, 8, 5, 10, 'm')
    return out
  })(),
}

export type CatMood = 'idle' | 'talk' | 'happy'

export type PetContext = 'intro' | 'index' | 'project'

export const petMessages: Record<PetContext, string[]> = {
  intro: [
    'Scroll lagi yuu..',
    'Halo nyaa, selamat datang..',
    'Mau lihat proyeknya? Scroll yuu..',
  ],
  index: [
    'Pilih project nyaa, bisa mulai dari nomer 1..',
    'Klik kartunya yuu..',
    'Kalau bingung, mulai dari Asset Tracker aja nyaa..',
  ],
  project: [
    'Semangat baca nyaa..',
    'Semua kode di sini asli loh nyaa..',
    'Scroll pelan pelan aja yuu..',
    'Hampir selesai? Terusin yuu..',
  ],
}