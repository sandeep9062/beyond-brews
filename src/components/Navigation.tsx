import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-medium tracking-tight">
            BeyondBrews
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="nav-link flex items-center gap-1 hover:text-moss transition-colors">
                  Shop <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border pebble-sm shadow-elevated">
                <DropdownMenuItem className="nav-link cursor-pointer hover:bg-muted">
                  All Flavors
                </DropdownMenuItem>
                <DropdownMenuItem className="nav-link cursor-pointer hover:bg-muted">
                  Energizing
                </DropdownMenuItem>
                <DropdownMenuItem className="nav-link cursor-pointer hover:bg-muted">
                  Calming
                </DropdownMenuItem>
                <DropdownMenuItem className="nav-link cursor-pointer hover:bg-muted">
                  Bundles
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/" className="nav-link hover:text-moss transition-colors">
              Our Story
            </Link>
            <Link to="/" className="nav-link hover:text-moss transition-colors">
              Process
            </Link>
            <Link to="/" className="nav-link hover:text-moss transition-colors">
              Contact
            </Link>
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-muted rounded-full transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-sienna text-primary-foreground text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-6 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="nav-link py-2" onClick={() => setIsOpen(false)}>
                Shop All
              </Link>
              <Link to="/" className="nav-link py-2" onClick={() => setIsOpen(false)}>
                Our Story
              </Link>
              <Link to="/" className="nav-link py-2" onClick={() => setIsOpen(false)}>
                Process
              </Link>
              <Link to="/" className="nav-link py-2" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
