import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
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
              <span className="font-bold text-xl">Tieddr</span>
            </div>
            <p className="text-gray-400">Experience pure innovation</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>SlimBud X Zero</li>
              <li>XBud 1Pro</li>
              <li>Hub</li>
              <li>Krafti</li>
              <li>Music</li>
              <li>Dexina</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tieddr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};