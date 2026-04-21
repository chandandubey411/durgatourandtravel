import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    tag: "🇮🇳 Trusted Travel Partner",
    headline: "Explore India\nwith Comfort",
    subtext:
      "Safe, comfortable, and reliable travel across India with experienced, verified drivers.",
    bg: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&auto=format&fit=crop",
  },
  {
    tag: "💰 Best Value Packages",
    headline: "Affordable Tour\nPackages",
    subtext:
      "Budget-friendly packages for individuals, families, and groups — tailored to your dream destination.",
    bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop",
  },
  {
    tag: "🚕 Available 24/7",
    headline: "Taxi & Cab Services\nAcross India",
    subtext:
      "Reliable cab services for local, outstation, and airport transfers — always on time.",
    bg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&auto=format&fit=crop",
  },
];

const INTERVAL = 5000;

const textVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  // Auto-advance + progress bar
  useEffect(() => {
    if (paused) return;
    const step = 100 / (INTERVAL / 50);
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + step;
      });
    }, 50);
    return () => clearInterval(progressTimer);
  }, [paused, next]);

  const slideNum = String(current + 1).padStart(2, "0");
  const totalNum = String(slides.length).padStart(2, "0");

  return (
    <section
      className="relative w-full h-screen min-h-[560px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.bg}
            alt={slide.headline}
            className="w-full h-full object-cover scale-105"
            style={{
              transform: index === current ? "scale(1.05)" : "scale(1)",
              transition: "transform 6s ease-out",
            }}
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f4d]/90 via-[#1E3A8A]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-white/20">
        <div
          className="h-full bg-brand-orange transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial="enter"
                animate="center"
                exit="exit"
                variants={{ enter: {}, center: {}, exit: {} }}
                className="flex flex-col gap-5"
              >
                {/* Tag Badge */}
                <motion.span
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium px-4 py-1.5 rounded-full w-fit"
                >
                  {slides[current].tag}
                </motion.span>

                {/* Headline */}
                <motion.h1
                  variants={textVariants}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-extrabold text-white leading-tight whitespace-pre-line"
                >
                  {slides[current].headline}
                </motion.h1>

                {/* Accent line */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-16 h-1.5 bg-brand-orange rounded-full"
                />

                {/* Subtext */}
                <motion.p
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="text-blue-100 text-base md:text-lg leading-relaxed max-w-lg"
                >
                  {slides[current].subtext}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  <Link
                    to="/booking"
                    className="bg-brand-orange text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-orange-500 transition-all duration-200 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5"
                  >
                    Book Now →
                  </Link>
                  <a
                    href="tel:9911760022"
                    className="bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white hover:text-brand-blue transition-all duration-200"
                  >
                    📞 Call Now
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-10 right-6 md:right-12 z-10 flex items-center gap-2 text-white/80 font-mono text-sm select-none">
        <span className="text-white font-bold text-lg">{slideNum}</span>
        <span className="text-white/40">/</span>
        <span>{totalNum}</span>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all duration-200"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all duration-200 text-xl"
      >
        ›
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrent(index); setProgress(0); }}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? "w-8 h-2.5 bg-brand-orange"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
