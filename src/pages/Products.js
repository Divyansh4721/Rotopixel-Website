import React, { useState, useEffect, useRef } from "react";
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return [ref, isVisible];
};
const ScrollRevealWrapper = ({ children }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};
const ProductImage = ({ src, alt }) => (
  <div className="overflow-hidden rounded-md bg-white">
    <img
      src={src}
      alt={alt}
      className="w-full h-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:scale-110"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `/assets/images/Products/HRD Chana Jor Garam.jpg`;
      }}
    />
  </div>
);
const CategorySection = ({ title, products }) => (
  <section className="mb-16">
    <ScrollRevealWrapper>
      <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center md:text-left">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.map((product, index) => (
          <ProductImage key={index} src={product.src} alt={product.alt} />
        ))}
      </div>
    </ScrollRevealWrapper>
  </section>
);
export default function ProductsPage() {
  const vCutNotchProducts = [
    {
      src: "/assets/images/Products/HRD Chana Jor Garam.jpg",
      alt: "Green Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRD Gup Shup Peanuts.jpg",
      alt: "Yellow Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRD Lite Mixture.jpg",
      alt: "Purple Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRD Roasted Chana Cracker Heeng Jeera.jpg",
      alt: "Red Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRN Bhujia Sev.jpg",
      alt: "Blue Snack Pouch",
    },
    { src: "/assets/images/Products/HRN Moong Dal.jpg", alt: "Lentils Pouch" },
    {
      src: "/assets/images/Products/HRN Puffitos CheeseBalls.jpg",
      alt: "Namkeen Pouch 1",
    },
    {
      src: "/assets/images/Products/HRN Halke Fulke Chili.jpg",
      alt: "Pink Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRN Halke Fulke CreamOnion.jpg",
      alt: "Indigo Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRN Halke Fulke Salted.jpg",
      alt: "Gold Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRN Instant Bhel.jpg",
      alt: "Gray Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRN Puffitos ZigZag.jpg",
      alt: "Namkeen Pouch 2",
    },
  ];
  const dCutPouchProducts = [
    {
      src: "/assets/images/Products/HRN Navratan Mix.jpg",
      alt: "Grains Pouch",
    },
    {
      src: "/assets/images/Products/HRN Kaju Kashmiri Mix.jpg",
      alt: "Light Red Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRN DryFruit Mix.jpg",
      alt: "Teal Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRN Cornflakes Mixture.jpg",
      alt: "Orange Snack Pouch",
    },
  ];
  const laminatedPouchProducts = [
    {
      src: "/assets/images/Products/HRN Soya Chips.jpg",
      alt: "Namkeen Pouch 3",
    },
    {
      src: "/assets/images/Products/HRN Soya Sticks.jpg",
      alt: "Dark Snack Pouch",
    },
    {
      src: "/assets/images/Products/HRN Phalhari Chiwda.jpg",
      alt: "Spices Pouch",
    },
    {
      src: "/assets/images/Products/HRN Takatak Chatpata Masala.jpg",
      alt: "Taka-Tak Pouch 1",
    },
    {
      src: "/assets/images/Products/HRN Takatak Tomato.jpg",
      alt: "Taka-Tak Pouch 2",
    },
    { src: "/assets/images/Products/HRN Poppits.jpg", alt: "Nuts Pouch" },
  ];
  return (
    <main className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <ScrollRevealWrapper>
            <h1 className="text-5xl md:text-6xl font-light tracking-widest mb-16 text-center">
              OUR PRODUCTS
            </h1>
          </ScrollRevealWrapper>
          <CategorySection
            title="2,3,4 Layered Printed Laminate"
            products={vCutNotchProducts}
          />
          <CategorySection
            title="BOPP Printed Laminate"
            products={dCutPouchProducts}
          />
          <CategorySection
            title="Preformed Pouches"
            products={laminatedPouchProducts}
          />
        </div>
      </section>
    </main>
  );
}
