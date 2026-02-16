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
    <section className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* small label */}
        <p className="text-[#E41C38] font-black tracking-[0.35em] text-xs uppercase">
          Membership Plans
        </p>

        {/* big heading */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic leading-[0.9]">
          JOIN
          <span
            className="text-transparent ml-3"
            style={{ WebkitTextStroke: "1px white" }}
          >
            TODAY
          </span>
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
