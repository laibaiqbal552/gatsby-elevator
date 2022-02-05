import React from 'react';
import About from "./../../images/About.png";
import AboutIcon from "./../../images/AboutIcon.png";
function Aboutemersion() {
    return (
        <div className='bg-blueDefault py-24'>
            <div className='inner-container'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-9 place-items-center'>
                <div>
                    <img src={About} alt="" />
                </div>
                <div className="flex flex-col items-center lg:text-left text-center">
                    <div className='mb-5'>
                        <img src={AboutIcon} alt="" />
                    </div>
                    <h1 className='text-3xl text-headingblue mb-4'>
                    About Emersion<br/> Technology
                    </h1>
                    <p className='text-textBlue text-base'>Located in Baton Rouge, Emersion Technology is an IT consulting firm that strives to exceed our clients technology expectations everyday. Our team of engineers are not only here to develop the best solution possible, but to also keep our clients’ goals in mind. Whether this would be to automate or simplify a process, leverage data to make more informed decisions, or to simply staff an
internal project with more engineers, Emersion is here to help.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Aboutemersion;
