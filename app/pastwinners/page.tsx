import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PastWinners from "@/components/past-winners";

export default function PastWinnersPage() {
  return (
    <div className="min-h-screen bg-[#05070a]">
      <Navbar />
      <div className="pt-24">
        <PastWinners />
        <Footer />
      </div>
    </div>
  );
}
