"use client";
import React from "react";
import Link from "next/link";


const crops = [
  {
    name: "Bio CNG",
    image:
      "images/bio-cng.jpg",
          link: "/biocng",

  },
  {
    name: "Organic Fertilizer",
    image:
      "images/Organic-Fertilizer.jpg",
          link: "/Organic-fertilization",

  },
  {
    name: "Organic Pesticides",
    image:
      "images/Organic-Pesticides.jpg",
          link: "/OrganicPesticites",

  },
  {
    name: "Soil Conditioners",
    image:
      "/images/Soil-Conditioners.jpg",
          link: "/SoilConditioners",

  },
];

export default function CropsWeNourish() {
  return (
    <section className="text-center py-16 main-container">
      <h2 className="text-4xl font-bold text-[#1b5e20]">
        Crops <span className="text-[#80B82D]">We Nourish</span>
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mt-4">
        We offer diverse crop nourishment products ranging from chelates to
        water soluble micronutrients & fertilizers
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
        {crops.map((crop, index) => (
 <div
  key={index}
  className="relative group rounded-md overflow-hidden shadow-lg cursor-pointer h-[320px]"
>
  <img
    src={crop.image}
    alt={crop.name}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="absolute bottom-6 left-0 right-0 px-4 text-white text-center">
    <h3 className="text-lg font-bold">{crop.name}</h3>
    <Link href={crop.link}>

    <button className="mt-2 bg-[#80B82D] hover:bg-[#6fa127] text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer">
      Read More
    </button>
    </Link>
  </div>
</div>


        ))}
      </div>

      <button className="mt-12 bg-[#80B82D] hover:bg-[#6fa127] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 cursor-pointer">
        KNOW MORE
      </button>
    </section>
  );
}
