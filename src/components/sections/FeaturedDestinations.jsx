import SectionHeading from "../ui/SectionHeading";
import DestinationCard from "../ui/DestinationCard";
import { destinations } from "../../data/destinations";

const FeaturedDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Featured Destinations"
          subtitle="Explore India's most breathtaking destinations with Durga Travels."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
