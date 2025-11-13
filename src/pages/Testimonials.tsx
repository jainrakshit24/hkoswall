import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Quality products and honest service for over three generations. Our family trusts HK Oswal completely.",
    author: "R. Sharma",
    location: "Jaipur"
  },
  {
    quote: "The best place in Bapu Bazar for reliable hosiery. Fair prices and genuine products every time.",
    author: "M. Patel",
    location: "Jaipur"
  },
  {
    quote: "We've been wholesale customers for 20 years. Their consistency and quality never disappoint.",
    author: "S. Gupta",
    location: "Rajasthan"
  },
  {
    quote: "Personal service that feels like family. They remember your preferences and always help find what you need.",
    author: "A. Verma",
    location: "Jaipur"
  },
  {
    quote: "The go-to destination for quality garments in Bapu Bazar. Traditional values with reliable products.",
    author: "K. Singh",
    location: "Jaipur"
  },
  {
    quote: "My mother shopped here, now I do. That's the kind of trust HK Oswal has built over the years.",
    author: "P. Mehta",
    location: "Jaipur"
  }
];

const wholesaleTestimonials = [
  {
    quote: "Consistent quality and fair wholesale rates. A dependable partner for our retail operations.",
    author: "Wholesale Partner",
    location: "Rajasthan"
  },
  {
    quote: "Professional service and timely delivery. They understand the needs of wholesale buyers.",
    author: "Retail Business Owner",
    location: "Jaipur"
  }
];

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-6">
              What Customers Say
            </h1>
            <p className="text-lg text-muted-foreground">
              Trust, service, reliability, and consistent quality—in the words of those who know us best
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Testimonials */}
      <section className="bg-muted/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Wholesale Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building lasting relationships with businesses across Rajasthan
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {wholesaleTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-primary/20 shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
