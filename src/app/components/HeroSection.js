"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSection.css";

export default function HeroBanner() {
  // STATIC banner list here 👇
  const bannerList = [
    {
      title: "Welcome to Our Website",
      highlight: "Best Quality Products",
      background: "#f5f5f5",
      image: "/images/banner-1.webp",
    },
    {
      title: "Summer Sale",
      highlight: "Up to 50% OFF",
      background: "#ffe0b2",
      image: "/images/banner-2.webp",
    },
    {
      title: "New Arrivals",
      highlight: "Shop Now",
      background: "#e1bee7",
      image: "/images/banner-3.webp",
    },
  
  ];

  return (
    <section className="hero-banner">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {bannerList.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundColor: slide.background }}
            >
              <div className="hero-content">
                {slide.title && <h4>{slide.title}</h4>}
                {slide.highlight && <h1>{slide.highlight}</h1>}
              </div>
              <div className="banner-hero-image">
                <img
                  src={slide.image}
                  alt={slide.title || `Banner ${index + 1}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
