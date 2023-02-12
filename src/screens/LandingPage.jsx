import React from "react";
import Layout from "../components/Layout";

// importing components
import {
  HeroSection,
  WeeklySpecials,
} from "../components/partials/LandingComponents";

function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <WeeklySpecials />
    </Layout>
  );
}

export default LandingPage;
