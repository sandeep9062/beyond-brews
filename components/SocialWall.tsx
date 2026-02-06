import { Instagram } from 'lucide-react';

const socialImages = [
  { id: 1, alt: 'Kombucha lifestyle shot' },
  { id: 2, alt: 'Brewing process' },
  { id: 3, alt: 'Product flat lay' },
  { id: 4, alt: 'Nature ingredients' },
  { id: 5, alt: 'Community gathering' },
  { id: 6, alt: 'Morning ritual' },
];

const SocialWall = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Instagram className="w-5 h-5 text-moss" />
            <p className="nav-link text-moss">@beyondbrews</p>
          </div>
          <h2 className="headline-lg">
            Join the <em>Community</em>
          </h2>
          <p className="body-md text-muted-foreground">
            Share your BeyondBrews moments with #BeyondBrews
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialImages.map((image, index) => (
            <a
              key={image.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-muted pebble-sm overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {/* Placeholder pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-moss/20 to-sienna/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-muted-foreground text-center px-2">
                  {image.alt}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialWall;
