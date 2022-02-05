import React from "react";

function Header() {
  return (
    <div className="bg-primary pt-10">
      <div className="main-container relative">
        <div className="bg-career bg-CareerBg h-[70vh] bg-cover md:bg-top bg-center bg-no-repeat">
          <div className="overlay">
            {" "}
            <h1 className="flex justify-center items-center h-full lg:text-7xl md:text-6xl text-5xl relative z-10 text-white">
              CAREER
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
