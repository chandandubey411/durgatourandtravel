import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { destinations } from "../data/destinations";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&auto=format&fit=crop";

const DestinationDetail = () => {
  const { slug } = useParams();
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) return <Navigate to="/tours" replace />;

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={destination.heroImage || destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {destination.tagline}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                {destination.name}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-brand-orange text-lg">📅</span>
            <div>
              <p className="text-blue-300 text-xs">Best Time to Visit</p>
              <p className="font-semibold">{destination.bestTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-orange text-lg">🕐</span>
            <div>
              <p className="text-blue-300 text-xs">Ideal Duration</p>
              <p className="font-semibold">{destination.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 col-span-2 md:col-span-1">
            <span className="text-brand-orange text-lg">📍</span>
            <div>
              <p className="text-blue-300 text-xs">Distance</p>
              <p className="font-semibold">{destination.distance}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-1">About {destination.name}</h2>
                <div className="w-12 h-1 bg-brand-orange rounded-full mb-5" />
                <p className="text-gray-600 leading-relaxed text-base">{destination.details}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">Top Highlights</h3>
                <div className="flex flex-wrap gap-3">
                  {destination.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-brand-blue text-sm font-medium px-4 py-2 rounded-full border border-blue-100"
                    >
                      ✦ {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 rounded-2xl shadow-card p-7 flex flex-col gap-5 sticky top-24">
                <h3 className="text-xl font-bold text-brand-blue">Plan Your Trip</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Ready to visit {destination.name}? Book your cab or tour package with Durga Travels — affordable, reliable, and hassle-free.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/booking"
                    className="bg-brand-orange text-white font-semibold py-3 rounded-xl hover:bg-orange-500 transition-colors text-center shadow-md hover:shadow-orange-300/50"
                  >
                    Book Now →
                  </Link>
                  <a
                    href="tel:9911760022"
                    className="border-2 border-brand-blue text-brand-blue font-semibold py-3 rounded-xl hover:bg-brand-blue hover:text-white transition-colors text-center"
                  >
                    📞 Call Us
                  </a>
                  <a
                    href="https://wa.me/919911760022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition-colors text-center"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
                <p className="text-xs text-gray-400 text-center">
                  Free consultation · No hidden charges
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Other Destinations */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-bold text-brand-blue mb-6">Explore Other Destinations</h3>
          <div className="flex flex-wrap gap-3">
            {destinations
              .filter((d) => d.slug !== slug)
              .map((d) => (
                <Link
                  key={d.id}
                  to={`/tours/${d.slug}`}
                  className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {d.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationDetail;
