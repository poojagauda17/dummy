// app/components/ProductCard.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductCard() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* Left: Image */}
        <div
          >
          <Image
            src="/images/bio-cng.jpg"
            alt="Bio-CNG Process"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-[10px]"
          />
        </div>

        {/* Right: Text */}
        <div
        >
          <h2 className="text-5xl font-extrabold text-green-700 mb-4 tracking-tight">
            BIO-CNG
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Bio-CNG (Compressed Natural Gas) is a renewable fuel made by processing organic waste.
            It’s a clean, eco-friendly alternative to conventional fuels, suitable for vehicles,
            industrial use, and power generation. The production of Bio-CNG helps minimize landfill
            burden and reduces dependency on fossil fuels, making it an essential step toward
            sustainable energy solutions.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Reduces greenhouse gas emissions</li>
            <li>Cost-effective and renewable</li>
            <li>Supports circular economy</li>
            <li>Minimizes landfill waste and promotes clean energy</li>
            <li>Can be used as a direct replacement for LPG and diesel</li>
          </ul>
        </div>
      </div>
    </section>
  );
}