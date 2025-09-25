import FAQ from "@/components/Faq/Faq";
import FeaturesSection from "@/components/FeturesSection/FetureSection";
import Hero from "@/components/Hero/Hero";
import ServicesOverview from "@/components/ServicesOverview/ServicesOverview";
import UserReview from "@/components/UserReview/UserReview";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FeaturesSection />
      <ServicesOverview />
      <UserReview />
      <FAQ />
    </div>
  );
};

export default Home;
