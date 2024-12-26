import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Tieddr Headphones",
    description: "Premium wireless audio experience",
    image: "/placeholder.svg",
    category: "Hardware",
  },
  {
    name: "Hub",
    description: "Centralized workspace solution",
    image: "/placeholder.svg",
    category: "SAAS",
  },
  {
    name: "Krafti",
    description: "Creative design toolkit",
    image: "/placeholder.svg",
    category: "SAAS",
  },
  {
    name: "Music",
    description: "Advanced audio production suite",
    image: "/placeholder.svg",
    category: "SAAS",
  },
  {
    name: "Dexina",
    description: "Data analytics platform",
    image: "/placeholder.svg",
    category: "SAAS",
  },
];

export const ProductGrid = () => {
  return (
    <section className="py-20 px-4 bg-tieddr-light">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up"
            >
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <span className="text-sm text-tieddr-purple font-medium">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <Button className="w-full bg-tieddr-purple hover:bg-tieddr-purple/90">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};