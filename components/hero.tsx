"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig, type RegistrationStatus } from "@/lib/site-config";

const registrationCopy: Record<
  RegistrationStatus,
  { label: string; helper: string; hasLink: boolean }
> = {
  open: {
    label: "Participant Registration Closed",
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
};

const MAX_TIMEOUT_MS = 2147483647;

export default function Hero() {
  const registration = siteConfig.registration;
  const [status, setStatus] = useState<RegistrationStatus>(registration.status);
  const copy = registrationCopy[status];
  const showParticipantLink = status === "closed" && Boolean(registration.links?.participants);
  const showMentorLink = status === "open" && Boolean(registration.links?.mentors);
  const showVolunteerLink = status === "open" && Boolean(registration.links?.volunteers);

  useEffect(() => {
    if (registration.status !== "not_open_yet") {
      return;
    }

    const opensAtMs = new Date(registration.opensAt).getTime();
    if (Number.isNaN(opensAtMs)) {
      return;
    }

    const updateStatus = () => {
      if (Date.now() >= opensAtMs) {
        setStatus("open");
      }
    };

    updateStatus();

    if (Date.now() >= opensAtMs) {
      return;
    }

    const msUntilOpen = opensAtMs - Date.now();
    if (msUntilOpen > MAX_TIMEOUT_MS) {
      return;
    }

    const timeoutId = window.setTimeout(updateStatus, msUntilOpen);
    return () => window.clearTimeout(timeoutId);
  }, [registration.opensAt, registration.status]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#6B9AC4] text-white">
      <Image
        src="/dome.png"
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
            {siteConfig.event.season} {siteConfig.year}
          </p>
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.1] sm:text-6xl lg:text-7xl">
            HackTJ <span className="text-[var(--color-primary)]">{siteConfig.iteration}</span>
          </h1>
          <p className="mt-2 text-lg font-semibold text-white/90">
            {siteConfig.event.dates} · {siteConfig.event.venue} · {siteConfig.event.city}
          </p>
          <p className="mt-2 text-base text-white/85">
            Spend the weekend building bold ideas with workshops, mentors, and surprises.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-end gap-4">
            {showParticipantLink ? (
              <Button
                asChild
                className="rounded-full bg-white px-8 text-gray-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Link href={registration.links.participants} target="_blank" rel="noreferrer">
                  {copy.label}
                </Link>
              </Button>
            ) : (
              <Button disabled className="rounded-full bg-white/40 px-8 text-gray-900 shadow-lg shadow-black/25">
                {copy.label}
              </Button>
            )}
            {showMentorLink && (
              <Button
                asChild
                className="rounded-full bg-white px-8 text-gray-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Link href={registration.links.mentors} target="_blank" rel="noreferrer">
                  Mentor/Judge Signup
                </Link>
              </Button>
            )}
            {showVolunteerLink && (
              <Button
                asChild
                className="rounded-full bg-white px-8 text-gray-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Link href={registration.links.volunteers} target="_blank" rel="noreferrer">
                  Volunteer Signup
                </Link>
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
