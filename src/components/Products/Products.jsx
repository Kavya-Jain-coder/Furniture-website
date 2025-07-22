import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

import Img1 from "../../assets/chairs/white-chair.png";
import Img2 from "../../assets/chairs/recliner.png";
import Img3 from "../../assets/sofas/luxury-sofa-set.png";
import Img4 from "../../assets/tvUnits/tv-unit-1.png";
import Img5 from "../../assets/chairs/stool-2.png";
import Img6 from "../../assets/tables/wooden-coffee-table.png";
import Img7 from "../../assets/tables/study-table.png";
import Img8 from "../../assets/beds/italian-carved-bed.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Chair",
    price: "120",
    href: "/chairs",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Recliner",
    price: "420",
    href: "/chairs",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Sofa Set",
    price: "320",
    href: "/sofaset",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "TV Unit",
    price: "220",
    href: "/TvUnit",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Stool",
    price: "120",
    href: "/chairs",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Coffee Table",
    price: "420",
    href: "/table",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Study Table",
    price: "320",
    href: "/table",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img8,
    title: "Bed",
    price: "820",
    href: "/bed",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="mx-auto px-[1rem] sm:px-[10.2rem]">
        <div className="grid">
          <Heading title="Our Products" subtitle="Explore Our Products" />
          <ProductCard data={ProductsData} />
          <ProductCard data={ProductsData2} />
        </div>
      </div>
    </div>
  );
};

export default Products;
