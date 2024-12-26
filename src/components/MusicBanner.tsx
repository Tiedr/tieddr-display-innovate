import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

export const MusicBanner = () => {
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
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 bg-clip-text text-transparent"> Sound</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-lg">
              Immerse yourself in crystal-clear audio with our state-of-the-art 
              music streaming platform. Discover new artists, create custom playlists, 
              and experience music like never before.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Start Listening
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>
            <img
              src="/music-app.png"
              alt="Tieddr Music Interface"
              className="relative rounded-lg shadow-2xl border border-purple-500/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};