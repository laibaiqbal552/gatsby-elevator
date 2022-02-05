import React from "react";
import Footer from "../../components/Layout/Footer";
import Nav from "../../components/Layout/Nav";
import Header from "./Header";
import SoftwareDeveloper from "./SoftwareDeveloper";
import Contact from "../Home/Contact";
function Index() {
  return (
    <div>
      <Nav backgroundColor="#1F2023" />
      <Header />
      <SoftwareDeveloper />
      <div className="bg-[#1F2023]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
