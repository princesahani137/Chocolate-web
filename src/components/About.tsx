
import { Button } from "@/components/ui/button";
import { ChocolateIcon } from "./ChocolateIcon";
import { Package, Cookie, Gift, Star } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 bg-chocolate-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-chocolate-700" />
    </div>
    <h3 className="font-playfair text-xl font-bold text-chocolate-800 mb-2">{title}</h3>
    <p className="text-chocolate-600 text-sm">{description}</p>
  </div>
);

const About = () => {
  const features = [
    {
      icon: Package,
      title: "Premium Ingredients",
      description: "We use only the finest cocoa beans and ingredients sourced from sustainable farms around the world."
    },
    {
      icon: Star,
      title: "Master Chocolatiers",
      description: "Our chocolates are crafted by expert chocolatiers with decades of experience in the art of chocolate making."
    },
    {
      icon: Cookie,
      title: "Handcrafted Perfection",
      description: "Each piece is meticulously handcrafted to ensure the perfect taste, texture, and appearance."
    },
    {
      icon: Gift,
      title: "Elegant Packaging",
      description: "Our beautiful packaging makes our chocolates the perfect gift for any occasion or special moment."
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1526081347589-7fa3cb680977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Chocolate crafting process" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <ChocolateIcon className="w-10 h-10 text-gold-500" />
                <div>
                  <h4 className="font-playfair font-bold text-chocolate-800">Artisanal Process</h4>
                  <p className="text-sm text-chocolate-600 mt-1">
                    Our chocolates are crafted in small batches to maintain quality and freshness
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gold-200 blur-xl opacity-70 z-0"></div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-chocolate-100 text-chocolate-800 rounded-full text-sm font-medium mb-2">
              Our Story
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-chocolate-800 leading-tight">
              Crafting Chocolate <span className="text-gold-500">Excellence</span> Since 1995
            </h2>
            <p className="text-chocolate-700">
              At Chocolate Bliss, we believe that chocolate is more than just a treat – it's an experience to be savored. Our journey began in a small kitchen with a passion for creating the perfect chocolate confection.
            </p>
            <p className="text-chocolate-700">
              Today, we continue that tradition of excellence, combining time-honored techniques with innovative flavors to create chocolates that delight all the senses.
            </p>
            <div className="pt-4">
              <Button className="chocolate-button py-3 px-8 text-base">
                Our Process
              </Button>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
