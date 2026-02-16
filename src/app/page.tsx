import Features from "@/components/home/Features";
import Programs from "@/components/home/Programs";
import Testimonials from "@/components/home/Transformation";
import GallerySection from "@/components/home/HomeGallery";
import { createPageMetadata } from "@/lib/metaData";
import { Metadata } from "next";
import Hero from "@/components/home/Hero";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("/");
}
const page = () => {
  return (
    <main className="relative w-full bg-[#050505] text-white">
      <Hero />
      <Features />
      <Programs />
      <GallerySection />
      <Testimonials />
    </main>
  );
};

export default page;
