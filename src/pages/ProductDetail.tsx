import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, ShoppingBag, Plus, Minus, Truck, Shield, RotateCcw } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const productData = {
  1: {
    id: 1,
    name: "Dark Chocolate Truffles",
    description: "Rich dark chocolate ganache dusted with cocoa powder",
    longDescription: "Indulge in our signature dark chocolate truffles, crafted with 70% Belgian dark chocolate and infused with premium vanilla. Each truffle is hand-rolled and dusted with the finest cocoa powder, creating a luxurious melt-in-your-mouth experience.",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: 5,
    reviews: 127,
    category: "truffles",
    inStock: true,
    ingredients: ["Dark Chocolate (70% Cocoa)", "Heavy Cream", "Vanilla Extract", "Cocoa Powder"],
    nutritionPer100g: {
      calories: 520,
      fat: 35,
      carbs: 45,
      protein: 8,
      sugar: 40
    }
  },
 7: {
    id: 7,
    name: "Shivam Sahani",
    description: "Eeta uthane ke kaam aata hai",
    longDescription: "Indulge in our signature dark chocolate truffles, crafted with 70% Belgian dark chocolate and infused with premium vanilla. Each truffle is hand-rolled and dusted with the finest cocoa powder, creating a luxurious melt-in-your-mouth experience.",
    price: 0.99,
    images: [
      "https://t4.ftcdn.net/jpg/01/17/35/17/360_F_117351782_ugRMzKUg8pz8ucKVqIPI1JzQSCItC0Hx.jpg",
      "https://cdn.britannica.com/47/276247-050-33B62CB6/Donkey-in-a-field.jpg"],
    rating: 1p0,
    reviews: 127,
    category: "truffles",
    inStock: false,
    ingredients: ["Muscle", "Skin", "organs", "hair"],
    nutritionPer100g: {
      calories: 52000,
      fat: 35000000,
      carbs: 45,
      protein: 0,
      sugar: 40000000
    }
  }  
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const product = productData[id as keyof typeof productData];
  
  const handleAddToCart = () => {
    if (!product) return;
    
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      });
    }
    
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
    
    setQuantity(1);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-chocolate-800 mb-4">Product Not Found</h1>
          <p className="text-chocolate-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl bg-cream-100">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                      selectedImage === index ? "border-chocolate-700" : "border-chocolate-200"
                    )}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-2">{product.category}</Badge>
                <h1 className="font-playfair text-3xl font-bold text-chocolate-800 mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-4 h-4",
                          i < product.rating ? "fill-gold-500 text-gold-500" : "text-chocolate-300"
                        )} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-chocolate-600">({product.reviews} reviews)</span>
                </div>
                
                <p className="text-chocolate-600 mb-6">{product.longDescription}</p>
                
                <div className="text-3xl font-bold text-chocolate-800 mb-6">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-chocolate-700 font-medium">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-chocolate-100 rounded-md"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-chocolate-100 rounded-md"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button onClick={handleAddToCart} className="flex-1 chocolate-button flex items-center justify-center space-x-2">
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={cn(
                      "p-3",
                      isWishlisted ? "text-red-500 border-red-500" : ""
                    )}
                  >
                    <Heart className={cn("w-5 h-5", isWishlisted ? "fill-current" : "")} />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6 border-t border-chocolate-200">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto text-chocolate-600 mb-2" />
                  <p className="text-xs text-chocolate-600">Free Shipping</p>
                  <p className="text-xs text-chocolate-500">On orders over $50</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto text-chocolate-600 mb-2" />
                  <p className="text-xs text-chocolate-600">Quality Guarantee</p>
                  <p className="text-xs text-chocolate-500">Premium ingredients</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-6 h-6 mx-auto text-chocolate-600 mb-2" />
                  <p className="text-xs text-chocolate-600">Easy Returns</p>
                  <p className="text-xs text-chocolate-500">30-day policy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-chocolate-600 leading-relaxed">
                    {product.longDescription}
                  </p>
                  <p className="text-chocolate-600 leading-relaxed mt-4">
                    Our dark chocolate truffles are made using traditional European techniques, 
                    ensuring each piece delivers an authentic and luxurious chocolate experience. 
                    Perfect for gifting or treating yourself to something special.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="ingredients" className="mt-6">
                <div>
                  <h3 className="font-semibold text-chocolate-800 mb-4">Ingredients:</h3>
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-chocolate-600 flex items-center">
                        <span className="w-2 h-2 bg-chocolate-400 rounded-full mr-3"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="nutrition" className="mt-6">
                <div>
                  <h3 className="font-semibold text-chocolate-800 mb-4">Nutrition Facts (per 100g):</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center p-4 bg-cream-100 rounded-lg">
                      <div className="text-2xl font-bold text-chocolate-800">{product.nutritionPer100g.calories}</div>
                      <div className="text-sm text-chocolate-600">Calories</div>
                    </div>
                    <div className="text-center p-4 bg-cream-100 rounded-lg">
                      <div className="text-2xl font-bold text-chocolate-800">{product.nutritionPer100g.fat}g</div>
                      <div className="text-sm text-chocolate-600">Fat</div>
                    </div>
                    <div className="text-center p-4 bg-cream-100 rounded-lg">
                      <div className="text-2xl font-bold text-chocolate-800">{product.nutritionPer100g.carbs}g</div>
                      <div className="text-sm text-chocolate-600">Carbs</div>
                    </div>
                    <div className="text-center p-4 bg-cream-100 rounded-lg">
                      <div className="text-2xl font-bold text-chocolate-800">{product.nutritionPer100g.protein}g</div>
                      <div className="text-sm text-chocolate-600">Protein</div>
                    </div>
                    <div className="text-center p-4 bg-cream-100 rounded-lg">
                      <div className="text-2xl font-bold text-chocolate-800">{product.nutritionPer100g.sugar}g</div>
                      <div className="text-sm text-chocolate-600">Sugar</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
