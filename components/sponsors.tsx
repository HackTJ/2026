const sponsorTiers = [
  { name: "Partners", slots: 2, blurb: "" },
  { name: "Gold", slots: 4, blurb: "" },
  { name: "Silver", slots: 5, blurb: "" },
  { name: "Bronze", slots: 5, blurb: "" },
  { name: "Prize", slots: 3, blurb: "" },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden py-20 text-white"
      style={{
        backgroundColor: "#0b1016",
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent, transparent 240px, rgba(255,255,255,0.05) 240px, rgba(255,255,255,0.05) 252px)",
      }}
    >
      <div className="absolute inset-0 opacity-35" style={{ background: "radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 60%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-3 bg-[#6f5938]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold">Sponsors</h2>
          <p className="mt-3 text-lg text-white/80">
            Pull into the HackTJ parking lot of partners. Want a space?{" "}
            <a href="mailto:sponsors@hacktj.org" className="underline decoration-dotted underline-offset-4">
              sponsors@hacktj.org
            </a>{" "}
            or{" "}
            <a
              href="/sponsorship13_0.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-4"
            >
              grab the sponsorship packet
            </a>
            .
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <div
              key={tier.name}
              className="rounded-[32px] border border-white/10 bg-[#111722]/90 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-3xl font-extrabold">{tier.name}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Row {tierIndex + 1} · {tier.blurb}
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: tier.slots }).map((_, index) => (
                  <ParkingSpot key={`${tier.name}-${index}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParkingSpot() {
  return (
    <div className="relative h-32 rounded-2xl bg-[#0b1119] p-3 text-white/40 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
      <div className="absolute inset-y-3 left-4 w-1 rounded-full bg-white/20" />
      <div className="absolute inset-y-3 right-4 w-1 rounded-full bg-white/20" />
      <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-white/25 text-sm">
        Logo
      </div>
    </div>
  );
}
