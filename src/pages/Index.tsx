import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import BrewTimeline from '@/components/BrewTimeline';
import ReviewsSection from '@/components/ReviewsSection';
import SocialWall from '@/components/SocialWall';
import Footer from '@/components/Footer';
import CartSheet from '@/components/CartSheet';

const Index = () => {
  return (
    <div className="grain-overlay min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProductGrid />
        <BrewTimeline />
        <ReviewsSection />
        <SocialWall />
      </main>
      <Footer />
      <CartSheet />
    </div>
  );
};

export default Index;
