// app/components/ProductCard.jsx
"use client";

import Image from "next/image";

export default function ProductCard() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* Left: Image */}
        <div
          >
          <Image
            src="/images/organic-fertilizer.jpg"
            alt="Organic Fertilizer"
            width={600}
            height={200}
            className=" object-cover rounded-[10px]"
          />
        </div>

        {/* Right: Text */}
        <div
        >
          <h2 className="text-5xl font-extrabold text-green-700 mb-4 tracking-tight">
            ORGANIC FERTILIZER
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our organic fertilizer is a nutrient-rich product derived from the residue after Bio-CNG extraction.
            It enhances soil fertility, promotes healthy crop growth, and is completely free from harmful chemicals.
            This eco-friendly solution supports long-term agricultural sustainability while improving the structure,
            aeration, and water retention capacity of the soil naturally.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Improves soil health</li>
            <li>Enhances crop yield</li>
            <li>Safe for long-term use</li>
            <li>Promotes natural microbial activity</li>
            <li>Reduces need for chemical fertilizers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}