import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

export const ProductGrid = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/50 transition-colors duration-300 animate-fade-up"
            >
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="space-y-2">
                <span className="text-sm text-purple-500 font-medium">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
                <p className="text-xl text-purple-500">${product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};