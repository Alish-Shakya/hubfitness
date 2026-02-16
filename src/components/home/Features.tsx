"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";

interface Card {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

function ScrollCard({
  card,
  index,
  scrollYProgress,
}: {
  card: Card;
  index: number;
  totalCards: number;
  scrollYProgress: any;
}) {
  // Logic remains consistent with your original horizontal movement
  const itemIndex = index + 1;
  const totalItems = 4; // Intro + 3 cards
  const start = itemIndex / totalItems;

  // Custom parallax for the image inside the card
  const imageY = useTransform(
    scrollYProgress,
    [start - 0.1, start + 0.1],
    ["0%", "10%"],
  );
  const scale = useTransform(
    scrollYProgress,
    [start - 0.2, start + 0.1],
    [1.2, 1],
  );

  return (
    <div className="flex-shrink-0 w-[85vw] md:w-[65vw] h-[70vh] relative flex items-center group">
      {/* Background Large Number */}
      <div className="absolute -top-10 -left-10 select-none pointer-events-none opacity-[0.03] transition-opacity group-hover:opacity-10">
        <span className="text-[20rem] font-black leading-none">
          {index + 1}
        </span>
      </div>

      <div className="grid grid-cols-12 w-full h-full items-center gap-2">
        {/* Text Content Area */}
        <div className="col-span-12 md:col-span-6 z-10 flex flex-col justify-center order-2 md:order-1">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#E41C38] font-black tracking-[0.3em] text-xs mb-3 uppercase"
          >
            {card.subtitle}
          </motion.span>
          <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-white">
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              {card.title}
            </span>
          </h3>

          <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed border-l-3 border-[#E41C38] pl-6">
            {card.description}
          </p>
        </div>

        {/* Image Container Area */}
        <div className="col-span-12 md:col-span-6 relative h-[300px] md:h-full order-1 md:order-2">
          <motion.div
            style={{ scale }}
            className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-white/5"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              {/* {card.image ? (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              ) : ( */}

              {card.image ? (
                <video
                  src={card.image} // now use video path here
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover  transition-all duration-1000"
                />
              ) : (
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center font-bold text-zinc-800 text-4xl">
                  {card.title}
                </div>
              )}
            </motion.div>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [scrollDistance, setScrollDistance] = useState(0);

  const cards = [
    {
      title: "Strength",
      subtitle: "Build Your Power",
      description:
        "Achieve your fitness goals with our expert-guided weight training programs. We sculpt strength, endurance, and confidence.",
      image: "/heroVideo/redTheme.mp4",
    },
    {
      title: "Power",
      subtitle: "Fun & Fitness",
      description:
        "Join our high-energy group classes like Zumba, Yoga, and HIIT. Fitness is better together, and we make every session exciting.",
      image: "/heroVideo/strong.mp4",
    },
    {
      title: "Discipline",
      subtitle: "Custom Coaching",
      description:
        "Work one-on-one with certified trainers to customize your workout plan. Results are guaranteed when you train with focus.",
      image: "/heroVideo/strong.mp4",
    },
    {
      title: "Success",
      subtitle: "Custom Coaching",
      description:
        "Work one-on-one with certified trainers to customize your workout plan. Results are guaranteed when you train with focus.",
      image: "/heroVideo/strong.mp4",
    },
  ];

  const calculateDistance = () => {
    if (!containerRef.current) return;
    const wrapper = containerRef.current.querySelector(".scroll-wrapper");
    if (!wrapper) return;
    setScrollDistance(wrapper.scrollWidth - containerRef.current.offsetWidth);
  };

  useLayoutEffect(() => {
    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section
      ref={containerRef}
      // style={{ height: sectionHeight }}
      className="relative h-[400vh] bg-black"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="scroll-wrapper flex items-center gap-15 pl-[4vw]"
        >
          {/* Enhanced Intro Card */}
          <div className="flex-shrink-0 w-[55vw] md:w-[40vw] h-[70vh] flex flex-col justify-center pr-10">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold font-montserratleading-[0.9] md:leading-[0.85] tracking-tighter">
              Strength <br />
              <span className="text-[#E41C38] font-caveat">Power</span> <br />
              Dedication <br />
              Success
            </h2>
          </div>

          {cards.map((card, i) => (
            <ScrollCard
              key={i}
              card={card}
              index={i}
              totalCards={cards.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
