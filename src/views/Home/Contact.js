import React from "react";
import contactIcon from "./../../images/contactIcon.png";
import contactIcon2 from "./../../images/contactIcon2.png";
import contactIcon3 from "./../../images/contactIcon3.png";

function Contact() {
  return (
    <div className="bg-contact relative overflow-hidden">
      <div className="inner-container px-4 py-28 text-white">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="lg:order-1 order-2 ">
            <div className="lg:block hidden">
              <h2 className="mb-1 text-[40px] MyriadProBold">
                Contact Us Today
              </h2>
              <p className="mb-10 text-[18px] MyriadProSemiBold">
                We would love to hear more about your project!
              </p>
            </div>
            {ContactCards.map(({ id, img1, title }) => {
              return (
                <div key={id} className="flex gap-5 mb-6 ">
                  <div className="bg-white max-w-[56px] min-h-[54px] shadow-2xl  w-full rounded-[4px]">
                    <div className="flex justify-center items-center h-full">
                      <img src={img1} alt="" className="w-6" />
                    </div>
                  </div>
                  <div className="flex self-center">
                    <h2 className="text-lg MyriadProSemiBold">{title}</h2>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:order-2 order-1">
            <div className="lg:hidden block text-center">
              <h2 className="mb-2 text-[40px]">Contact Us Today</h2>
              <p className="mb-8">
                We would love to hear more about your project!
              </p>
            </div>
            <form className="lg:mb-0 mb-12">
              <div className="flex md:flex-row flex-col justify-center items-center gap-x-6 ">
                <input
                  type="text"
                  placeholder="Your name"
                  className="input-contact mb-6"
                />
                <input
                  type="text"
                  placeholder="Your email address"
                  className="input-contact mb-6"
                />
              </div>
              <div className="flex md:flex-row flex-col justify-center items-center gap-x-6 ">
                <input
                  type="text"
                  placeholder="Your name"
                  className="input-contact mb-6"
                />
                <input
                  type="text"
                  placeholder="Your email address"
                  className="input-contact mb-6"
                />
              </div>
              <div className="flex justify-center mb-9">
                <textarea
                  rows="4"
                  cols="50"
                  className="text_area"
                  placeholder=" Tell us about your project"
                ></textarea>
              </div>
              <div className="flex lg:justify-start justify-center">
                <a href="/" className="message">
                  Send Message
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
const ContactCards = [
  {
    id: 1,
    img1: contactIcon,
    title: "Baton Rouge",
  },
  {
    id: 2,
    img1: contactIcon2,
    title: "rotolotaylor@gmail.com",
  },
  {
    id: 3,
    img1: contactIcon3,
    title: "+333-333-3333 ",
  },
];
