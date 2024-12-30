import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-20">
      <div className="container mx-auto">
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
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
                    alt="SlimBud X Zero - Front View"
                    className="w-full h-auto rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop"
                    alt="SlimBud X Zero - Side View"
                    className="w-full h-auto rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop"
                    alt="XBud 1Pro"
                    className="w-full h-auto rounded-lg"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-white border-white/20" />
              <CarouselNext className="text-white border-white/20" />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};