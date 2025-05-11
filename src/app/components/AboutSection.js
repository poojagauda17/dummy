"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-16 main-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#007A33]">
            About Shree Agro Chemicals
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
        At Shree Agro Chemicals, we are committed to a greener future through sustainable agricultural practices and renewable energy solutions. We specialize in the production of Bio-CNG and Organic Fertilizer, using agricultural waste, press mud, and municipal waste as raw materials. Our eco-friendly processes not only reduce pollution but also support farmers with high-quality, natural fertilizers and clean energy alternatives.
          </p>


          <button className="read-more-button mt-8"><a href="/about">Read More</a></button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/images/plant-img.jpg" // make sure this image is in public/images
            alt="Founders"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
