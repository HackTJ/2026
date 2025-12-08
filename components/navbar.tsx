"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/faq", label: "FAQ" },
  { href: "/#sponsors", label: "Sponsors" },
  { href: "/#location", label: "Location" },
  { href: "/team", label: "Team" },
  { href: "/#past-winners", label: "Past Winners" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleNavClick = useCallback(
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith("/#")) {
        const [, hash] = href.split("#");
        event.preventDefault();
        if (pathname !== "/") {
          router.push(`/#${hash}`);
          setOpen(false);
          return;
        }
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setOpen(false);
      } else {
        setOpen(false);
      }
    },
    [pathname, router]
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 text-white">
        <div className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.3em] md:flex">
          <Link href="/">
            <Image
              src="/pink_white.png"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
          </Link>
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className="transition hover:text-white/70 py-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="text-2xl font-bold">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/60 px-6 py-4 text-white backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-base font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="transition hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
