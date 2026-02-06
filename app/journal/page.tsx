"use client";

import { Calendar, Clock, User, Tag, Leaf, Heart, Sparkles, Coffee, BookOpen, Sun } from 'lucide-react';

const JournalPage = () => {
  return (
    <div className="grain-overlay min-h-screen">

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <p className="nav-link text-moss mb-4">Our Stories</p>
              <h1 className="headline-xl mb-6">
                The <em>BeyondBrews</em> Journal
              </h1>
              <p className="body-lg text-muted-foreground mb-8">
                Explore stories about our brewing process, ingredient sourcing, community events, and
                the amazing world of kombucha. From tips and tricks to behind-the-scenes insights, our
                journal is your gateway to the BeyondBrews experience.
              </p>
            </div>
          </div>
        </section>

        {/* Journal Categories */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button className="px-6 py-2 bg-moss text-white rounded-full hover:bg-moss/90 transition-colors font-medium">
                All Posts
              </button>
              <button className="px-6 py-2 border border-moss text-moss rounded-full hover:bg-moss/10 transition-colors font-medium">
                Brewing Tips
              </button>
              <button className="px-6 py-2 border border-moss text-moss rounded-full hover:bg-moss/10 transition-colors font-medium">
                Ingredients
              </button>
              <button className="px-6 py-2 border border-moss text-moss rounded-full hover:bg-moss/10 transition-colors font-medium">
                Community
              </button>
              <button className="px-6 py-2 border border-moss text-moss rounded-full hover:bg-moss/10 transition-colors font-medium">
                Sustainability
              </button>
              <button className="px-6 py-2 border border-moss text-moss rounded-full hover:bg-moss/10 transition-colors font-medium">
                Events
              </button>
            </div>

            {/* Journal Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Art of Kombucha Fermentation",
                  excerpt: "Discover the delicate balance of time, temperature, and ingredients that goes into creating the perfect batch of BeyondBrews kombucha.",
                  category: "Brewing Tips",
                  date: "November 15, 2024",
                  readTime: "5 min read",
                  author: "Emma Chen",
                  image: "https://images.unsplash.com/photo-1549488344-126a7977724d?q=80&w=2070&auto=format&fit=crop",
                  icon: Coffee
                },
                {
                  title: "Sourcing the Finest Organic Ingredients",
                  excerpt: "We take you on a journey to the farms where we source our premium organic tea leaves, herbs, and fruits.",
                  category: "Ingredients",
                  date: "November 10, 2024",
                  readTime: "4 min read",
                  author: "Sarah Johnson",
                  image: "https://images.unsplash.com/photo-1495521821755-451d773a178f?q=80&w=2070&auto=format&fit=crop",
                  icon: Leaf
                },
                {
                  title: "Our Zero-Waste Initiatives",
                  excerpt: "Learn how BeyondBrews is reducing our environmental impact through sustainable packaging and waste reduction programs.",
                  category: "Sustainability",
                  date: "November 5, 2024",
                  readTime: "6 min read",
                  author: "Michael Chen",
                  image: "https://images.unsplash.com/photo-1526304640151-b55f76806d4a?q=80&w=2070&auto=format&fit=crop",
                  icon: Sparkles
                },
                {
                  title: "Kombucha and Wellness: A Perfect Pair",
                  excerpt: "Explore the health benefits of kombucha and how it can be incorporated into a balanced wellness routine.",
                  category: "Community",
                  date: "October 30, 2024",
                  readTime: "7 min read",
                  author: "Dr. Emily Rodriguez",
                  image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
                  icon: Heart
                },
                {
                  title: "Holiday Brewing Workshop Recap",
                  excerpt: "A look back at our recent holiday brewing workshop where participants learned to make their own kombucha at home.",
                  category: "Events",
                  date: "October 25, 2024",
                  readTime: "3 min read",
                  author: "Lisa Martinez",
                  image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop",
                  icon: BookOpen
                },
                {
                  title: "New Flavor Release: Winter Spice",
                  excerpt: "Introducing our newest seasonal flavor, Winter Spice, featuring warm spices and organic citrus.",
                  category: "Brewing Tips",
                  date: "October 20, 2024",
                  readTime: "4 min read",
                  author: "Emma Chen",
                  image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=2070&auto=format&fit=crop",
                  icon: Sun
                }
              ].map((post, index) => {
                const Icon = post.icon;

                return (
                  <article key={index} className="pebble-sm bg-card shadow-soft overflow-hidden transition-transform duration-300 hover:translate-y-[-4px]">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-moss text-white text-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h2 className="font-serif text-xl font-medium mb-3">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <a href="#" className="text-moss font-medium hover:underline">
                          Read More
                        </a>
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-moss" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="headline-lg mb-6">
                Stay Connected with <em>BeyondBrews</em>
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                Subscribe to our newsletter to receive the latest journal posts, brewing tips, and
                exclusive offers delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-moss"
                />
                <button className="px-8 py-3 bg-moss text-white rounded-full hover:bg-moss/90 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="headline-lg mb-6">
                Share Your <em>BeyondBrews</em> Story
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                We love hearing from our community! Have a story about how BeyondBrews has touched your
                life? Share it with us and become part of our journal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-3 bg-moss text-white rounded-full hover:bg-moss/90 transition-colors font-medium">
                  Submit Your Story
                </a>
                <a href="/" className="px-8 py-3 border border-moss text-moss rounded-full hover:bg-moss/10 transition-colors font-medium">
                  Explore Products
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
   
    </div>
  );
};

export default JournalPage;