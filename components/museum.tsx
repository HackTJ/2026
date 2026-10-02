"use client";

import Image from "next/image";
import { ArrowUpRight, Trophy, X } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import { pastWinners, type Winner, type WinnersYear } from "@/lib/past-winners";
import styles from "./museum.module.css";

type Exhibit = { winner: Winner; season: WinnersYear };

function trackName(title: string) {
  if (title.includes("Vishnu Murthy")) return "Social Impact";
  return title.replace(/^Best (Use of )?/, "").replace(/ Hack$/, "");
}

function TrackBadge({ winner }: { winner: Winner }) {
  const Icon = winner.title === "Best Overall Hack" ? Trophy : winner.icon;
  return (
    <span className={styles.badge} title={winner.title}>
      <Icon size={14} aria-hidden="true" />
      {trackName(winner.title)}
    </span>
  );
}

export default function Museum() {
  const [activeYear, setActiveYear] = useState(pastWinners[0].year);
  const [selected, setSelected] = useState<Exhibit | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateYear = () => {
      const sections =
        galleryRef.current?.querySelectorAll<HTMLElement>("[data-year]");
      if (!sections?.length) return;
      let year = Number(sections[0].dataset.year);
      const offset = window.matchMedia("(max-width: 767px)").matches
        ? 110
        : 120;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset)
          year = Number(section.dataset.year);
      }
      setActiveYear(year);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateYear);
    };
    updateYear();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected || !dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [selected]);

  return (
    <main className={styles.museum}>
      <header className={styles.hero}>
        <h1>Museum</h1>
        <p>Browse HackTJ’s winning teams and projects.</p>
      </header>

      <div id="collection" className={styles.collection}>
        <nav className={styles.years} aria-label="Exhibition years">
          {pastWinners.map((season) => (
            <a
              key={season.year}
              href={`#year-${season.year}`}
              aria-current={activeYear === season.year ? "location" : undefined}
              style={
                { "--event-accent": season.accent.primary } as CSSProperties
              }
            >
              {season.year}
            </a>
          ))}
        </nav>

        <div ref={galleryRef} className={styles.gallery}>
          {pastWinners.map((season) => (
            <section
              key={season.year}
              id={`year-${season.year}`}
              data-year={season.year}
              className={styles.season}
              aria-labelledby={`heading-${season.year}`}
              style={
                { "--event-accent": season.accent.primary } as CSSProperties
              }
            >
              <header className={styles.seasonHeader}>
                <h2 id={`heading-${season.year}`}>{season.year} Winners</h2>
                <p>{season.headline}</p>
              </header>
              <div className={styles.cards}>
                {season.winners.map((winner, index) => {
                  const overall = winner.title === "Best Overall Hack";
                  const Icon = winner.icon;
                  return (
                    <article
                      key={`${winner.name}-${winner.title}`}
                      className={`${styles.card} ${overall ? styles.overall : ""}`}
                    >
                      <button
                        type="button"
                        className={styles.cardButton}
                        onClick={() => setSelected({ winner, season })}
                        aria-label={`Explore ${winner.name}, ${winner.title}, ${season.year}`}
                        aria-haspopup="dialog"
                      >
                        <span className={styles.photo}>
                          {winner.picture ? (
                            <Image
                              src={winner.picture}
                              alt={`${winner.name} winning team`}
                              fill
                              priority={
                                season.year === pastWinners[0].year && index < 3
                              }
                              sizes="(min-width: 1440px) 330px, (min-width: 1152px) 25vw, (min-width: 768px) 35vw, (min-width: 640px) 45vw, 90vw"
                              className={styles.teamPhoto}
                            />
                          ) : (
                            <span className={styles.photoPlaceholder}>
                              <Icon
                                size={48}
                                strokeWidth={1}
                                aria-hidden="true"
                              />
                              <span>{season.headline}</span>
                            </span>
                          )}
                        </span>
                        <span className={styles.cardContent}>
                          <TrackBadge winner={winner} />
                          <span className={styles.projectName}>
                            {winner.name}
                          </span>
                          <span className={styles.team}>{winner.winners}</span>
                          <span className={styles.cardFooter}>
                            View details{" "}
                            <ArrowUpRight size={15} aria-hidden="true" />
                          </span>
                        </span>
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="exhibit-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        {selected && (
          <div
            className={styles.dialogContent}
            style={
              {
                "--event-accent": selected.season.accent.primary,
              } as CSSProperties
            }
          >
            <button
              type="button"
              className={styles.close}
              aria-label="Close project details"
              onClick={() => dialogRef.current?.close()}
              autoFocus
            >
              <X size={21} aria-hidden="true" />
            </button>
            {selected.winner.picture && (
              <div className={styles.dialogPhoto}>
                <Image
                  src={selected.winner.picture}
                  alt={`${selected.winner.name} winning team`}
                  fill
                  sizes="(min-width: 768px) 640px, 90vw"
                  className={styles.teamPhoto}
                />
              </div>
            )}
            <div className={styles.dialogBody}>
              <p className={styles.eyebrow}>
                {selected.season.headline} <span className={styles.dot}>·</span>{" "}
                {selected.season.year}
              </p>
              <h2 id="exhibit-title">{selected.winner.name}</h2>
              <TrackBadge winner={selected.winner} />
              <p className={styles.fullAward}>{selected.winner.title}</p>
              <h3>The team</h3>
              <ul className={styles.members}>
                {selected.winner.winners.split(",").map((name) => (
                  <li key={name}>{name.trim()}</li>
                ))}
              </ul>
              <div className={styles.projectDetails}>
                <h3>About the project</h3>
                <p>
                  {selected.winner.description ||
                    "Project details coming soon."}
                </p>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </main>
  );
}
