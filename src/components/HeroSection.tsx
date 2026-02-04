import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBottle from '@/assets/hero-bottle.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <p className="nav-link text-moss opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Craft Kombucha
              </p>
              <h1 className="headline-xl text-balance opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Nature,<br />
                <em className="text-moss">Fermented.</em>
              </h1>
            </div>
            
            <p className="body-lg text-muted-foreground max-w-md opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Small-batch kombucha crafted with organic teas and botanicals. 
              Every bottle is a celebration of ancient tradition and modern wellness.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 pebble-sm px-8 nav-link"
              >
                Explore Flavors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground pebble-sm px-8 nav-link"
              >
                Our Story
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              {/* Background shape */}
              <div className="absolute inset-4 bg-cream pebble-lg -z-10" />
              
              {/* Main image */}
              <img
                src={heroBottle}
                alt="BeyondBrews Kombucha Bottle"
                className="w-full max-w-md mx-auto pebble-lg object-cover animate-float"
              />

              {/* Floating badge */}
              <div className="absolute bottom-8 -left-4 md:left-4 bg-card pebble shadow-soft px-6 py-4">
                <p className="nav-link text-moss mb-1">100% Organic</p>
                <p className="font-serif text-lg">Living Probiotics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
