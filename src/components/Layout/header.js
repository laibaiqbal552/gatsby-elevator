import React from "react";
import Nav from "./Nav";

function Header(){
    return(
        <div className="header-bgImg">
            <Nav/>
        <div className="inner-container">
        
           <div className="max-w-[523px] mt-24 sm:text-left text-center ">               
            <h1 className="text-white font-bold lg:text-[40px] md:text-4xl text-3xl  mb-7 ">
                Software Beyond your Expectations
            </h1>
            <div >
                <a href="/" className="header-btn" >Get Started</a>
            </div>          
           </div>
        </div>
        </div>
    )
}
export default Header;