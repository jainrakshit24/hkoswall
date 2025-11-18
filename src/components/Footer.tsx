import { MapPin, Phone, Clock } from "lucide-react";
import footerlogo from "@/assets/hk4.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Tagline Section */}
          <div className="flex flex-col items-center md:items-start lg:items-center">
            <img
              src={footerlogo}
              alt="HK Oswal Hosiery Sales Depot"
              className="h-32 md:h-40 lg:h-48 mb-4 w-auto"
            />
            <p className="text-sm md:text-base font-serif italic text-primary/90 leading-relaxed text-center md:text-left lg:text-center max-w-xs">
              A legacy of quality hosiery and garments in Bapu Bazar, Jaipur since generations.
            </p>
          </div>
          
          {/* Contact Information Section */}
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="leading-relaxed">
                  Shop No. 176-179, Bapu Bazar<br />
                  Jaipur, Rajasthan, India
                </span>
              </div>
              
              <a
                href="tel:+911414043400"
                aria-label="Call HK Oswal +91 141-4043400"
                className="flex items-center gap-3 bg-primary/10 text-primary px-4 py-3 rounded-lg font-semibold hover:bg-primary/20 transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 141-4043400</span>
              </a>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <div className="leading-relaxed">
                  <p className="font-medium text-foreground mb-1">Opening Hours</p>
                  <p>Monday - Saturday: 10:30 AM - 9:00 PM</p>
                  <p>Sunday: 11:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h4 className="text-lg md:text-xl font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <a 
                  href="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Our History
                </a>
              </li>
              <li>
                <a 
                  href="/offerings" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  What We Offer
                </a>
              </li>
              <li>
                <a 
                  href="/visit-us" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Visit Our Store
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 md:mt-12 border-t border-border pt-6 md:pt-8">
          <div className="text-center space-y-2 text-xs md:text-sm text-muted-foreground">
            <p className="font-medium">© {new Date().getFullYear()} HK Oswal Hosiery Sales Depot. All rights reserved.</p>
            <p className="text-muted-foreground/80">This is an informational website only. No online sales.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}