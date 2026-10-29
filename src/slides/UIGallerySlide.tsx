import { GallerySlide, type GalleryShot } from './GallerySlide'

import ui1 from '../../content/projects/01-asset-tracker/media/thumbs/ui-01-dashboard.jpg'
import ui2 from '../../content/projects/01-asset-tracker/media/thumbs/ui-02-assets.jpg'
import ui3 from '../../content/projects/01-asset-tracker/media/thumbs/ui-03-asset-detail.jpg'
import ui4 from '../../content/projects/01-asset-tracker/media/thumbs/ui-04-add-asset.jpg'
import ui5 from '../../content/projects/01-asset-tracker/media/thumbs/ui-05-settings.jpg'
import ui6 from '../../content/projects/01-asset-tracker/media/thumbs/ui-06-bitcoin.jpg'

const shots: GalleryShot[] = [
  { src: ui1, alt: 'Dashboard Asset Tracker', caption: 'Dashboard, total nilai dihitung langsung dari GET /assets' },
  { src: ui2, alt: 'Daftar aset', caption: 'Daftar aset dari API, lengkap dengan pencarian' },
  { src: ui3, alt: 'Detail aset MacBook Pro M4', caption: 'Detail aset: harga beli, nilai saat ini, dan total return' },
  { src: ui4, alt: 'Form tambah aset', caption: 'Form tambah aset; tombol Save aktif setelah kolom wajib terisi' },
  { src: ui5, alt: 'Halaman settings', caption: 'Halaman pengaturan, berisi pilihan mata uang dan tampilan' },
  { src: ui6, alt: 'Tab harga Bitcoin', caption: 'Halaman harga Bitcoin; feed WebSocket belum menerima data' },
]

export function UIGallerySlide({ id }: { id?: string }) {
  return <GallerySlide id={id} shots={shots} />
}