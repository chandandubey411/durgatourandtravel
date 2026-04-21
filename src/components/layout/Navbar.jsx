import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Fleet", path: "/fleet" },
  { name: "Tours", path: "/tours" },
  { name: "Contact", path: "/contact" },
  { name: "Booking", path: "/booking" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-brand-blue text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Durga Travels Indirapuram" className="h-10 w-auto object-contain" />
          <span className="text-base md:text-lg font-bold leading-tight hidden sm:block">
            Durga Travels<br />
            <span className="text-brand-orange text-xs font-medium">Indirapuram</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-brand-orange border-b-2 border-brand-orange"
                  : "hover:text-brand-orange"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:9911760022"
            className="bg-brand-orange text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-brand-blue border-t border-blue-700">
          <div className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-brand-orange" : "hover:text-brand-orange"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:9911760022"
              className="bg-brand-orange text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
