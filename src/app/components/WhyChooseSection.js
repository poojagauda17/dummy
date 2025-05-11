"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Trusted Quality",
    description:
      "Our solution is designed to significantly reduce carbon footprint and air pollution. By choosing a cleaner alternative, you’re actively contributing to a greener planet and healthier environment for future generations.",
  },
  {
    title: "Eco Commitment ",
    description:
      "Say goodbye to high fuel expenses. Our fuel source is considerably more cost-effective than petrol, diesel, or LPG — making it the smart choice for both individuals and businesses looking to save money without compromising on performance.",
  },
  {
    title: "End-to-End Support ",
    description:
      "We ensure the highest level of fuel purity, making it ideal for use in vehicles, industrial machinery, and power generation units. The quality guarantees smooth operation and extended engine life.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Produced through environmentally responsible methods, our fuel emits zero harmful byproducts. It’s a clean energy source that supports sustainability goals and complies with modern environmental standards.",
  },
];

export default function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="blog-carousel mx-auto px-4 py-16 main-container">
      <h2 className="text-4xl font-bold text-[#1B5E20] mb-8 text-center">
        Why Choose Shree Agro
      </h2>

      <div className="space-y-4">
        {features.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 hover:bg-gray-50 transition-colors"
                onClick={() => toggle(index)}
              >
                <span
                  className={`text-lg font-semibold ${
                    isOpen ? "text-[#80B82D]" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#80B82D]" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out px-6 overflow-hidden ${
                  isOpen ? "max-h-[500px] py-4 pt-0 opacity-100" : "max-h-0 py-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
