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
            src="/images/organic-pesticides.jpg"
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
            ORGANIC PESTICIDES
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Eco-friendly alternatives to chemical pesticides, made from natural plant extracts.
            Organic pesticides offer effective protection against pests without contaminating the soil,
            harming beneficial insects, or leaving toxic residues. They are ideal for organic farming
            practices and help maintain a balanced ecosystem in agricultural environments.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Benefits</h3>
         <ul className="list-disc list-outside pl-5 text-gray-700 space-y-2 text-base">
  <li>Non-toxic to humans and animals</li>
  <li>Prevents pest resistance</li>
  <li>Biodegradable and safe for long-term use</li>
</ul>

        </div>
      </div>
    </section>
  );
}