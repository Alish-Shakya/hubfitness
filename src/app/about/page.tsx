import AboutHero from "@/components/about/AboutHero";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import OurMission from "@/components/about/OurMission";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValue";
import Testimonials from "@/components/about/Testimonials";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import { createPageMetadata } from "@/lib/metaData";
import React from "react";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("/about");
}
export default function AboutPage() {
  return (
    <main className="bg-[#050505]">
      <AboutHero />
      <OurStory />
      {/* <OurMission /> */}
      <OurValues />
      <WhyChooseUs />
      <MeetTheTeam />
      <Testimonials />
    </main>
  );
}
