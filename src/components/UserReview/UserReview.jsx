// components/TestimonialsSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import bgGrediant from "../../../public/images/Ellipse 21.png";
import userImgOne from "../../../public/images/user1.png";
import userImgTow from "../../../public/images/user2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Farzana H.",
    role: "Owner, CleanPro Services",
    text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    image: userImgOne,
  },
  {
    name: "Ahmed R.",
    role: "Technician",
    text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    image: userImgTow,
  },
  {
    name: "Farzana H.",
    role: "Rafiq M., Homeowner",
    text: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    image: userImgOne,
  },
  {
    name: "Ahmed R.",
    role: "Technician",
    text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    image: userImgTow,
  },
];

export default function UserReview() {
  return (
    <section className="relative pb-16 bg-[#FDFFFD] bg-no-repeat bg-cover bg-center">
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFFFD]/80 to-[#FDFFFD]/80"></div>

      <div className="relative max-w-screen-2xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-[32px] sm:text-[38px] md:text-[48px] font-bold text-[#212B36] relative text-center max-w-[700px] mx-auto">
          What Our Users Are Saying
        </h2>
        <p className="text-[#637381] text-[14px] mt-[8px] text-center max-w-[650px] mx-auto ">
          Real stories from clients, employees, and business owners who use our
          app every day.
        </p>

        {/* Swiper Slider */}
        <div className="mt-10 p-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="p-6 flex flex-col h-[220px] rounded-2xl shadow-lg bg-white transition">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 text-left leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
