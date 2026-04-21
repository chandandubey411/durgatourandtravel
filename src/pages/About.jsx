import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const trustPoints = [
  {
    icon: "🏆",
    title: "Years of Experience",
    description: "Over a decade of trusted travel services across India with thousands of satisfied customers.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure Travel",
    description: "All vehicles are GPS-tracked and drivers are background-verified for your peace of mind.",
  },
  {
    icon: "💯",
    title: "100% Transparent Pricing",
    description: "No hidden charges, no surprises. What you see is what you pay — always.",
  },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Learn about Durga Travels Indirapuram — our story, our mission, and why thousands trust us.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop"
                alt="Durga Travels team"
                loading="lazy"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-brand-blue">Who We Are</h2>
              <div className="w-12 h-1 bg-brand-orange rounded-full" />
              <p className="text-gray-600 leading-relaxed">
                Durga Travels Indirapuram is a trusted travel agency based in Ghaziabad, Uttar Pradesh. We specialise in taxi services, tour packages, airport transfers, and outstation travel across India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded with a passion for making travel comfortable and affordable, we have served thousands of families, corporate clients, and solo travellers. Our team of experienced drivers and travel experts ensures every journey is smooth, safe, and memorable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located at Jaipuria Sunrise, Ahinsa Khand 1, Indirapuram, we are conveniently accessible to residents of Ghaziabad, Noida, and Delhi NCR.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Mission & Vision" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-brand-blue text-white rounded-2xl p-8 flex flex-col gap-4">
              <div className="text-4xl">🎯</div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To provide safe, reliable, and affordable travel solutions that make every journey across India a comfortable and joyful experience — for every traveller, every time.
              </p>
            </div>
            <div className="bg-brand-orange text-white rounded-2xl p-8 flex flex-col gap-4">
              <div className="text-4xl">🌟</div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-orange-100 leading-relaxed">
                To become the most trusted travel partner in North India, known for exceptional service, transparent pricing, and a commitment to making travel accessible to everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Why Trust Us"
            subtitle="Here's what sets Durga Travels apart from the rest."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-card transition-all duration-300"
              >
                <div className="text-4xl">{point.icon}</div>
                <h3 className="text-xl font-semibold text-brand-blue">{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
