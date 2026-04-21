import { motion } from "framer-motion";
import DestinationCard from "../components/ui/DestinationCard";
import SectionHeading from "../components/ui/SectionHeading";
import { destinations } from "../data/destinations";

const Tours = () => {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Destinations</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Discover India's most iconic destinations with Durga Travels — your trusted travel partner.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Explore Destinations"
            subtitle="From snow-capped mountains to sun-kissed beaches — we take you everywhere."
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Tours;
