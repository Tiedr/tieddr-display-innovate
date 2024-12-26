import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-tieddr-dark text-white px-4 py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-5xl lg:text-7xl font-bold">
            Experience Pure
            <span className="text-tieddr-purple"> Innovation</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            Discover our flagship headphone and suite of powerful SAAS applications
            designed to elevate your digital experience.
          </p>
          <div className="flex gap-4">
            <Button className="bg-tieddr-purple hover:bg-tieddr-purple/90">
              Explore Products
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute inset-0 bg-tieddr-purple/20 blur-3xl rounded-full"></div>
          <img
            src="/placeholder.svg"
            alt="Tieddr Headphones"
            className="relative w-full h-auto max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};