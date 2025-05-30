
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if email is valid
    if (!email || !email.includes('@')) {
      toast({
        title: "Please enter a valid email",
        description: "We need your email to keep you updated with special offers.",
        variant: "destructive",
      });
      return;
    }
    
    // Success toast
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    // Clear input
    setEmail("");
  };

  return (
    <section className="py-20 bg-chocolate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-chocolate-800 to-chocolate-900 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-chocolate-700 rounded-full translate-x-1/3 -translate-y-1/3 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500 rounded-full -translate-x-1/3 translate-y-1/3 opacity-20"></div>
          
          <div className="text-center relative z-10 mb-8">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-gold-300 rounded-full text-sm font-medium mb-4">
              Join Our Community
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
              Get Sweet Deals in Your Inbox
            </h2>
            <p className="text-chocolate-200 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, chocolate tasting events, and early access to seasonal collections.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="relative z-10 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-gold-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="gold-button shrink-0 py-2 px-6 text-chocolate-900">
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs text-center mt-4 text-chocolate-300">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
