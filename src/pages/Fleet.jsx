import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import { fleet } from "../data/fleet";

const FleetCard = ({ car }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col group"
  >
    {/* Car Image */}
    <div className="relative h-52 bg-gray-100 overflow-hidden">
      <img
        src={car.image}
        alt={car.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Type Badge */}
      <span className="absolute top-3 left-3 bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
        {car.type}
      </span>
      {/* Price Badge */}
      <span className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
        ₹{car.price}/km
      </span>
    </div>

    {/* Info */}
    <div className="p-5 flex flex-col gap-4 flex-1">
      <div>
        <h3 className="text-xl font-bold text-brand-blue">{car.name}</h3>
        <p className="text-gray-400 text-xs mt-0.5">Best for: {car.bestFor}</p>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-2">
        {car.features.map((f, i) => (
          <span
            key={i}
            className="bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1 rounded-full"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Price Row */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-400">Starting from</p>
          <p className="text-2xl font-extrabold text-brand-orange">
            ₹{car.price}<span className="text-sm font-medium text-gray-400">/km</span>
          </p>
        </div>
        <Link
          to="/booking"
          className="bg-brand-blue text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-900 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  </motion.div>
);

const Fleet = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="bg-brand-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Choose from our well-maintained, AC vehicles — from budget sedans to spacious tempo travellers.
        </p>
      </div>
    </section>

    {/* Fleet Grid */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Available Vehicles"
          subtitle="All vehicles are GPS-tracked, AC-equipped, and driven by verified professionals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {fleet.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="py-14 bg-brand-blue text-white">
      <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-5 items-center">
        <h2 className="text-3xl font-bold">Not sure which vehicle to pick?</h2>
        <p className="text-blue-200">
          Call us or WhatsApp — our team will recommend the best option for your trip and budget.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:9911760022"
            className="bg-brand-orange text-white font-semibold px-7 py-3 rounded-xl hover:bg-orange-500 transition-colors"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919911760022"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold px-7 py-3 rounded-xl hover:bg-green-600 transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Fleet;
