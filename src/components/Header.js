import { useState, useEffect, useState as useBoolean } from "react";
import { MenuIcon, XIcon } from "lucide-react";
const normalize = (p) => (p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p);
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window !== "undefined" ? normalize(window.location.pathname) : "/"
  );
  useEffect(() => {
    const onPop = () => setCurrentPath(normalize(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/profile", label: "Profile" },
    { href: "/contact", label: "Contact" },
  ];
  const isActive = (href) => {
    const normHref = normalize(href);
    return normHref === currentPath;
  };
  const baseLinkClasses =
    "text-base font-medium transition-colors duration-200";
  const activeClasses = "text-gray-500";
  const inactiveClasses = "text-gray-800 hover:text-gray-500";
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="h-32 max-w-6xl mx-auto flex items-center px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <a
            href="/"
            aria-label="Rotopixel Home"
            className="flex items-center h-full"
          >
            <img
              src="/assets/images/Rotopixel logo final _ 16th June'18.png"
              alt="Rotopixel Logo"
              className="h-48 w-auto object-contain"
            />
          </a>
        </div>
        <div className="flex-1" />
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`${baseLinkClasses} ${
                isActive(link.href) ? activeClasses : inactiveClasses
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-3 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block px-3 py-2 rounded-md text-base font-medium italic transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-gray-600 bg-gray-100"
                    : "text-gray-700 hover:text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
