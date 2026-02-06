import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CartSheet from "@/components/CartSheet";
export const metadata: Metadata = {
  title: "Beyond Brews",
  description: "Explore the world of premium brewed teas and coffees",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          {children}

          <CartSheet />
          <Footer />
          <WhatsAppWidget />
        </Providers>
      </body>
    </html>
  );
}
