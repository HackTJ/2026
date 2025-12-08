const SPONSOR_CONTACT_EMAILS = ["shaurya@hacktj.org", "aanya@hacktj.org"];
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const withBasePath = (path: string) => {
  if (!path) return BASE_PATH;
  return path.startsWith("/") ? `${BASE_PATH}${path}` : `${BASE_PATH}/${path}`;
};

type SponsorLogo = {
  name: string;
  src: string;
  className?: string;
};

type SponsorTier = {
  name: string;
  slots: number;
  blurb?: string;
  logos: SponsorLogo[];
  showWhenEmpty?: boolean;
  emptyMessage?: string;
  contactEmails?: string[];
};

const sponsorTiers: SponsorTier[] = [
  {
    name: "Partners",
    slots: 2,
    blurb: "",
    logos: [
      { name: "TJPF", src: "/logos/partner/tjpartnership.png" },
      { name: "Cvent", src: "/logos/partner/cvent.png" },
    ],
  },
  {
    name: "Gold",
    slots: 4,
    blurb: "",
    logos: [{ name: "Roam", src: "/logos/gold/roam.png" }],
  },
  {
    name: "Silver",
    slots: 5,
    blurb: "",
    logos: [],
    showWhenEmpty: true,
    emptyMessage: "Reserve a Silver space and get your logo parked here.",
    contactEmails: SPONSOR_CONTACT_EMAILS,
  },
  {
    name: "Bronze",
    slots: 5,
    blurb: "",
    logos: [
      { name: "Vishnu Murthy Foundation", src: "/logos/bronze/vishnu-murthy-foundation.png", className: "max-h-24" },
      { name: "Arcfield", src: "/logos/bronze/arcfield.png" },
      { name: "TEOCO", src: "/logos/bronze/teoco.png" },
    ],
  },
  {
    name: "Prize",
    slots: 3,
    blurb: "",
    logos: [],
  },
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
              href={withBasePath("/sponsorship13_0.pdf")}
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
          {sponsorTiers
            .map((tier) => ({
              ...tier,
              logos: tier.logos.filter(Boolean),
            }))
            .filter((tier) => tier.logos.length > 0 || tier.showWhenEmpty)
            .map((tier, tierIndex) => {
              const contactEmails = tier.contactEmails ?? SPONSOR_CONTACT_EMAILS;
              const showReserveSpot = tier.logos.length > 0 && tier.logos.length < tier.slots;

              return (
                <div
                  key={tier.name}
                  className="rounded-[32px] border border-white/10 bg-[#111722]/90 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-3xl font-extrabold">{tier.name}</h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                      Row {tierIndex + 1}
                      {tier.blurb ? ` · ${tier.blurb}` : ""}
                    </p>
                  </div>
                  {tier.logos.length === 0 && tier.showWhenEmpty && tier.emptyMessage ? (
                    <div className="mt-6 rounded-2xl border border-dashed border-white/20 bg-[#0c131d] p-6 text-center text-white/80">
                      <p className="text-lg font-semibold">{tier.emptyMessage}</p>
                      <p className="mt-3 text-sm text-white/70">
                        <a
                          href={`mailto:${contactEmails.join(",")}`}
                          className="font-semibold underline decoration-dotted underline-offset-4"
                        >
                          Email us
                        </a>{" "}
                        to claim this spot.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {tier.logos.map((logo, index) => (
                        <ParkingSpot key={`${tier.name}-${index}`} logo={logo} />
                      ))}
                      {showReserveSpot && <ReserveSpot contactEmails={contactEmails} />}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

function ParkingSpot({ logo }: { logo?: SponsorLogo }) {
  return (
    <div className="relative h-32 rounded-2xl bg-[#0b1119] p-3 text-white/40 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
      <div className="absolute inset-y-3 left-4 w-1 rounded-full bg-white/20" />
      <div className="absolute inset-y-3 right-4 w-1 rounded-full bg-white/20" />
      <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-white/25 p-4 text-sm">
        {logo ? (
          <img
            src={withBasePath(logo.src)}
            alt={`${logo.name} logo`}
            className={`max-h-14 w-full object-contain ${logo.className ?? ""}`.trim()}
          />
        ) : (
          "Reserved"
        )}
      </div>
    </div>
  );
}

function ReserveSpot({ contactEmails }: { contactEmails: string[] }) {
  const mailto = contactEmails.join(",");

  return (
    <div className="relative h-32 rounded-2xl bg-[#0b1119] p-3 text-white/80 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
      <div className="absolute inset-y-3 left-4 w-1 rounded-full bg-white/20" />
      <div className="absolute inset-y-3 right-4 w-1 rounded-full bg-white/20" />
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/25 p-4 text-center text-sm">
        <span className="text-base font-semibold">Want to reserve this space?</span>
        <a href={`mailto:${mailto}`} className="text-sm font-semibold uppercase tracking-wide underline">
          Email us
        </a>
      </div>
    </div>
  );
}
