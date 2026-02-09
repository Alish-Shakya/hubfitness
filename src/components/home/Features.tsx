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
  totalCards,
  scrollYProgress,
}: {
  card: Card;
  index: number;
  totalCards: number;
  scrollYProgress: any;
}) {
  // itemIndex is card index + 1 because of the intro card
  const itemIndex = index + 1;
  const totalItems = totalCards + 1;

  // start and end of the portion where this card is focal
  const start = itemIndex / totalItems;

  // We want it to start zoomed in as it appears from the right
  // and zoom out to 1.0 as it moves towards the left.
  const scale = useTransform(
    scrollYProgress,
    [start - 0.2, start + 0.1],
    [1.4, 1],
    { clamp: true },
  );

  return (
    <div
      className="
        flex-shrink-0
        w-[70vw] sm:w-[60vw] md:w-[50vw]
        h-[60vh] md:h-[70vh]
        relative group overflow-hidden border-l border-border pl-4 sm:pl-6 md:pl-8
        flex flex-col justify-center
      "
    >
      <div className="absolute top-0 right-0 py-4 opacity-20">
        <span className="text-6xl sm:text-7xl md:text-9xl font-black text-transparent stroke-text">
          0{index + 1}
        </span>
      </div>

      <h3 className="text-sm sm:text-lg md:text-xl text-muted-foreground font-mono mb-2 tracking-widest uppercase">
        {card.subtitle}
      </h3>
      <h4 className="text-3xl sm:text-4xl md:text-7xl font-bold text-brand-primary mb-4 md:mb-6 tracking-tight leading-none uppercase">
        {card.title}
      </h4>

      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-secondary relative mb-6 md:mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        <motion.div style={{ scale }} className="w-full h-full relative">
          {card.image ? (
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-black text-6xl sm:text-7xl md:text-8xl opacity-10 rotate-12">
                MALCOLM
              </div>
            </>
          )}
        </motion.div>
      </div>

      <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
        {card.description}
      </p>
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
      image: "/cover.jpg",
    },
    {
      title: "Group",
      subtitle: "Fun & Fitness",
      description:
        "Join our high-energy group classes like Zumba, Yoga, and HIIT. Fitness is better together, and we make every session exciting.",
      image: "/cover.jpg",
    },
    {
      title: "Personal",
      subtitle: "Your Goals, Our Mission",
      description:
        "Work one-on-one with certified trainers to customize your workout plan. Results are guaranteed when you train with focus and guidance.",
      image: "/cover.jpg",
    },
  ];

  // Dynamically calculate scroll distance based on wrapper width and viewport
  const calculateDistance = () => {
    if (!containerRef.current) return;
    const wrapper = containerRef.current.querySelector(".scroll-wrapper");
    if (!wrapper) return;
    const totalWidth = wrapper.scrollWidth;
    const viewportWidth = containerRef.current.offsetWidth;
    setScrollDistance(totalWidth - viewportWidth);
  };

  useLayoutEffect(() => {
    calculateDistance();
    // Recalculate on window resize
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", scrollDistance ? `-${scrollDistance}px` : "0px"],
  );

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-background">
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-[100dvh] md:h-screen flex items-center overflow-x-hidden">
        <motion.div
          style={{ x }}
          className="scroll-wrapper flex gap-4 sm:gap-6 md:gap-10 px-4 sm:px-8 md:px-12"
        >
          {/* Intro Title Card */}
          <div className="flex-shrink-0 w-[70vw] sm:w-[60vw] md:w-[50vw] h-[60vh] md:h-[70vh] flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-semibold text-brand-primary leading-[0.9] md:leading-[0.85] tracking-tighter">
              Strenght <br />
              <span className="text-lime-400 font-caveat">Power</span> <br />
              Dedication <br />
              Success
            </h2>
            <div className="mt-4 md:mt-8 w-24 h-1 bg-lime-400" />
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

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-4 sm:left-10 text-muted-foreground text-xs font-mono uppercase tracking-widest z-0">
        Scroll to explore &rarr;
      </div>
    </section>
  );
}
