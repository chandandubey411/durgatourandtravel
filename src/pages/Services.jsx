import { motion } from "framer-motion";
import ServiceCard from "../components/ui/ServiceCard";
import SectionHeading from "../components/ui/SectionHeading";
import { services } from "../data/services";

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            From local cab bookings to custom tour packages — we've got every travel need covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="What We Offer"
            subtitle="Explore our full range of travel services designed for your comfort and convenience."
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} detailed={true} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
