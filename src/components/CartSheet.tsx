import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import goldenSunrise from '@/assets/product-golden-sunrise.jpg';
import lavenderDreams from '@/assets/product-lavender-dreams.jpg';
import oceanBreeze from '@/assets/product-ocean-breeze.jpg';
import forestShield from '@/assets/product-forest-shield.jpg';
import roseGarden from '@/assets/product-rose-garden.jpg';
import citrusBurst from '@/assets/product-citrus-burst.jpg';

const productImages: Record<string, string> = {
  '1': goldenSunrise,
  '2': lavenderDreams,
  '3': oceanBreeze,
  '4': forestShield,
  '5': roseGarden,
  '6': citrusBurst,
};

const CartSheet = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md bg-card border-l border-border flex flex-col">
        <SheetHeader className="space-y-1">
          <SheetTitle className="font-serif text-2xl">Your Cart</SheetTitle>
          <p className="text-sm text-muted-foreground">
            {items.length === 0 ? 'Your cart is empty' : `${items.length} item${items.length > 1 ? 's' : ''}`}
          </p>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="font-serif text-lg mb-1">Nothing here yet</p>
              <p className="text-sm text-muted-foreground">Start exploring our flavors</p>
            </div>
            <Button
              onClick={() => setIsCartOpen(false)}
              className="bg-primary text-primary-foreground hover:bg-moss pebble-sm"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto py-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={productImages[item.id] || '/placeholder.svg'}
                    alt={item.name}
                    className="w-20 h-24 object-cover pebble-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-serif font-medium truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.flavor}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-muted rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-border rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-muted rounded-l-full"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted rounded-r-full"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-serif">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Shipping and taxes calculated at checkout
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-moss pebble-sm py-6 nav-link">
                Checkout
              </Button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
