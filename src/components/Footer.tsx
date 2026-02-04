import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="font-serif text-2xl font-medium">
              BeyondBrews
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Craft kombucha for the modern wellness enthusiast. 
              Small-batch, organic, and bursting with life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sienna transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sienna transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sienna transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="nav-link text-primary-foreground/50">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-sienna transition-colors">All Flavors</Link></li>
              <li><Link to="/" className="text-sm hover:text-sienna transition-colors">Bundles</Link></li>
              <li><Link to="/" className="text-sm hover:text-sienna transition-colors">Subscriptions</Link></li>
              <li><Link to="/" className="text-sm hover:text-sienna transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="nav-link text-primary-foreground/50">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-sienna transition-colors">Our Story</Link></li>
              <li><Link to="/" className="text-sm hover:text-sienna transition-colors">The Process</Link></li>
              <li><Link to="/" className="text-sm hover:text-sienna transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="text-sm hover:text-sienna transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="nav-link text-primary-foreground/50">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/70">
              Join our newsletter for recipes, wellness tips, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 pebble-sm"
              />
              <Button className="bg-sienna hover:bg-sienna/90 text-primary-foreground pebble-sm">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2025 BeyondBrews. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
