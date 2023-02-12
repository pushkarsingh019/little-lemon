import React from "react";
import Navbar from "./Navbar";

function Layout({ children, screen }) {
  return (
    <React.Fragment className="px-44">
      <Navbar />
      <main className="px-28">{children}</main>
    </React.Fragment>
  );
}

export default Layout;
