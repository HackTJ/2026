import Navbar from "@/components/navbar";
import Team from "@/components/team";
import Footer from "@/components/footer";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#0b1016]">
      <Navbar />
      <div className="pt-24">
        <Team />
      </div>
      <Footer />
    </div>
  );
}
