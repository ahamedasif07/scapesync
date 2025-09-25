import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FotterLogo from "../../../public/images/Vector (1).png";
import Image from "next/image";
import PlayStor from "../../../public/images/Store download button (1).png";
import Appstor from "../../../public/images/Store download button.png";
import footerBgImage from "../../../public/images/Mask group.png";

export default function Footer() {
  return (
    <footer className="bg-[#0D3B2E] overflow-hidden relative pt-[50px] max-w-screen-2xl mx-auto text-white bg-no-repeat bg-cover bg-center ">
      <Image
        src={footerBgImage}
        objectFit="fill"
        alt="Download on the App Store"
        className="object-fill absolute right-0 top-0 "
      />
      <div className=" overflow-hidden px-[15px] py-[10px] sm:px-[80px] md:px-[120px]   sm:py-[15px]  pb-[50px]  justify-between flex md:flex-row flex-col items-start md:items-center lg:items-start gap-10">
        <div className="flex flex-col lg:flex-row items-start gap-[40px]">
          {/* Left Section: Logo + Text */}
          <div className="text-center lg:text-left ">
            <div>
              <Image
                width={150}
                height={200}
                src={FotterLogo}
                alt="ScapeSync Logo"
                className=""
              />
              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-6 text-xl mt-[70px]">
                <a href="#" className="hover:text-gray-300">
                  <FaYoutube />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaXTwitter />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* middle text */}
          <div>
            <p className=" text-sm leading-relaxed text-gray-200 max-w-[500px]">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>
          </div>
        </div>
        {/* Right Section: App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#">
            <Image
              src={Appstor}
              width={100}
              height={100}
              alt="Download on the App Store"
              className="h-12"
            />
          </a>
          <a href="#">
            <Image
              src={PlayStor}
              width={100}
              height={100}
              alt="Download on Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className=" border-t overflow-hidden px-[15px] sm:px-[80px] md:px-[120px]  md:py-[19px] sm:py-[15px] max-w-screen-2xl border-gray-700 py-2  text-sm text-gray-400">
        © 2021-2025, ScapeSync. All Rights Reserved.
      </div>
    </footer>
  );
}
