"use client";

import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqs = [
  {
    question: "Is the app free to use?",
    answer:
      "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
  },
  {
    question: "Can I assign multiple employees to one job?",
    answer:
      "Absolutely! You can assign multiple employees to a single job and track their progress in real-time.",
  },
  {
    question: "Does it work on both mobile and desktop?",
    answer:
      "Yes, the app is fully responsive and optimized for both mobile devices and desktop computers.",
  },
  {
    question: "Can I get real-time notifications?",
    answer:
      "Yes, our app sends instant notifications for job updates, team communication, and client requests.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[32px] sm:text-[38px] md:text-[48px] font-bold text-[#212B36] relative text-center max-w-[700px] mx-auto">
          What Our Users Are Saying
        </h2>
        <p className="text-[#637381] text-[14px] mt-[8px] text-center max-w-[650px] mx-auto ">
          Real stories from clients, employees, and business owners who use our
          app every day.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4 mt-[50px]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-green-500 max-w-[900px] mx-auto rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center p-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(i)}
              >
                {faq.question}
                {openIndex === i ? (
                  <AiOutlineMinus className="w-5 h-5 text-gray-600" />
                ) : (
                  <AiOutlinePlus className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Answer */}
              <div
                ref={(el) => (answerRefs.current[i] = el)}
                style={{
                  height:
                    openIndex === i
                      ? `${answerRefs.current[i]?.scrollHeight}px`
                      : "0px",
                }}
                className="px-4 my-2 overflow-hidden text-gray-600 transition-all duration-500 ease-in-out"
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
