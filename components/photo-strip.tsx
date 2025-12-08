import Image from "next/image";

const photos = ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG", "7.JPG", "8.JPG"];
const ribbon = [...photos, ...photos];

export default function PhotoStrip() {
  return (
    <section className="relative bg-[#111821] py-14 text-white">
      <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-white/20 to-transparent opacity-70" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-6">
        <h3 className="text-4xl font-extrabold text-center">Past Events</h3>
        <div className="relative h-48 overflow-hidden rounded-[32px] border border-white/10 bg-[#0c1116] shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-y-6 left-6 right-6 rounded-[999px] border border-white/5 bg-gradient-to-b from-[#151c23] to-[#0c1116]" />

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            <div className="flex h-32 w-[180%] animate-road-scroll items-center gap-6 px-8" style={{ animationDuration: "25s" }}>
              {ribbon.map((photo, index) => (
                <div key={`${photo}-${index}`} className="relative h-32 w-60 flex-shrink-0 overflow-hidden rounded-2xl border-4 border-white/70 bg-white/85 shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
                  <Image src={`/prev/${photo}`} alt={`HackTJ ${photo}`} fill sizes="240px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
