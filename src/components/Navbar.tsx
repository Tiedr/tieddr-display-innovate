import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-tieddr-dark/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-white font-bold text-xl">Tieddr</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Support
            </a>
            <Button className="bg-tieddr-purple hover:bg-tieddr-purple/90">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};