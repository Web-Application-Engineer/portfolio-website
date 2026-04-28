"use client";
import SectionHeading from "./SectionHeading";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaShoppingCart,
  FaLaptopCode,
  FaBriefcase,
  FaUser,
  FaMobileAlt,
  FaCogs,
  FaShareAlt,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";

/* =========================================================
   Types
   ========================================================= */
type ServiceItem = {
  title: string;
  description: string;
  coreFeatures: string[];
  buttonText: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type ServiceSectionProps = {
  items?: ServiceItem[];
  autoPlay?: boolean;
  delay?: number;
  pauseOnHover?: boolean;
  className?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
};

/* =========================================================
   Default Services Data
   ========================================================= */

export const defaultServices: ServiceItem[] = [
  {
    title: "Local SEO",
    icon: FaMapMarkerAlt,
    description:
      "Grow local visibility with powerful SEO strategies that attract nearby customers and boost leads.",
    coreFeatures: [
      "Google Map Top Rankings",
      "More Calls & Store Visits",
      "Location Keyword Targeting",
      "Google Profile Optimization",
      "Local Citation Building",
    ],
    buttonText: "Get More Local Clients",
    href: "/services/local-seo",
  },
  {
    title: "E-Commerce SEO",
    icon: FaShoppingCart,
    description:
      "Boost online sales with powerful eCommerce SEO strategies that drive traffic & increase sales.",
    coreFeatures: [
      "High-Converting Products",
      "Category SEO Strategy",
      "Buyer Keyword Targeting",
      "Google Ranking Boost",
      "Sales Conversion Growth",
    ],
    buttonText: "Boost My Sales",
    href: "/services/ecommerce-seo",
  },
  {
    title: "Website Development",
    icon: FaLaptopCode,
    description:
      "Build high-impact websites that engage users, build trust, and convert visitors into loyal clients.",
    coreFeatures: [
      "WordPress Web Development",
      "Laravel Web Development",
      "React.JS & Node.JS Web App",
      "Next.JS & Node.JS Web App",
      "Full Stack Web & App Solutions",
    ],
    buttonText: "Start My Website",
    href: "/services/website-development",
  },
  {
    title: "E-Commerce Website",
    icon: FaShoppingCart,
    description:
      "Build fast, secure eCommerce websites that drive sales and improve user experience.",
    coreFeatures: [
      "Custom Store Development",
      "Responsive Mobile Design",
      "Fast Performance Optimization",
      "SEO Friendly Structure",
      "Secure Payment Integration",
    ],
    buttonText: "Start My Store",
    href: "/services/ecommerce-website-development",
  },
  {
    title: "Business Website",
    icon: FaBriefcase,
    description:
      "Build professional business websites that enhance brand trust and convert visitors into clients.",
    coreFeatures: [
      "Custom Business Websites",
      "Responsive Modern Design",
      "Fast Loading Speed",
      "SEO Friendly Structure",
      "Lead Generation Focus",
    ],
    buttonText: "Start My Website",
    href: "/services/business-web-development",
  },
  {
    title: "Portfolio Website",
    icon: FaUser,
    description:
      "Create personal websites that showcase your portfolio, skills, and build a strong online presence.",
    coreFeatures: [
      "Custom Personal Design",
      "Responsive Mobile Layout",
      "Fast Loading Speed",
      "SEO Friendly Structure",
      "Portfolio Showcase Setup",
    ],
    buttonText: "Build My Website",
    href: "/services/personal-website-development",
  },
  {
    title: "Apps Development",
    icon: FaMobileAlt,
    description:
      "Build high-quality mobile and web apps that deliver best performance & great user experience.",
    coreFeatures: [
      "Custom Apps Development",
      "User Friendly Interface",
      "Fast App Performance",
      "Cross Platform Support",
      "API Integration & Setup",
    ],
    buttonText: "Build My App",
    href: "/services/app-development",
  },
  {
    title: "Software Development",
    icon: FaCogs,
    description:
      "Build scalable software solutions that improve efficiency & deliver reliable business performance.",
    coreFeatures: [
      "Custom Software Development",
      "Secure System Architecture",
      "High Performance Optimization",
      "Scalable Application Design",
      "API Integration Support",
    ],
    buttonText: "Start My Software",
    href: "/services/software-development",
  },
  {
    title: "Social Media Marketing",
    icon: FaShareAlt,
    description:
      "Grow your brand with effective social media strategies that boost engagement and reach.",
    coreFeatures: [
      "Social Media Strategy",
      "Content Creation Plan",
      "Target Audience Growth",
      "Engagement Optimization",
      "Ad Campaign Management",
    ],
    buttonText: "Grow My Audience",
    href: "/services/social-media-marketing",
  },
  {
    title: "Professional Add Account",
    icon: FaCheckCircle,
    description:
      "Get your Facebook and Instagram accounts Meta Verified to boost trust, security, and credibility.",
    coreFeatures: [
      "Meta Verified Setup",
      "Account Verification Support",
      "Profile Optimization",
      "Security Enhancement",
      "Priority Support Access",
    ],
    buttonText: "Verify My Account",
    href: "/services/meta-verified-account",
  },
];

/* =========================================================
   Main Component
   ========================================================= */

export default function ServiceSection({
  items = defaultServices,
  autoPlay = true,
  delay = 2500,
  pauseOnHover = true,
  className = "",
  sectionTitle = "Services",
  sectionSubtitle = "Boost rankings and build powerful web applications with expert SEO services.",
}: ServiceSectionProps) {
  const router = useRouter();
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isDesktopCarousel, setIsDesktopCarousel] = useState(false);

  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const updateScreenType = () => {
      setIsDesktopCarousel(window.innerWidth >= 1024);
    };

    updateScreenType();
    window.addEventListener("resize", updateScreenType);

    return () => {
      window.removeEventListener("resize", updateScreenType);
    };
  }, []);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (!viewportRef.current) return;

      if (!isDesktopCarousel) {
        setSlideWidth(0);
        setCurrentIndex(0);
        return;
      }

      const viewportWidth = viewportRef.current.offsetWidth;
      const gap = 20;
      const visibleCards = 3;
      const totalGap = gap * (visibleCards - 1);
      const singleCardWidth = (viewportWidth - totalGap) / visibleCards;

      setSlideWidth(singleCardWidth);
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);

    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, [isDesktopCarousel]);

  useEffect(() => {
    if (
      !isDesktopCarousel ||
      !autoPlay ||
      isPaused ||
      slideWidth === 0 ||
      items.length === 0
    )
      return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => {
      window.clearInterval(interval);
    };
  }, [isDesktopCarousel, autoPlay, isPaused, delay, slideWidth, items.length]);

  useEffect(() => {
    if (!isDesktopCarousel || items.length === 0) return;

    if (currentIndex >= items.length) {
      const timeout = window.setTimeout(() => {
        setCurrentIndex(0);
      }, 600);

      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [currentIndex, items.length, isDesktopCarousel]);

  const enablePause = pauseOnHover && autoPlay && isDesktopCarousel;

  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement>,
    href: string
  ) => {
    if (isDesktopCarousel) return;

    const target = event.target as HTMLElement;
    if (target.closest("a, button")) return;

    router.push(href);
  };

  const handleCardKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    href: string
  ) => {
    if (isDesktopCarousel) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      router.push(href);
    }
  };

  const displayItems = isDesktopCarousel ? duplicatedItems : items;

  return (
    <section
      className={`w-full border-2 border-amber-500 bg-[#002E5B] py-16 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1450px] border border-gray-600 px-2 sm:px-6 lg:px-2">
        
        <SectionHeading title={sectionTitle} />

        <p className="mx-auto mt-5 max-w-[1450px] text-center text-[20px] font-semibold text-white sm:text-[24px] lg:text-[28px]">
          {sectionSubtitle}
        </p>

        <div
          ref={viewportRef}
          className={`relative w-full ${
            isDesktopCarousel ? "overflow-hidden" : "overflow-visible"
          }`}
          onMouseEnter={() => {
            if (enablePause) setIsPaused(true);
          }}
          onMouseLeave={() => {
            if (enablePause) setIsPaused(false);
          }}
        >
          <div
            className={
              isDesktopCarousel
                ? "flex gap-5"
                : "grid grid-cols-1 gap-5 sm:grid-cols-2"
            }
            style={
              isDesktopCarousel
                ? {
                    transform: `translateX(-${
                      currentIndex * (slideWidth + 20)
                    }px)`,
                    transition:
                      currentIndex === 0 ? "none" : "transform 600ms ease",
                    willChange: "transform",
                  }
                : undefined
            }
          >
            {displayItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className={isDesktopCarousel ? "flex-shrink-0" : "w-full"}
                  style={
                    isDesktopCarousel ? { width: `${slideWidth}px` } : undefined
                  }
                >
                  <div
                    className={`mt-4 flex min-h-[500px] flex-col rounded-[5px] border-r-12 border-b-8 border-b-amber-600 border-r-yellow-300 bg-[#dd9416c7] px-6 py-8 text-center transition duration-300 hover:-translate-y-2 hover:bg-amber-800/90 ${
                      !isDesktopCarousel ? "cursor-pointer" : ""
                    }`}
                    onClick={(event) => handleCardClick(event, item.href)}
                    onKeyDown={(event) => handleCardKeyDown(event, item.href)}
                    role={!isDesktopCarousel ? "link" : undefined}
                    tabIndex={!isDesktopCarousel ? 0 : -1}
                    aria-label={
                      !isDesktopCarousel ? `Go to ${item.title}` : undefined
                    }
                  >
                    <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-white bg-amber-800/90 text-white shadow-md">
                      <Icon className="text-[32px]" />
                    </div>

                    <h3 className="mb-3 text-[22px] font-bold leading-tight text-white sm:text-[24px] md:text-[26px] lg:text-[30px]">
                      {item.title}
                    </h3>

                    <p className="mb-5 text-left text-[14px] leading-6 text-white sm:text-justify sm:text-[15px] sm:leading-7 md:text-[16px] lg:text-[18px] lg:leading-8">
                      {item.description}
                    </p>

                    <ul className="mx-auto w-full max-w-[320px] space-y-2 rounded-md border border-amber-500/70 bg-amber-800/20 p-3 text-left text-[14px] text-white transition hover:bg-gray-800/70 sm:space-y-3 sm:p-4 sm:text-[15px] md:text-[16px] lg:text-[18px]">
                      {item.coreFeatures.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <span className="mt-[4px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-yellow-300 shadow-sm sm:mt-[5px] sm:h-[18px] sm:w-[18px] lg:mt-[6px] lg:h-[20px] lg:w-[20px]">
                            <FaSearch className="text-[7px] text-amber-800/90 sm:text-[8px] lg:text-[9px]" />
                          </span>

                          <span className="leading-5 sm:leading-6 lg:leading-7">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={item.href}
                      className="mt-6 rounded-md border-2 border-gray-100 bg-amber-800/90 px-5 py-3 text-[20px] font-medium text-white transition hover:bg-[#002E5B]"
                      aria-label={item.buttonText}
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}