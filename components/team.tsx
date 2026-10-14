import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { siteConfig } from "@/lib/site-config";

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-[#0f141a] text-white">
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/15 to-transparent opacity-70" />

      <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden">
        <Image
          src={withBasePath("/team/full-team.webp")}
          alt="HackTJ Team Photo"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0f141a]"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            The Team
          </h1>
          <p className="mt-3 text-lg text-white/80 max-w-xl drop-shadow">
            Meet the group making HackTJ {siteConfig.iteration} possible!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-[#11161d] px-6 py-14 text-center shadow-lg">
          <h2 className="text-4xl font-extrabold text-white">
            Coming soon
          </h2>
          <p className="mt-3 text-lg text-[#9ea7b0]">
            The HackTJ {siteConfig.iteration} team will be announced here soon.
          </p>
        </div>
      </div>
    </section>
  );
}
