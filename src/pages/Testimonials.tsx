import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Award } from "lucide-react";
// Import your CMAI certificate image here
import cmaiCertificate from "@/assets/cmai_c.png"; // Replace with your actual path

const testimonials = [
  {
    quote: "Quality products and honest service for over three generations. Our family trusts HK Oswal completely.",
    author: "R. Sharma",
    location: "Jaipur",
    rating: 5
  },
  {
    quote: "The best place in Bapu Bazar for reliable hosiery. Fair prices and genuine products every time.",
    author: "M. Patel",
    location: "Jaipur",
    rating: 4
  },
  {
    quote: "We've been wholesale customers for 20 years. Their consistency and quality never disappoint.",
    author: "S. Gupta",
    location: "Rajasthan",
    rating: 4.5
  },
  {
    quote: "Personal service that feels like family. They remember your preferences and always help find what you need.",
    author: "A. Verma",
    location: "Jaipur",
    rating: 4
  },
  {
    quote: "The go-to destination for quality garments in Bapu Bazar. Traditional values with reliable products.",
    author: "K. Singh",
    location: "Jaipur",
    rating: 5
  },
  {
    quote: "My mother shopped here now I do. That's the kind of trust HK Oswal has built over the years.",
    author: "P. Mehta",
    location: "Jaipur",
    rating: 5
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
              Trust service reliability and consistent quality—in the words of those who know us best
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
                    {testimonial.quote}
                  </p>
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CMAI Certificate */}
      <section className="bg-muted/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-serif font-bold">CMAI Certified</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proud member of the Clothing Manufacturers Association of India
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={cmaiCertificate} 
                  alt="CMAI Certificate - HK Oswal Hosiery Sales Depot" 
                  className="w-full h-auto object-contain"
                />
              </CardContent>
            </Card>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Recognized for maintaining the highest standards in quality and business practices
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}