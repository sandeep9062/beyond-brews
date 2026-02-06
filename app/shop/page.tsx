import { Suspense } from "react";
import ShopContent from "./ShopContent";

const Shop = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream pt-20">
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="headline-lg mb-4">
                  Shop Our <em>Artisan Blends</em>
                </h1>
                <p className="body-md text-muted-foreground mb-8">
                  Loading products...
                </p>
              </div>
            </div>
          </section>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
};

export default Shop;
