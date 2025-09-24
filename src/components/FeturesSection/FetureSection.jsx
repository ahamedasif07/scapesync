import Image from "next/image";
import CalenderIcon from "../../../public/images/Frame 781.png";
import AimIcon from "../../../public/images/Frame 781.png";
import GraphIcon from "../../../public/images/Frame 781.png";
import ShildIcon from "../../../public/images/Frame 781.png";
export default function FeaturesSection() {
  const features = [
    {
      icon: CalenderIcon, // replace with your actual path
      title: "Easy Service Booking",
      description:
        "Streamlined booking process for clients with service catalogs and availability.",
    },
    {
      icon: AimIcon, // replace with your actual path
      title: "Real-Time Tracking",
      description:
        "Monitor job progress, employee hours, and project timelines with live updates.",
    },
    {
      icon: GraphIcon, // replace with your actual path
      title: "Performance Analytics",
      description:
        "Comprehensive reporting and insights to improve business operations and efficiency.",
    },
    {
      icon: ShildIcon, // replace with your actual path
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
    },
  ];

  return (
    <section className="bg-white py-16 ">
      <div className="  grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left border-r border-gray-200 px-2"
          >
            <div className="p-[8] bg-#ECFCEB rounded-xl mb-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-lg text-[#212B36] font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
