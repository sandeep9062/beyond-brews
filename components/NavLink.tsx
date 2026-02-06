"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
}

const NavLink = ({ href, children, className, activeClassName = "text-moss", ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "font-serif text-base transition-colors duration-200 relative px-1",
        isActive ? activeClassName : "text-foreground hover:text-moss",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;