import React, { useState } from "react";
import Img1 from "../../assets/chairs/recliner.png";
import Img2 from "../../assets/chairs/rocking-chair-1.png";
import Img3 from "../../assets/chairs/rocking-chair-2.png";
import Img4 from "../../assets/chairs/stool.png";
import Img5 from "../../assets/chairs/stool-2.png";
import Img6 from "../../assets/chairs/white-chair.png";

import { useCart } from "../../Context/CartContext";

const ChairData = [
  {
    id: 1,
    img: Img1,
    title: "Recliner",
    description:
      "Ergonomic recliner chair with cushioned seating and adjustable backrest—perfect for home relaxation or reading corners.",
    discount: "35%",
    mrp: "1385",
    price: "900",
    aosDelay: "0",
  },

  {
    id: 2,
    img: Img2,
    title: "Cinnamon Wood Rocking Chair",
    description:
      "Classic rocking chair crafted in cinnamon-tone teak wood with padded seat and backrest for cozy lounging.",
    discount: "75%",
    mrp: "1680",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Teak Wood Rocking Chair",
    description:
      "Handcrafted teak wood rocking chair with a slatted back and seat, offering a natural rustic look.",
    discount: "65%",
    mrp: "629",
    price: "220",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Modern Wooden Stool",
    description:
      "Contemporary wooden stool with hourglass silhouette, suitable for minimalist spaces or side seating.",
    discount: "40%",
    mrp: "700",
    price: "420",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "White Wooden Stool",
    description:
      "Compact white-painted wooden stool with clean lines—ideal for kitchen counters or casual setups.",
    discount: "25%",
    mrp: "160",
    price: "120",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "White Chair with Cushion",
    description:
      "Scandinavian-style white chair with cushioned seating and curved design for modern living or office decor.",
    discount: "30%",
    mrp: "172",
    price: "120",
    aosDelay: "1000",
  },
];

const Chairs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addItem, removeItem, cartItems } = useCart();

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const filteredData = ChairData.filter((item) => {
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
          All Chairs
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


export default Chairs;
