import FeaturesSection from "@/components/FeturesSection/FetureSection";
import Hero from "@/components/Hero/Hero";
import React from "react";

const Home = () => {
  return (
    <div className="px-[15px] py-[10px] sm:px-[80px] md:px-[120px] md:py-[19px] sm:py-[15px]">
      <Hero />
      <FeaturesSection />
    </div>
  );
};

export default Home;
