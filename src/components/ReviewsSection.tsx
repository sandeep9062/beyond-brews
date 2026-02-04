import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'The Lavender Dreams is my new evening ritual. So calming and delicious!',
    product: 'Lavender Dreams',
  },
  {
    name: 'James L.',
    rating: 5,
    text: 'Finally, a kombucha that actually tastes amazing. The Golden Sunrise is incredible.',
    product: 'Golden Sunrise',
  },
  {
    name: 'Emma R.',
    rating: 5,
    text: 'Love that these are small batch and organic. You can taste the quality.',
    product: 'Forest Shield',
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="nav-link text-moss">Testimonials</p>
          <h2 className="headline-lg">
            What Our <em>Community</em> Says
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card pebble p-8 shadow-soft opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sienna text-sienna" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{review.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-serif text-sm">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
