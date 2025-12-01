export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#111821] py-16 text-white">
      <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-transparent via-[#f7d97a]/70 to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-transparent via-[#f7d97a]/50 to-transparent opacity-70" />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="text-5xl font-extrabold">About HackTJ</h2>
            <p className="mt-4 text-base text-white/80">
              HackTJ happens once a year, inviting hundreds of high school students to build something magical in just one weekend.
            </p>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="rounded-3xl border border-white/10 bg-[#0c1016] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <p className="text-lg font-medium leading-relaxed text-white/90">
              HackTJ is the world&apos;s largest high school hackathon, hosted annually at Thomas Jefferson High School for Science
              and Technology. Students from across the region come together for a weekend hours of coding, collaboration, and creativity.
              Whether you&apos;re a beginner or an experienced programmer, HackTJ provides an opportunity to learn new skills, build
              innovative projects, and connect with like-minded peers. Join us for workshops, mentorship, prizes, and an unforgettable
              weekend cruise through imagination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
