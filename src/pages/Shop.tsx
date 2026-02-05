import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartSheet from '@/components/CartSheet';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 10]);
  const [sortBy, setSortBy] = useState('featured');

  // Handle query parameters
  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setSelectedTags([tagParam]);
    }
  }, [searchParams]);

  // Get unique tags from products
  const tags = Array.from(new Set(products.map(product => product.tag)));

  // Filter products based on selected tags and price range
  const filteredProducts = products.filter(product => {
    const matchesTag = selectedTags.length === 0 || selectedTags.includes(product.tag);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesTag && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Handle tag selection
  const handleTagChange = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    
    // Update URL parameters
    if (newTags.length > 0) {
      setSearchParams({ tag: newTags[0] });
    } else {
      setSearchParams({});
    }
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedTags([]);
    setPriceRange([0, 10]);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-cream pt-20">

       <Navigation />
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="headline-lg mb-4">
              Shop Our <em>Artisan Blends</em>
            </h1>
            <p className="body-md text-muted-foreground mb-8">
              Discover our collection of handcrafted herbal teas, carefully blended to nourish your body and soul.
              From energizing morning elixirs to calming evening brews.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card p-6 pebble-sm shadow-soft">
                <h3 className="font-serif text-lg font-medium mb-4">Filters</h3>
                
                {/* Tags Filter */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Flavor Profiles
                  </h4>
                  <div className="space-y-2">
                    {tags.map(tag => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox
                          id={tag}
                          checked={selectedTags.includes(tag)}
                          onCheckedChange={() => handleTagChange(tag)}
                        />
                        <Label htmlFor={tag} className="text-sm capitalize cursor-pointer">
                          {tag}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="space-y-4 pt-6 border-t">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Price Range
                  </h4>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[0, 10]}
                      max={15}
                      step={0.5}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0].toFixed(2)}</span>
                      <span>${priceRange[1].toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <Button
                  onClick={resetFilters}
                  variant="ghost"
                  className="w-full mt-6 text-sm"
                >
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3 space-y-8">
              {/* Sort and Results */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} found
                </p>
                <div className="flex items-center gap-2">
                  <Label htmlFor="sort" className="text-sm text-muted-foreground">
                    Sort by:
                  </Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger id="sort" className="w-40">
                      <SelectValue placeholder="Featured" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name">Name: A to Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-card p-8 pebble-sm shadow-soft">
                  <p className="text-lg font-medium mb-2">No products found</p>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters</p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      <Footer />
      <CartSheet />
    </div>
  );
};

export default Shop;