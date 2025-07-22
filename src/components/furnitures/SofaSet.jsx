import React, { useState } from "react";
import Img1 from "../../assets/sofas/contemporary-sofa.png";
import Img2 from "../../assets/sofas/leather-sofa.png";
import Img3 from "../../assets/sofas/luxury-single-sofa.png";
import Img4 from "../../assets/sofas/luxury-sofa-set.png";
import Img5 from "../../assets/sofas/velvet-sofa.png";
import Img6 from "../../assets/sofas/white-sofa.png";

import { useCart } from "../../Context/CartContext";

const SofaData = [
  {
    id: 1,
    img: Img1,
    title: "Tufted Gray Recliner Sofa",
    description:
      "Modern recliner sofa with deep button tufting, padded armrests, and plush cushioning—ideal for cozy living rooms.",
    discount: "45%",
    mrp: "1309",
    price: "720",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Classic Tufted Loveseat",
    description:
      "Cinnamon-tone tufted loveseat with single arm cushion, ideal for small lounges or reading corners.",
    discount: "60%",
    mrp: "1100",
    price: "440",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Vintage Leather Lounge Chair",
    description:
      "Teak-toned leather lounge chair with a slatted back and plush seat—adds a rustic yet stylish vibe to your room.",
    discount: "50%",
    mrp: "1000",
    price: "500",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Classic Velvet Sofa",
    description:
      "Elegant brown velvet sofa with carved wooden legs and a regal design—perfect for traditional or luxe spaces.",
    discount: "38%",
    mrp: "1258",
    price: "780",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Modern Minimal Sofa",
    description:
      "Compact white-gray modern sofa with curved lines and soft cushioning—great for minimalist living spaces.",
    discount: "40%",
    mrp: "800",
    price: "480",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Modular L-Shaped Sofa",
    description:
      "Scandinavian-style modular sofa with extended chaise, perfect for lounging in modern open-plan homes.",
    discount: "45%",
    mrp: "1090",
    price: "600",
    aosDelay: "1000",
  },
];

const sofaset = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addItem, removeItem, cartItems } = useCart();

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const filteredData = SofaData.filter((item) => {
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
          All Sofas
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

export default sofaset;
