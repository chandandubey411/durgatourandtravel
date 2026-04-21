import { Link } from "react-router-dom";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop";

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="h-52 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-xl font-semibold text-brand-blue">{destination.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {destination.description}
        </p>
        <Link
          to={`/tours/${destination.slug}`}
          className="mt-2 inline-block border-2 border-brand-blue text-brand-blue text-sm font-semibold px-5 py-2 rounded-xl hover:bg-brand-blue hover:text-white transition-colors duration-200 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
