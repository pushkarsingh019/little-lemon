import React from "react";
import Layout from "../components/Layout";

// importing components
import {
  HeroSection,
  WeeklySpecials,
  Testimonials,
} from "../components/partials/LandingComponents";

function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <WeeklySpecials />
      <Testimonials />
    </Layout>
  );
}

export default LandingPage;
