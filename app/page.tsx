"use client";

import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import BrewTimeline from '@/components/BrewTimeline';
import ReviewsSection from '@/components/ReviewsSection';
import SocialWall from '@/components/SocialWall';


const Home = () => {
  return (
    <div className="grain-overlay min-h-screen">
    
      <main>
        <HeroSection />
        <ProductGrid />
        <BrewTimeline />
        <ReviewsSection />
        <SocialWall />
      </main>
 
    </div>
  );
};

export default Home;
