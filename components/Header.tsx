"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#" },
    { name: "SEO Training", href: "#" },
    { name: "Portfolio", href: "#" },
  ];

  const megaServices = [
    {
      title: "Website Development",
      items: [
        {
          name: "E-Commerce Website",
          href: "/services/ecommerce-website-development",
          desc: "Secure online stores built for sales.",
        },
        {
          name: "Business Website",
          href: "/services/business-web-development",
          desc: "Professional websites for growing businesses.",
        },
        {
          name: "Portfolio Website",
          href: "/services/personal-website-development",
          desc: "Personal websites to showcase your brand.",
        },
        {
          name: "Website Auditing",
          href: "#",
          desc: "Build high-quality backlinks to boost authority and rankings.",
        },
      ],
    },

    {
      title: "SEO & Branding",
      items: [
        {
          name: "Local SEO",
          href: "/services/local-seo",
          desc: "Growth in local search & Google Map.",
        },
        {
          name: "E-Commerce SEO",
          href: "/services/ecommerce-seo",
          desc: "Grow product traffic, rankings, and sales.",
        },
        {
          name: "Link Building",
          href: "#",
          desc: "Build high-quality backlinks to boost authority and rankings.",
        },
        {
          name: "Google Business Profile",
          href: "#",
          desc: "Build high-quality backlinks to boost authority and rankings.",
        },     
      ],
    },
    
    {
      title: "Apps & Software",
      items: [
        {
          name: "Apps Development",
          href: "/services/app-development",
          desc: "Mobile & Web Apps with smooth UX.",
        },
                {
          name: "Software Development",
          href: "/services/software-development",
          desc: "Custom software for business automation.",
        },
        {
          name: "API Development",
          href: "/services/ecommerce-website-development",
          desc: "Seamless system integration for smart automation.",
        },
        {
          name: "SaaS Development",
          href: "/services/ecommerce-website-development",
          desc: "Scalable cloud-based solutions for modern businesses.",
        },

      ],
    },
    {
      title: "Digital Marketing",
      items: [

         {
          name: "Search Engine Marketing",
          href: "#",
          desc: "Paid ads to get instant traffic & leads.",
        },

        {
          name: "Social Media Marketing",
          href: "/services/social-media-marketing",
          desc: "Grow reach, engagement and brand trust.",
        },
        {
          name: "Meta Verified Account",
          href: "/services/meta-verified-account",
          desc: "Verification support for Facebook and Instagram.",
        },
        {
          name: "Email Marketing",
          href: "#",
          desc: "Build relationships and increase repeat sales.",
        },
       
      ],
    },
  ];

  return (
    <header className="w-full border-2 border-amber-500 bg-[#002E5B] text-white">
      <div className="mx-auto flex min-h-[90px] max-w-[1450px] items-center justify-between border border-gray-600 px-4 py-6 sm:px-6 lg:min-h-[110px] lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/Web-Application-Engineer-and-SEO-Expert-Logo.png"
            alt="Logo"
            width={200}
            height={80}
            className="h-auto w-[135px] sm:w-[170px] lg:w-[210px]"
            priority
          />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border-2 border-white p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 lg:flex lg:gap-8">
          {menuItems.map((item, index) =>
            item.name === "Services" ? (
              <div key={item.name} className="group static">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-[17px] font-bold transition-all duration-200 hover:scale-105 hover:text-yellow-300 lg:text-[24px]"
                >
                  {item.name}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 translate-y-[2px] transition-transform duration-300 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21 10 11.168l4.77-3.958" />
                  </svg>
                </button>

                {/* Premium Mega Menu */}
                <div className="invisible absolute left-1/2 top-[90px] z-50 w-[calc(100%-32px)] max-w-[1250px] -translate-x-1/2 translate-y-4 rounded-2xl border border-yellow-300/30 bg-white p-6 text-[#002E5B] opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 lg:top-[105px]">
                  <div className="grid grid-cols-4 gap-5">
                    {megaServices.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
                      >
                        <h3 className="mb-4 border-b border-gray-300 pb-2 text-[20px] font-extrabold text-[#E1641E]">
                          {group.title}
                        </h3>

                        <div className="space-y-3">
                          {group.items.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block rounded-lg p-3 transition hover:bg-[#002E5B] hover:text-white"
                            >
                              <span className="block text-[17px] font-extrabold">
                                {service.name}
                              </span>
                              <span className="mt-1 block text-[13px] font-medium leading-5 opacity-80">
                                {service.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-xl bg-[#002E5B] px-6 py-5 text-white">
                    <div>
                      <h4 className="text-[22px] font-extrabold text-yellow-300">
                        Need Custom Solution?
                      </h4>
                      <p className="mt-1 text-[15px] text-white/90">
                        Get SEO, Website, Apps and Software Support from One Place.
                      </p>
                    </div>

                    <Link
                      href="tel:+8801786373379"
                      className="rounded-md bg-[#FFDF20] px-5 py-3 text-[18px] font-extrabold text-[#002E5B] transition hover:bg-white"
                    >
                      Call Now
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center text-[17px] font-bold transition-all duration-200 hover:scale-105 hover:text-yellow-300 lg:text-[24px] ${
                  index === 0 ? "text-yellow-300" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            )
          )}

          <Link
            href="tel:+8801786373379"
            className="ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#FFDF20] px-4 py-2 text-[16px] font-extrabold text-[#002E5B] transition-all duration-200 hover:scale-105 hover:border-yellow-300 hover:bg-[#002E5B] hover:text-white lg:px-6 lg:py-3 lg:text-[22px]"
          >
            +880 1786373379
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#022a4c] lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-5 sm:px-6">
            {menuItems.map((item, index) =>
              item.name === "Services" ? (
                <div key={item.name} className="flex flex-col gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-between text-[18px] font-bold text-white"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>{item.name}</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21 10 11.168l4.77-3.958" />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div className="mt-2 space-y-4 rounded-xl bg-white/5 p-4">
                      {megaServices.map((group) => (
                        <div key={group.title}>
                          <h3 className="mb-2 text-[16px] font-extrabold text-yellow-300">
                            {group.title}
                          </h3>

                          <div className="flex flex-col gap-2">
                            {group.items.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="rounded-md px-3 py-2 text-[15px] font-semibold text-white/90 hover:bg-white/10 hover:text-yellow-300"
                                onClick={() => {
                                  setServicesOpen(false);
                                  setOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[18px] font-bold ${
                    index === 0 ? "text-yellow-300" : "text-white/90"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}

            <Link
              href="tel:+8801786373379"
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-yellow-300 px-4 py-3 text-[18px] font-extrabold text-[#002E5B] hover:bg-[#002E5B] hover:text-white"
              onClick={() => setOpen(false)}
            >
              +880 1786373379
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}