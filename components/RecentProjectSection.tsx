"use client";

import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "E-Commerce Website",
    image: "/images/dhaka-port.png",
    link: "https://dhakaport.com/",
  },
  {
    title: "Clothing Store Website",
    image: "/images/clothing-store-website.png",
    link: "#",
  },
  {
    title: "Doctor Portfolio Website",
    image: "/images/doctor-portfolio-website.png",
    link: "https://doctorreazulahsan.com/",
  },
  {
    title: "Real Estate Website",
    image: "/images/real-estate-website.png",
    link: "#",
  },
  {
    title: "Tours and Travel Website",
    image: "/images/tours-and-travel-website.png",
    link: "https://ritradeinternational.com/",
  },
  {
    title: "Fish and Animal Pharma Website",
    image: "/images/animal-pharma-website.png",
    link: "https://biovetpharma.com/",
  },
];

export default function ProjectSection() {
  return (
    <section className="w-full bg-[#002E5B] px-3 sm:px-4 sm:py-10">
      <div className="mx-auto w-full max-w-[1450px] px-3 sm:px-4">
        <SectionHeading title="Recent Projects" />

        <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 lg:mt-12 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <div className="group relative h-[360px] w-full overflow-hidden rounded-xl border-2 border-amber-500 bg-gray-100 shadow-lg sm:h-[480px] md:h-[560px] lg:h-[680px] xl:h-[750px]">
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="block h-auto w-full animate-[scrollImage_25s_linear_infinite_alternate] group-hover:[animation-play-state:paused]"
                />

                <h3 className="absolute top-0 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded border-2 border-yellow-300 bg-black/70 px-3 py-1.5 text-xs font-bold text-yellow-300 backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm md:text-base lg:text-2xl xl:text-3xl">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded border-2 border-[#002e5b] bg-[#994204] px-4 py-1.5 text-xs font-bold text-white transition hover:border-yellow-300 hover:bg-black/80 hover:text-yellow-300 sm:px-5 sm:py-2 sm:text-sm md:text-base lg:border-4 lg:px-6 lg:text-2xl xl:text-3xl"
                >
                  View Project
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}