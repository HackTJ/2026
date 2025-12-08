"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const registrationCopy = {
  open: {
    label: "Register",
    helper: "",
    hasLink: true,
  },
  not_open_yet: {
    label: "Registration Not Yet Open",
    helper: "",
    hasLink: false,
  },
  closed: {
    label: "Registration Closed",
    helper: "",
    hasLink: false,
  },
} as const;

export default function Hero() {
  const registration = siteConfig.registration;
  const copy = registrationCopy[registration.status];
  const showLink = copy.hasLink && registration.link;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#6B9AC4] text-white">
      <Image
        src="/domeo.png"
        alt="HackTJ hero illustration"
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#9cc3e1]/40 via-[#5e7fb4]/45 to-[#264667]/70" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#102035]/70 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-16 sm:px-6 lg:px-10">
        <div className="ml-auto mt-10 max-w-xl text-right">
          <p className="inline-flex items-center justify-end rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            Spring 2026
          </p>
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.1] sm:text-6xl lg:text-7xl">
            HackTJ <span className="text-[#FCB2C3]">13.0</span>
          </h1>
          <p className="mt-2 text-lg font-semibold text-white/90">
            March 8-9, 2026 · Cvent HQ · Tysons, VA
          </p>
          <p className="mt-2 text-base text-white/85">
            Spend the weekend building bold ideas with workshops, mentors, and surprises.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-end gap-4">
            {showLink ? (
              <Button
                asChild
                className="rounded-full bg-white px-8 text-gray-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Link href={registration.link!} target="_blank" rel="noreferrer">
                  {copy.label}
                </Link>
              </Button>
            ) : (
              <Button disabled className="rounded-full bg-white/40 px-8 text-gray-900 shadow-lg shadow-black/25">
                {copy.label}
              </Button>
            )}
            <Button
              asChild
              className="rounded-full border border-white/60 bg-transparent px-8 text-white hover:bg-white/10"
            >
              <Link href="/schedule">Schedule</Link>
            </Button>
          </div>
          <p className="mt-3 text-sm font-semibold text-white/70">{copy.helper}</p>
        </div>

      </div>
    </section>
  );
}
