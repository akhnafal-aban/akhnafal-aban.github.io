import { profile } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'

function RoleRow({
  role,
  i,
}: {
  role: (typeof profile.roles)[number]
  i: number
}) {
  const accents = ['bg-acid', 'bg-punch', 'bg-volt', 'bg-slime']
  const bg = accents[i % accents.length]
  const rotate = i % 2 === 0 ? '-rotate-1' : 'rotate-1'
  return (
    <div className={`relative ${rotate}`}>
      <div className="border-4 border-ink bg-paper p-5 shadow-brutal">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-black uppercase leading-none tracking-tight">
            {role.title}
          </h3>
          <span className="border-2 border-ink bg-paper px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest shadow-brutal-sm">
            {role.period}
          </span>
        </div>
        <p
          className={`mt-2 inline-block border-2 border-ink ${bg} px-2 py-0.5 font-display text-xs font-bold uppercase tracking-tight`}
        >
          {role.org} · {role.kind}
        </p>
        <ul className="mt-4 space-y-2">
          {role.points.map((p, j) => (
            <li key={j} className="flex gap-2 font-sans text-sm leading-snug">
              <span aria-hidden className="font-display font-black">
                ▸
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="border-b-4 border-ink bg-paper-2 bg-dots">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeader
          index="02"
          kicker="Who & where"
          title="About"
          accent="punch"
        />

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="sticky top-24 border-4 border-ink bg-ink p-5 text-paper shadow-brutal-lg">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-acid">
                Snapshot
              </p>
              <dl className="mt-4 space-y-3 font-sans text-sm">
                {[
                  ['Based', profile.location],
                  ['School', profile.education.school],
                  ['Degree', profile.education.degree],
                  ['Years', profile.education.years],
                  ['GPA', profile.education.gpa],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex flex-col gap-0.5 border-b border-paper/20 pb-2 last:border-0"
                  >
                    <dt className="font-display text-[10px] font-bold uppercase tracking-widest text-paper/60">
                      {k}
                    </dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 border-t-2 border-paper/20 pt-4">
                <p className="font-display text-[10px] font-bold uppercase tracking-widest text-paper/60">
                  Awards
                </p>
                <ul className="mt-2 space-y-1.5">
                  {profile.awards.map((a) => (
                    <li
                      key={a}
                      className="flex gap-2 font-sans text-xs leading-snug text-paper"
                    >
                      <span aria-hidden className="text-acid">
                        ★
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:col-span-7">
            <div className="border-4 border-ink bg-paper p-5 shadow-brutal">
              <p className="font-display text-xs font-bold uppercase tracking-widest">
                Profile
              </p>
              {profile.summary.map((s, i) => (
                <p
                  key={i}
                  className="mt-2 font-sans text-sm font-medium leading-relaxed"
                >
                  {s}
                </p>
              ))}
            </div>

            <div className="space-y-5">
              {profile.roles.map((r, i) => (
                <RoleRow key={r.org} role={r} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
