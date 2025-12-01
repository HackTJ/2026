import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PhotoStrip from "@/components/photo-strip";
import About from "@/components/about";
import Signpost from "@/components/signpost";
import Sponsors from "@/components/sponsors";
import Location from "@/components/location";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PhotoStrip />
      <About />
      <Signpost />
      <Sponsors />
      <Location />
      <Footer />
    </div>
  )
}
