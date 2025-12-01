import Navbar from "@/components/navbar";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0b0f14]">
      <Navbar />
      <div className="pt-24">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
