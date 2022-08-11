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
        <title>addTech | Base Package</title>
      </Head>
      <HeroSection base={true} />
      <FeatureSection />
      <AboutSection />
      <ContactSection base={true} />
    </>
  );
};

export default Home;