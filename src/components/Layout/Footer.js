import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaArrowUp,
  FaVimeoV,
} from "react-icons/fa";
import footer from "./../../images/logo.png";
import footerImg from "./../../images/footer.png";
const Footer = () => {
  const [aStateVariable, setAStateVariable] = useState(false);

  const handleClick = () => {
    setAStateVariable(true);
  };

  useEffect(() => {
    if (aStateVariable === true) {
      window.scrollTo(0, 0);
    }
  }, [aStateVariable]);
  return (
    <div className="bg-blueFooter  pt-24 ">
      <div className="inner-container text-textBlue pb-12">
        <div className="grid    grid-cols-1 lg:grid-cols-6 gap-7">
          <div className="lg:border-r lg:border-white px-7 col-span-2">
            <div className=" lg:mb-0 mb-5">
              <a href="/">
                <div>
                  <img src={footer} alt="" />
                </div>
              </a>
              <p className="text-base MyriadProREGULAR my-4 md:text-left text-center">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting!
              </p>
              <div className="flex">
                <img src={footerImg} alt="" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h5 className="footer-heading">Company</h5>
              <div className="pb-2">
                <a href="/" className="pb-5">
                  About
                </a>
              </div>
              <div className="pb-2">
                <a href="/">Services</a>
              </div>
              <div className="pb-2">
                <a href="/">Projects</a>
              </div>
              <div className="pb-2">
                <a href="/">Career</a>
              </div>
              <div className="pb-2">
                <a href="/">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h5 className="footer-heading ">Emersion Services</h5>
              <div className="pb-2">
                <a href="/">Staff Augmentation</a>
              </div>
              <div className="pb-2">
                <a href="/">Custom Software</a>
              </div>
              <div className="pb-2">
                <a href="/">Development</a>
              </div>
              <div className="pb-2">
                <a href="/">Data Analytics</a>
              </div>
              <div className="pb-2">
                <a href="/">Startup Consulting</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h5 className="footer-heading">Team Solutions</h5>
              <div className="pb-2">
                <a href="/">Engineering</a>
              </div>
              <div className="pb-2">
                <a href="/">Designers</a>
              </div>
              <div className="pb-2">
                <a href="/">Sales</a>
              </div>
              <div className="pb-2">
                <a href="/">Developers</a>
              </div>
              <div className="pb-2">
                <a href="/">Marketing</a>
              </div>
              <div className="pb-2">
                <a href="/">See All Teams</a>
              </div>
            </div>
          </div>

          <div className=" flex justify-end ">
            <div>
              <h5 className="footer-heading">Follow Us</h5>
              <div className="flex gap-4 mb-6 ">
                <div className="fb-footer">
                  <FaFacebookF className="" />
                </div>
                <div className="tw-footer">
                  <FaTwitter />
                </div>
                <div className="tw-footer">
                  <FaVimeoV />
                </div>
                <div className="pin-footer">
                  <FaPinterestP />
                </div>
              </div>
              <p className="text-zincLight">
                <span className="text-footerLink MyriadProSemiBold">
                  Email:
                </span>
                support@domain.com
              </p>
              <p className="MyriadProSemiBold">
                <span className="text-footerLink MyriadProSemiBold">
                  Phone:
                </span>
                +1 123 456 7890
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inner-container py-5 border-t relative border-footerBorder">
        <div className="absolute left-0 right-0 -top-5">
          <div
            onClick={handleClick}
            className=" cursor-pointer bg-zincLight max-w-[30px] min-h-[30px] rounded-full items-center mx-auto flex justify-center"
          >
            <FaArrowUp className="text-white " />
          </div>
        </div>
        <div className=" flex md:justify-between items-center justify-center md:flex-row flex-col">
          <div>
            <p className="font-light MyriadProSemiBold text-gray md:text-xs text-[23px] text-center">
              Copyright © 2021 Desing by
              <span className="text-zincLight MyriadProSemiBold pl-0.5 font-semibold">
                Emersion
              </span>
            </p>
          </div>

          <div className="md:flex gap-x-6  hidden">
            <div>
              <a
                href="/"
                className="text-[10px] MyriadProBold text-gray font-light"
              >
                Terms & Conditions
              </a>
            </div>
            <div>
              <span className="text-gray">|</span>
            </div>
            <div>
              <a
                href="/"
                className="text-[12px] MyriadProBold text-gray font-light"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
