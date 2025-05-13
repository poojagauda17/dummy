// app/components/FertilizerBenefitsSection.jsx
"use client";

import { FaLeaf, FaSeedling, FaHandsWash, FaRecycle } from "react-icons/fa";

export default function FertilizerBenefitsSection() {
  const benefits = [
    {
      icon: <FaLeaf className="text-green-600 text-4xl mb-4 mx-auto" />,
      title: "Boosts Crop Yield",
      description:
        "Enhances plant growth naturally, leading to increased and healthier crop production.",
    },
    {
      icon: <FaSeedling className="text-green-600 text-4xl mb-4 mx-auto" />,
      title: "Improves Soil Health",
      description:
        "Strengthens soil structure and fertility for long-term agricultural sustainability.",
    },
    {
      icon: <FaHandsWash className="text-green-600 text-4xl mb-4 mx-auto" />,
      title: "Safe & Chemical-Free",
      description:
        "Completely natural and safe for prolonged use without harming the environment.",
    },
    {
      icon: <FaRecycle className="text-green-600 text-4xl mb-4 mx-auto" />,
      title: "Supports Sustainability",
      description:
        "Promotes eco-friendly farming practices and reduces dependency on synthetic inputs.",
    },
  ];

  return (
    <section className=" py-16 px-6 text-center main-container">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Benefits of Our Organic Fertilizer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-green-50"
          >
            {benefit.icon}
            <h3 className="text-xl text-black font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
