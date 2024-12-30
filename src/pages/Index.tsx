import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { HubSection } from "@/components/HubSection";
import { MusicBanner } from "@/components/MusicBanner";
import { XCloudBanner } from "@/components/XCloudBanner";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <HubSection />
      <MusicBanner />
      <XCloudBanner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;