import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, History, MapPin, Shield, Users, Heart, Package, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AnimatedStats from "@/components/AnimatedStats";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroImage from "@/assets/hero-storefront.jpg";
import interiorImage from "@/assets/interior-display.jpg";
import productImage from "@/assets/product-detail.jpg";
import vintageImage from "@/assets/vintage-heritage.jpg";
import streetImage from "@/assets/bapu-bazar-street.jpg";
import ladiesWearImage from "@/assets/ladies-wear.jpg";
import temphome from "@/assets/temp_home.jpg";

export default function Home() {
  const highlightsAnim = useScrollAnimation(0.2);
  const offeringsAnim = useScrollAnimation(0.2);
  const galleryAnim = useScrollAnimation(0.2);
  const whyChooseAnim = useScrollAnimation(0.2);
  const testimonialsAnim = useScrollAnimation(0.2);
  const ctaAnim = useScrollAnimation(0.2);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Jaipur's Premium Store for Readymade Garments & Woolens
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since July 1957, H.K. Oswal has proudly stood as Jaipur's leading destination for premium ready made garments and fine woolen wear. Built on a foundation of family values, skilled craftsmanship, and genuine care, our tradition spans over 68 years and multiple generations. We've built lasting relationships with more than a million families, earning trust through unwavering commitment and timeless quality.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2.5 rounded-full border border-primary/20">
                  <span className="font-bold text-primary">65+ Years</span>
                  <span className="text-muted-foreground">of Excellence</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2.5 rounded-full border border-primary/20">
                  <span className="font-bold text-primary">4 Generations</span>
                  <span className="text-muted-foreground">of Expertise</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2.5 rounded-full border border-primary/20">
                  <span className="font-bold text-primary">10,00,000+</span>
                  <span className="text-muted-foreground">Happy Customers</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/about" onClick={handleLinkClick}>
                    Discover Our Legacy
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/visit-us" onClick={handleLinkClick}>Visit Our Store</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={temphome}
                alt="HK Oswal Hosiery storefront in Bapu Bazar, Jaipur"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <AnimatedStats 
        stats={[
          { value: 65, suffix: "+", label: "Years in Bapu Bazar" },
          { value: 4, label: "Generations of Expertise" },
          { value: 10, suffix: "Lakh+", label: "Happy Customers" },
          { value: 100, suffix: "%", label: "Quality Promise" },
        ]}
      />

      {/* Highlights */}
      <section 
        ref={highlightsAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 lg:py-24 transition-all duration-1000 ${
          highlightsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <History className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-serif font-semibold">Our Story</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Step inside the legend. Meet the minds, the moves, and the legacy behind Jaipur's most iconic garments and woolen destination.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link to="/about" onClick={handleLinkClick}>
                    Read Our History <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-serif font-semibold">Our Presence</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Located in the heart of Jaipur, we've been serving the community for generations. Visit us to experience the warmth of personal service and quality products that have made us a trusted name.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link to="/visit-us" onClick={handleLinkClick}>
                    Find Our Store <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offerings Strip */}
      <section 
        ref={offeringsAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-muted/50 py-12 lg:py-16 transition-all duration-1000 ${
          offeringsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A focused range curated for everyday comfort and dependable wear
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Hosiery", desc: "Premium quality socks and innerwear" },
              { title: "Ladies Wear", desc: "Comfortable bottoms and everyday essentials" },
              { title: "Kids Readymade", desc: "Durable clothing for children" },
              { title: "Seasonal Essentials", desc: "Winterwear and seasonal collections" },
            ].map((offering) => (
              <Card key={offering.title} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-lg mb-2">{offering.title}</h3>
                  <p className="text-sm text-muted-foreground">{offering.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link to="/offerings" onClick={handleLinkClick}>View All Offerings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section 
        ref={galleryAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 lg:py-24 transition-all duration-1000 ${
          galleryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Gallery Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our store, products, and the vibrant atmosphere of Jaipur
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {[
                { src: heroImage, caption: "Storefront – Bapu Bazar, Jaipur" },
                { src: interiorImage, caption: "Interior display of quality products" },
                { src: productImage, caption: "Premium hosiery and garment details" },
                { src: streetImage, caption: "Our location in vibrant Bapu Bazar" },
                { src: ladiesWearImage, caption: "Ladies wear section" },
                { src: vintageImage, caption: "Heritage - Our early years" },
              ].map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Link to="/gallery" onClick={handleLinkClick} className="block group">
                      <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all">
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.caption}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-sm font-medium">{image.caption}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/gallery" onClick={handleLinkClick}>
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        ref={whyChooseAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-muted/50 py-16 lg:py-24 transition-all duration-1000 ${
          whyChooseAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Choose HK Oswal</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Generations of trust, quality, and service in the heart of Jaipur
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: (
                  <>
                    Biggest Shop in <br />
                    Heritage City
                  </>
                ),
                desc: "Established in 1957, Largest and most trusted Woolen and garments store.",
              },
              {
                icon: Users,
                title: "Generational Expertise",
                desc: "Decades of proven knowledge and inheritance of textile excellence across four generations.",
              },
              {
                icon: Heart,
                title: "Personal Service",
                desc: "We treat every customer like family with warm, personalized attention",
              },
              {
                icon: Package,
                title: "Curated Selection",
                desc: "Handpicked brands and exclusive styles, curated for today's fashionable families seeking something special.",
              },
            ].map((feature, idx) => (
              <Card key={typeof feature.title === 'string' ? feature.title : idx} className="border-none shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section 
        ref={testimonialsAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 lg:py-24 transition-all duration-1000 ${
          testimonialsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by families across Jaipur for generations
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                text: "Been shopping here for 20 years. The quality is unmatched and the family that runs it treats you like their own.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                text: "Best place in Bapu Bazar for ladies wear and hosiery. Fair prices and genuine products.",
                rating: 5,
              },
              {
                name: "Amit Agarwal",
                text: "My go-to store for all my family's clothing needs. Never disappointed with the quality.",
                rating: 5,
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link to="/testimonials" onClick={handleLinkClick}>Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={ctaAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 py-16 lg:py-20 transition-all duration-1000 ${
          ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Experience the Legacy
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit us at our Store and discover why families have trusted us for generations. 
            From hosiery to garments, we're here to serve you with quality and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/visit-us" onClick={handleLinkClick}>
                Visit Our Store
                <MapPin className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/offerings" onClick={handleLinkClick}>Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}