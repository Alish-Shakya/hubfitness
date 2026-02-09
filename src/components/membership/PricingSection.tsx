"use client";

import PricingCard from "./PricingCard";

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Month-to-Month",
      price: "$75",
      oldPrice: "85",
      period: "/Month",
      features: [
        "Includes access to Sauna, Cold Plunge, Red Light Therapy, Tanning, Hub Fitness App and discounted supplements!",
        "$75 Enrollment",
        "$75 First Month Dues",
      ],
    },
    {
      title: "Monthly - Annual",
      price: "$65",
      oldPrice: "75",
      period: "/Month",
      features: [
        "Includes access to Sauna, Cold Plunge, Red Light Therapy, Tanning, Hub Fitness App and discounted supplements!",
        "$25 Semi Annual Club Fee",
        "$65 First Month Dues",
      ],
      highlight: true,
      badge: "Most Popular",
    },
    {
      title: "Paid in Full - Annual",
      price: "$55",
      oldPrice: "65",
      period: "/Month",
      features: [
        "Includes access to Sauna, Cold Plunge, Red Light Therapy, Tanning, Hub Fitness App and discounted supplements!",
        "NO FEES!",
        "$660 Paid in Full Dues",
      ],
      badge: "Best Value",
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-4xl font-black uppercase mb-12 text-center">
          Choose Your Plan
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
