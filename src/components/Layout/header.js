import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header-bgImg">
      <Nav />
      <div className="inner-container">
        <div className="max-w-[523px] mt-24 sm:text-left text-center ">
          <h1 className="text-white MyriadProSemiBold font-bold lg:text-[48px] leading-[90px] md:text-4xl text-3xl  mb-20 ">
            Software Beyond your
            <br />
            <span className="pt-5 block">Expectations</span>
          </h1>
          <div>
            <a href="/" className="header_btn MyriadProSemiBold">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
