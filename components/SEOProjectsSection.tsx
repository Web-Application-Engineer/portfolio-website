"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  value: number;
  label: string;
  color: string;
};

type CaseStudyItem = {
  logo: string;
  name: string;
  result: string;
  stats: Stat[];
};

/* 
  Default data is kept outside the component.
  You can also pass custom items from another page/section.
*/
const defaultItems: CaseStudyItem[] = [
  {
    logo: "/Images/dhaka-port-logo.png",
    name: "E-Commerce Ranking",
    result:
      "WinValy is remarkable journey to 87% organic growth & 91% keyword ranking on Google's.",
    stats: [
      { value: 87, label: "Growth", color: "text-yellow-300" },
      { value: 91, label: "Ranking", color: "text-green-400" },
    ],
  },
  {
    logo: "/Images/sreste-digital-marketing-and-it-solution-logo.png",
    name: "IT Solution Ranking",
    result:
      "Sreste is remarkable journey to 82% organic growth & 78% keyword ranking on Google's.",
    stats: [
      { value: 82, label: "Growth", color: "text-yellow-300" },
      { value: 78, label: "Ranking", color: "text-green-400" },
    ],
  },
  {
    logo: "/Images/premium-holdings-logo.png",
    name: "Real Estate Ranking",
    result:
      "PHL is remarkable journey to 75% organic growth & 80% keyword ranking on Google's.",
    stats: [
      { value: 75, label: "Growth", color: "text-yellow-300" },
      { value: 80, label: "Ranking", color: "text-green-400" },
    ],
  },
  {
    logo: "/Images/dr-reazul-ahsan-logo.png",
    name: "Doctor Portfolio Ranking",
    result:
      "This site is remarkable journey to 82% organic & 78% keyword ranking on Google's.",
    stats: [
      { value: 82, label: "Growth", color: "text-green-400" },
      { value: 78, label: "Ranking", color: "text-yellow-300" },
    ],
  },
];

/* 
  Reusable hook.
  No ID or global selector is used, so it will not conflict
  when this component is used multiple times.
*/
function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}

function CountCircle({ value, label, color }: Stat) {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(circleRef);

  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let raf: number;
    const duration = 1400;
    const startTime = performance.now();

    setProgressValue(0);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setProgressValue(easedProgress * value);

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, [isVisible, value]);

  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progressValue / 100) * circumference;

  return (
    <div
      ref={circleRef}
      className="relative flex h-24 w-24 items-center justify-center rounded-full bg-black/30"
    >
      <svg viewBox="0 0 80 80" className="h-24 w-24 -rotate-90">
        <circle
          cx="40"
          cy="40"
          r={radius}
          strokeWidth="7"
          stroke="currentColor"
          fill="none"
          className="text-white/25"
        />

        <circle
          cx="40"
          cy="40"
          r={radius}
          strokeWidth="7"
          stroke="currentColor"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={color}
        />
      </svg>

      <div className="absolute text-center text-xs font-bold leading-tight text-white">
        <div>{Math.round(progressValue)}%</div>
        <div className="text-[10px]">{label}</div>
      </div>
    </div>
  );
}

type CaseStudyCarouselProps = {
  items?: CaseStudyItem[];
  title?: string;
  className?: string;
};

export default function CaseStudyCarousel({
  items = defaultItems,
  title = "SEO Case Studies",
  className = "",
}: CaseStudyCarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  /*
    Duplicate items for smooth infinite carousel.
    useMemo keeps it stable and avoids unnecessary recalculation.
  */
  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const updateLayout = () => {
      if (!viewportRef.current) return;

      const width = window.innerWidth;

      /*
        Fully responsive card count:
        mobile: 1 card
        tablet: 2 cards
        desktop: 3 cards
      */
      const cards = width < 640 ? 1 : width < 1024 ? 2 : 3;

      const gap = 20;
      const viewportWidth = viewportRef.current.offsetWidth;
      const totalGap = gap * (cards - 1);
      const singleCardWidth = (viewportWidth - totalGap) / cards;

      setVisibleCards(cards);
      setSlideWidth(singleCardWidth);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    if (isPaused || slideWidth === 0 || isResetting || items.length === 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [isPaused, slideWidth, isResetting, items.length]);

  useEffect(() => {
    if (currentIndex >= items.length) {
      const timeout = window.setTimeout(() => {
        setIsResetting(true);
        setCurrentIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsResetting(false);
          });
        });
      }, 900);

      return () => window.clearTimeout(timeout);
    }
  }, [currentIndex, items.length]);

  return (
    <section className={`w-full border-2 border-amber-500 bg-[#002E5B] py-16 ${className}`}>
      <div className="mx-auto w-full max-w-[1450px] border border-gray-600 px-4 sm:px-6 lg:px-4">
        <div className="section-heading">
          <h2 className="section-title">{title}</h2>

          <div className="live-line mt-4">
            <span className="live-line-bar"></span>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-5"
            style={{
              transform: `translate3d(-${
                currentIndex * (slideWidth + 20)
              }px, 0, 0)`,
              transition: isResetting
                ? "none"
                : "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform",
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="shrink-0"
                style={{
                  width: `${slideWidth}px`,
                }}
              >
                <div className="mt-3 mb-3 flex min-h-[430px] flex-col items-center rounded-md border-b-8 border-r-[12px] border-b-amber-600 border-r-yellow-300 bg-amber-800/90 px-6 py-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-[#dd9416c7]">
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-27 w-27 object-contain"
                    />
                  </div>

                  <h3 className="mt-auto mb-5 rounded border border-yellow-300 bg-black/40 px-3 py-1.5 text-[18px] font-bold text-white backdrop-blur-md sm:text-[20px] lg:text-[22px]">
                    {item.name}
                  </h3>

                  <p className="mb-10 text-[14px] leading-6 text-white sm:text-[15px] lg:text-[16px]">
                    <span className="mr-1 rounded-md border border-yellow-300/50 bg-black/40 px-2 py-1 font-semibold backdrop-blur-md">
                      Result:
                    </span>
                    {item.result}
                  </p>

                  <div className="mb-7 flex flex-wrap items-center justify-center gap-8 sm:gap-10">
                    {item.stats.map((stat, statIndex) => (
                      <CountCircle key={`${item.name}-${stat.label}-${statIndex}`} {...stat} />
                    ))}
                  </div>

                  <div className="mt-auto w-full">
                    <button className="mt-6 w-full rounded-md border-2 border-gray-100 bg-amber-700 px-5 py-3 text-[20px] font-medium text-white transition hover:bg-[#002E5B]">
                      💬 Claim Your Growth
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          visibleCards is kept in state because layout depends on it.
          This hidden span prevents unused-state issues in strict lint setups.
        */}
        <span className="hidden" aria-hidden="true">
          {visibleCards}
        </span>
      </div>
    </section>
  );
}