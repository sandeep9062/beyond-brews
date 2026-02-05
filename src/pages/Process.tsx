import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartSheet from '@/components/CartSheet';
import { Leaf, FlaskConical, Clock, Sparkles, Thermometer, Droplets, Sun, Moon, Heart } from 'lucide-react';

const processSteps = [
  {
    icon: Leaf,
    title: 'Sourcing Organic Tea',
    description: 'We source only the finest organic tea leaves from sustainable farms around the world. Each tea variety is carefully selected for its unique flavor profile and health benefits.',
    details: [
      'Certified organic tea leaves',
      'Sustainable farming practices',
      'Direct trade partnerships',
      'Seasonal harvesting'
    ],
    color: 'text-moss',
    bgColor: 'bg-moss/10',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: FlaskConical,
    title: 'The SCOBY Cultivation',
    description: 'Our symbiotic culture of bacteria and yeast has been nurtured for over a decade. Each batch starts with a small portion of our original SCOBY to maintain consistency.',
    details: [
      '10+ year old SCOBY lineage',
      'Controlled cultivation environment',
      'Regular testing for purity',
      'Organic sugar feeding'
    ],
    color: 'text-sienna',
    bgColor: 'bg-sienna/10',
    image: 'https://images.unsplash.com/photo-1600096969328-3a0e87a88774?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Thermometer,
    title: 'Precision Brewing',
    description: 'The tea is brewed at specific temperatures to extract the optimal flavors and nutrients. We use filtered water and precise timing to ensure consistency.',
    details: [
      'Temperature controlled brewing',
      'Filtered spring water',
      'Exact timing for each tea type',
      'Batch-specific brewing notes'
    ],
    color: 'text-amber-600',
    bgColor: 'bg-amber-500/10',
    image: 'https://images.unsplash.com/photo-1601591567053-4eead57c7197?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Droplets,
    title: 'Sweetening & Flavoring',
    description: 'We add organic cane sugar and natural flavors to the brewed tea. Our flavorings are derived from real fruits, herbs, and spices.',
    details: [
      'Organic cane sugar',
      '100% natural flavors',
      'No artificial sweeteners',
      'Fresh, seasonal ingredients'
    ],
    color: 'text-sky-600',
    bgColor: 'bg-sky-500/10',
    image: 'https://images.unsplash.com/photo-1599208441222-a8488d258e17?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Clock,
    title: 'Fermentation Process',
    description: '14-21 days of patient fermentation to develop complex flavors and living probiotics. Each batch is monitored daily for optimal conditions.',
    details: [
      '14-21 day fermentation cycle',
      'Temperature and pH monitoring',
      'Daily taste testing',
      'Natural carbonation development'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/10',
    image: 'https://images.unsplash.com/photo-1604405832215-946f26a871f9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Sun,
    title: 'First Fermentation',
    description: 'The initial fermentation phase where the SCOBY consumes the sugar and produces alcohol and acetic acid. This creates the base kombucha.',
    details: [
      'Aerobic fermentation',
      'Sugar conversion',
      'Alcohol and acetic acid production',
      'Probiotic development'
    ],
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Moon,
    title: 'Second Fermentation',
    description: 'The secondary fermentation phase where additional flavors are added and carbonation is developed. This takes place in sealed bottles.',
    details: [
      'Anaerobic fermentation',
      'Flavor infusion',
      'Carbonation development',
      'Bottle conditioning'
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-500/10',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Sparkles,
    title: 'Quality Control',
    description: 'Each batch undergoes rigorous quality control testing to ensure consistency, safety, and flavor. We test for pH, sugar content, and microbial balance.',
    details: [
      'pH testing',
      'Sugar content analysis',
      'Microbial balance testing',
      'Sensory evaluation'
    ],
    color: 'text-pink-600',
    bgColor: 'bg-pink-500/10',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Heart,
    title: 'Bottling & Packaging',
    description: 'Each bottle is hand-crafted in small batches to ensure quality and consistency. We use glass bottles to preserve the flavor and carbonation.',
    details: [
      'Small batch bottling',
      'Glass bottle packaging',
      'Hand-labeling',
      'Batch coding'
    ],
    color: 'text-rose-600',
    bgColor: 'bg-rose-500/10',
    image: 'https://images.unsplash.com/photo-1600271886527-6fb886090703?q=80&w=2070&auto=format&fit=crop'
  }
];

const ProcessPage = () => {
  return (
    <div className="grain-overlay min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <p className="nav-link text-moss mb-4">Our Craft</p>
              <h1 className="headline-xl mb-6">
                The <em>Art</em> of Brewing
              </h1>
              <p className="body-lg text-muted-foreground mb-8">
                Every bottle of BeyondBrews follows a sacred process—a careful dance of nature, time, and craft.
                From sourcing the finest organic tea to the final bottling, we ensure every step preserves the
                integrity and quality of our kombucha.
              </p>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-24">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`flex flex-col gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Image */}
                      <div className="flex-1">
                        <div className="relative overflow-hidden rounded-xl shadow-soft">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`}></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white font-medium text-sm">{step.title}</p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="pebble-sm bg-card shadow-soft p-8">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${step.bgColor}`}>
                            <Icon className={`w-6 h-6 ${step.color}`} />
                          </div>
                          <h3 className="font-serif text-2xl font-medium mb-4">{step.title}</h3>
                          <p className="text-muted-foreground mb-6">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${step.color}`}></span>
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="nav-link text-moss mb-4">Our Values</p>
              <h2 className="headline-lg mb-6">
                What Makes Us <em>Different</em>
              </h2>
              <p className="body-md text-muted-foreground max-w-2xl mx-auto">
                At BeyondBrews, we're committed to sustainability, quality, and transparency. Every decision we make
                reflects our dedication to producing the best kombucha while caring for our planet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="pebble-sm bg-card shadow-soft p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-moss/10 mb-6">
                  <Leaf className="w-8 h-8 text-moss" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Organic & Sustainable</h3>
                <p className="text-muted-foreground">
                  We source only organic, sustainably grown ingredients from trusted farmers who share our values.
                </p>
              </div>

              <div className="pebble-sm bg-card shadow-soft p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sienna/10 mb-6">
                  <Sparkles className="w-8 h-8 text-sienna" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Handcrafted Quality</h3>
                <p className="text-muted-foreground">
                  Each batch is carefully brewed, monitored, and bottled by hand to ensure the highest quality.
                </p>
              </div>

              <div className="pebble-sm bg-card shadow-soft p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 mb-6">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Community Focused</h3>
                <p className="text-muted-foreground">
                  We believe in supporting local communities and giving back through sustainable business practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="headline-lg mb-6">
                Experience the <em>Difference</em>
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                Try our handcrafted kombucha and taste the difference that quality, care, and tradition make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="px-8 py-3 bg-moss text-white rounded-full hover:bg-moss/90 transition-colors font-medium">
                  Shop Our Products
                </a>
                <a href="/" className="px-8 py-3 border border-moss text-moss rounded-full hover:bg-moss/10 transition-colors font-medium">
                  Learn More
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

export default ProcessPage;