import { Card, CardContent } from "@/components/ui/card";
import { Users2 } from "lucide-react";
import vintageImage from "@/assets/vintage-heritage.jpg";
import interiorImage from "@/assets/interior-display.jpg";
// Founder images - Replace these with actual owner photos
import founder1 from "@/assets/founders/founder-1.jpg";
import founder2 from "@/assets/founders/founder-2.jpg";
import founder3 from "@/assets/founders/founder-3.jpg";
import founder4 from "@/assets/founders/founder-4.jpg";

export default function About() {
  const forefathers = [
    {
      name: "Late Shri Hanuman Prasad Oswal",
      role: "Founder & Visionary",
      contribution: "Established HK Oswal with the vision of bringing quality hosiery to Jaipur. His integrity and dedication laid the foundation for generations of trust in Bapu Bazar.",
      image: founder1, // Replace this image file with actual owner photo
      years: "1960s - 1980s"
    },
    {
      name: "Late Shri Kishan Lal Oswal",
      role: "Co-Founder & Pioneer",
      contribution: "Pioneered wholesale operations and built lasting relationships with suppliers across India. His business acumen helped expand our reach while maintaining quality standards.",
      image: founder2, // Replace this image file with actual owner photo
      years: "1965 - 1990s"
    },
    {
      name: "Late Shri Ram Kishan Oswal",
      role: "Legacy Builder",
      contribution: "Strengthened our presence in Bapu Bazar and introduced diverse product lines. His commitment to customer service set the standard we uphold today.",
      image: founder3, // Replace this image file with actual owner photo
      years: "1970s - 2000s"
    },
    {
      name: "Late Shri Gopal Lal Oswal",
      role: "Tradition Keeper",
      contribution: "Preserved family values while adapting to changing times. His wisdom in balancing tradition with progress ensured the business thrived across generations.",
      image: founder4, // Replace this image file with actual owner photo
      years: "1975 - 2010s"
    }
  ];

  const milestones = [
    {
      year: "1960s",
      title: "The Beginning",
      description: "Founded with a vision to provide quality hosiery and garments to the people of Jaipur.",
      details: "• Established first shop in Bapu Bazar\n• Built initial supplier network\n• Focused on pure cotton hosiery"
    },
    {
      year: "1980s",
      title: "Growing Trust",
      description: "Expanded our range and became a trusted name in Bapu Bazar for wholesale and retail.",
      details: "• Added ladies wear and kids sections\n• Expanded wholesale operations\n• Served 10,000+ customers annually"
    },
    {
      year: "2000s",
      title: "Next Generation",
      description: "Family values passed down, maintaining the same commitment to quality and service.",
      details: "• Third generation joined the business\n• Modernized inventory systems\n• Expanded seasonal collections"
    },
    {
      year: "Today",
      title: "Continuing Legacy",
      description: "Serving generations of customers with unwavering dedication to quality and trust.",
      details: "• 50,000+ satisfied customers\n• 4 generations of expertise\n• Trusted by families across Jaipur"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-6">
              Our History & Presence
            </h1>
            <p className="text-lg text-muted-foreground">
              HK Oswal Hosiery Sales Depot has grown through generations with a simple promise—quality, value, and lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Our Four Fathers */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Users2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4">Our Four Fathers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The visionary leaders who built HK Oswal Hosiery Sales Depot and shaped its legacy in Bapu Bazar
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {forefathers.map((founder, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Image Section - Main Focus */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-primary">Founder {index + 1}</span>
                  </div>
                </div>
                {/* Content Section */}
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-3">
                    <h3 className="text-xl font-serif font-bold mb-1">{founder.name}</h3>
                    <p className="text-sm font-semibold text-primary">{founder.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{founder.years}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{founder.contribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src={vintageImage}
                alt="Vintage photograph of HK Oswal Hosiery's early years"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">A Heritage of Trust</h2>
              <p className="text-muted-foreground">
                For generations, HK Oswal Hosiery Sales Depot has been synonymous with quality and reliability in Bapu Bazar. What started as a modest shop has grown into a cherished institution, built on the foundation of honest dealings and genuine care for our customers.
              </p>
              <p className="text-muted-foreground">
                Our commitment to quality has never wavered. From the earliest days, we've believed that every customer deserves products that last, service that's personal, and relationships that endure. This philosophy has been passed down through generations and remains at the heart of everything we do.
              </p>
              <p className="text-muted-foreground">
                Located in the vibrant Bapu Bazar, we've become part of the fabric of Jaipur itself—serving families, businesses, and individuals who return to us year after year, generation after generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones that shaped our legacy
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative overflow-hidden border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="text-primary font-serif font-bold text-5xl opacity-10 absolute -top-2 -right-2">
                    {index + 1}
                  </div>
                  <div className="relative">
                    <p className="text-sm font-semibold text-primary mb-2">{milestone.year}</p>
                    <h3 className="font-serif font-semibold text-lg mb-3">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{milestone.description}</p>
                    <div className="text-xs text-muted-foreground space-y-1 border-t pt-3 border-border/50">
                      {milestone.details.split('\n').map((detail, i) => (
                        <p key={i} className="leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Today & Beyond */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-serif font-bold">Today & Beyond</h2>
              <p className="text-muted-foreground">
                As we continue to serve the community that has supported us for generations, our values remain unchanged. We believe in building relationships that last, offering quality that speaks for itself, and maintaining the personal touch that has always defined us.
              </p>
              <p className="text-muted-foreground">
                Whether you're a long-time customer or visiting us for the first time, you'll find the same warmth, expertise, and dedication that has made HK Oswal Hosiery Sales Depot a trusted name in Bapu Bazar.
              </p>
              <p className="text-muted-foreground">
                Our doors remain open to wholesale and retail customers alike, continuing a tradition of service that spans generations. We look forward to welcoming you and being part of your story, just as you've been part of ours.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={interiorImage}
                alt="Interior of HK Oswal Hosiery showing organized displays"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
