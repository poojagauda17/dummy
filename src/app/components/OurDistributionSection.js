"use client";
import { FaMapMarkedAlt, FaTruckMoving, FaWarehouse } from "react-icons/fa";

const distributionData = [
  {
    icon: <FaMapMarkedAlt size={50} className="text-[#e9d127]" />,
    title: "Pune Headquarters",
    desc: "Our central hub for operations and logistics, ensuring quick turnaround across Maharashtra.",
  },
  {
    icon: <FaTruckMoving size={50} className="text-[#e9d127]" />,
    title: "Northern Depot",
    desc: "Strategically located for efficient coverage across North India and NCR region.",
  },
  {
    icon: <FaWarehouse size={50} className="text-[#e9d127]" />,
    title: "South India Branch",
    desc: "Serving Karnataka, Tamil Nadu & Kerala with freshness and speed.",
  },
];

export default function DistributionSection() {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="uppercase text-sm text-gray-600 tracking-widest mb-2">Features</p>
        <h2 className="about-us-heading mb-8">Our Distribution Centre</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {distributionData.map((item, i) => (
            <div
              key={i}
              className=" rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold text-[#e9d127] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <button className="read-more-button mt-4">
                MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
