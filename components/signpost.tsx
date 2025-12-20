import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Signpost() {
  return (
    <section className="relative overflow-hidden bg-[#FCB2C3] py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#e4d3ad] to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#e4d3ad] to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-3 bg-[#7a5a35]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6">
        <div className="relative w-full max-w-3xl">
          <div className="absolute -top-12 left-1/2 h-12 w-4 -translate-x-1/2 rounded-full bg-[#d7c4a1] shadow-[0_10px_20px_rgba(0,0,0,0.4)]" />
          <div className="absolute -top-28 left-1/2 flex h-16 w-40 -translate-x-1/2 items-center justify-around">
            <div className="h-full w-4 rounded-full bg-[#5a4732]" />
            <div className="h-full w-4 rounded-full bg-[#5a4732]" />
          </div>

          <div className="rounded-[36px] border-4 border-[#d7c4a1] bg-[#fff8ea] p-10 text-center text-[#1e1b16] shadow-[0_35px_70px_rgba(0,0,0,0.35)]">
            <h3 className="mt-3 text-4xl font-extrabold text-[#3b2b1b]">Want the full map?</h3>
            <p className="mt-4 text-base text-[#4c3a26]">
              Hop off the main road to view the full schedule and the FAQ. Tap a button below to take the detour.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="rounded-full bg-[#2d3945] px-8 text-white hover:bg-[#1f2a33]"
              >
                <Link href="/schedule">View Schedule</Link>
              </Button>
              <Button
                asChild
                className="rounded-full border border-[#2d3945] bg-transparent px-8 text-[#2d3945] hover:bg-white/40"
              >
                <Link href="/faq">Read FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
