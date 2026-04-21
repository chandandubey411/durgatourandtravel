import { Link } from "react-router-dom";

const ServiceCard = ({ service, detailed = false }) => {
  return (
    <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-4">
      <div className="text-4xl">{service.icon}</div>
      <h3 className="text-xl font-semibold text-brand-blue">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {detailed ? service.description : service.shortDesc}
      </p>
      {detailed && (
        <Link
          to="/booking"
          className="mt-2 inline-block bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors duration-200 text-center"
        >
          Book Now
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
