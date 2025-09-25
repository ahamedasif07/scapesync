import FeaturesSection from "@/components/FeturesSection/FetureSection";
import Hero from "@/components/Hero/Hero";
import ServicesOverview from "@/components/ServicesOverview/ServicesOverview";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <ServicesOverview />
    </div>
  );
};

export default Home;
