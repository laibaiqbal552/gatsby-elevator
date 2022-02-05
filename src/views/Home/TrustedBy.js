import React from 'react';
import Trust1 from "./../../images/trust1.png";
import Trust2 from "./../../images/trust2.png";
import Trust3 from "./../../images/trust3.png";
import Trust4 from "./../../images/trust4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/lazy";

// import required modules
import { Autoplay, Lazy } from "swiper";

function Trustedby() {
    return (
        <div className="bg-offWhite lg:pt-8 pt-0 lg:pb-36 md:pb-4 pb-0">
            <div className="inner-container" >
                <div className="text-center mb-20">
                        <h1 className="sub-heading">Trusted by</h1>
                </div>
                <div className="">
              <SliderTrusted/>
                </div>
            </div>
        </div>
    );
}

export default Trustedby;
const SliderTrusted=()=>{
    return(

<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
      <Swiper
        breakpoints={{
          slidesPerView: 1,
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        lazy={true}
        modules={[Autoplay, Lazy]}
        className="mySwiper "
      >
          {TrustedCards.map(({id,img1,title}) => {
                    return(
                        <SwiperSlide key={id} className='bg-white py-6 rounded-md hover:shadow-lg'>
                            <div className='flex justify-center flex-col items-center'>
                                <div className='mb-4'>
                                    <img src={img1} alt="" width="50" height="50" />
                                </div>
                                <h2 className="text-xl text-dark">
                                    {title}
                                </h2> 
                            </div>                          
                        </SwiperSlide>
                    )
                    }) }
      </Swiper>
    </div>
    )
}
const TrustedCards=[
    {
        id:1,
        img1:Trust1,
        title:"KISSmetrics",
        
    },
    {
        id:2,
        img1:Trust2,
        title:"Metorik",
      
    },
    {
        id:3,
        img1:Trust3,
        title:"Nicereply",
       
    },
    {
        id:4,
        img1:Trust4,
        title:"Software Updater",
       
    },
   
]