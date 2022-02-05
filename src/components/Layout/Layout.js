import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./header";


const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header/>
        {/* <Nav /> */}
      </div>
      {children}
   
      <Footer />
    </div>
  );
};

export default Layout;
