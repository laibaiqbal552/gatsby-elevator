import React from "react";
import Icon1 from "./../../images/servicesIcon1.png";
import Icon2 from "./../../images/servicesIcon2.png";
import Icon3 from "./../../images/servicesIcon3.png";
import Icon4 from "./../../images/servicesIcon4.png";
import Icon5 from "./../../images/services1.png";
import Icon6 from "./../../images/services2.png";
import Icon7 from "./../../images/services3.png";
import Icon8 from "./../../images/services4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/lazy";

// import required modules
import { Autoplay, Lazy } from "swiper";

function OurServices() {
  return (
    <div className="bg-offWhite pt-24 pb-2 md:pb-36">
      <div className="inner-container">
        <div className="text-center mb-[55px]">
          <h1 className="sub_heading">Our Services</h1>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
}
export default OurServices;
const Slider = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {ServicesCards.map(({ id, img1, title, desc, img2 }) => {
        return (
          <div key={id} className=" px-4 md:px-0 pb-10">
            <div className="services-grid shadow-lg ">
              <div className="flex justify-between min-h-[80px]">
                <div className="">
                  <h3 className="text-headingblue MyriadProSemiBold  text-[20px] leading-[24px] mt-3">
                    {title}
                  </h3>
                </div>
                <div className="max-w-[70px] w-full">
                  <img src={img1} alt="" width="104" height="104" />
                </div>
              </div>
              <p className="text-textBlue MyriadProREGULAR text-[15px] leading-[20px] min-h-[120px]">
                {desc}
              </p>
              <div className="flex justify-end self-end ">
                <img src={img2} alt="" className="w-full" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const ServicesCards = [
  {
    id: 1,
    img1: Icon1,
    title: "Staff Aug ",
    desc: "Need Software Developers to staff your next project? Our diverse team of engineers come from all different types of backgrounds!",
    img2: Icon5,
  },
  {
    id: 2,
    img1: Icon2,
    title: "Custom Software Development",
    desc: "Looking to automate processes, cut your expenses, and make the process of doing business seamless? Let us build you a custom solution! ",
    img2: Icon6,
  },
  {
    id: 3,
    img1: Icon3,
    title: "Data Analytics",
    desc: "Want to leverage your data to make more informed business decisions? Or maybe you need help collecting and organizing your data. Let our analyst find those trends!",
    img2: Icon7,
  },
  {
    id: 4,
    img1: Icon4,
    title: "Startup Consulting",
    desc: "Building a software startup company? Need some direction in what technologies to you or some oversight on product development. You’ve come to the right place!",
    img2: Icon8,
  },
];
