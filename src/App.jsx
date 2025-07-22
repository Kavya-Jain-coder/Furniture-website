import React, { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Hero from "./components/Hero/Hero.jsx";
import Category from "./components/Category/Category.jsx";
import Category2 from "./components/Category/Category2.jsx";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Products from "./components/Products/Products.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Partners from "./components/Partners/Partners.jsx";

import rocking_chair from "./assets/chairs/rocking-chair-1.png";
import rocking_chair_2 from "./assets/chairs/rocking-chair-2.png";

import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";

import Chairs from "./components/furnitures/chairs.jsx";
import Bed from "./components/furnitures/bed.jsx";
import Table from "./components/furnitures/table.jsx";
import Sofaset from "./components/furnitures/sofaset.jsx";
import TvUnit from "./components/furnitures/TvUnit.jsx";
import AllFurnitures from "./components/furnitures/AllFurnitures.jsx";
import TrendingProducts from "./components/furnitures/TrendingProducts.jsx";
import Blogs2 from "./components/Blogs/Blogs2.jsx";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import Cart from "./components/Cart/Cart.jsx";

const BannerData = {
  discount: "75% OFF",
  title: "Fine Smile",
  date: "10th July to 10th August",
  image: rocking_chair,
  title2: "Bedroom Sets",
  title3: "Monsoon Sale",
  title4: "Outdoor Furniture Deals",
  bgGradient: "bg-gradient-to-r from-[#ffecd2] to-[#fcb69f]",
  href: "/products",
};

const BannerData2 = {
  discount: "65% OFF",
  title: "Happy Hours",
  date: "10th July to 10th August",
  image: rocking_chair_2,
  title2: "Bedroom Sets",
  title3: "Monsoon Sale",
  title4: "Outdoor Furniture Deals",
  bgGradient: "bg-gradient-to-r from-[#b2fefa] to-[#0ed2e7]",
  href: "/products",
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-900 text-white duration-200 overflow-hidden">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Category />
              <Category2 />
              <Services />
              <Banner data={BannerData} />
              <Products />
              <Banner data={BannerData2} />
              <Blogs />
              <Partners />
            </>
          }
        />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/sofaset" element={<Sofaset />} />
        <Route path="/bed" element={<Bed />} />
        <Route path="/table" element={<Table />} />
        <Route path="/tvunit" element={<TvUnit />} />
        <Route path="/furnitures" element={<AllFurnitures />} />
        <Route path="/products" element={<TrendingProducts />} />
        <Route path="/blogs2" element={<Blogs2 />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
