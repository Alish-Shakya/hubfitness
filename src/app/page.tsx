import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Programs from "@/components/home/Programs";
import Testimonials from "@/components/home/Transformation";
import MediaGallery from "@/components/home/HomeGallery";
import GallerySection from "@/components/home/HomeGallery";

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
