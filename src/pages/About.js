import React, { useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
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
const ResponsiveImage = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`w-full h-auto object-cover rounded-md shadow-lg ${className}`}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = `https://placehold.co/600x450/e2e8f0/4a5568?text=Image+Error`;
    }}
  />
);
const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`text-3xl font-semibold text-gray-800 mb-6 ${className}`}>
    {children}
  </h2>
);
const ListItem = ({ children }) => (
  <li className="flex items-start mb-2">
    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
    <span className="text-gray-600">{children}</span>
  </li>
);
export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl justify-center">
          <ScrollRevealWrapper>
            <h1 className="text-5xl md:text-6xl font-light tracking-widest mb-8 text-center">
              ABOUT
            </h1>
            <div className="mx-auto text-xl text-gray-600 leading-relaxed space-y-4 text-justify">
              <p>
                Roto pixel Pvt. Ltd. is one of the most promising names in the
                field of flexible packaging.
              </p>
              <p>
                We provide our customers world-class packaging solutions that
                preserve freshness and extend shelf-life of food and other
                packed products. We offer the capabilities of a large flexible
                packaging supplier, combined with the agility and dedicated
                service typical of a small converter.
              </p>
              <p>
                We ensure trust remains at the core at every point of service
                and customer interaction. We take stringent steps to provide
                consistent quality to earn our customer's faith.
              </p>
            </div>
          </ScrollRevealWrapper>
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollRevealWrapper>
              <ResponsiveImage
                src="/assets/images/IMG_2586.jpg"
                alt="Rotopixel factory machinery"
              />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper>
              <div className="text-xl">
                <SectionTitle>Product Range</SectionTitle>
                <p className="text-gray-600 mb-6 text-justify">
                  With our world class fleet of machines, our total production
                  capacity is 600 tons per month.
                </p>
                <p className="text-gray-600 mb-6">
                  Our product range includes-
                </p>
                <ul className="list-none">
                  <ListItem>Two Layer Laminates</ListItem>
                  <ListItem>Three Layer Laminates</ListItem>
                  <ListItem>Four Layer Laminates</ListItem>
                  <ListItem>Preformed Pouches</ListItem>
                </ul>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollRevealWrapper>
              <div className="order-1 md:order-2">
                <ResponsiveImage
                  src="/assets/images/IMG_2601.jpg"
                  alt="Unwinder machine at Rotopixel"
                />
              </div>
            </ScrollRevealWrapper>
            <ScrollRevealWrapper>
              <div className="text-xl order-2 md:order-1 text-justify">
                <SectionTitle>Infrastructure</SectionTitle>
                <p className="text-gray-600 mb-6">
                  We have an integrated manufacturing facility with:
                </p>
                <ul className="list-none">
                  <ListItem>
                    Pelican Solomark 9 Color Rotogravure Printing Machine, with
                    printing speed of upto 300 meters per minute
                  </ListItem>
                  <ListItem>
                    Extrusion Coating and Lamination Machine from Worldly
                    Industrial Co. LTD., Taiwan with Japanese Automatic T-Die
                    from Japan
                  </ListItem>
                  <ListItem>
                    Nordmeccanica Simplex Solvent Less Lamination Machine from
                    Italy
                  </ListItem>
                  <ListItem>
                    Windsor 3-layer Co-extrusion Blown Film Line
                  </ListItem>
                  <ListItem>
                    Slitting Machines with speed upto 500 meters per minute
                  </ListItem>
                  <ListItem>Inspection Machine</ListItem>
                  <ListItem>
                    Quality Control Lab with testing facilities
                  </ListItem>
                </ul>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollRevealWrapper>
              <ResponsiveImage
                src="/assets/images/IMG_2614.jpg"
                alt="Quality control lab equipment"
              />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper>
              <div className="text-xl">
                <SectionTitle>Quality Control</SectionTitle>
                <ul className="list-none text-justify">
                  <ListItem>
                    We pride ourselves for our minimal GSM variation due to
                    complete in-house production.
                  </ListItem>
                  <ListItem>
                    Online viscosity controllers from NCE Switzerland, at all 9
                    stations of the Printing Machine.
                  </ListItem>
                  <ListItem>
                    Ink Chilling System for controlling color variation
                  </ListItem>
                  <ListItem>
                    Sleeve System from Rossini Spa, Italy, for better image
                    pixels.
                  </ListItem>
                </ul>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
