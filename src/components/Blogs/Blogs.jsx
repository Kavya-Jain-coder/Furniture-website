import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-6.png";
import Img2 from "../../assets/blogs/blog-5.jpg";
import Img3 from "../../assets/blogs/blog-4.webp";

const BlogData = [
  {
    title: "How to Choose the Perfect Sofa for Your Space",
    subtitle:
      "Are you tired of scouring furniture stores and not finding the best sofa for your home? Look no further! Sleepyhead has revolutionized the way we shop for furniture, making it easier than ever to find exactly what you're looking for.In this blog post, we'll guide you through the process of finding the perfect sofa online – from selecting the right style and size to navigating delivery options. Get ready to sit back and relax on your dream couch! Staying indoors due to the pandemic has made us all reconsider how much we value comfort. We all love staying in our comfy pyjamas to attend meetings (yes, we know you do!).",
    published: "Jan 20, 2025 by Dilshad",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "Top 5 Bedroom Design Trends of 2025",
    subtitle:
      "Bedroom design trends are a tough sell: Your bedroom is your sanctuary, which is why people stick to soothing, neutral color palettes and crisp white bedding. But even if you cling to those restorative vibes, there's a world of design possibilities to unlock.The bedroom design trends for 2025 embrace subtle inflections of personality—think textured walls or lush, floor-to-ceiling curtains. Floral wallpapers and vintage touches are also on the rise. To help us navigate the top eight bedroom design trends emerging for 2025, we tapped a handful of expert designers to reveal what they're seeing in the industry.",
    published: "Jan 20, 2025 by Satya",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "Maximizing Small Spaces with Smart Furniture",
    subtitle:
      "Living in a small space can be challenging, especially when it comes to choosing the right furniture. Space saving furniture is not just a trend; it’s a necessity for those wanting to maximize their living area without sacrificing style. From multifunctional sofas to compact dining tables, there are countless solutions available that cater to small spaces. Let's explore some of the most effective space saving furniture options that can transform your home into a stylish and functional haven.",
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
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
