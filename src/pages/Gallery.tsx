import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-storefront.jpg";
import interiorImage from "@/assets/interior-display.jpg";
import productImage from "@/assets/product-detail.jpg";
import vintageImage from "@/assets/vintage-heritage.jpg";
import streetImage from "@/assets/bapu-bazar-street.jpg";
import ladiesWearImage from "@/assets/ladies-wear.jpg";

const galleryImages = [
  { src: heroImage, caption: "Storefront – Bapu Bazar, Jaipur" },
  { src: interiorImage, caption: "Interior display of quality products" },
  { src: productImage, caption: "Premium hosiery and garment details" },
  { src: streetImage, caption: "Our location in vibrant Bapu Bazar" },
  { src: ladiesWearImage, caption: "Ladies wear section" },
  { src: vintageImage, caption: "Heritage - Our early years" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "interior", label: "Store Interior" },
    { id: "products", label: "Products" },
    { id: "heritage", label: "Heritage" },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-6">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              A visual journey through our store, products, and presence in Bapu Bazar
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium drop-shadow-lg">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox with Navigation */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
          {selectedImage !== null && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-all"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].caption}
                className="w-full h-auto max-h-[85vh] object-contain animate-fade-in"
              />

              {/* Caption and Counter */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <div className="text-center">
                  <p className="text-white text-lg font-medium mb-2">
                    {galleryImages[selectedImage].caption}
                  </p>
                  <p className="text-white/70 text-sm">
                    {selectedImage + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
