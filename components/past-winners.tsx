import Image from "next/image";

import { pastWinners } from "@/lib/past-winners";
import { siteConfig } from "@/lib/site-config";

export default function PastWinners() {
  const { registration, event } = siteConfig;

  const ctaCopy =
    registration.status === "open"
      ? "Registration is live—save your spot before we sell out."
      : registration.status === "not_open_yet"
        ? "Registration opens soon, but you can start sketching ideas today."
        : "Registration is closed for now, but we would love to see you next season.";


  return (
    <main className="bg-[#05070a] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-28">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(252,178,195,0.25),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(111,186,242,0.18),_transparent_62%)]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/60">Legacy</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Past Winners
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
            A curated look at the projects that lit up HackTJ over the last two seasons. From medical breakthroughs
            to whimsical lifestyle tools, these teams show what&apos;s possible when creativity meets code.
          </p>
        </div>
      </section>

      {pastWinners.map((season) => {
        const accent = season.accent.primary;
        const accentGlow = season.accent.secondary;
        return (
          <section
            key={season.year}
            className="relative border-b border-white/5 bg-[#080a10]/80"
          >
            <div
              className="absolute inset-0 opacity-50 blur-3xl"
              style={{ background: `radial-gradient(circle, ${accentGlow}22, transparent 60%)` }}
            />
            <div className="relative mx-auto max-w-6xl px-6 py-16">
              <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.6em]"
                    style={{ color: accent }}
                  >
                    {season.headline}
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{season.year} Award Winners</h2>
                  <p className="mt-4 max-w-3xl text-base text-white/70">{season.description}</p>
                </div>
                <div className="text-sm uppercase tracking-[0.3em] text-white/50">
                  {season.winners.length} Awards
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {season.winners.map((winner) => (
                  <article
                    key={`${season.year}-${winner.name}-${winner.title}`}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0e121b]/80 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                    style={{ boxShadow: `0 30px 80px ${accentGlow}26` }}
                  >
                    {winner.picture && (
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={winner.picture}
                          alt={`${winner.name} project photo`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 480px, 100vw"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white"
                          style={{ borderColor: `${accent}55`, color: accent }}
                        >
                          <winner.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{winner.title}</p>
                          <h3 className="text-2xl font-semibold leading-tight text-white">{winner.name}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">{winner.description}</p>
                      <p className="mt-5 text-sm font-semibold" style={{ color: accent }}>
                        Team • {winner.winners}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="relative border-t border-white/10 bg-gradient-to-br from-[#200a17] via-[#0b1016] to-[#05070a] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(252,178,195,0.2),_transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/50">Your turn</p>
          <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Make history at HackTJ 13.0
          </h3>
          <p className="mt-4 text-base text-white/70">
            {ctaCopy} We&apos;ll gather {event.dates} at {event.venue} in {event.city}. Bring your ideas, we&apos;ll bring the mentors,
            midnight snacks, and stage lights.
          </p>
        </div>
      </section>
    </main>
  );
}
