import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header-bgImg">
      <Nav />
      <div className="max-w-[1560px] mx-auto px-3 md:px-10">
        <div className="max-w-[523px] mt-[300px] md:mt-24 md:text-left text-center ">
          <h1 className="text-white MyriadProSemiBold font-bold text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[46px]  xl:leading-[60px]  mb-10  md:mb-20 ">
            Software Beyond your Expectations
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
