"use client";

import { siteConfig } from "@/lib/site-config";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string[];
  bullets?: string[];
  listStyle?: "bullets" | "inline";
  inlineLabel?: string;
};

type FAQSection = {
  title: string;
  faqs: FAQItem[];
};

const faqSections: FAQSection[] = [
  {
    title: "About HackTJ",
    faqs: [
      {
        question: "What is HackTJ?",
        answer: [
          "HackTJ is a student-run hackathon where you'll have 24 hours to learn how to code or team up with friends to bring a big idea to life.",
        ],
      },
      {
        question: "When is HackTJ?",
        answer: [
          `Save the Date! HackTJ ${siteConfig.iteration} runs ${siteConfig.event.dates}, at ${siteConfig.event.venue} in ${siteConfig.event.city}.`,
          "Doors open Saturday morning at 9:00 AM with the opening ceremony shortly after.",
        ],
      },
      {
        question: "Isn't hacking illegal?",
        answer: [
          'In the hackathon world, "hacking" means rapidly building an application during the event. It\'s all about creativity and collaboration—not breaking into systems.',
        ],
      },
      {
        question: "Is there a code of conduct?",
        answer: [
          "Yes! We follow the HackTJ Code of Conduct, which every attendee agrees to it when they register and check in.",
        ],
      },
    ],
  },
  {
    title: "Registration",
    faqs: [
      {
        question: "How do I register?",
        answer: [
          "Registration opens around January 27th. When the button appears at the top of the site, follow these steps:",
        ],
        bullets: [
          "Click the registration button and choose the form for your role.",
          "Fill out the questions and upload any required documents near the end.",
          "Print, sign, and scan your forms in advance to keep things fast.",
        ],
      },
      {
        question: "Is there a deadline?",
        answer: [
          "Registration for participants, volunteers, mentors, judges, workshop hosts, and photographers opens around January 27th.",
          "Participant registration closes February 6th—this deadline is hard.",
          "Judges, mentors, and volunteers may register right up until the event begins.",
        ],
      },
      {
        question: "How are ticket decisions made?",
        answer: [
          "Tickets are issued based on a mix of factors, including completeness of your application and when you submit.",
          `Sign up as soon as registration opens to maximize your chance of receiving a HackTJ ${siteConfig.iteration} ticket.`,
        ],
      },
      {
        question: "Is there any cost?",
        answer: [
          "Nope! HackTJ is completely free thanks to our sponsors covering food, swag, and prizes.",
        ],
      },
    ],
  },
  {
    title: "Prizes & Eligibility",
    faqs: [
      {
        question: "What prizes can I win?",
        answer: [
          "HackTJ hosts prizes for standout projects in loads of categories.",
        ],
        bullets: [
          "Best Overall Hack",
          "Best AI/ML Hack",
          "Best Web Hack",
          "Best Mobile Hack",
          "Best Beginner Hack",
          "Best Biomedical Hack",
          "Best Finance Hack",
          "Best Sustainability Hack",
          "Best Cyber Technology Hack",
          "Best Lifestyle Hack",
          "Best Quantum Hack",
        ],
        listStyle: "inline",
        inlineLabel: "Categories",
      },
      {
        question: "Are there sponsored prizes?",
        answer: [
          `Absolutely. Select partners bring their own prizes, and we have a plethera of our own, keep an eye on the HackTJ ${siteConfig.iteration} student guide for those details.`,
        ],
      },
      {
        question: "Who can attend?",
        answer: [
          "HackTJ is open to all current Fairfax County Public Schools high school students.",
          "Not a student? You can still join us as a judge, mentor, volunteer, or workshop host.",
        ],
      },
      {
        question: "Do I need a team?",
        answer: [
          "Teams of 2-4 are ideal, and bringing friends is awesome.",
          "Need a team? We host mixers so you can form one on-site before hacking starts.",
        ],
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section
      id="faq"
      className="relative py-20 text-white"
      style={{
        backgroundColor: "#0d1116",
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent, transparent 200px, rgba(255,255,255,0.04) 200px, rgba(255,255,255,0.04) 212px)",
      }}
    >
      <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 55%)" }} />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold">FAQ</h2>
          <p className="mt-3 text-lg text-white/80">
            Everything in one place, tap a line to pop the trunk on the details.
          </p>
        </div>

        <div className="space-y-6">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title} className="rounded-[28px] border border-white/10 bg-[#171c22]/90 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold">{section.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#f6d879]/80">
                  Lot {sectionIndex + 1}
                </span>
              </div>

              <div className="space-y-3">
                {section.faqs.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div key={item.question} className="rounded-2xl border border-white/10 bg-[#10151a]">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-4 py-3 text-left"
                        onClick={() => toggleItem(key)}
                        aria-expanded={isOpen}
                      >
                        <span className="text-base font-semibold">{item.question}</span>
                        <span
                          className={`text-2xl font-bold text-[#f6d879] transition-transform ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-white/5 px-4 pb-4 pt-3 text-sm text-white/80">
                          <div className="space-y-2">
                            {item.answer.map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                            {item.bullets && item.listStyle !== "inline" && (
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/75">
                                {item.bullets.map((bullet, index) => (
                                  <li key={index}>{bullet}</li>
                                ))}
                              </ul>
                            )}
                            {item.bullets && item.listStyle === "inline" && (
                              <p className="mt-2 text-white/80">
                                {item.inlineLabel ?? "Details"}: {item.bullets.join(" · ")}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
