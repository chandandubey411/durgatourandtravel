import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Tours", path: "/tours" },
  { name: "Contact", path: "/contact" },
  { name: "Booking", path: "/booking" },
];

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Durga Travels Indirapuram" className="h-12 w-auto object-contain" />
              <h3 className="text-xl font-bold leading-tight">
                Durga Travels<br />
                <span className="text-brand-orange text-sm font-medium">Indirapuram</span>
              </h3>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Jaipuria Sunrise, SD 79, near wine shop,<br />
              Ahinsa Khand 1, Indirapuram,<br />
              Ghaziabad, Uttar Pradesh 201014
            </p>
            <a
              href="tel:9911767022"
              className="text-brand-orange font-semibold hover:underline text-sm"
            >
              📞 9911767022
            </a>
            <a
              href="mailto:ravindertiwari57791@gmail.com"
              className="text-blue-200 hover:text-white text-sm break-all"
            >
              ✉️ ravindertiwari57791@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <p className="text-blue-200 text-sm">
              Have a question or need to book a trip? Reach us instantly on WhatsApp.
            </p>
            <a
              href="https://wa.me/919911767022"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm w-fit"
            >
              <span>💬</span> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 py-4 text-center text-blue-300 text-sm">
        © {new Date().getFullYear()} Durga Travels Indirapuram. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
