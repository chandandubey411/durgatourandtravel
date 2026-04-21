const SectionHeading = ({ title, subtitle, align = "center" }) => {
  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className={`mb-10 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-brand-orange rounded-full ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        }`}
      />
    </div>
  );
};

export default SectionHeading;
