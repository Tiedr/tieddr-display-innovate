import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { MusicBanner } from "@/components/MusicBanner";
import { HubSection } from "@/components/HubSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <HubSection />
      <MusicBanner />
      <Footer />
    </div>
  );
};

export default Index;