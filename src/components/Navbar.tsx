import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C7.58172 3 4 6.58172 4 11C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 11C20 6.58172 16.4183 3 12 3Z" fill="url(#gradient)" />
              <path d="M12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7Z" fill="black" />
              <defs>
                <linearGradient id="gradient" x1="4" y1="3" x2="20" y2="19" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF0000" />
                  <stop offset="0.5" stopColor="#FFA500" />
                  <stop offset="1" stopColor="#9B87F5" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-white font-bold text-xl">Tieddr</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["Products", "About", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
            <Button className="bg-purple-600 hover:bg-purple-700">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};