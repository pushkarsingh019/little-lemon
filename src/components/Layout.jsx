import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, screen }) {
  return (
    <React.Fragment className="px-44">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
