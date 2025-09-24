// components/ResponsiveSection.tsx
import Image from "next/image";
import underlinePng from "../../../public/images/Frame 2147227474.png";
import PhoneOne from "../../../public/images/Rectangle 161124259 (1).png";

export default function ServicesOverview() {
  return (
    <section className="relative w-full bg-white py-16 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] sm:text-[38px] md:text-[48px] font-bold text-[#212B36] relative text-center max-w-[500px] mx-auto">
          Build for Everyone
          <Image
            src={underlinePng}
            alt="underline"
            width={240}
            height={80}
            className="absolute left-1/2 transform ml-[40px] md:ml-[100px] -translate-x-1/2 -bottom-4 md:-bottom-4"
          />
        </h2>

        <p className="text-[#637381] tect-[14px] mt-[18px] text-center max-w-[650px] mx-auto ">
          Whether you’re booking services, managing tasks, or running
          operations, we’ve designed the perfect experience for you.
        </p>
      </div>
      {/*-------------------------- contents ---------------------------*/}
      <div className="py-22 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/*----------------- Right Image ------------------------*/}
          <div className="flex relative justify-center lg:justify-end order-1 md:order-2">
            <Image
              src={PhoneOne}
              alt="App Mockup"
              className="w-[280px] md:w-[340px] lg:w-[550px] h-[300px] md:h-[450px]"
            />
            {/* Gradient on top of image */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>
          </div>

          {/* ---------------------Left Content -------------------------*/}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            {/* Badge */}
            <div className="border-[2px] border-green-600 inline-block rounded-full px-3 py-1 text-sm md:text-base text-green-700 font-medium">
              Users
            </div>

            {/* Heading & Paragraph */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Book services, track progress and stay updated
              </h3>
              <p className="text-gray-600 mt-2 max-w-md mx-auto md:mx-0">
                Easily schedule appointments, get real-time updates, and enjoy a
                smooth, transparent service experience.
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-2 text-gray-800 flex flex-col md:items-start items-center  font-medium">
              <li className="flex items-center gap-2">
                <span className="h-[18px]  md:w-[3px]  bg-green-600 rounded-md"></span>
                Book services in seconds
              </li>
              <li className="flex items-center gap-2">
                <span className="h-[18px]  md:w-[3px]  bg-green-500 rounded-md"></span>
                Track real-time job updates
              </li>
              <li className="flex items-center gap-2">
                <span className="h-[18px]  md:w-[3px]   bg-green-400 rounded-md"></span>
                Schedule appointments at your convenience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
