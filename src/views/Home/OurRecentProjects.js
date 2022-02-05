import React from "react";
import Recent from "./../../images/Recent.png";



function OurRecentProjects() {
    return(
        <div className="bg-offWhite pt-24 pb-36">
            <div className="inner-container" >
                <div className="text-center mb-20">
                    <h1 className="sub-heading">Our Recent Projects</h1>
                </div>
                <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 lg:mb-36 mb-12">
                {RecentProjectsCards.map(({id,img1,title,desc}) => {
                    return(
                        <div key={id} className="lg:max-w-full max-w-[374px] mx-auto flex justify-center flex-col ">
                            <div>
                                <img src={img1} alt="" width="374" height="374" />
                            </div>
                            <h2 className="text-xl text-dark">
                                {title}
                            </h2>
                            <p className="text-textRecent text-sm">{desc}</p>
                        </div>
                    )
                    }) }
                </div>
                    <div className="flex justify-center">
                        <a href="/" className="text-Zinc  px-4 border-2 rounded-md border-Zinc py-2">View All Work</a>
                    </div>
            </div>
        </div>
    )
}
export default OurRecentProjects;
const RecentProjectsCards=[
    {
        id:1,
        img1:Recent,
        title:"Portfolio Staff Augmentation",
        desc:"Located in Baton Rouge, Emersion Technology is an IT consulting firm that strives to exceed our clients technology expectations everyday.",
        
    },
    {
        id:2,
        img1:Recent,
        title:"Portfolio Staff Augmentation",
        desc:"Located in Baton Rouge, Emersion Technology is an IT consulting firm that strives to exceed our clients technology expectations everyday.",
      
    },
    {
        id:3,
        img1:Recent,
        title:"Portfolio Staff Augmentation",
        desc:"Located in Baton Rouge, Emersion Technology is an IT consulting firm that strives to exceed our clients technology expectations everyday.",
       
    },
   
]