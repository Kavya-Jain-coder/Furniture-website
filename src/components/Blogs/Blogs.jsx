import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-6.png";
import Img2 from "../../assets/blogs/blog-5.jpg";
import Img3 from "../../assets/blogs/blog-4.webp";

const BlogData = [
  {
    title: "How to Choose the Perfect Sofa for Your Space",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odio mollitia. Possimus facere ab repudiandae laudantium aspernatur vero earum nobis.",
    published: "Jan 20, 2025 by Dilshad",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "Top 5 Bedroom Design Trends of 2025",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odio mollitia. Possimus facere ab repudiandae laudantium aspernatur vero earum nobis.",
    published: "Jan 20, 2025 by Satya",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "Maximizing Small Spaces with Smart Furniture",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odio mollitia. Possimus facere ab repudiandae laudantium aspernatur vero earum nobis.",
    published: "Jan 20, 2025 by Sahil",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="mx-auto px-[1rem] sm:px-[10.2rem]">
        <Heading title="Recent News" subtitle="Explore Our Blogs" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 ">
          {BlogData.map((data) => (
            <a href="/blogs2">
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="bg-gray-900"
                key={data.title}
              >
                <div className="overflow-hidden rounded-2xl mb-2">
                  <img
                    src={data.image}
                    alt="blog-image"
                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500">{data.published}</p>
                  <p className="font-bold line-clamp-1">{data.title}</p>
                  <p className="line-clamp-2 text-sm text-gray-400">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
