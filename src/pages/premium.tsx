import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../views/HeroSection";
import AboutSection from "../views/AboutSection";
import FeatureSection from "../views/FeatureSection";
import ContactSection from "../views/ContactSection";

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
