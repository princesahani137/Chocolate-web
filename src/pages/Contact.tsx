import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <div className="bg-chocolate-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title mb-4">Get in Touch</h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Have questions about our chocolates or need help with your order? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-chocolate-800 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-chocolate-700 mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-chocolate-700 mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-chocolate-700 mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-chocolate-700 mb-2">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-chocolate-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    className="min-h-32"
                  />
                </div>
                
                <Button className="chocolate-button w-full">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-2xl font-bold text-chocolate-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-chocolate-100 rounded-full">
                          <MapPin className="w-6 h-6 text-chocolate-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-chocolate-800 mb-1">Visit Our Store</h3>
                          <p className="text-chocolate-600">
                            123 Chocolate Avenue<br />
                            Sweet City, SC 12345<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-chocolate-100 rounded-full">
                          <Phone className="w-6 h-6 text-chocolate-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-chocolate-800 mb-1">Call Us</h3>
                          <p className="text-chocolate-600">
                            +1 (555) 123-4567<br />
                            Mon-Fri: 9AM-6PM EST
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-chocolate-100 rounded-full">
                          <Mail className="w-6 h-6 text-chocolate-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-chocolate-800 mb-1">Email Us</h3>
                          <p className="text-chocolate-600">
                            hello@chocobliss.com<br />
                            support@chocobliss.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-chocolate-100 rounded-full">
                          <Clock className="w-6 h-6 text-chocolate-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-chocolate-800 mb-1">Store Hours</h3>
                          <p className="text-chocolate-600">
                            Monday - Friday: 9:00 AM - 8:00 PM<br />
                            Saturday: 10:00 AM - 6:00 PM<br />
                            Sunday: 12:00 PM - 5:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;