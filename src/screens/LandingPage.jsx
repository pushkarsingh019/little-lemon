import React from "react";
import Layout from "../components/Layout";

// importing components
import {
  HeroSection,
  WeeklySpecials,
  Testimonials,
  CTA,
} from "../components/partials/LandingComponents";

function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <WeeklySpecials />
      <Testimonials />
      <CTA />
    </Layout>
  );
}

export default LandingPage;
