import { products } from '@/data/products';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="nav-link text-moss">Our Collection</p>
          <h2 className="headline-lg">
            Discover Your <em>Flavor</em>
          </h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Six unique blends, each crafted to nourish body and soul. 
            From energizing morning elixirs to calming evening brews.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {JSON.parse(JSON.stringify(products)).map((product: any, index: number) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;