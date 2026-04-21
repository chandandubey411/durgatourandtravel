import { useState } from "react";

const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
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
          subject: "New Contact Enquiry — Durga Travels Indirapuram",
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
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
        <p className="text-green-600">Thank you for reaching out. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="How can we help you?"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
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
        className="bg-brand-blue text-white font-semibold py-3 rounded-xl hover:bg-blue-900 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Have a question or ready to book? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Business Info */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-brand-blue">Get in Touch</h2>
              <div className="flex flex-col gap-4 text-gray-600 text-sm">
                <div className="flex gap-3">
                  <span className="text-xl">📍</span>
                  <p>
                    Jaipuria Sunrise, SD 79, near wine shop,<br />
                    Ahinsa Khand 1, Indirapuram,<br />
                    Ghaziabad, Uttar Pradesh 201014
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-xl">📞</span>
                  <a href="tel:9911760022" className="text-brand-blue font-semibold hover:underline">
                    9911760022
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-xl">✉️</span>
                  <a
                    href="mailto:ravindertiwari57791@gmail.com"
                    className="text-brand-blue hover:underline break-all"
                  >
                    ravindertiwari57791@gmail.com
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/919911760022"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors w-fit"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">Find Us on the Map</h2>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <iframe
              title="Durga Travels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6!2d77.3710!3d28.6448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sAhinsa%20Khand%201%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
