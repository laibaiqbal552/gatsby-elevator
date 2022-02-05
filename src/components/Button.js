import React from "react";

const Button = ({
  width,
  height,
  children,
  onClick,
  className,
  type,
  fontSize,
  fontWeight,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        maxWidth: width,
        height: height,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
      className={`${className} group inline-flex justify-center relative  px-3 text-[13px] font-light items-center w-full hover:bg-white text-white bg-black hover:text-gray border-2 border-white  transition-all duration-300 ease-in-out uppercase `}
    >
      {children}
      <span className=" transition-all duration-300 font-bold translate-x-0 group-hover:translate-x-[4px]"></span>
    </button>
  );
};

export default Button;
