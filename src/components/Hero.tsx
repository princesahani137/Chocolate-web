
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-chocolate-50 to-cream-100 pt-20">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-6 animate-fade-in">
            <div>
              <span className="inline-block px-4 py-1.5 bg-gold-200 text-chocolate-800 rounded-full text-sm font-medium mb-6">
                Premium Chocolate Selection
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-chocolate-900 leading-tight">
              Indulge in <br />
              <span className="text-chocolate-600">Divine</span> Chocolate <br />
              <span className="text-gold-500">Experience</span>
            </h1>
            <p className="text-lg text-chocolate-700 max-w-lg">
              Savor the taste of perfection with our handcrafted chocolates, 
              made from the finest cocoa beans and premium ingredients.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="chocolate-button flex items-center gap-2 text-base py-3 px-8">
                Shop Collection <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-chocolate-500 text-chocolate-700 hover:bg-chocolate-50 py-3 px-8 text-base">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-8 pt-4">
              <div className="text-center">
                <p className="font-playfair text-3xl font-bold text-chocolate-800">35+</p>
                <p className="text-sm text-chocolate-600">Flavors</p>
              </div>
              <div className="h-12 w-px bg-chocolate-200"></div>
              <div className="text-center">
                <p className="font-playfair text-3xl font-bold text-chocolate-800">15k+</p>
                <p className="text-sm text-chocolate-600">Happy Customers</p>
              </div>
              <div className="h-12 w-px bg-chocolate-200"></div>
              <div className="text-center">
                <p className="font-playfair text-3xl font-bold text-chocolate-800">100%</p>
                <p className="text-sm text-chocolate-600">Premium Cacao</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative flex justify-center items-center animate-scale-in">
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Luxury Chocolate Assortment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-chocolate-900/70 to-transparent p-6">
                <div className="bg-white/90 rounded-lg p-4 backdrop-blur-sm max-w-xs">
                  <h3 className="font-playfair text-xl font-bold text-chocolate-800">Signature Collection</h3>
                  <p className="text-sm text-chocolate-600 mt-1">Our best-selling luxury assortment with 24 unique flavors</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-lg text-chocolate-900">$49.95</span>
                    <Button className="bg-chocolate-800 hover:bg-chocolate-900 text-white text-sm px-4 py-1 h-8">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gold-300 blur-xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-chocolate-300 blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#fff" 
            fillOpacity="1" 
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
