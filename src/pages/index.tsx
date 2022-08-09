import type { NextPage } from "next";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import FeatureSection from "../sections/FeatureSection";
import ContactSection from "../sections/ContactSection";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
