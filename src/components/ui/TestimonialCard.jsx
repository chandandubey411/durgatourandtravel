const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-card p-6 flex flex-col gap-4">
      <StarRating rating={testimonial.rating} />
      <p className="text-gray-600 text-sm leading-relaxed italic">
        &ldquo;{testimonial.review}&rdquo;
      </p>
      <p className="font-semibold text-brand-blue text-sm">— {testimonial.name}</p>
    </div>
  );
};

export default TestimonialCard;
