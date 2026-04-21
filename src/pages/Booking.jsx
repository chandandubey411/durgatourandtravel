import { useState } from "react";
import { Link } from "react-router-dom";
import { fleet } from "../data/fleet";

const initialForm = {
  pickupLocation: "",
  dropLocation: "",
  travelDate: "",
  carType: "",
};

const validate = (data) => {
  const errors = {};
  if (!data.pickupLocation.trim()) errors.pickupLocation = "Pickup location is required.";
  if (!data.dropLocation.trim()) errors.dropLocation = "Drop location is required.";
  if (!data.travelDate) errors.travelDate = "Travel date is required.";
  if (!data.carType) errors.carType = "Please select a car type.";
  return errors;
};

const BookingForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: "New Booking Enquiry — Durga Travels Indirapuram",
          ...formData,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center max-w-lg mx-auto">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-green-700 mb-2">Enquiry Received!</h3>
        <p className="text-green-600 mb-4">
          Thank you for your booking enquiry. Our team will call you back shortly to confirm your trip.
        </p>
        <a
          href="https://wa.me/919911760022"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-card p-8 max-w-2xl mx-auto flex flex-col gap-5"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="e.g. Indirapuram, Ghaziabad"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
          {errors.pickupLocation && (
            <p className="text-red-500 text-xs mt-1">{errors.pickupLocation}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Drop Location</label>
          <input
            type="text"
            name="dropLocation"
            value={formData.dropLocation}
            onChange={handleChange}
            placeholder="e.g. Manali, Himachal Pradesh"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
          {errors.dropLocation && (
            <p className="text-red-500 text-xs mt-1">{errors.dropLocation}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
          {errors.travelDate && (
            <p className="text-red-500 text-xs mt-1">{errors.travelDate}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Car Type</label>
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
          >
            <option value="">Select a vehicle</option>
            {fleet.map((car) => (
              <option key={car.id} value={`${car.name} (${car.type}) — ₹${car.price}/km`}>
                {car.name} ({car.type}) — ₹{car.price}/km
              </option>
            ))}
          </select>
          {errors.carType && (
            <p className="text-red-500 text-xs mt-1">{errors.carType}</p>
          )}
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again or{" "}
          <a href="https://wa.me/919911760022" className="underline text-green-600">
            WhatsApp us
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-brand-orange text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-60 text-base"
      >
        {status === "loading" ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
};

const Booking = () => {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Trip</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-5">
            Fill in your trip details and we'll get back to you with the best options and pricing.
          </p>
          <Link
            to="/fleet"
            className="inline-block border border-white/40 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-white/10 transition-colors"
          >
            🚗 Browse our fleet first →
          </Link>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <BookingForm />
        </div>
      </section>
    </main>
  );
};

export default Booking;
