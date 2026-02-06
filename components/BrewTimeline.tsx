import { useEffect, useRef, useState } from 'react';
import { Leaf, FlaskConical, Clock, Sparkles } from 'lucide-react';

const timelineSteps = [
  {
    icon: Leaf,
    title: 'Organic Tea',
    description: 'We source only the finest organic tea leaves from sustainable farms around the world.',
    color: 'text-moss',
    bgColor: 'bg-moss/10',
  },
  {
    icon: FlaskConical,
    title: 'The SCOBY',
    description: 'Our symbiotic culture of bacteria and yeast has been nurtured for over a decade.',
    color: 'text-sienna',
    bgColor: 'bg-sienna/10',
  },
  {
    icon: Clock,
    title: 'Slow Fermentation',
    description: '14-21 days of patient fermentation to develop complex flavors and living probiotics.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: Sparkles,
    title: 'Small Batch',
    description: 'Each bottle is hand-crafted in small batches to ensure quality and consistency.',
    color: 'text-sky-600',
    bgColor: 'bg-sky-500/10',
  },
];

const BrewTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setActiveIndex((prev) => Math.max(prev, index));
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px' }
    );

    const items = sectionRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="nav-link text-moss">The Journey</p>
          <h2 className="headline-lg">
            From Leaf to <em>Life</em>
          </h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Every bottle of BeyondBrews follows a sacred process—a careful dance of nature, time, and craft.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <div 
              className="w-full bg-moss transition-all duration-1000 ease-out"
              style={{ height: `${((activeIndex + 1) / timelineSteps.length) * 100}%` }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeIndex;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`timeline-item relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive ? step.bgColor : 'bg-muted'
                    } ${isActive ? 'scale-100' : 'scale-90 opacity-50'}`}
                  >
                    <Icon className={`w-6 h-6 transition-colors duration-500 ${isActive ? step.color : 'text-muted-foreground'}`} />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pebble-sm bg-card shadow-soft p-6 transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    } ${isEven ? 'md:text-right md:mr-8' : 'md:text-left md:ml-8'}`}
                  >
                    <h3 className="font-serif text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrewTimeline;
