"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  // Mobile menu toggle
  const [open, setOpen] = useState(false);

  // Mobile Services submenu toggle
  const [servicesOpen, setServicesOpen] = useState(false);

  // Main menu items
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "SEO Training", href: "#" },
    { name: "Portfolio", href: "#" },
  ];

  // Services submenu items
  const serviceSubmenu = [
    { name: "Web Development", href: "#" },
    { name: "SEO Optimization", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "UI/UX Design", href: "#" },
  ];

  return (
    <header className="w-full  bg-[#002E5B] text-white border-2 border-amber-500">
      
      <div className="mx-auto flex min-h-[90px] max-w-[1450px] items-center justify-between py-6 px-4 sm:px-6 lg:min-h-[110px] lg:px-8 border-1 border-gray-600">
        
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
          className="inline-flex items-center justify-center rounded-full border-2 border-white p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 md:flex lg:gap-8">
          
          {menuItems.map((item, index) =>
            item.name === "Services" ? (
              <div key={item.name} className="group relative">
                <button
                  type="button"
                  className={`inline-flex items-center gap-2 text-[17px] font-bold not-italic 
                  transition-all duration-200 hover:text-yellow-300 md:hover:scale-105 
                  lg:text-[24px] ${
                    index === 0 ? "text-yellow-300" : "text-white"
                  }`}
                >
                  {item.name}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 translate-y-[2px]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21 10 11.168l4.77-3.958" />
                  </svg>
                </button>

                <div className="invisible absolute left-0 top-full z-50 mt-2 w-[240px] rounded-md bg-gray-200 py-3 text-gray-900 font-extrabold opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {serviceSubmenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-6 py-3 text-[19px] font-bold transition-all duration-300 hover:translate-x-2 hover:bg-[#002E5B] hover:text-yellow-300"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center text-[17px] font-bold not-italic 
                transition-all duration-200 hover:text-yellow-300 md:hover:scale-105 
                lg:text-[24px] ${
                  index === 0 ? "text-yellow-300" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            )
          )}

      <Link
        href="tel:+8801786373379"
        className="ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-md 
        border border-transparent bg-[#FFDF20] px-4 py-2 text-[16px] font-extrabold not-italic text-[#002E5B]
        transition-all duration-200 md:hover:scale-105
        hover:bg-[#002E5B] hover:text-white hover:border-yellow-300
        lg:px-6 lg:py-3 lg:text-[22px]"
      >
        +880 1786373379
      </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#022a4c] md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-5 sm:px-6">
            
            {menuItems.map((item, index) =>
              item.name === "Services" ? (
                <div key={item.name} className="flex flex-col gap-2">
                  
                  {/* ✅ FIX: Added arrow icon here */}
                  <button
                    type="button"
                    className={`flex items-center justify-between text-[18px] font-bold not-italic ${
                      index === 0 ? "text-yellow-300" : "text-white"
                    }`}
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
                    <div className="ml-4 flex flex-col bg-white/5 py-2">
                      {serviceSubmenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-2 text-[16px] font-semibold text-white not-italic hover:text-yellow-300"
                          onClick={() => {
                            setServicesOpen(false);
                            setOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[18px] font-bold not-italic ${
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
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-yellow-300 px-4 py-3 text-[18px] font-extrabold not-italic text-[#002E5B] hover:bg-[#002E5B] hover:text-white"
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