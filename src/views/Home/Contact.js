import React from 'react';
import contactIcon from "./../../images/contactIcon.png";
import contactIcon2 from "./../../images/contactIcon2.png";
import contactIcon3 from "./../../images/contactIcon3.png";
import phone from "./../../images/phone.png";

function Contact() {
    return (
        <div className='bg-contact relative overflow-hidden'>
            <div className='inner-container px-4 py-28 text-white'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>                    
                  <div className="lg:order-1 order-2 ">
                      <div className='lg:block hidden'>
                          <h2 className='mb-3 text-[40px]'>Contact Us Today</h2>
                          <p className='mb-5'>We would love to hear more about your project!</p>
                      </div>
                  {ContactCards.map(({id,img1,title}) => {
                    return(
                        <div key={id} className='flex gap-8 mb-6 '>
                            <div className='bg-white max-w-[50px] min-h-[40px]  w-full rounded-[4px]'>
                                <div className='flex justify-center items-center h-full'>
                                    <img src={img1} alt=""  />
                                </div>
                            </div>
                            <h2 className="text-lg ">
                                {title}
                            </h2>
                        </div>
                    )
                    }) }

                  </div>
                    <div className="lg:order-2 order-1">
                    <div className='lg:hidden block text-center'>
                          <h2 className='mb-2 text-[40px]'>Contact Us Today</h2>
                          <p className='mb-8'>We would love to hear more about your project!</p>
                      </div>
                        <form className='lg:mb-0 mb-12'>
                           <div className='flex md:flex-row flex-col justify-center items-center gap-x-6 '>
                                <input type="text" placeholder="Your name" className='input-contact mb-6' />
                                <input type="text" placeholder="Your email address" className='input-contact mb-6' />
                                
                           </div>
                           <div className='flex md:flex-row flex-col justify-center items-center gap-x-6 '>
                                <input type="text" placeholder="Your name" className='input-contact mb-6' />
                                <input type="text" placeholder="Your email address" className='input-contact mb-6' />
                                
                           </div>
                           <div className='flex justify-center mb-9'>
                                <textarea rows="4" cols="50" className='text_area'>
                                <p className='text-white hover:text-grayLight text-base'>Tell us about your project</p>
                                </textarea>
                           </div>
                           <div className='flex lg:justify-start justify-center'>
                               <a href="/" className='message'>Send Message</a>
                           </div>

                        </form>
                    </div>
                </div>
            </div>
            <div>
                {/* <img src={phone} alt="" className='absolute left-[32%] top-[60%]' /> */}
            </div>
        </div>
    );
}

export default Contact;
const ContactCards=[
    {
        id:1,
        img1:contactIcon,  
        title:"Baton Rouge",      
    },
    {
        id:2,
        img1:contactIcon2,
        title:"rotolotaylor@gmail.com",
    },
    {
        id:3,
        img1:contactIcon3,
        title:"+333-333-3333 ",
    },
   
]
{/* <div>
                        <h1 className='font-bold text-white'>Contact Us Today</h1>
                        <p className=''>We would love to hear more about your project!</p>
                        <div className='flex flex-col gap-y-4'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-white px-3 py-2 rounded-[4px]'>
                                    <img src={contactIcon} alt=""  w="26" h="25" />
                                </div>
                                <p>Baton Rouge</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='bg-white px-3 py-2 rounded-[4px]'>
                                    <img src={contactIcon2} alt=""  w="140" h="140" />
                                </div>
                                <p>rotolotaylor@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='bg-white px-3 py-2 rounded-[4px]'>
                                    <img src={contactIcon3} alt="" w="26" h="25" />
                                </div>
                                <p>+333-333-3333 </p>
                            </div>
                        </div>
                    </div> */}