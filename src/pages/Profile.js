import React, { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";
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
const TeamMemberCard = ({ imgSrc, name, title, email }) => (
  <div className="text-center">
    <img
      src={imgSrc}
      alt={`Profile of ${name}`}
      className="w-40 h-40 rounded-full mx-auto mb-4 object-cover bg-gray-200 shadow-md"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://placehold.co/160x160/e0e0e0/333?text=${name
          .split(" ")
          .map((n) => n[0])
          .join("")}`;
      }}
    />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-500 mb-2 tracking-wider">{title}</p>
    {email && (
      <a
        href={`mailto:${email}`}
        className="text-gray-500 hover:underline text-sm inline-flex items-center justify-center"
      >
        <Mail size={14} className="mr-1" />
        {email}
      </a>
    )}
  </div>
);
export default function ProfilePage() {
  const coreTeam = [
    {
      name: "Ram Singh Goel",
      title: "C M D",
      imgSrc: "/assets/images/Ram Singh Goel.jpg",
    },
    {
      name: "Jeewan Goel",
      title: "MANAGING DIRECTOR",
      email: "rotopixel@gmail.com",
      imgSrc: "/assets/images/Jeewan Goel.jpg",
    },
    {
      name: "Sandeep Goel",
      title: "R & D HEAD",
      imgSrc: "/assets/images/Sandeep Goel.jpg",
    },
    {
      name: "Siddharth Goel",
      title: "MARKETING HEAD",
      email: "siddharth.rotopixel@gmail.com",
      imgSrc: "/assets/images/Siddharth Goel.jpg",
    },
  ];
  return (
    <main className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 justify-center">
          <ScrollRevealWrapper>
            <h1 className="text-5xl md:text-6xl font-light tracking-widest mb-8 text-center">
              VISION & MISSION
            </h1>
            <div className="max-w-5xl text-xl mx-auto text-gray-600 leading-relaxed space-y-4 text-justify">
              <p>
                Rotopixel was started in 2017 by Mr. Ram Singh Goel with the
                vision to be the one stop solution for our partner's packaging
                needs. The idea was conceptualised by Mr. Jeewan Goel with sheer
                hard work and dedication.
              </p>
              <p>
                We aim to deliver trust, quality and service from a progressive
                and ethically managed business. We want to be the first-choice
                partner for value-added flexible packaging solutions through a
                relentless commitment to our customers success.
              </p>
              <p>
                Our mission is to consistently provide quality products and
                service which will enhance our customers businesses by combining
                exceptional people, processes and continuous improvement. We
                rethink packaging every day to make a positive, sustainable and
                meaningful contribution to our customers and the environment.
              </p>
              <p>
                We envision a world in which packaging provides people with the
                highest benefit at the lowest impact on the environment.
              </p>
            </div>
          </ScrollRevealWrapper>
        </div>
      </section>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollRevealWrapper>
            <h2 className="text-5xl md:text-6xl font-light tracking-widest mb-16">
              CORE TEAM
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
              {coreTeam.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </ScrollRevealWrapper>
        </div>
      </section>
    </main>
  );
}
