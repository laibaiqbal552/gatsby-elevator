import React,{useState, useEffect} from "react";
 import { FaFacebookF, FaTwitter, FaPinterestP,FaArrowUp } from "react-icons/fa";
import footer from "./../../images/logo.png";
import footerImg from "./../../images/footer.png"
const Footer = () => {
  const [aStateVariable, setAStateVariable] = useState(false);

  const handleClick = () => {
     setAStateVariable(true);
  }
  
  useEffect(() => {
    if(aStateVariable === true) {
      window.scrollTo(0, 0)
    }
  }, [aStateVariable])
  return (
    <div className="bg-blueFooter  pt-20 ">
      <div className="inner-container text-textBlue pb-12">
        <div className="grid lg:grid-cols-4 gap-7   grid-cols-1">
            <div className="lg:border-r lg:border-white px-7">
              <div className="flex justify-center flex-col items-center lg:mb-0 mb-5">
                <a href="/">
                 <div>
                  <img src={footer} alt="" />
                 </div>
                </a>
                <p className="text-base my-4 md:text-left text-center">Lorem Ipsum is simply dummy text of the printing and typesetting!</p>
                <div className="flex justify-center">
                  <img src={footerImg} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-2 md:block hidden">
              <div className="flex md:justify-between justify-center md:flex-row flex-col gap-6">
                <div>
                  <h5 className="footer-heading">Company</h5>
                <div className="pb-2">
                  <a href="/" className="pb-5">About</a>
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
                <div className=" md:block hidden">
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
                <div className=" md:block hidden">
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
            </div>
            <div className="flex md:justify-start justify-center text-center">
              <div>
                <h5 className="footer-heading">Follow Us</h5>
                <div className="flex gap-4 mb-6 justify-center">
                  <div className="fb-footer">
                    <FaFacebookF className="" />
                  </div>
                  <div className="tw-footer">
                    <FaTwitter/>
                  </div>
                  <div className="pin-footer">
                    <FaPinterestP/>
                  </div>
                </div>
               <p className="text-zincLight"> <span className="text-footerLink">Email:</span>  support@domain.com</p>
               <p><span className="text-footerLink">Phone:</span>  +1 123 456 7890</p>
              </div>
            </div>
        </div>
      </div>
      <div className="inner-container py-5 border-t relative border-footerBorder">
      <div className="absolute left-0 right-0 -top-5">
      <div onClick={handleClick} className=" cursor-pointer bg-zincLight max-w-[30px] min-h-[30px] rounded-full items-center mx-auto flex justify-center">
          <FaArrowUp className="text-white "/>
        </div>
      </div>
        <div className=" flex md:justify-between items-center justify-center md:flex-row flex-col">
          <div>
            <p className="font-light text-gray md:text-xs text-[23px] text-center">
            Copyright © 2021 Desing by <span className="text-zincLight font-semibold">Emersion</span>
            </p>
          </div>

          <div className="md:flex gap-x-6  hidden">
            <div>
              {" "}
              <a href="/" className="text-[10px] text-gray font-light">
                TERMS & CONDITIONS
              </a>
            </div>
            <div>
              <span className="text-gray">|</span>
            </div>
            <div>
              <a href="/" className="text-[10px] text-gray font-light">
                PRIVACY POLICY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
