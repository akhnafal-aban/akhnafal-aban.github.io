import { ProjectCover } from '../components/ProjectCover'
import homeHeart from '../../content/projects/02-breathing-app/media/ui-01-home-heart.png'
import breathingDesc from '../../content/projects/02-breathing-app/media/ui-04-breathing-desc.png'
import letsgo from '../../content/projects/02-breathing-app/media/ui-06-letsgo.png'

export function BreathingAppCover({ id }: { id?: string }) {
  return (
    <ProjectCover
      id={id}
      caseLabel="CASE STUDY 02 OF 03"
      title="Breathing App"
      subtitle="Project iOS pertama saya, fokus mempelajari SwiftUI termasuk cara mengelola state. Aplikasinya panduan napas 4-7-8 untuk menenangkan diri."
      metas={['iOS · Academy', 'Challenge 1', 'SwiftUI']}
      images={{
        backLeft: { src: letsgo, alt: 'Layar Let\'s Go saat sesi napas dimulai' },
        backRight: { src: breathingDesc, alt: 'Penjelasan teknik napas 4-7-8 dengan tombol Let\'s Begin' },
        front: { src: homeHeart, alt: 'Halaman utama How Do You Feel dengan kartu jantung' },
      }}
    />
  )
}