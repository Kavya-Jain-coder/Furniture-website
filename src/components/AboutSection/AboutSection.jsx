import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-900 py-16 text-white mb-[5rem] mx-auto px-[1rem] sm:px-[10.2rem] mt-[6rem]">
      <div className="w-full mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6" data-aos="fade-up">
          About Us
        </h2>

        <p
          className="text-2xl leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At{" "}
          <a href="/#">
            <span className="text-[#f42c37] font-semibold hover:text-green-500">
              FurnX
            </span>
          </a>
          , we don't just sell furniture—we craft experiences. Since 2020, our
          mission has been to bring warmth, style, and lasting comfort into
          every home.
        </p>

        <p
          className="text-2xl leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From luxurious beds and elegant sofas to minimalist dining sets and
          modern TV units, each piece is handpicked or custom-designed with
          care. We focus on high-quality wood, sustainable materials, and
          thoughtful details.
        </p>

        <p
          className="text-2xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Whether you're furnishing your dream home or just upgrading a corner,
          we're here to help you create spaces you'll love to live in.
        </p>

        <div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div>
            <h3 className="text-3xl font-bold text-green-400">10K+</h3>
            <p className="text-gray-400 text-sm">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-400">500+</h3>
            <p className="text-gray-400 text-sm">Unique Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-400">4.8⭐</h3>
            <p className="text-gray-400 text-sm">Avg Customer Rating</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-400">15+</h3>
            <p className="text-gray-400 text-sm">Awards Won</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <a href="/furnitures">
            <button className="mt-[5rem] text-2xl bg-[#f42c37] py-3 px-8 rounded-full hover:scale-105 duration-300">
              Explore Our Collection
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
