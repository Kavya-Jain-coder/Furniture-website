import React, { useState } from "react";
import Img1 from "../../assets/tvUnits/tv-unit-1.png";
import Img2 from "../../assets/tvUnits/tv-unit-2.png";
import Img3 from "../../assets/tvUnits/tv-unit-3.png";
import Img4 from "../../assets/tvUnits/tv-unit-4.png";
import Img5 from "../../assets/tvUnits/tv-unit-5.png";
import Img6 from "../../assets/tvUnits/tv-unit-6.png";

import { useCart } from "../../Context/CartContext";

const TvUnitData = [
  {
    id: 1,
    img: Img1,
    title: "Classic Wooden TV Unit",
    description:
      "Elegant wooden TV unit with dual cabinets and open shelves—ideal for organizing your media essentials stylishly.",
    discount: "40%",
    price: "660",
    mrp: "1100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Modern Floating TV Console",
    description:
      "Wall-mounted TV unit with sleek design, hidden cable management, and storage drawers for a minimalist look.",
    discount: "60%",
    price: "420",
    mrp: "1050",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Sheesham Wood Entertainment Unit",
    description:
      "Crafted from premium Sheesham wood, this spacious unit features shelves and cabinets—perfect for large living spaces.",
    discount: "50%",
    price: "550",
    mrp: "1100",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Rustic Wooden TV Cabinet",
    description:
      "Hand-finished rustic wood cabinet with sliding doors and ample space for consoles, books, and decor.",
    discount: "40%",
    price: "420",
    mrp: "700",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Compact Urban TV Stand",
    description:
      "Space-saving TV stand with contemporary appeal—comes with open racks and a low-profile silhouette.",
    discount: "40%",
    price: "360",
    mrp: "600",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Dual-Tone Media Console",
    description:
      "Modern dual-tone TV unit with matte and oak finishes—features drawers and floating shelves for stylish storage.",
    discount: "40%",
    price: "300",
    mrp: "500",
    aosDelay: "1000",
  },
];

const TvUnit = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addItem, removeItem, cartItems } = useCart();

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const filteredData = TvUnitData.filter((item) => {
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
          All TV Units
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

export default TvUnit;
