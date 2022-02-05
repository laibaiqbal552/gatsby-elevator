import React from "react";
import JoinOurTeam from "./JoinOurTeam";
import Header from "./Header";
import Nav from "../../components/Layout/Nav";
import Footer from "../../components/Layout/Footer";
import Contact from "../Home/Contact";

function Index() {
  return (
    <div>
      <Nav backgroundColor="#1F2023" />
      <Header />
      <div className="bg-[#1F2023]">
        <JoinOurTeam />
      </div>
      <div className="bg-[#1F2023]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
