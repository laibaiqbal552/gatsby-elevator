import React from "react";
import Recent from "./../../images/Recent.png";

function OurRecentProjects() {
  return (
    <div className="bg-offWhite pt-24 pb-20">
      <div className="inner-container">
        <div className="text-center mb-20">
          <h1 className="text-[30px] font-bold MyriadProSemiBold text-[#051441]">
            Our Recent Projects
          </h1>
        </div>
        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-8 mb-[70px]">
          {RecentProjectsCards.map(({ id, img1, title, desc }) => {
            return (
              <div key={id}>
                <div className="mb-4">
                  <img src={img1} alt="" className="w-full" />
                </div>
                <h2 className="text-[28px] MyriadProREGULAR text-dark mb-2">{title}</h2>
                <p className="text-textRecent MyriadProREGULAR text-[20px]">{desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <a
            href="/"
            className="text-Zinc  border-2 rounded-md border-Zinc px-8  py-3 transition-all hover:shadow-xl"
          >
            View All Work
          </a>
        </div>
      </div>
    </div>
  );
}
export default OurRecentProjects;
const RecentProjectsCards = [
  {
    id: 1,
    img1: Recent,
    title: "Portfolio Staff Augmentation",
    desc: "Located in Baton Rouge, Emersion Technology is an IT consulting firm that strives to exceed our clients technology expectations everyday.",
  },
  {
    id: 2,
    img1: Recent,
    title: "Portfolio Staff Augmentation",
    desc: "Located in Baton Rouge, Emersion Technology is an IT consulting firm that strives to exceed our clients technology expectations everyday.",
  },
  {
    id: 3,
    img1: Recent,
    title: "Portfolio Staff Augmentation",
    desc: "Located in Baton Rouge, Emersion Technology is an IT consulting firm that strives to exceed our clients technology expectations everyday.",
  },
];
