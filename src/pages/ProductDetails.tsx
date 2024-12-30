import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { products } from "@/data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg border border-white/10"
            />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-purple-500">{product.category}</p>
              <h1 className="text-4xl font-bold text-white mt-2">{product.name}</h1>
              <p className="text-2xl text-purple-500 mt-4">${product.price}</p>
            </div>
            <p className="text-gray-400">{product.description}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-white border-white/10"
                >
                  -
                </Button>
                <span className="text-white">{quantity}</span>
                <Button
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-white border-white/10"
                >
                  +
                </Button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-purple-500 hover:bg-purple-600"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;