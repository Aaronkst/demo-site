import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import FeatureSection from "../sections/FeatureSection";
import ContactSection from "../sections/ContactSection";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>addTech | Premium Package</title>
      </Head>
      <HeroSection title="Premium" />
      <FeatureSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
