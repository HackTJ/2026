import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Museum from "@/components/museum";

export default function MuseumPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#0d1116",
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent, transparent 200px, rgba(255,255,255,0.04) 200px, rgba(255,255,255,0.04) 212px)",
      }}
    >
      <Navbar />
      <div className="pt-8 md:pt-[70px]">
        <Museum />
        <Footer />
      </div>
    </div>
  );
}
