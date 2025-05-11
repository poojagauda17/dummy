"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./BlogSection.css";

const blogArticles = [
  {
    image: "/images/plant-img.jpg",
    caption:
      "Enhancing Plant Growth with Organic Liquid Fertilizers in Hydroponics: A Journey into Sustainable Agriculture",
    date: "25 Dec",
  },
  {
    image: "/images/plant-img.jpg",
    caption:
      "Maximizing Plant Health and Disease Resistance with Micronutrient Mixture Fertilizer",
    date: "22 Nov",
  },
  {
    image: "/images/plant-img.jpg",
    caption: "Innovative Techniques for Aqua Culture & Animal Nutrition",
    date: "10 Oct",
  },
  {
    image: "/images/plant-img.jpg",
    caption: "The Role of High-Density Inputs in Urban Farming Success",
    date: "04 Sep",
  },
];

export default function BlogCarousel() {
  return (
    <section className="blog-carousel px-4 md:px-12 py-16">
      <h2 className="blog-carousel-heading text-3xl font-bold text-[#80B82D] mb-10 text-center">
        Blogs
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {blogArticles.map((article, index) => (
          <SwiperSlide key={index} className="blog-slide">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[420px] w-full">
              <img
                src={article.image}
                alt={`Blog ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
              />
<div className="absolute inset-0 bg-black/10 p-6 flex flex-col justify-end text-white pointer-events-none">
                <p className="text-sm font-semibold">{article.date}</p>
                <h3 className="text-lg font-bold leading-tight mt-2">
                  {article.caption}
                </h3>
                <p className="text-sm mt-2">
                  Read more about innovative agri-practices and solutions.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
