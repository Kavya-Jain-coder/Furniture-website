import React from "react";
import {
  FaCarSide,
  FaCheckCircle,
  FaWallet,
  FaHeadphonesAlt,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-[#f42c37]" />,
    title: "Free Shipping",
    description: "Free Delivery & Installation",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-[#f42c37]" />,
    title: "Easy Returns",
    description: "30 Days Money Back",
  },
  {
    id: 1,
    icon: <FaWallet className="text-4xl md:text-5xl text-[#f42c37]" />,
    title: "Custom Furnitures",
    description: "Custom Furnitures Available",
  },
  {
    id: 1,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-[#f42c37]" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
];

const Services = () => {
  return (
    <div className="mx-auto px-[1rem] sm:px-[10.2rem] my-14 md:my-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
        {ServiceData.map((data) => (
          <div className="flex flex-col items-start sm:flex-row gap-4">
            {data.icon}
            <div className="">
              <h1 className="lg:text-xl font-bold">{data.title}</h1>
              <h1 className="text-gray-400 text-sm">{data.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
