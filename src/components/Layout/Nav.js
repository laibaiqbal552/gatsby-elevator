import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Logo2 from "./../../images/logo2.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleSticky = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  });
  return (
    <div
      className={`${
        sticky
          ? "fixed -top-24 inset-x-0 translate-y-24 bg-blueFooter"
          : "translate-y-0"
      } transition-all duration-500 ease-in-out z-50 px-5 w-full`}
    >
      <div className="w-full" style={{ backgroundColor: backgroundColor }}>
        <div className=" max-w-[1560px] mx-auto px-3 md:px-10 ">
          <div className="flex justify-between self-center items-center w-full py-5">
            <Link href={`/`}>
              <a>
                <img src={Logo2} alt="logo" className="w-[200px]" />
              </a>
            </Link>
            <ul className=" hidden md:flex self-center ">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id} className="flex self-center">
                    <Link href={url}>
                      <a className=" px-6 text-base text-white MyriadProSemiBold hover:text-white transition-all duration-300 ease-in-out capitalize">
                        {text}
                      </a>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href={"/"}>
                  <a className="capitalize text-[#00aff0] flex self-center py-3 px-6 shadow-2xl rounded-tl-full rounded-bl-full rounded-tr-full MyriadProSemiBold bg-white  ">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>

            <div className="md:hidden block ">
              <button className="text-white text-[28px]" onClick={toggleDrawer}>
                <GiHamburgerMenu />
              </button>
              <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
                <div className="bg-blueFooter text-textBlue h-full w-full pt-6 mb-10 px-5">
                  <Link href="/">
                    <a>
                      <img src={Logo2} alt="logo" />
                    </a>
                  </Link>
                  <ul className="flex flex-col px-4 mt-8 ">
                    {links.map((link) => {
                      const { id, text, url } = link;
                      return (
                        <li key={id} className="pb-5">
                          <Link href={url}>
                            <a className="capitalize MyriadProSemiBold text-textBlue  ">
                              {text}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                    <li className="pt-5">
                      <Link href={"/"}>
                        <a className="capitalize text-[#00aff0] py-3 px-6 shadow-2xl w-full flex text-center justify-center rounded-tl-full rounded-bl-full rounded-tr-full MyriadProSemiBold bg-white  ">
                          Contact
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

const links = [
  { id: 1, text: "About", url: "/about" },
  { id: 2, text: "Services", url: "/services" },
  { id: 3, text: "Projects", url: "/projects" },
  { id: 4, text: "Careers", url: "/career" },
];
