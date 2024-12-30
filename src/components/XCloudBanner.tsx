import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

export const XCloudBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Experience Pure
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent"> Cloud</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-lg">
              Store, sync, and share files with ease. Access your documents, photos, 
              and more from any device with our secure cloud storage solution.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Try XCloud Free
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>
            <img
              src="/xcloud-interface.png"
              alt="XCloud Interface"
              className="relative rounded-lg shadow-2xl border border-purple-500/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};