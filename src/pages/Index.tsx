import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductGrid />
    </div>
  );
};

export default Index;