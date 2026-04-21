import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Everything you need for a comfortable and memorable journey across India."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} detailed={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
