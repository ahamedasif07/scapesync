"use client";

import Image from "next/image";
import StorImage from "../../../public/images/Frame 2147227442.png";
import UnderLine from "../../../public/images/Vector 7621.png";
import VictorPng from "../../../public/images/Vector.png";
import HeroImage from "../../../public/images/Rectangle 161124256.png";

export default function Hero() {
  return (
    <section className="relative ">
      {/* overflow-hidden to contain gradient */}
      <div className="py-5 max-w-screen-2xl  mx-auto  grid grid-cols-1 lg:grid-cols-2 items-center place-content-between relative ">
        {/*---------------------------- Left Content --------------------------------*/}
        <div data-aos="fade-up" className="text-center lg:text-left relative ">
          <h1 className="text-[40px] md:text-[60px] font-extrabold text-[#212B36] leading-[62px] tracking-wide relative inline-block">
            All Your Jobs <br />
            <Image
              src={VictorPng}
              alt="underline"
              width={100}
              height={70}
              className="absolute bottom-[60px] left-1/2 -ml-[30px] -z-10"
            />
            <span className="relative inline-block">
              One Smart App
              <Image
                src={UnderLine}
                alt="underline"
                width={290}
                height={70}
                className="absolute right-0 bottom-[-10px] -z-10"
              />
            </span>
          </h1>

          <p className="mt-6 text-[16px] text-[#637381] max-w-lg mx-auto lg:mx-0">
            Built for business owners, employees, and clients to streamline job
            scheduling, service tracking, and team management in one powerful
            app.
          </p>

          <div className="mt-[45px] flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="relative w-[150px] h-[45px] md:w-[310px] md:h-[49px]"
            >
              <Image
                src={StorImage}
                alt="App Store"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/*---------------------- Right Image---------------------------*/}
        <div
          data-aos="fade-down"
          className="relative w-full my-[30px] py-6 lg:my-0 max-w-[650px] h-[400px] md:h-[500px] lg:h-[600px] flex justify-center lg:justify-end"
        >
          <Image
            src={HeroImage}
            alt="App Preview"
            fill
            className="object-fill "
            priority
          />

          {/* Gradient on top of image */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#FFFFFF] via-white/50 via-70% to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
