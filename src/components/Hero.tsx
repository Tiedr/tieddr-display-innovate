import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Headphones, Music } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-20">
      <div className="container mx-auto space-y-32">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Experience Pure
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 bg-clip-text text-transparent"> Innovation</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg">
              Discover our flagship SlimBud X Zero headphones and XBud 1Pro earbuds, 
              engineered for audiophiles who demand perfection.
            </p>
            <div className="flex gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Learn More
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600/10">
                Buy Now
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>
            <img
              src="/headphones-hero.png"
              alt="SlimBud X Zero"
              className="relative w-full h-auto max-w-lg mx-auto"
            />
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Hub", icon: <Headphones className="w-8 h-8" />, color: "from-red-500" },
            { name: "Krafti", icon: <Headphones className="w-8 h-8" />, color: "from-orange-500" },
            { name: "Music", icon: <Music className="w-8 h-8" />, color: "from-purple-500" },
            { name: "Dexina", icon: <Headphones className="w-8 h-8" />, color: "from-purple-600" }
          ].map((product) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl bg-black/50 p-6 backdrop-blur-sm hover:bg-black/60 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} to-transparent opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative space-y-4">
                {product.icon}
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <Button variant="ghost" className="group-hover:text-purple-400">
                  Explore →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};