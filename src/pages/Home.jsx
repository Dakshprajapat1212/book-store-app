import React from "react";
import Hero from "../components/Hero";
import CuratedSection from "../components/CuratedSection";
import FavoriteSection from "../components/FavoriteSection";
import JourneySection from "../components/JourneySection";
import LegendaryVolumes from "../components/LegendaryVolumes";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8fafb]">
      <Hero />
      <CuratedSection />
      <FavoriteSection />
      <JourneySection />
      <LegendaryVolumes />
      <Footer />
    </div>
  );
};

export default Home;
