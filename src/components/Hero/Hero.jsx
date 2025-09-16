import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/chairs/rocking-chair-1.png";
import Image2 from "../../assets/beds/modern-wooden-bed.png";
import Image3 from "../../assets/tables/wooden-coffee-table.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Steller",
    title: "Cinnamon wood",
    title2: "Rocking Chair",
    href: "/chairs",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Aarsun Woods",
    title: "Modern",
    title2: "Canopy Bed",
    href: "/bed",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Sleepyhead",
    title: "Sheesham",
    title2: "Coffee Table",
    href: "/table",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="mx-auto px-[1rem] sm:px-[10.2rem] mt-[6rem]">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 sm:py-27.5">
        <div className="mx-auto px-[1rem] sm:px-[3rem]">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                  <div className="flex flex-col justify-center  gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold "
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold "
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold "
                    >
                      {data.title2}
                    </h1>
                    
                  </div>
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt="category-image"
                        className="w-[300px] h-[300px] rotate-y-180 sm:w-[530px] sm:h-[530px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
