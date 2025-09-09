import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const collections = [
  {
    id: 1,
    name: "Premium Truffles",
    description: "Handcrafted truffles with rich ganache centers",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: 12,
    category: "truffles"
  },
  {
    id: 2,
    name: "Gift Collections",
    description: "Beautifully packaged chocolate assortments",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: 8,
    category: "assorted"
  },
  {
    id: 3,
    name: "Artisan Bars",
    description: "Single-origin chocolate bars with unique flavors",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: 15,
    category: "bars"
  },
  {
    id: 4,
    name: "Seasonal Specials",
    description: "Limited edition chocolates for special occasions",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: 6,
    category: "seasonal"
  }
];

const Collections = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <div className="bg-chocolate-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title mb-4">Our Collections</h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Explore our carefully curated chocolate collections, each crafted with passion and the finest ingredients.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Card key={collection.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/80 via-chocolate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm bg-chocolate-800 px-2 py-1 rounded">
                      {collection.productCount} Products
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-chocolate-800 mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-chocolate-600 mb-4">
                    {collection.description}
                  </p>
                  
                  <Link to="/products">
                    <Button className="chocolate-button flex items-center gap-2 group">
                      Explore Collection
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-cream-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-3xl font-bold text-chocolate-800 mb-4">
              Can't Decide?
            </h2>
            <p className="text-chocolate-600 mb-8 max-w-2xl mx-auto">
              Let us help you find the perfect chocolate collection for any occasion. 
              Our chocolate experts are here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="gold-button">
                  Browse All Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-chocolate-300 text-chocolate-700 hover:bg-chocolate-50">
                  Get Recommendations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collections;