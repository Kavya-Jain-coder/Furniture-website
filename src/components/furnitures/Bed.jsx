import React, { useState } from "react";

import Img1 from "../../assets/beds/italian-carved-bed.png";
import Img2 from "../../assets/beds/luxury-bed.png";
import Img3 from "../../assets/beds/magnum-wooden-king-bed.png";
import Img4 from "../../assets/beds/modern-wooden-bed.png";
import Img5 from "../../assets/beds/sheesham-wooden-bed.png";
import Img6 from "../../assets/beds/velvet-bed.png";

import { useCart } from "../../Context/CartContext";

const BedData = [
  {
    id: 1,
    img: Img1,
    title: "Italian Carved Bed",
    description:
      "Opulent Italian-style carved bed featuring intricate detailing and plush upholstery—perfect for adding a royal touch to your bedroom.",

    discount: "33%",
    price: "470",
    mrp: "700",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Luxury Bed",
    description:
      "Exquisitely crafted luxury bed with rich wood carvings and a grand headboard—designed to elevate premium bedroom interiors.",
    discount: "60%",
    mrp: "2000",
    price: "800",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Magnum Wooden King Bed",
    description:
      "Solid wood king-sized bed with a sturdy frame and high headboard—ideal for spacious master bedrooms with classic aesthetics.",
    discount: "45%",
    mrp: "1455",
    price: "800",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Modern Wooden Bed",
    description:
      "Sleek modern bed with canopy frame and minimalist structure—perfect for contemporary interiors with a luxurious feel.",
    discount: "40%",
    mrp: "1300",
    price: "780",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Sheesham Wooden Bed",
    description:
      "Elegant Sheesham wood bed with built-in side storage—combines functionality with traditional craftsmanship.",
    discount: "38%",
    mrp: "870",
    price: "540",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Velvet Bed",
    description:
      "Chic upholstered bed in luxurious green velvet with a curved headboard—adds a bold and cozy statement to your room.",
    discount: "40%",
    mrp: "1100",
    price: "660",
    aosDelay: "1000",
  },
];

const bed = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addItem, removeItem, cartItems } = useCart();

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const filteredData = BedData.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerSearch) ||
      item.description.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="mt-[5rem] mb-[5rem] bg-gray-900 py-10">
      <div className="mx-auto px-[1rem] sm:px-[10.2rem]">
        <h1 className="text-3xl font-bold leading-none tracking-tight text-center mb-8 text-white">
          All Beds
        </h1>

        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search furniture by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-[400px] px-4 py-2 rounded-full text-sm focus:outline-none border border-gray-600 bg-white/10 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.length > 0 ? (
            filteredData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out mb-2"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-[220px] object-contain rounded-xl transition-transform duration-300 ease-in-out hover:scale-110 bg-gradient-to-br from-[#fbf3e9] to-[#f3d9b0]"
                  />
                </div>

                <p className="text-md text-gray-400 mb-2">{data.title}</p>
                <p className="font-semibold text-white text-sm line-clamp-2">
                  {data.description}
                </p>

                <div className="mt-3 space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-red-500 font-bold text-sm">
                      -{data.discount}
                    </span>
                    <span className="text-white font-semibold text-lg">
                      ${data.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 line-through">
                    ${data.mrp}
                  </p>
                </div>

                <div className="relative flex justify-center gap-3">
                  <button
                    className="mt-4 w-[75px] h-[50px] text-center text-xl bg-white text-black cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full"
                    onClick={() => removeItem(data.id)}
                  >
                    -
                  </button>
                  <p className="mt-5 py-2 text-white">{getQuantity(data.id)}</p>
                  <button
                    className="mt-4 w-[75px] h-[50px] text-center text-xl bg-green-500 text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full"
                    onClick={() => addItem(data)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-3">
              No furniture found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default bed;
