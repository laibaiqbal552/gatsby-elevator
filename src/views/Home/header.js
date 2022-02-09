import React from "react";

function Header() {
  return (
    <div className="header-bgImg pt-[100px] bg-cover bg-center h-screen w-full">
      <div className="max-w-[1560px] mx-auto px-3 md:px-10">
        <div className="max-w-[523px] sm:text-left text-center ">
          <h1 className="text-white MyriadProSemiBold lg:mt-9  md:mt-14 mt-24 font-bold text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[46px]  xl:leading-[60px]  mb-10  md:mb-20 ">
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
  // header-bgImg
}
export default Header;
