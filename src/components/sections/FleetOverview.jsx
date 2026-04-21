import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import { fleet } from "../../data/fleet";

const FleetOverview = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <SectionHeading
        title="Our Fleet"
        subtitle="Well-maintained, AC vehicles for every budget and group size."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {fleet.map((car) => (
          <div
            key={car.id}
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-40 bg-gray-100 overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">
                ₹{car.price}/km
              </span>
            </div>
            <div className="p-4 flex flex-col gap-1 flex-1">
              <p className="text-xs text-brand-orange font-semibold uppercase tracking-wide">{car.type}</p>
              <h4 className="font-bold text-brand-blue text-sm">{car.name}</h4>
              <p className="text-gray-400 text-xs">{car.seats} Seats · AC</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/fleet"
          className="inline-block bg-brand-blue text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-900 transition-colors"
        >
          View All Vehicles →
        </Link>
      </div>
    </div>
  </section>
);

export default FleetOverview;
