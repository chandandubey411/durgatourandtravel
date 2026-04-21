import { motion } from "framer-motion";
import HeroSlider from "../components/sections/HeroSlider";
import ServicesOverview from "../components/sections/ServicesOverview";
import FeaturedDestinations from "../components/sections/FeaturedDestinations";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import FleetOverview from "../components/sections/FleetOverview";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnimatedSection = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fadeUp}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <AnimatedSection>
        <ServicesOverview />
      </AnimatedSection>
      <AnimatedSection>
        <FleetOverview />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedDestinations />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
    </main>
  );
};

export default Home;
