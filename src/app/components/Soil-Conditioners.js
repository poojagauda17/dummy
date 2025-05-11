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
            src="/images/soil-conditioners.jpg"
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
            SOIL CONDITIONERS
          </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Soil conditioners are natural amendments that improve the physical properties of soil.
            By enhancing structure, boosting microbial activity, and increasing moisture retention,
            they help create an optimal environment for healthy plant growth. These conditioners
            prepare the soil to support stronger roots and sustainable agriculture.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Increases water absorption</li>
            <li>Improves root development</li>
            <li>Balances soil pH and nutrient levels</li>
          </ul>
        </div>
      </div>
    </section>
  );
}