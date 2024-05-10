import Hero from "../components/HeroSection";
import Navbar from "../components/NavbarSection";
import OurService from "../components/OurServiceSection";
import WhyUs from "../components/WhyUsSection";
import Testimonial from "../components/TestimonialSection";
import CTA from "../components/CTASection";
import FAQ from "../components/FAQSection";
import Footer from "../components/FooterSection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurService />
        <WhyUs />
        <Testimonial />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
