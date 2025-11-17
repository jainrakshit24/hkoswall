import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Sparkles, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import product images
import mensSocks1 from "@/assets/products/mens-socks-1.jpg";
import mensSocks2 from "@/assets/products/mens-socks-2.jpg";
import mensSocks3 from "@/assets/products/mens-socks-3.jpg";
import leggings1 from "@/assets/products/leggings-1.jpg";
import leggings2 from "@/assets/products/leggings-2.jpg";
import leggings3 from "@/assets/products/leggings-3.jpg";
import kidsWear1 from "@/assets/products/kids-wear-1.jpg";
import kidsWear2 from "@/assets/products/kids-wear-2.jpg";
import kidsWear3 from "@/assets/products/kids-wear-3.jpg";
import winter1 from "@/assets/products/winter-1.jpg";
import winter2 from "@/assets/products/winter-2.jpg";
import winter3 from "@/assets/products/winter-3.jpg";
import hosiery1 from "@/assets/products/hosiery-1.jpg";
import hosiery2 from "@/assets/products/hosiery-2.jpg";
import hosiery3 from "@/assets/products/hosiery-3.jpg";
import bottoms1 from "@/assets/products/bottoms-1.jpg";
import bottoms2 from "@/assets/products/bottoms-2.jpg";
import bottoms3 from "@/assets/products/bottoms-3.jpg";

export default function Offerings() {

  const categories = [
    {
      title: "Premium Hosiery",
      tagline: "Comfort that lasts through generations",
      description: "Premium quality socks, innerwear, and essential hosiery items for men, women, and children. Durable materials, comfortable fits, and reliable everyday wear.",
      images: [hosiery1, hosiery2, hosiery3],
      subcategories: [
        { name: "Men's Socks", details: "Cotton, wool, and synthetic blend socks in various lengths and styles" },
        { name: "Women's Hosiery", details: "Stockings, tights, and fashion hosiery in multiple colors" },
        { name: "Kids Socks", details: "Durable and comfortable socks for children of all ages" },
        { name: "Inner Wear", details: "Quality undergarments for the whole family" },
        { name: "Thermal Wear", details: "Winter thermals for men, women, and children" }
      ],
      highlights: ["100% Cotton Options", "Anti-Slip Designs", "Odor Control", "Long-Lasting Quality"]
    },
    {
      title: "Ladies Bottoms Collection",
      tagline: "Style meets comfort",
      description: "Comfortable leggings, palazzo pants, and everyday bottoms in various styles and colors. Quality fabrics that last through seasons.",
      images: [leggings1, leggings2, leggings3],
      subcategories: [
        { name: "Leggings", details: "Stretchable, comfortable leggings in solid colors and patterns" },
        { name: "Palazzo Pants", details: "Flowy, comfortable palazzo in cotton and cotton-blend fabrics" },
        { name: "Jeggings", details: "Denim-look comfort with the ease of leggings" },
        { name: "Cotton Pants", details: "Breathable everyday cotton bottoms" },
        { name: "Printed Bottoms", details: "Trendy prints and patterns for every occasion" }
      ],
      highlights: ["Stretchable Fabrics", "Fade-Resistant Colors", "Wide Size Range", "Seasonal Designs"]
    },
    {
      title: "Kids Readymade Wear",
      tagline: "Durable clothing for active kids",
      description: "Durable, comfortable clothing for children. From everyday essentials to seasonal wear, designed for active lifestyles.",
      images: [kidsWear1, kidsWear2, kidsWear3],
      subcategories: [
        { name: "T-Shirts & Tops", details: "Comfortable cotton t-shirts and tops for boys and girls" },
        { name: "Shorts & Bottoms", details: "Durable shorts, pants, and comfortable bottoms" },
        { name: "Ethnic Wear", details: "Traditional wear for festive occasions" },
        { name: "School Essentials", details: "Comfortable everyday wear for school" },
        { name: "Seasonal Collections", details: "Summer and winter wear for kids" }
      ],
      highlights: ["Soft Cotton Fabrics", "Easy Care", "Fun Designs", "Value for Money"]
    },
    {
      title: "Winterwear & Seasonal",
      tagline: "Warmth for every season",
      description: "Warm, quality winter garments including thermals, sweaters, and seasonal essentials. Comfort and warmth for the entire family.",
      images: [winter1, winter2, winter3],
      subcategories: [
        { name: "Sweaters", details: "Knitted sweaters in wool and acrylic blends" },
        { name: "Jackets", details: "Light and heavy jackets for varying temperatures" },
        { name: "Shawls & Stoles", details: "Traditional and modern styles for ladies" },
        { name: "Thermal Sets", details: "Complete thermal wear for men, women, and kids" },
        { name: "Mufflers & Caps", details: "Winter accessories to complete your look" }
      ],
      highlights: ["Thermal Insulation", "Breathable Materials", "Family Sizes", "Traditional & Modern"]
    },
    {
      title: "Men's Socks Collection",
      tagline: "Quality socks for every occasion",
      description: "Extensive range of men's socks from casual to formal, sports to winter wear. Premium quality materials ensuring comfort and durability.",
      images: [mensSocks1, mensSocks2, mensSocks3],
      subcategories: [
        { name: "Formal Socks", details: "Classic designs in cotton and blends for office wear" },
        { name: "Casual Socks", details: "Comfortable everyday socks in various colors" },
        { name: "Sports Socks", details: "Moisture-wicking athletic socks with cushioning" },
        { name: "Winter Socks", details: "Warm wool and thermal blend socks" },
        { name: "Ankle Length", details: "Low-cut socks for casual and sports wear" }
      ],
      highlights: ["Breathable Cotton", "Reinforced Heels", "Variety of Lengths", "Anti-Odor Technology"]
    },
    {
      title: "Fashion Bottoms & Jeggings",
      tagline: "Contemporary comfort wear",
      description: "Modern fashion bottoms including jeggings, printed palazzo, and designer pants. Perfect blend of style and comfort for the fashion-conscious.",
      images: [bottoms1, bottoms2, bottoms3],
      subcategories: [
        { name: "Denim Jeggings", details: "Stylish denim look with legging comfort" },
        { name: "Printed Palazzo", details: "Trendy prints in flowing palazzo styles" },
        { name: "Designer Pants", details: "Fashion-forward pants in various cuts and colors" },
        { name: "Casual Bottoms", details: "Everyday wear with modern designs" },
        { name: "Party Wear", details: "Elegant bottoms for special occasions" }
      ],
      highlights: ["Fashion-Forward Designs", "Comfortable Stretch", "Premium Fabrics", "All-Day Comfort"]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Curated Collections</span>
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-6">
              What We Offer
            </h1>
            <p className="text-lg text-muted-foreground">
              A focused range curated for everyday comfort and dependable wear. Quality products that serve families across generations.
            </p>
          </div>
        </div>
      </section>

      {/* Categories - Interactive Cards */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-8">
            {categories.map((category, index) => (
              <Card 
                key={category.title} 
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Carousel */}
                  <div className={`relative h-64 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Carousel
                      plugins={[
                        Autoplay({
                          delay: 3000,
                        }),
                      ]}
                      className="w-full h-full"
                    >
                      <CarouselContent>
                        {category.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="relative h-64 lg:h-[400px]">
                              <img
                                src={image}
                                alt={`${category.title} ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-sm font-medium opacity-90">{category.tagline}</p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-3xl font-serif font-bold mb-4">{category.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {category.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Choose HK Oswal?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four generations of trust and expertise in quality garments
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Wholesale & Retail",
                description: "Flexible options for both bulk buyers and individual customers"
              },
              {
                title: "Quality Assured",
                description: "Every product tested for durability and comfort before sale"
              },
              {
                title: "Competitive Pricing",
                description: "Best value in Bapu Bazar without compromising on quality"
              },
              {
                title: "Expert Guidance",
                description: "Knowledgeable staff to help you find exactly what you need"
              }
            ].map((feature) => (
              <Card key={feature.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="border-primary/20 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10">
              <CardContent className="p-8 lg:p-12 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-serif font-bold mb-4">
                  Visit Our Store or Call for Enquiries
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Experience our products in person at our Bapu Bazar location. Our team is ready to assist you with product details, wholesale rates, and personalized recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <Link to="/visit-us">
                      Contact Us
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/gallery">View Gallery</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  📍 Located in Bapu Bazar, Jaipur 
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}