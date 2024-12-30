import { motion } from "framer-motion";
import { Building, Paintbrush, Music, Database, Cloud } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    name: "Krafti",
    description: "Build stunning websites with our intuitive website builder",
    icon: <Database className="w-8 h-8 text-orange-500" />,
    color: "from-red-500/20 to-orange-500/20",
    link: "/krafti"
  },
  {
    name: "Dexina",
    description: "Professional vector graphics design made simple",
    icon: <Paintbrush className="w-8 h-8 text-purple-500" />,
    color: "from-orange-500/20 to-purple-500/20",
    link: "/dexina"
  },
  {
    name: "Music",
    description: "Stream millions of songs and podcasts",
    icon: <Music className="w-8 h-8 text-red-500" />,
    color: "from-purple-500/20 to-red-500/20",
    link: "/music"
  },
  {
    name: "Hub",
    description: "Collaborative workspace for teams",
    icon: <Building className="w-8 h-8 text-orange-500" />,
    color: "from-red-500/20 to-orange-500/20",
    link: "/hub"
  },
  {
    name: "XCloud",
    description: "Secure cloud storage for all your needs",
    icon: <Cloud className="w-8 h-8 text-purple-500" />,
    color: "from-orange-500/20 to-purple-500/20",
    link: "/xcloud"
  }
];

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Ecosystem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our suite of innovative apps designed to enhance your digital experience
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} blur-xl rounded-2xl group-hover:scale-105 transition-transform duration-300`} />
              <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300">
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};