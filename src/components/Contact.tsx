import { positioning } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'

export function Contact() {
  const links = [
    { label: 'Email', value: positioning.email, href: `mailto:${positioning.email}?subject=From%20your%20portfolio` },
    { label: 'GitHub', value: 'akhnafal-aban', href: positioning.links.github, external: true },
    { label: 'LinkedIn', value: 'akhnaf-aban', href: positioning.links.linkedin, external: true },
    { label: 'Résumé', value: 'Download PDF', href: positioning.resumeUrl, download: true },
  ]
  return (
    <section id="contact" className="border-t-4 border-ink bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 text-paper sm:px-6 sm:py-20">
        <SectionHeader number="08" title="Contact" dark />
        <p className="mt-3 max-w-2xl text-sm text-paper/70">
          {positioning.availability}. One email is enough — no forms, no gate. The subject line is
          prefilled so it lands in the right thread.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                {...('download' in link && link.download ? { download: true } : {})}
                className="flex items-center justify-between border-2 border-paper bg-paper px-4 py-3 text-ink shadow-brutal-sm transition-transform hover:-translate-y-0.5 hover:shadow-brutal"
              >
                <span className="font-display text-xs font-black uppercase tracking-widest">{link.label}</span>
                <span className="font-mono text-sm font-bold">{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
