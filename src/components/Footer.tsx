import { MapPin, Phone, Clock } from "lucide-react";
import footerlogo from "@/assets/hk4.png";
export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img src={footerlogo} alt="HK Oswal Hosiery Sales Depot" className="h-40 mb-4" />
            <p className="text-sm text-muted-foreground">
              A legacy of quality hosiery and garments<br /> in Bapu Bazar, Jaipur since generations.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Shop No. 176-179, Bapu Bazar<br />Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 141-4043400</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Monday - Saturday: 10:30 AM - 9:00 PM<br />Sunday: 11:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">Our History</a></li>
              <li><a href="/offerings" className="hover:text-primary transition-colors">What We Offer</a></li>
              <li><a href="/visit-us" className="hover:text-primary transition-colors">Visit Our Store</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HK Oswal Hosiery Sales Depot. All rights reserved.</p>
          <p className="mt-2">This is an informational website only. No online sales.</p>
        </div>
      </div>
    </footer>
  );
}