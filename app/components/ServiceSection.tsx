"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaLaptopCode,
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart,
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
   - Edit text and page links here later
   ========================================================= */
const defaultServices: ServiceItem[] = [
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
    buttonText: "Get More Local Customers",
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
      "Modern UI/UX Design",
      "Responsive Web Design",
      "Fast Website Performance",
      "SEO-Friendly Structure",
      "Scalable Clean Codebase",
    ],
    buttonText: "Start My Website",
    href: "/services/website-development",
  },
  {
    title: "Digital Marketing",
    icon: FaLaptopCode,
    description:
      "Grow your brand with strategic digital marketing that drives traffic & real business results",
    coreFeatures: [
      "Search Engine Marketing",
      "Social Media Marketing",
      "Targeted Ad Campaigns",
      "Content Marketing Strategy",
      "Lead Generation Growth",
    ],
    buttonText: "Grow My Business",
    href: "/services/digital-marketing",
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
  const [isMobile, setIsMobile] = useState(false);

  /* ---------------------------------------------------------
     Duplicate items for smooth loop effect
     --------------------------------------------------------- */
  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  /* ---------------------------------------------------------
     Detect mobile view
     --------------------------------------------------------- */
  useEffect(() => {
    const updateScreenType = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScreenType();
    window.addEventListener("resize", updateScreenType);

    return () => {
      window.removeEventListener("resize", updateScreenType);
    };
  }, []);

  /* ---------------------------------------------------------
     Responsive slide width
     - Mobile: 1 card
     - Tablet: 2 cards
     - Desktop: 3 cards
     --------------------------------------------------------- */
  useEffect(() => {
    const updateSlideWidth = () => {
      if (!viewportRef.current) return;

      const viewportWidth = viewportRef.current.offsetWidth;
      const gap = 20;

      let visibleCards = 1;

      if (window.innerWidth >= 1024) {
        visibleCards = 3;
      } else if (window.innerWidth >= 768) {
        visibleCards = 2;
      }

      const totalGap = gap * (visibleCards - 1);
      const singleCardWidth = (viewportWidth - totalGap) / visibleCards;

      setSlideWidth(singleCardWidth);
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);

    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  /* ---------------------------------------------------------
     Auto slide
     --------------------------------------------------------- */
  useEffect(() => {
    if (!autoPlay || isPaused || slideWidth === 0 || items.length === 0) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => {
      window.clearInterval(interval);
    };
  }, [autoPlay, isPaused, delay, slideWidth, items.length]);

  /* ---------------------------------------------------------
     Reset index for infinite-like effect
     --------------------------------------------------------- */
  useEffect(() => {
    if (items.length === 0) return;

    if (currentIndex >= items.length) {
      const timeout = window.setTimeout(() => {
        setCurrentIndex(0);
      }, 600);

      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [currentIndex, items.length]);

  const enablePause = pauseOnHover && autoPlay;

  /* ---------------------------------------------------------
     Mobile full-card click
     - Only active on mobile
     - Button and inner link clicks won't double-trigger
     --------------------------------------------------------- */
  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement>,
    href: string
  ) => {
    if (!isMobile) return;

    const target = event.target as HTMLElement;
    if (target.closest("a, button")) return;

    router.push(href);
  };

  const handleCardKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    href: string
  ) => {
    if (!isMobile) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      router.push(href);
    }
  };

  return (
    <section
      className={`w-full border-2 border-amber-500 bg-[#002E5B] py-16 ${className}`}
    >
      {/* Main container */}
      <div className="mx-auto w-full max-w-[1450px] border border-gray-600 px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          <h2 className="animated-underline mb-[-2px] text-[40px] font-bold text-[#E1641E]">
            {sectionTitle}
          </h2>

          <div className="mx-auto w-[150px]">
            <div className="live-line">
              <span className="live-line-bar"></span>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-[1450px] text-[28px] font-bold leading-snug text-white sm:text-[36px] lg:text-[37px]">
            {sectionSubtitle}
          </p>
        </div>

        {/* Slider viewport */}
        <div
          ref={viewportRef}
          className="relative w-full overflow-hidden"
          onMouseEnter={() => {
            if (enablePause) setIsPaused(true);
          }}
          onMouseLeave={() => {
            if (enablePause) setIsPaused(false);
          }}
        >
          {/* Slider track */}
          <div
            className="flex gap-5"
            style={{
              transform: `translateX(-${currentIndex * (slideWidth + 20)}px)`,
              transition: currentIndex === 0 ? "none" : "transform 600ms ease",
              willChange: "transform",
            }}
          >
            {duplicatedItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `${slideWidth}px` }}
                >
                  {/* Service card */}
                  <div
                    className={`mt-4 flex min-h-[500px] flex-col rounded-[5px] border-r-12 border-b-8 border-b-amber-600 border-r-yellow-300 bg-[#dd9416c7] px-6 py-8 text-center transition duration-300 hover:-translate-y-2 hover:bg-amber-800/90 ${
                      isMobile ? "cursor-pointer" : ""
                    }`}
                    onClick={(event) => handleCardClick(event, item.href)}
                    onKeyDown={(event) => handleCardKeyDown(event, item.href)}
                    role={isMobile ? "link" : undefined}
                    tabIndex={isMobile ? 0 : -1}
                    aria-label={isMobile ? `Go to ${item.title}` : undefined}
                  >
                    {/* Main round icon */}
                    <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-white bg-amber-800/90 text-white shadow-md">
                      <Icon className="text-[32px]" />
                    </div>

                   {/* Title */}
                <h3 className="mb-3 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-bold leading-tight text-white">
                {item.title}
                </h3>

                {/* Single Description */}
                <p className="mb-5 text-left text-[14px] leading-6 text-white sm:text-justify sm:text-[15px] sm:leading-7 md:text-[16px] lg:text-[18px] lg:leading-8">
                {item.description}
                </p>

                {/* One Column Core Features */}
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

                    {/* CTA button link */}
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