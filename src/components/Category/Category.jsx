import React from "react";
import Image1 from "../../assets/chairs/stool.png";
import Image2 from "../../assets/chairs/rocking-chair-2.png";
import Image3 from "../../assets/tvUnits/tv-unit-6.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="mx-auto px-[1rem] sm:px-[10.2rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400 ">Complete Your Look</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Stool
                </p>
                
              </div>
            </div>
            <img
              src={Image1}
              alt="stool"
              className="w-[420px] absolute bottom-0 ml-24"
            />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-[#f1c27d] to-[#f1c27d]/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="">
              <div className="mb-4">
                <p className="mb-[2px] text-white ">Sit Back</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Chair
                </p>
                
              </div>
            </div>
            <img
              src={Image2}
              alt="chair"
              className="w-[220px] absolute -right-4 lg:top-[40px] rotate-y-180"
            />
          </div>

          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[#e6d5c3] to-[#e6d5c3]/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="">
              <div className="mb-4">
                <p className="mb-[2px] text-white ">Style Your Space </p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-60 mb-2">
                  TV Unit
                </p>
                
              </div>
            </div>
            <img
              src={Image3}
              alt="tv-unit"
              className="w-[250px] md:w-[450px] absolute top-1/2 -translate-y-1/2 -right-0 -rotate-y-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
