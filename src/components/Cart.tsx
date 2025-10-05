import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeItem, totalItems, subtotal, clearCart } = useCart();
  const { toast } = useToast();
  
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
  if (items.length === 0) return;

  try {
    // create order on server
    const res = await fetch(`${import.meta.env.VITE_API_URL}/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total }) // total from your cart
    });
    const order = await res.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // test key id (safe to expose client-side)
      amount: order.amount,
      currency: order.currency,
      name: "Your Chocolate Store",
      description: "Order payment",
      order_id: order.id,
      handler: (response: any) => {
        // response contains razorpay_payment_id, razorpay_order_id, razorpay_signature
        toast({ title: "Payment succeeded", description: `Payment ID: ${response.razorpay_payment_id}` });
        clearCart();
        // Optionally call server to verify signature / mark order paid
      },
      prefill: { name: "", email: "", contact: "" }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error(err);
    toast({ title: "Payment failed", description: String(err) });
  }
};

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 rounded-full hover:bg-chocolate-100 transition-colors">
          <ShoppingCart className="h-5 w-5 text-chocolate-800" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-chocolate-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-playfair text-chocolate-800">Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="mx-auto h-12 w-12 text-chocolate-300 mb-4" />
                <p className="text-chocolate-600">Your cart is empty</p>
                <p className="text-sm text-chocolate-500 mt-2">Add some delicious chocolates to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-cream-100 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-chocolate-800 text-sm">{item.name}</h3>
                      <p className="text-chocolate-600 text-sm">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-chocolate-200 rounded"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-chocolate-200 rounded"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-medium text-chocolate-800">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-chocolate-500 hover:text-chocolate-700 mt-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t border-chocolate-200 pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-chocolate-600">Subtotal</span>
                  <span className="text-chocolate-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-chocolate-600">Shipping</span>
                  <span className="text-chocolate-800">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600">Free shipping on orders over $50!</p>
                )}
                <div className="flex justify-between font-semibold text-lg border-t border-chocolate-200 pt-2">
                  <span className="text-chocolate-800">Total</span>
                  <span className="text-chocolate-800">${total.toFixed(2)}</span>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-chocolate-700 mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
              </div>
              <div className="space-y-2">
               <a href="https://wa.me/9220460644?text=Hii Trufl!!">
               <Button variant="outline" className="w-full"> Checkout </Button>
                </a>
            
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
