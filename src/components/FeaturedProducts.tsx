
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Sample product data
const products = [
  {
    id: 1,
    name: "Dark Chocolate Truffles",
    description: "Rich dark chocolate ganache dusted with cocoa powder",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    rating: 5,
    category: "truffles"
  },
  {
    id: 2,
    name: "Milk Chocolate Gift Box",
    description: "Assorted milk chocolate delights in an elegant gift box",
    price: 39.95,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    rating: 4.5,
    category: "assorted"
  },
  {
    id: 3,
    name: "Hazelnut Praline Bars",
    description: "Crunchy hazelnut praline covered in smooth milk chocolate",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    rating: 4.8,
    category: "bars"
  },
  {
    id: 4,
    name: "White Chocolate Berry Fusion",
    description: "Creamy white chocolate with real berry pieces",
    price: 29.95,
    image: "https://images.unsplash.com/photo-1497729019230-f30736e9864f?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    category: "assorted"
  }
];

// Product card component
const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-chocolate-50 transition-colors">
            <Heart className="w-4 h-4 text-chocolate-700" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-chocolate-900/80 to-transparent p-3">
          <div className="flex items-center justify-between">
            <span className="bg-chocolate-800 text-white text-xs px-2 py-1 rounded">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
              <span className="text-xs text-white font-medium">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5 space-y-3">
        <h3 className="font-playfair font-bold text-xl text-chocolate-800">{product.name}</h3>
        <p className="text-sm text-chocolate-600 line-clamp-2">{product.description}</p>
        
        <div className="pt-3 flex items-center justify-between">
          <span className="font-bold text-lg text-chocolate-900">${product.price.toFixed(2)}</span>
          <Button className="chocolate-button flex items-center gap-2 text-sm py-1.5">
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

// Featured Products section
const FeaturedProducts = () => {
  const categories = ["All", "Truffles", "Assorted", "Bars", "Seasonal"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  return (
    <section className="py-24 bg-cream-100" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Premium Selection</h2>
          <p className="section-subtitle">
            Handcrafted with the finest ingredients, our chocolates are perfect for gifting or treating yourself.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm transition-all duration-300",
                activeCategory === category 
                  ? "bg-chocolate-700 text-white shadow-md" 
                  : "bg-chocolate-100 text-chocolate-700 hover:bg-chocolate-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button className="gold-button px-8 py-3 text-base">
            View All Chocolates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
