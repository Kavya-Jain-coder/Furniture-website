import React from "react";
import Image1 from "../../assets/chairs/recliner.png";
import Image2 from "../../assets/tables/study-table.png";
import Image3 from "../../assets/sofas/luxury-single-sofa.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="mx-auto px-[1rem] sm:px-[10.2rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-800 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Feel The Comfort</p>
                <p className="text-2xl font-semibold mb-[2px]">Of</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Recliner
                </p>
                
              </div>
            </div>
            <img
              src={Image1}
              alt="recliner"
              className="w-[250px] md:w-[350px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          <div className="col-span-1 py-10 pl-5 bg-gradient-to-br from-[#c5d1b5]/90 to-[#c5d1b5]/90 text-white rounded-3xl relative h-[320px] flex items-start overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Work Comfortably</p>
                <p className="text-2xl font-semibold mb-[2px]">On</p>
                <p className="text-4xl xl:text-4xl font-bold opacity-50 mb-2">
                  Study Table
                </p>
                
              </div>
            </div>
            <img
              src={Image2}
              alt="study-table"
              className="w-[180px] md:w-[300px] absolute bottom-0 right-0 object-contain"
            />
          </div>

          <div className="col-span-1 py-10 pl-5 bg-gradient-to-br from-[#b8c1d1] to-[#b8c1d1]/90 text-white rounded-3xl relative h-[320px] flex items-start overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">
                  Transform Your Living Room
                </p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Sofa Set
                </p>
                
              </div>
            </div>
            <img
              src={Image3}
              alt="sofaset"
              className="w-[250px] md:w-[200px] absolute -bottom-5 right-0 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
