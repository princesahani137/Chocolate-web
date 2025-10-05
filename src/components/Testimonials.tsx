
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { cn } from "@/lib/utils";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Shila ki javani",
    role: "Chocolate Enthusiast",
    content: "These are by far the best chocolates I've ever tasted! The flavors are so rich and complex. I ordered the dark chocolate truffles for my anniversary, and they were the perfect gift.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Corporate Client",
    content: "We ordered custom chocolate gifts for our clients during the holidays, and the response was phenomenal. The packaging was elegant, and everyone raved about the quality. Will definitely order again next year!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Food Blogger",
    content: "As someone who reviews desserts professionally, I can honestly say these chocolates are outstanding. The attention to detail in each piece is evident, and the flavor combinations are innovative yet classic.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1322&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Gift Shopper",
    content: "My mother is very particular about her chocolates, and these passed her test with flying colors! The gift box presentation was beautiful, and the chocolates were fresh and delicious.",
    avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="py-24 bg-gradient-to-br from-chocolate-900 to-chocolate-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-chocolate-600/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold-500/20 text-gold-300 rounded-full text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-chocolate-200">
            Don't just take our word for it. Here's what chocolate lovers are saying about our creations.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Current Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold-500">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-5 h-5", 
                        i < testimonials[activeIndex].rating 
                          ? "fill-gold-500 text-gold-500" 
                          : "text-gray-400"
                      )} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl text-white mb-6 italic">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                
                <div>
                  <h4 className="font-playfair font-bold text-xl text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gold-300 text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index 
                      ? "bg-gold-500 w-8" 
                      : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrevious}
                className="rounded-full border-white/30 text-white bg-brown hover:bg-white/10 hover:border-white hover:text-brown"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext}
                className="rounded-full border-white/30 text-white bg-brown hover:bg-white/10 hover:border-white hover:text-brown"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
