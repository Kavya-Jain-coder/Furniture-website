import React, { useState } from "react";

import Img1 from "../../assets/chairs/recliner.png";
import Img6 from "../../assets/chairs/white-chair.png";
import Img11 from "../../assets/beds/sheesham-wooden-bed.png";
import Img16 from "../../assets/sofas/luxury-sofa-set.png";
import Img21 from "../../assets/tables/dressing-table.png";
import Img26 from "../../assets/tvUnits/tv-unit-2.png";
import Img2 from "../../assets/chairs/rocking-chair-1.png";
import Img7 from "../../assets/beds/italian-carved-bed.png";
import Img12 from "../../assets/beds/velvet-bed.png";
import Img17 from "../../assets/sofas/velvet-sofa.png";
import Img22 from "../../assets/tables/study-table.png";
import Img27 from "../../assets/tvUnits/tv-unit-3.png";
import Img3 from "../../assets/chairs/rocking-chair-2.png";
import Img8 from "../../assets/beds/luxury-bed.png";
import Img13 from "../../assets/sofas/contemporary-sofa.png";
import Img18 from "../../assets/sofas/white-sofa.png";
import Img23 from "../../assets/tables/wooden-coffee-table-2.png";
import Img28 from "../../assets/tvUnits/tv-unit-4.png";
import Img4 from "../../assets/chairs/stool.png";
import Img9 from "../../assets/beds/magnum-wooden-king-bed.png";
import Img14 from "../../assets/sofas/leather-sofa.png";
import Img19 from "../../assets/tables/dining-table.png";
import Img24 from "../../assets/tables/wooden-coffee-table.png";
import Img29 from "../../assets/tvUnits/tv-unit-5.png";
import Img5 from "../../assets/chairs/stool-2.png";
import Img10 from "../../assets/beds/modern-wooden-bed.png";
import Img15 from "../../assets/sofas/luxury-single-sofa.png";
import Img20 from "../../assets/tables/dining-table-2.png";
import Img25 from "../../assets/tvUnits/tv-unit-1.png";
import Img30 from "../../assets/tvUnits/tv-unit-6.png";


import { useCart } from "../../Context/CartContext";

const AllFurnitureData = [
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
  {
    id: 7,
    img: Img7,
    title: "Italian Carved Bed",
    description:
      "Opulent Italian-style carved bed featuring intricate detailing and plush upholstery—perfect for adding a royal touch to your bedroom.",

    discount: "33%",
    price: "470",
    mrp: "700",
    aosDelay: "0",
  },
  {
    id: 8,
    img: Img8,
    title: "Luxury Bed",
    description:
      "Exquisitely crafted luxury bed with rich wood carvings and a grand headboard—designed to elevate premium bedroom interiors.",
    discount: "60%",
    mrp: "2000",
    price: "800",
    aosDelay: "200",
  },
  {
    id: 9,
    img: Img9,
    title: "Magnum Wooden King Bed",
    description:
      "Solid wood king-sized bed with a sturdy frame and high headboard—ideal for spacious master bedrooms with classic aesthetics.",
    discount: "45%",
    mrp: "1455",
    price: "800",
    aosDelay: "400",
  },
  {
    id: 10,
    img: Img10,
    title: "Modern Wooden Bed",
    description:
      "Sleek modern bed with canopy frame and minimalist structure—perfect for contemporary interiors with a luxurious feel.",
    discount: "40%",
    mrp: "1300",
    price: "780",
    aosDelay: "600",
  },
  {
    id: 11,
    img: Img11,
    title: "Sheesham Wooden Bed",
    description:
      "Elegant Sheesham wood bed with built-in side storage—combines functionality with traditional craftsmanship.",
    discount: "38%",
    mrp: "870",
    price: "540",
    aosDelay: "800",
  },
  {
    id: 12,
    img: Img12,
    title: "Velvet Bed",
    description:
      "Chic upholstered bed in luxurious green velvet with a curved headboard—adds a bold and cozy statement to your room.",
    discount: "40%",
    mrp: "1100",
    price: "660",
    aosDelay: "1000",
  },
  {
    id: 13,
    img: Img13,
    title: "Tufted Gray Recliner Sofa",
    description:
      "Modern recliner sofa with deep button tufting, padded armrests, and plush cushioning—ideal for cozy living rooms.",
    discount: "45%",
    mrp: "1309",
    price: "720",
    aosDelay: "0",
  },
  {
    id: 14,
    img: Img14,
    title: "Classic Tufted Loveseat",
    description:
      "Cinnamon-tone tufted loveseat with single arm cushion, ideal for small lounges or reading corners.",
    discount: "60%",
    mrp: "1100",
    price: "440",
    aosDelay: "200",
  },
  {
    id: 15,
    img: Img15,
    title: "Vintage Leather Lounge Chair",
    description:
      "Teak-toned leather lounge chair with a slatted back and plush seat—adds a rustic yet stylish vibe to your room.",
    discount: "50%",
    mrp: "1000",
    price: "500",
    aosDelay: "400",
  },
  {
    id: 16,
    img: Img16,
    title: "Classic Velvet Sofa",
    description:
      "Elegant brown velvet sofa with carved wooden legs and a regal design—perfect for traditional or luxe spaces.",
    discount: "38%",
    mrp: "1258",
    price: "780",
    aosDelay: "600",
  },
  {
    id: 17,
    img: Img17,
    title: "Modern Minimal Sofa",
    description:
      "Compact white-gray modern sofa with curved lines and soft cushioning—great for minimalist living spaces.",
    discount: "40%",
    mrp: "800",
    price: "480",
    aosDelay: "800",
  },
  {
    id: 18,
    img: Img18,
    title: "Modular L-Shaped Sofa",
    description:
      "Scandinavian-style modular sofa with extended chaise, perfect for lounging in modern open-plan homes.",
    discount: "45%",
    mrp: "1090",
    price: "600",
    aosDelay: "1000",
  },
  {
    id: 19,
    img: Img19,
    title: "6-Seater Dining Table Set",
    description:
      "Spacious wooden dining table with six matching chairs—ideal for family dining with a minimalist design.",
    discount: "40%",
    price: "960",
    mrp: "1600",
    aosDelay: "0",
  },
  {
    id: 20,
    img: Img20,
    title: "Minimal Black Dining Table",
    description:
      "Modern dining table with a sleek black finish and clean lines—perfect for contemporary kitchen or dining areas.",
    discount: "60%",
    mrp: "1050",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 21,
    img: Img21,
    title: "Classic Dressing Table",
    description:
      "Elegant dressing table with attached mirror and storage drawers—adds charm and function to any bedroom.",
    discount: "50%",
    mrp: "1000",
    price: "500",
    aosDelay: "400",
  },
  {
    id: 22,
    img: Img22,
    title: "Sheesham Wood Study Table",
    description:
      "Study table made from solid Sheesham wood with drawer storage—ideal for home offices and student setups.",
    discount: "40%",
    mrp: "1100",
    price: "660",
    aosDelay: "600",
  },
  {
    id: 23,
    img: Img23,
    title: "Modern Wooden Coffee Table",
    description:
      "Stylish coffee table with natural wooden texture and angular legs—blends well with modern living rooms.",
    discount: "40%",
    mrp: "400",
    price: "240",
    aosDelay: "800",
  },
  {
    id: 24,
    img: Img24,
    title: "Low-Height Tea Table",
    description:
      "Compact rectangular tea table with dual shelves—perfect for small spaces and urban settings.",
    discount: "40%",
    mrp: "300",
    price: "180",
    aosDelay: "1000",
  },
  {
    id: 25,
    img: Img25,
    title: "Classic Wooden TV Unit",
    description:
      "Elegant wooden TV unit with dual cabinets and open shelves—ideal for organizing your media essentials stylishly.",
    discount: "40%",
    price: "660",
    mrp: "1100",
    aosDelay: "0",
  },
  {
    id: 26,
    img: Img26,
    title: "Modern Floating TV Console",
    description:
      "Wall-mounted TV unit with sleek design, hidden cable management, and storage drawers for a minimalist look.",
    discount: "60%",
    price: "420",
    mrp: "1050",
    aosDelay: "200",
  },
  {
    id: 27,
    img: Img27,
    title: "Sheesham Wood Entertainment Unit",
    description:
      "Crafted from premium Sheesham wood, this spacious unit features shelves and cabinets—perfect for large living spaces.",
    discount: "50%",
    price: "550",
    mrp: "1100",
    aosDelay: "400",
  },
  {
    id: 28,
    img: Img28,
    title: "Rustic Wooden TV Cabinet",
    description:
      "Hand-finished rustic wood cabinet with sliding doors and ample space for consoles, books, and decor.",
    discount: "40%",
    price: "420",
    mrp: "700",
    aosDelay: "600",
  },
  {
    id: 29,
    img: Img29,
    title: "Compact Urban TV Stand",
    description:
      "Space-saving TV stand with contemporary appeal—comes with open racks and a low-profile silhouette.",
    discount: "40%",
    price: "360",
    mrp: "600",
    aosDelay: "800",
  },
  {
    id: 30,
    img: Img30,
    title: "Dual-Tone Media Console",
    description:
      "Modern dual-tone TV unit with matte and oak finishes—features drawers and floating shelves for stylish storage.",
    discount: "40%",
    price: "300",
    mrp: "500",
    aosDelay: "1000",
  },
];

const AllFurnitures = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addItem, removeItem, cartItems } = useCart();

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const filteredData = AllFurnitureData.filter((item) => {
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
          All Furnitures
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

export default AllFurnitures;
