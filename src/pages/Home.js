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
export default function HomePage() {
  const carouselImages = [
    "/assets/images/factory concept.jpg",
    "/assets/images/product concept.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);
  return (
    <main className="bg-white">
      <section className="container mx-auto px-6 pt-8">
        <div className="relative w-full h-[200px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
          {carouselImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Rotopixel hero image ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl justify-center">
          <ScrollRevealWrapper>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
              What is Rotopixel?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed text-justify">
              Rotopixel is an amalgamation of two key words, 'Roto' and 'Pixel'.
              'Roto' stands for Rotogravure, the printing technology that is
              used for printing laminates, and a 'Pixel' is the smallest element
              which makes an image. Together they create 'Rotopixel'.
              <p>
                RotoPixel Pvt. Ltd. is a flexible packaging company driven by
                our mission to help brands of all sizes stay competitive with
                exceptional stand up pouches, lay flat pouches and rollstock. We
                leverage the latest in digital print technology, providing our
                customers with a quick and easy way to produce custom printed
                flexible packaging.
              </p>
            </p>
          </ScrollRevealWrapper>
        </div>
      </section>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollRevealWrapper>
              <img
                src="/assets/images/running.jpg"
                alt="Rolls of flexible packaging"
                className="rounded-lg h-[300px] mx-auto shadow-lg"
              />
            </ScrollRevealWrapper>
            <ScrollRevealWrapper>
              <div>
                <p className="text-xl text-gray-600 leading-relaxed mb-4 text-justify">
                  We offer a wide range of production techniques, like extrusion
                  coating, solvent less and solvent base laminates for namkeens,
                  chips, cookies, confectionary, personal care products, etc.,
                  using world class machinery.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed text-justify">
                  Printing on laminates is very different from printing on
                  paper, we have an efficient design and technical team to
                  provide complete solutions to our customers. Our team is made
                  up of highly skilled and experienced individuals.
                </p>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollRevealWrapper>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-justify">
                  Our esteemed clients include Haldiram's Nagpur and Haldiram's
                  Delhi
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed text-justify">
                  We are the leading suppliers of flexible packaging for
                  Haldiram's Nagpur, supplying more than 35 major SKUs.
                  Manufacturing for most of their best selling products,
                  including 90% of the Moong Dal variants and 75% of the entire
                  potato chips range.
                </p>
              </div>
            </ScrollRevealWrapper>
            <ScrollRevealWrapper>
              <div className="flex justify-center items-center space-x-8">
                <img
                  src="/assets/images/maxresdefault copy.png"
                  alt="Haldiram's Delhi Logo"
                  className="h-16 md:h-20 object-contain"
                />
                <img
                  src="/assets/images/Haldiram-Logo-PNG.png"
                  alt="Haldiram's Nagpur Logo"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>
      <section
        className="h-[300px] md:h-[450px] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/4 item.jpg')" }}
        aria-label="A variety of potato chip packages"
      ></section>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <ScrollRevealWrapper>
            <h2 className="text-3xl font-bold text-gray-800 uppercase mb-12">
              Our Advantages
            </h2>
          </ScrollRevealWrapper>
          <div className="grid md:grid-cols-3 gap-12 mx-auto">
            <ScrollRevealWrapper>
              <div className="text-center">
                <h3 className="text-5xl font-extrabold text-gray-300 mb-3">
                  01
                </h3>
                <p className="text-xl font-semibold text-gray-700 capitalize">
                  innovation in packaging
                </p>
              </div>
            </ScrollRevealWrapper>
            <ScrollRevealWrapper>
              <div className="text-center">
                <h3 className="text-5xl font-extrabold text-gray-300 mb-3">
                  02
                </h3>
                <p className="text-xl font-semibold text-gray-700 capitalize">
                  Competitive design services
                </p>
              </div>
            </ScrollRevealWrapper>
            <ScrollRevealWrapper>
              <div className="text-center">
                <h3 className="text-5xl font-extrabold text-gray-300 mb-3">
                  03
                </h3>
                <p className="text-xl font-semibold text-gray-700 capitalize">
                  Provide exceptional quality product
                </p>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
