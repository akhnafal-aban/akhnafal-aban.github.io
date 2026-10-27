import { AbsoluteFill, Easing, Img, interpolate, useCurrentFrame } from 'remotion'
import ui1 from '../../content/personal/asset-tracker/media/ui-01-dashboard.png'
import ui2 from '../../content/personal/asset-tracker/media/ui-02-assets.png'
import ui3 from '../../content/personal/asset-tracker/media/ui-03-asset-detail.png'
import ui4 from '../../content/personal/asset-tracker/media/ui-04-add-asset.png'
import ui5 from '../../content/personal/asset-tracker/media/ui-05-settings.png'
import ui6 from '../../content/personal/asset-tracker/media/ui-06-bitcoin.png'

export const TRAILER_WIDTH = 1280
export const TRAILER_HEIGHT = 720
export const TRAILER_FPS = 12
export const TRAILER_DURATION = 360

const bg = '#161616'
const ink = '#f2f2f2'
const dim = '#8e8e93'
const blue = '#0a84ff'
const mono = 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, monospace'
const sans = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif'

const shots = [
  { src: ui1, cap: 'Dashboard, total dihitung langsung dari GET /assets' },
  { src: ui2, cap: 'Daftar aset dari API, lengkap dengan pencarian' },
  { src: ui3, cap: 'Detail aset: harga beli, nilai saat ini, dan total return' },
  { src: ui4, cap: 'Form tambah aset; Save aktif setelah kolom wajib terisi' },
  { src: ui5, cap: 'Halaman pengaturan mata uang dan tampilan' },
  { src: ui6, cap: 'Halaman harga Bitcoin; feed WebSocket belum menerima data' },
]

const results = [
  'GET /assets: total portofolio dihitung dari data API',
  'POST /assets: aset baru langsung masuk daftar',
  'Semua klaim di deck ini terverifikasi dari demo tanggal 27 Oktober 2026',
]

const easeOut = Easing.out(Easing.cubic)

export function AssetTrackerTrailer() {
  const frame = useCurrentFrame()

  if (frame < 60) {
    const titleOp = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: 'clamp' })
    const titleY = interpolate(frame, [0, 12], [46, 0], { extrapolateRight: 'clamp' })
    const subOp = interpolate(frame, [14, 24], [0, 1], { extrapolateRight: 'clamp' })
    const ruleScale = interpolate(frame, [20, 38], [0, 1], { easing: easeOut, extrapolateRight: 'clamp' })

    return (
      <AbsoluteFill style={{ backgroundColor: bg, justifyContent: 'center', alignItems: 'center', fontFamily: sans }}>
        <div style={{ opacity: titleOp, transform: `translateY(${titleY}px)`, fontSize: 84, fontWeight: 700, letterSpacing: -3, color: ink }}>
          Asset Tracker
        </div>
        <div style={{ opacity: subOp, marginTop: 22, fontFamily: mono, fontSize: 26, color: dim }}>
          SwiftUI + REST API Go · case study
        </div>
        <div style={{ width: 320, height: 3, marginTop: 34, backgroundColor: blue, transform: `scaleX(${ruleScale})`, borderRadius: 2 }} />
      </AbsoluteFill>
    )
  }

  if (frame < 240) {
    const seg = Math.floor((frame - 60) / 30)
    const t = frame - 60 - seg * 30
    const shot = shots[seg]
    const x = interpolate(t, [0, 9], [TRAILER_WIDTH + 220, 0], { easing: easeOut, extrapolateRight: 'clamp' })
    const op = interpolate(t, [22, 29], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
    const capOp = interpolate(t, [7, 14], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })

    return (
      <AbsoluteFill style={{ backgroundColor: bg, justifyContent: 'center', alignItems: 'center', fontFamily: sans }}>
        <div style={{ position: 'absolute', top: 40, left: 48, fontFamily: mono, fontSize: 22, color: blue }}>
          {String(seg + 1).padStart(2, '0')} / 06
        </div>
        <div style={{ opacity: op, transform: `translateX(${x}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: 216,
              height: 470,
              borderRadius: 34,
              padding: 9,
              backgroundColor: '#0e0e0e',
              border: '2px solid rgba(255,255,255,0.16)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
            }}
          >
            <Img src={shot.src} style={{ width: '100%', height: '100%', borderRadius: 25, objectFit: 'cover' }} />
          </div>
          <div style={{ opacity: capOp, marginTop: 26, fontFamily: mono, fontSize: 20, color: dim, textAlign: 'center', maxWidth: 760 }}>
            {shot.cap}
          </div>
        </div>
      </AbsoluteFill>
    )
  }

  if (frame < 315) {
    const t = frame - 240
    return (
      <AbsoluteFill style={{ backgroundColor: bg, justifyContent: 'center', paddingLeft: 120, fontFamily: sans }}>
        <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1, color: ink, marginBottom: 30 }}>
          Yang terverifikasi dari demo
        </div>
        {results.map((r, i) => {
          const op = interpolate(t, [8 * i, 8 * i + 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
          return (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20, opacity: op }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: blue }} />
              <div style={{ fontFamily: mono, fontSize: 24, color: '#c9c9ce' }}>{r}</div>
            </div>
          )
        })}
      </AbsoluteFill>
    )
  }

  const t = frame - 315
  const op = interpolate(t, [0, 8], [0, 1], { extrapolateRight: 'clamp' })
  const loopOp = interpolate(t, [18, 26], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })

  return (
    <AbsoluteFill style={{ backgroundColor: bg, justifyContent: 'center', alignItems: 'center', fontFamily: sans }}>
      <div style={{ opacity: op, fontSize: 40, fontWeight: 700, letterSpacing: -1, color: ink }}>
        github.com/akhnafal-aban/Asset-Tracker
      </div>
      <div style={{ opacity: loopOp, marginTop: 18, fontFamily: mono, fontSize: 20, color: dim }}>
        trailer ini loop otomatis · 30 detik
      </div>
    </AbsoluteFill>
  )
}