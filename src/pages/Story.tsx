import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartSheet from '@/components/CartSheet';
import { Leaf, Heart, Sparkles, Globe, Star, Award, Users, BookOpen, Coffee, Sun } from 'lucide-react';

const StoryPage = () => {
  return (
    <div className="grain-overlay min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <p className="nav-link text-moss mb-4">Our Journey</p>
              <h1 className="headline-xl mb-6">
                Brewing with <em>Passion</em>, Rooted in <em>Tradition</em>
              </h1>
              <p className="body-lg text-muted-foreground mb-8">
                BeyondBrews began as a small home fermentation experiment with a simple mission: to create
                the most delicious, healthy, and sustainable kombucha possible. What started in a tiny
                kitchen has grown into a community of kombucha lovers dedicated to craft and quality.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Image */}
                <div className="md:w-1/2">
                  <div className="relative overflow-hidden rounded-xl shadow-soft">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
                      alt="Founder of BeyondBrews"
                      className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-medium">Meet Our Founder</p>
                      <p className="text-white/80 text-sm">Emma Chen, Kombucha Enthusiast</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="pebble-sm bg-card shadow-soft p-8">
                    <h2 className="font-serif text-2xl font-medium mb-6">
                      From Kitchen Experiment to <em>Community Movement</em>
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      It all started in 2018 when Emma Chen, a wellness coach and home brewer,
                      discovered the transformative power of kombucha. Frustrated with the lack of
                      high-quality, organic kombucha options in her local area, she began experimenting
                      with different tea blends, fermentation techniques, and flavor profiles.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      What started as a hobby quickly turned into a passion project. Friends and family
                      raved about her kombucha, and soon Emma was delivering bottles to local farmers
                      markets and health food stores. The positive response inspired her to turn her
                      passion into a business.
                    </p>
                    <p className="text-muted-foreground mb-8">
                      Today, BeyondBrews is a thriving community-focused business dedicated to producing
                      the finest kombucha while staying true to our roots of sustainability and
                      craftsmanship.
                    </p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-sienna" />
                        <span className="font-medium">Passion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-moss" />
                        <span className="font-medium">Sustainability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-amber-600" />
                        <span className="font-medium">Community</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="nav-link text-moss mb-4">Our Commitment</p>
              <h2 className="headline-lg mb-6">
                The <em>BeyondBrews</em> Philosophy
              </h2>
              <p className="body-md text-muted-foreground max-w-2xl mx-auto">
                Every decision we make is guided by our core values. We believe in creating kombucha that
                not only tastes amazing but also contributes to a healthier planet and community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="pebble-sm bg-card shadow-soft p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-moss/10 mb-6">
                  <Leaf className="w-8 h-8 text-moss" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Organic Ingredients</h3>
                <p className="text-muted-foreground">
                  We source only the finest organic tea leaves, herbs, and fruits from sustainable farms
                  around the world.
                </p>
              </div>

              <div className="pebble-sm bg-card shadow-soft p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sienna/10 mb-6">
                  <Heart className="w-8 h-8 text-sienna" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Handcrafted Quality</h3>
                <p className="text-muted-foreground">
                  Each batch is carefully brewed, monitored, and bottled by hand to ensure the highest
                  quality and consistency.
                </p>
              </div>

              <div className="pebble-sm bg-card shadow-soft p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 mb-6">
                  <Globe className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Sustainable Practices</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental impact through sustainable packaging,
                  waste reduction, and eco-friendly operations.
                </p>
              </div>

              <div className="pebble-sm bg-card shadow-soft p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-500/10 mb-6">
                  <Users className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Community Focus</h3>
                <p className="text-muted-foreground">
                  We believe in giving back to our community through local partnerships, sustainability
                  initiatives, and educational programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="nav-link text-moss mb-4">Our Journey</p>
              <h2 className="headline-lg mb-6">
                From <em>Tiny Kitchen</em> to <em>Community Favorite</em>
              </h2>
              <p className="body-md text-muted-foreground max-w-2xl mx-auto">
                Our story is one of growth, learning, and community. Here are some of the milestones that
                have shaped who we are today.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    year: "2018",
                    title: "The Beginning",
                    description: "Emma Chen starts fermenting kombucha in her kitchen using a small SCOBY culture she received from a friend.",
                    icon: Coffee
                  },
                  {
                    year: "2019",
                    title: "Local Markets",
                    description: "BeyondBrews makes its public debut at local farmers markets in Portland, quickly gaining a loyal following.",
                    icon: BookOpen
                  },
                  {
                    year: "2020",
                    title: "First Brewery",
                    description: "We open our first small-batch brewery in a historic warehouse, allowing us to scale production while maintaining quality.",
                    icon: Sparkles
                  },
                  {
                    year: "2021",
                    title: "Expansion",
                    description: "BeyondBrews products are now available in over 100 stores across the Pacific Northwest.",
                    icon: Globe
                  },
                  {
                    year: "2022",
                    title: "Awards & Recognition",
                    description: "Our signature flavors win multiple awards at national kombucha competitions, solidifying our reputation for quality.",
                    icon: Award
                  },
                  {
                    year: "2023",
                    title: "Sustainability Initiatives",
                    description: "We launch our zero-waste program and introduce compostable packaging, reducing our environmental impact.",
                    icon: Leaf
                  },
                  {
                    year: "2024",
                    title: "Community Growth",
                    description: "BeyondBrews becomes a hub for wellness workshops, fermentation classes, and community events.",
                    icon: Users
                  }
                ].map((milestone, index) => {
                  const Icon = milestone.icon;

                  return (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-moss" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-serif text-xl font-medium text-moss">{milestone.year}</span>
                          <h3 className="font-serif text-xl font-medium">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="headline-lg mb-6">
                Join Our <em>Fermentation Journey</em>
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                Experience the BeyondBrews difference for yourself. Whether you're a seasoned kombucha
                enthusiast or trying it for the first time, we invite you to taste our handcrafted brews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="px-8 py-3 bg-moss text-white rounded-full hover:bg-moss/90 transition-colors font-medium">
                  Shop Our Products
                </a>
                <a href="/" className="px-8 py-3 border border-moss text-moss rounded-full hover:bg-moss/10 transition-colors font-medium">
                  Visit Our Taproom
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSheet />
    </div>
  );
};

export default StoryPage;