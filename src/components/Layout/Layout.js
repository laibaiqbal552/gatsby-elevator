import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header backgroundColor="rgba(0,0,0,0)"/>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
