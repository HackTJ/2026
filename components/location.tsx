export default function Location() {
  return (
    <section id="location" className="relative overflow-hidden bg-[#4f7c38] py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white/30 to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white/30 to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-3 bg-[#6f5938]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-3">
        <div>
          <h2 className="text-5xl font-extrabold">Location</h2>
          <p className="mt-4 text-lg font-semibold">Cvent HQ</p>
          <p className="text-base">1765 Greensboro Station Place</p>
          <p className="text-base">McLean, VA 22102</p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-[32px] border border-[#6f5938] bg-[#684f33] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.452839127444!2d-77.23552553059025!3d38.921404279113695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64af13c242263%3A0x9ba83db6fd24b750!2sCvent%20HQ!5e0!3m2!1sen!2sus!4v1765150873723!5m2!1sen!2sus"
              width="100%"
              height="280"
              className="rounded-[24px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
