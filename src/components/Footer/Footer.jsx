import React from "react";
import logo from "../../assets/logo.png";
import {
  FaDiscord,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Furnitures",
    link: "/furnitures",
  },
  {
    title: "Blogs",
    link: "/blogs2",
  },
  {
    title: "Cart",
    link: "/cart",
  },
];
const QuickLinks = [
  {
    title: "Trending Products",
    link: "/products",
  },
  {
    title: "Chairs",
    link: "/chairs",
  },
  {
    title: "Beds",
    link: "/bed",
  },
  {
    title: "Sofas",
    link: "/sofaset",
  },
  {
    title: "Tables",
    link: "/table",
  },
  {
    title: "TV Units",
    link: "/TvUnit",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="mx-auto px-[1rem] sm:px-[10.2rem]">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <div className="flex">
              <img src={logo} alt="logo" className="h-[50px]" />
              <a
                href="/#"
                className="text-[#f42c37] font-semibold tracking-widest text-2xl sm:text-3xl pt-2 ml-2 hover:text-white duration-300"
              >
                FurnX
              </a>
            </div>

            <p className=" text-white/70 lg:pr-24 pt-3">
              Whether you're furnishing your dream home or just upgrading a
              corner, we're here to help you create spaces you'll love to live
              in.
            </p>
            <p className="text-gray-500 mt-4">Made with 💖 by Kavya Jain</p>
            <a
              href="https://kavya-jain-portfolio.vercel.app/"
              target="_blank"
              className="inline-block bg-[#f42c37]/90 text-white py-2 px-8 mt-[2rem] text-lg rounded-full hover:bg-red-700 "
            >
              Know About Me
            </a>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-400 hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 ">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left mb-3">
                  Quick Links
                </h1>
                <ul className="space-y-3">
                  {QuickLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="text-gray-400 hover:text-white duration-300"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4 col-span-2 sm:col-auto md:ml-5">
                <div className="">
                  <h1 className="text-xl font-bold sm:text-left mb-3">
                    Address
                  </h1>
                  <div className="flex items-center gap-3 hover:text-green-400 duration-300">
                    <FaLocationArrow />
                    <p>Jaipur, Rajasthan</p>
                  </div>
                  <div className="flex items-center gap-3 mt-5  hover:text-amber-400 duration-300">
                    <FaMobileAlt />
                    <p>+91 123456</p>
                  </div>
                  <div className="flex items-center gap-3 mt-[2rem]">
                    <a href="/#">
                      <FaDiscord className="text-4xl hover:text-[#f42c37] duration-300 " />
                    </a>
                    <a href="/#">
                      <FaFacebookF className="text-4xl hover:text-[#f42c37] duration-300 " />
                    </a>
                    <a href="/#">
                      <FaLinkedinIn className="text-4xl hover:text-[#f42c37] duration-300 " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
