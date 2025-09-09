
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Search, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import Cart from "@/components/Cart";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "About", href: "#about" },
    { name: "Collections", href: "/collections" },
    { name: "Contact", href: "/contact" }
  ];

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-playfair font-bold transition-colors duration-300",
              isScrolled ? "text-chocolate-800" : "text-chocolate-800"
            )}>
              Chocolate<span className="text-gold-500">Bliss</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a 
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium hover:text-chocolate-600 transition-colors duration-300",
                  isScrolled ? "text-chocolate-800" : "text-chocolate-800"
                )}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium hover:text-chocolate-600 transition-colors duration-300",
                  isScrolled ? "text-chocolate-800" : "text-chocolate-800"
                )}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>
        
        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className={cn(
            "p-2 rounded-full transition-colors duration-300",
            isScrolled ? "hover:bg-chocolate-100" : "hover:bg-white/30"
          )}>
            <Search className={cn(
              "h-5 w-5",
              isScrolled ? "text-chocolate-800" : "text-chocolate-800"
            )} />
          </button>
          <button className={cn(
            "p-2 rounded-full transition-colors duration-300",
            isScrolled ? "hover:bg-chocolate-100" : "hover:bg-white/30"
          )}>
            <Heart className={cn(
              "h-5 w-5",
              isScrolled ? "text-chocolate-800" : "text-chocolate-800"
            )} />
          </button>
          <Cart />
          <Link to="/products">
            <Button 
              className={cn(
                "ml-2",
                isScrolled ? "chocolate-button" : "gold-button"
              )}
            >
              Shop Now
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 rounded-full transition-colors duration-300",
              isScrolled ? "hover:bg-chocolate-100" : "hover:bg-white/30"
            )}
          >
            <Menu className={cn(
              "h-6 w-6",
              isScrolled ? "text-chocolate-800" : "text-chocolate-800"
            )} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden md:hidden",
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a 
                key={item.name}
                href={item.href}
                className="py-2 px-4 text-chocolate-800 hover:bg-chocolate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name}
                to={item.href}
                className="py-2 px-4 text-chocolate-800 hover:bg-chocolate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          <div className="flex items-center justify-between py-3 px-4 mt-2 border-t border-chocolate-200">
            <div className="flex space-x-4">
              <button className="p-2 hover:bg-chocolate-100 rounded-full">
                <Search className="h-5 w-5 text-chocolate-800" />
              </button>
              <button className="p-2 hover:bg-chocolate-100 rounded-full">
                <Heart className="h-5 w-5 text-chocolate-800" />
              </button>
              <Cart />
            </div>
            <Link to="/products">
              <Button className="chocolate-button">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
