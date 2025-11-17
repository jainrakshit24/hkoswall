import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import storeLocation from "@/assets/store-location.jpg";

export default function VisitUs() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzsoPjPt0YykpXyeb0jTAS4998M9spUomegNLBNPpIN-FZkSDsN51bh3TzKaY8NOL2F/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      toast({
        title: "Message Received",
        description: "Thank you for your enquiry. We'll get back to you soon!",
      });
      
      setFormData({ name: "", contact: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-6">
              Visit Our Store
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Find us in the heart of Jaipur. We look forward to serving you.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-6">
              <p className="text-sm font-medium text-foreground">
                <strong>Important:</strong> This website is for informational purposes only. 
                Please visit our Bapu Bazar store for products and enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Address</h3>
                        <p className="text-muted-foreground">
                          Shop No. 176-179, Bapu Bazar,<br />
                          Jaipur, Rajasthan, India
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          +91 141-4043400
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          For enquiries and wholesale orders
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Hours of Operation</h3>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 10:30 AM - 9:00 PM<br />
                          Sunday: 11:00 AM - 7:00 PM
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          info@hkoswal.com
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact">Phone or Email *</Label>
                      <Input
                        id="contact"
                        type="text"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Your phone number or email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <div className="bg-muted/50 rounded-md p-3">
                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        <strong>Note:</strong> This is an informational website only. We do not offer online sales. 
                        Please visit our physical store in Bapu Bazar for all product purchases and enquiries.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Image Section */}
      <section className="bg-muted/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">Find Us at Bapu Bazar</h2>
            <p className="text-muted-foreground">
              Located in the vibrant area of Jaipur - Click to open in Google Maps
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bapu+Bazaar+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-2xl mx-auto h-104 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer group"
          >
            <img
              src={storeLocation}
              alt="HK Oswal store in Jaipur"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </a>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Click the image to open our location in Google Maps
          </p>
        </div>
      </section>
    </div>
  );
}