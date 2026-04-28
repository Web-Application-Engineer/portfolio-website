"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const reasons = [
  {
    id: 1,
    title: "Proven SEO Expertise",
    text: "With over a decade of experience in the Bangladesh SEO market, my expertise encompasses a deep understanding of search engine algorithms and effective strategies for improving online visibility. Together with my skilled professionals leverage data-driven insights and tailored approaches to enhance website rankings, drive targeted traffic, and boost conversions for businesses across various industries.",
    image: "/Images/proven-seo.webp",
  },
  {
    id: 2,
    title: "Result Driven Strategy",
    text: "I focus on practical SEO strategies that improve rankings, increase organic traffic, and help businesses generate more qualified leads through sustainable optimization.",
    image: "/Images/roi-enhancement.webp",
  },
  {
    id: 3,
    title: "Business Growth Support",
    text: "My SEO consultancy helps businesses save time, adapt to market changes, improve conversions, and build long-term digital growth.",
    image: "/Images/seo-solution.webp",
  },
];

export default function SeoConsultancySection() {
  const [active, setActive] = useState(1);

  const activeReason = reasons.find((item) => item.id === active);

  return (
    <section className="w-full bg-[#002E5B] py-10 md:py-16 border-2 border-amber-500 ">
      <div className="mx-auto max-w-[1450px] px-4 border border-gray-600">
        {/* Heading */}
        <div className="text-center ">
          <h2 className="text-xl font-extrabold text-white/80 sm:text-2xl md:text-3xl ">
            Why Should You Take My SEO Consultancy?
          </h2>

          <p className="mx-auto mt-4 max-w-[1450px] text-left text-sm font-bold leading-7 text-white/60 sm:text-base md:mt-6 md:text-lg md:leading-8">
            SEO consultancy boosts online visibility and traffic through expert
            strategies. It saves time, adapts to industry changes, and
            ultimately enhances conversions and revenue, driving sustainable
            business growth through the connect of Best of SEO Expert in
            Bangladesh.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap md:mt-12 md:gap-6">
          {reasons.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex h-12 w-full items-center justify-center gap-2 rounded border px-5 text-base font-bold transition-all duration-300 sm:h-14 sm:w-auto sm:min-w-[175px] sm:px-8 sm:text-lg ${
                active === item.id
                  ? "border-yellow-300 bg-[#29c847] text-yellow-300"
                  : "border-yellow-300 bg-[#873B09] text-white hover:bg-[#29c847] hover:text-white"
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border-4 ${
                  active === item.id ? "border-white" : "border-[#FFDF20]"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              </span>
              Reason {item.id}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-8 grid items-center gap-8 rounded-md border border-white/30 bg-[#003C77] p-4 text-left sm:p-6 md:grid-cols-[1.5fr_1fr] md:gap-10 md:text-justify mb-4"
        >
          <div>
            <h3 className="text-lg font-extrabold text-white/80 sm:text-xl md:text-2xl">
              {activeReason.title}
            </h3>

            <p className="mt-4 max-w-4xl text-sm font-semibold leading-7 text-white/80 md:mt-6">
              {activeReason.text}
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex transform rounded border border-yellow-300 bg-[#29c847] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:bg-[#873B09] hover:text-white"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              key={active}
              src={activeReason.image}
              alt={activeReason.title}
              className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[330px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}