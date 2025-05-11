// app/components/BiogasProcessSection.jsx
"use client";

import Image from "next/image";

export default function BiogasProcessSection() {
  return (
    <section className=" py-16 px-6 main-container">
        <h2 className="text-3xl font-bold mb-6 text-center">
            How We Do It – From Waste to Wonder
          </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/images/bio-gas.jpg"
            alt="Biogas Process Diagram"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 md:pl-12">
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Step 1: Raw Material Collection</h3>
              <p className="text-gray-700">
                We source biodegradable waste from farms (crop residue, animal dung), sugar industries (press mud), and cities (segregated organic municipal waste).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Step 2: Bio-Digestion</h3>
              <p className="text-gray-700">
                This waste is processed in anaerobic digesters, where natural microbes break it down and generate biogas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Step 3: Gas Purification</h3>
              <p className="text-gray-700">
                The biogas is purified and upgraded into Bio-CNG, removing all impurities to make it ready for commercial use.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Step 4: Fertilizer Production</h3>
              <p className="text-gray-700">
                The leftover slurry is dried, enriched, and converted into nutrient-rich organic fertilizer—no chemicals, just pure natural goodness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
