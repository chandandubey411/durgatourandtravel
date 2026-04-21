import SectionHeading from "../ui/SectionHeading";

const highlights = [
  {
    icon: "💰",
    title: "Affordable Pricing",
    description:
      "Transparent, competitive rates with no hidden charges. Get the best value for every journey.",
  },
  {
    icon: "✅",
    title: "Verified Drivers",
    description:
      "All our drivers are background-verified, licensed, and trained for safe, courteous service.",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    description:
      "Round-the-clock customer support via call and WhatsApp. We're always here when you need us.",
  },
  {
    icon: "🚗",
    title: "Well-Maintained Fleet",
    description:
      "Clean, comfortable, and regularly serviced AC vehicles for a smooth travel experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Thousands of happy travellers trust Durga Travels for their journeys across India."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-card p-6 flex flex-col gap-3 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-lg font-semibold text-brand-blue">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
