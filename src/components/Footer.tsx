
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-chocolate-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">
              Tru<span className="text-gold-500">fl</span>
            </h3>
            <p className="text-chocolate-300 text-sm pr-4">
              Crafting premium chocolates with the finest ingredients since 1995. Every bite is an unforgettable experience.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-chocolate-800 hover:bg-chocolate-700 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/trufl_chocolate?igsh=MXdpdjdhbGVrOGdibw==" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-chocolate-800 hover:bg-chocolate-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://wa.me/9220460644" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-chocolate-800 hover:bg-chocolate-700 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-4 font-playfair">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About Us', 'Corporate Gifts', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-chocolate-300 hover:text-gold-300 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Collections */}
          <div>
            <h4 className="font-bold text-xl mb-4 font-playfair">Collections</h4>
            <ul className="space-y-2">
              {['Signature Truffles', 'Gift Boxes', 'Seasonal Specials', 'Dark Chocolate', 'Milk Chocolate', 'Vegan Options'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-chocolate-300 hover:text-gold-300 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-4 font-playfair">Contact Us</h4>
            <address className="not-italic text-chocolate-300 space-y-3 text-sm">
              <p></p>
              <p></p>
              <p className="pt-2">
                <a href="https://wa.me/9220460644" className="hover:text-gold-300 transition-colors">
                  +91 9220460644
                </a>
              </p>
              <p>
                <a href="mailto:mail@gmail.com" className="hover:text-gold-300 transition-colors">
                  chocolatetrufl@gmail.com
                </a>
              </p>
            </address>
            <Button className="mt-4 gold-button text-chocolate-900 text-sm">
              Contact Us
            </Button>
<h4 className="font-bold text-xl mb-4 font-playfair">Fssai Code</h4>
      <a href="#" className="hover:text-gold-300 transition-colors">       
        <p>23325010002896</p>
        </a>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-chocolate-800 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-chocolate-400 text-sm">
              &copy; {currentYear} Trufl. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-xs text-chocolate-400 hover:text-gold-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-chocolate-400 hover:text-gold-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-chocolate-400 hover:text-gold-300 transition-colors">
                Shipping & Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
