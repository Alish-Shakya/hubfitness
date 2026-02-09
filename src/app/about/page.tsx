import AboutHero from "@/components/about/AboutHero";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import OurMission from "@/components/about/OurMission";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValue";
import Testimonials from "@/components/about/Testimonials";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import React from "react";

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
