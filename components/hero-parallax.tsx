"use client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { LoaderOne } from "@/components/ui/loader";

const products = [
  {
    title: "TechFlow SaaS Dashboard",
    link: "#",
    thumbnail: "/modern-saas-dashboard.png",
  },
  {
    title: "LuxeStyle Fashion Store",
    link: "#",
    thumbnail: "/luxury-fashion-e-commerce-website.png",
  },
  {
    title: "MedConnect Clinic Portal",
    link: "#",
    thumbnail: "/modern-medical-clinic-website.png",
  },
  {
    title: "Digital Marketing Campaign",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    title: "E-commerce Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
  },
  {
    title: "Brand Identity Design",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
  },
  {
    title: "Mobile App Development",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
  },
  {
    title: "SEO Optimization",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1571677208775-05e04d6e2d05?w=800&auto=format&fit=crop",
  },
  {
    title: "Social Media Strategy",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
  },
  {
    title: "Web Development",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
  },
  {
    title: "Growth Analytics",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  },
  {
    title: "Content Marketing",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
  },
  {
    title: "UI/UX Design",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop",
  },
  {
    title: "Digital Transformation",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
  },
  {
    title: "Performance Optimization",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  },
];

export const HeroParallax = () => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      id="work"
      className="h-[300vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="will-change-transform"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20 mb-10 md:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 md:mb-20 space-x-10 md:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const words = "We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products.";
  
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 lg:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-xl md:text-4xl lg:text-7xl font-heading font-black text-white">
        Heavy Design, <br /> <span className="text-white/80">Light Feel</span>
      </h1>
      <div className="max-w-2xl mt-4 md:mt-8">
        <TextGenerateEffect 
          words={words} 
          className="text-sm md:text-base lg:text-xl text-white/70"
        />
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-64 md:h-80 lg:h-96 w-[20rem] md:w-[25rem] lg:w-[30rem] relative shrink-0 will-change-transform"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg z-10">
            <LoaderOne />
          </div>
        )}
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          loading="lazy"
          decoding="async"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
          onLoad={() => setIsLoading(false)}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold">
        {product.title}
      </h2>
    </motion.div>
  );
};