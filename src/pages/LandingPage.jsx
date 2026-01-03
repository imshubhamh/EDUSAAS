import Hero from "../components/landing/Hero";
import Courses from "../components/landing/Courses";
import Pricing from "../components/landing/Pricing";
import BackgroundLines from "../components/landing/BackgroundLines";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import FinalCTA from "../components/landing/FinalCTA";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features/>
      <HowItWorks/>
      <WhyChooseUs/>
      <Courses />
      <Testimonials/>
      <FAQ/>
      <Pricing />
      <FinalCTA/>
    </>
  );
}
