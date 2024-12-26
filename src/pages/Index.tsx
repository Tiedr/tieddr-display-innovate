import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { MusicBanner } from "@/components/MusicBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <MusicBanner />
      <ProductGrid />
    </div>
  );
};

export default Index;