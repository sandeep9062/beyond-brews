import { Plus } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const productImages: Record<string, string> = {
  '1': '/product-golden-sunrise.jpg',
  '2': '/product-lavender-dreams.jpg',
  '3': '/product-ocean-breeze.jpg',
  '4': '/product-forest-shield.jpg',
  '5': '/product-rose-garden.jpg',
  '6': '/product-citrus-burst.jpg',
};

const tagStyles: Record<string, string> = {
  energizing: 'tag-energizing',
  calming: 'tag-calming',
  refreshing: 'tag-refreshing',
  immunity: 'tag-immunity',
};

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();
  const isEven = index % 2 === 0;

  return (
    <div 
      className="group relative opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Image with z-index layering */}
      <div className={`relative ${isEven ? '-mb-12' : '-mb-8'}`}>
        <div className="overflow-hidden pebble">
          <Image
            src={productImages[product.id] || '/placeholder.svg'}
            alt={product.name}
            width={400}
            height={500}
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {/* Tag */}
        <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium tracking-wider uppercase border pebble-sm ${tagStyles[product.tag]}`}>
          {product.tag}
        </span>
      </div>

      {/* Text box overlapping image */}
      <div className="relative z-10 mx-4 bg-card pebble-sm shadow-soft p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-serif text-xl font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.flavor}</p>
          </div>
          <span className="font-serif text-lg">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        <Button
          onClick={() => addToCart(product)}
          className="w-full bg-primary text-primary-foreground hover:bg-moss pebble-sm nav-link"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;