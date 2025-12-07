import Link from "next/link";

const footerLinks = [
  { href: "mailto:hello@hacktj.org", label: "Email" },
  { href: "https://twitter.com/hacktjofficial", label: "Twitter" },
  { href: "https://www.linkedin.com/company/hacktj", label: "LinkedIn" },
  { href: "https://www.instagram.com/hacktjofficial", label: "Instagram" },
  { href: "https://www.facebook.com/HackTJOfficial/", label: "Facebook" },
  { href: "https://github.com/HackTJ", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1016]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-white sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-bold">HackTJ 13.0</p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
          {footerLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-semibold uppercase tracking-[0.3em] hover:text-white"
    >
      {children}
    </Link>
  );
}
