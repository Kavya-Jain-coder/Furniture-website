import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={data.id}
            className="group "
          >
            <div className="relative rounded-4xl ">
              <img
                src={data.img}
                alt="product-img"
                className="h-[250px] w-[260px] bg-gradient-to-br from-[#fbf3e9] to-[#f3d9b0] rounded-4xl  object-contain"
              />
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-full ">
                <a href={data.href}>
                  <Button
                    text={"View Similar Products"}
                    bgColor={"bg-[#f42c37]"}
                    textColor={"text-white"}
                  />
                </a>
              </div>
            </div>
            <div className="leading-7 text-center">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
