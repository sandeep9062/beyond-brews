import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartSheet from '@/components/CartSheet';
const Faq = () => {
  const faqs = [
    {
      question: "What makes Beyond Brews different from other herbal teas?",
      answer: "Beyond Brews offers a unique blend of ancient herbal wisdom and modern wellness innovation. Our formulations are carefully crafted using 100% organic, ethically sourced ingredients, and we prioritize sustainability in every step of our process. Each brew is designed to deliver specific wellness benefits while maintaining an exceptional taste profile.",
    },
    {
      question: "Are all your ingredients organic?",
      answer: "Yes, we are committed to using only 100% organic ingredients. We source our herbs, spices, and botanicals from certified organic farms around the world that share our commitment to sustainable and ethical practices.",
    },
    {
      question: "How do I brew the perfect cup of Beyond Brews tea?",
      answer: "For optimal flavor and benefits, we recommend using 1 teaspoon of tea per 8 ounces of water. Bring water to a boil, then let it cool for 1-2 minutes (to around 200°F/93°C) before pouring over the tea. Steep for 5-7 minutes, then strain and enjoy.",
    },
    {
      question: "Can I drink Beyond Brews teas if I have dietary restrictions?",
      answer: "All our teas are vegan, gluten-free, and free from artificial flavors, colors, and preservatives. However, if you have specific allergies or medical conditions, we recommend checking the ingredient list for each product and consulting with your healthcare provider.",
    },
    {
      question: "How should I store my Beyond Brews tea?",
      answer: "To maintain freshness and potency, store your tea in an airtight container away from light, heat, and moisture. We recommend storing it in a cool, dark place such as a pantry or cupboard.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we currently ship to most countries worldwide. Shipping times and costs vary depending on the destination. Please check our shipping policy for more information.",
    },
    {
      question: "What is your return policy?",
      answer: "We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of delivery for a full refund or exchange. Please see our returns policy for more details.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "You can cancel or modify your order within 1 hour of placing it. After that time, our processing system will have already begun preparing your order for shipment, and changes may not be possible. Please contact our customer service team for assistance.",
    },
    {
      question: "Do you offer wholesale or bulk ordering?",
      answer: "Yes, we offer wholesale pricing for bulk orders. Please contact our wholesale department for more information about minimum order quantities, pricing, and shipping options.",
    },
    {
      question: "How often do you release new products?",
      answer: "We are constantly exploring new herbal blends and wellness solutions. We typically release new products every 2-3 months, with seasonal blends available during special occasions.",
    },
  ];

  return (
   <>       <Navigation /><div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 py-20">


  
      <div className="container mx-auto py-12 px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Find answers to the most common questions about our products, ingredients, and wellness benefits.
          </p>
          <Separator className="mt-8 max-w-sm mx-auto" />
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border rounded-lg bg-card shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Support */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 text-center border-0 shadow-lg">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you can't find the answer to your question here, our customer support team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </Card>
        </div>

      </div>
      
    </div>

      <CartSheet />
        <Footer />  </>
  );
};

export default Faq;