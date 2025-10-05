import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingBag, Star, Heart, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Dark Chocolate Truffles",
    description: "Rich dark chocolate ganache dusted with cocoa powder",
    price: 25,
    image: "https://raw.githubusercontent.com/princesahani137/Chocolate-web/refs/heads/main/public/images/WhatsApp%20Image%202025-10-06%20at%2012.35.05%20AM.jpeg",
    rating: 5,
    category: "truffles"
  },
  {
    id: 2,
    name: "Milk Chocolate Gift Box",
    description: "Assorted milk chocolate delights in an elegant gift box",
    price: 39.95,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1335&q=80",
    rating: 4.5,
    category: "assorted"
  },
  {
    id: 3,
    name: "Hazelnut Praline Bars",
    description: "Crunchy hazelnut praline covered in smooth milk chocolate",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
    rating: 4.8,
    category: "bars"
  },
  {
    id: 4,
    name: "White Chocolate Berry Fusion",
    description: "Creamy white chocolate with real berry pieces",
    price: 29.95,
    image: "https://images.unsplash.com/photo-1497729019230-f30736e9864f?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.7,
    category: "assorted"
  },
  {
    id: 5,
    name: "Sea Salt Caramel Chocolates",
    description: "Smooth caramel center with a hint of sea salt",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1089&q=80",
    rating: 4.9,
    category: "truffles"
  },
  {
    id: 6,
    name: "Artisan Chocolate Collection",
    description: "Curated selection of our finest handcrafted chocolates",
    price: 49.95,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    rating: 5,
    category: "assorted"
  },
   {
    id: 7,
    name: "Shivam Sahani",
    description: "Shivam Sahani pada hag ke khata jhada",
    price: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg",
    rating: 5,
    category: "assorted"
  }
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to cart!",
      description: `₹{product.name} has been added to your cart.`,
    });
  };
  
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
        <div className="absolute top-4 right-4">
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
        <Link to={`/product/${product.id}`}>
          <h3 className="font-playfair font-bold text-xl text-chocolate-800 hover:text-chocolate-600 transition-colors cursor-pointer">{product.name}</h3>
        </Link>
        <p className="text-sm text-chocolate-600 line-clamp-2">{product.description}</p>
        
        <div className="pt-3 flex items-center justify-between">
          <span className="font-bold text-lg text-chocolate-900">₹{product.price.toFixed(2)}</span>
          <Button onClick={handleAddToCart} className="chocolate-button flex items-center gap-2 text-sm py-1.5">
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const categories = ["all", "truffles", "assorted", "bars"];
  
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || product.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <div className="bg-chocolate-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title mb-4">Our Premium Chocolates</h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Discover our complete collection of handcrafted chocolates, made with the finest ingredients from around the world.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chocolate-400 w-5 h-5" />
              <Input
                placeholder="Search chocolates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="truffles">Truffles</SelectItem>
                <SelectItem value="assorted">Assorted</SelectItem>
                <SelectItem value="bars">Bars</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-chocolate-600 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
