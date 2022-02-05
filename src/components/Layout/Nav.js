import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import Logo2 from "./../../images/logo2.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full">
      <div className="inner-container ">
        <div className="flex justify-between items-center w-full py-5">
          <Link href={`/`}>
            <a>
              <img src={Logo2} alt="logo" width="228" height="32" />
            </a>
          </Link>
          <ul className=" hidden md:flex ">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a className=" px-6 text-base text-white MyriadProSemiBold hover:text-white transition-all duration-300 ease-in-out capitalize">
                      {text}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className="pb-5">
              <Link href={"/"}>
                <a className="capitalize text-[#00aff0] py-3 px-6 shadow-2xl rounded-tl-full rounded-bl-full rounded-tr-full MyriadProSemiBold bg-white  ">Contact</a>
              </Link>
            </li>
          </ul>

          <div className="md:hidden block ">
            <button className="text-white text-2xl" onClick={toggleDrawer}>
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
                          <a className="capitalize MyriadProSemiBold text-textBlue px-6 ">
                            {text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                  <li className="pb-5">
                    <Link href={"/"}>
                      <a className="uppercase text-textBlue px-6 ">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Drawer>
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
  { id: 4, text: "Careers", url: "/careers" },
];
