import Image from "next/image";
import React from "react";
import NavLogo from "../../../public/images/image 7.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[15px] py-[10px] sm:px-[80px] md:px-[120px] md:py-[19px] sm:py-[15px]">
      <Image
        className=""
        height={60}
        width={147}
        src={NavLogo}
        alt="nav logo"
      ></Image>
      <button className="bg-[#3BA334] text-gray-200 px-[26px] py-[10px] font-semibold rounded-[8px] ">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
