import { ProductGrid } from "@/components/ProductGrid";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Store = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20">
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Store;