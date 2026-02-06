"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, ChevronDown, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-medium tracking-tight"
          >
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
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop"
                    className="nav-link cursor-pointer hover:bg-muted"
                  >
                    All Flavors
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop?tag=energizing"
                    className="nav-link cursor-pointer hover:bg-muted"
                  >
                    Energizing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop?tag=calming"
                    className="nav-link cursor-pointer hover:bg-muted"
                  >
                    Calming
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop?tag=refreshing"
                    className="nav-link cursor-pointer hover:bg-muted"
                  >
                    Refreshing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop?tag=immunity"
                    className="nav-link cursor-pointer hover:bg-muted"
                  >
                    Immunity
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/story"
              className="nav-link hover:text-moss transition-colors"
            >
              Our Story
            </Link>
            <Link
              href="/process"
              className="nav-link hover:text-moss transition-colors"
            >
              Process
            </Link>

            <Link
              href="/journal"
              className="nav-link hover:text-moss transition-colors"
            >
              Journal
            </Link>
            <Link
              href="/faq"
              className="nav-link hover:text-moss transition-colors"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="nav-link hover:text-moss transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* User Account & Cart */}
          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className="hidden md:flex items-center gap-2 nav-link hover:text-moss transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>

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
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-6 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                href="/shop"
                className="nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Shop All
              </Link>
              <Link
                href="/story"
                className="nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/process"
                className="nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link>
              <Link
                href="/contact"
                className="nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/journal"
                className="nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Journal
              </Link>
              <Link
                href="/faq"
                className="nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/login"
                className="nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                href="/profile"
                className="nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;