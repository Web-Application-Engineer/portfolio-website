"use client";

import Image from "next/image";
import { memo, useEffect, useMemo, useRef, useState } from "react";

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

const GAP = 20;

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

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        threshold: 0.2,
        rootMargin: "120px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}

const CountCircle = memo(function CountCircle({ value, label, color }: Stat) {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(circleRef);
  const [progressValue, setProgressValue] = useState(value);

  useEffect(() => {
    if (!isVisible) return;

    let raf = 0;
    const duration = 900;
    const startTime = performance.now();

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
      className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-black/30"
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
});

type CaseStudyCarouselProps = {
  items?: CaseStudyItem[];
  title?: string;
  className?: string;
};

export default function CaseStudyCarousel({
  items = defaultItems,
  title = "SEO Projects",
  className = "",
}: CaseStudyCarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateLayout = () => {
      const viewportWidth = viewport.clientWidth;

      const cards =
        window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

      const singleCardWidth = (viewportWidth - GAP * (cards - 1)) / cards;

      setVisibleCards(cards);
      setSlideWidth(singleCardWidth);
      setIsLayoutReady(true);
    };

    updateLayout();

    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(viewport);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (
      !isLayoutReady ||
      isPaused ||
      !slideWidth ||
      isResetting ||
      items.length === 0
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [isLayoutReady, isPaused, slideWidth, isResetting, items.length]);

  useEffect(() => {
    if (items.length === 0 || currentIndex < items.length) return;

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
  }, [currentIndex, items.length]);

  const fallbackWidth =
    visibleCards === 1
      ? "100%"
      : visibleCards === 2
      ? `calc((100% - ${GAP}px) / 2)`
      : `calc((100% - ${GAP * 2}px) / 3)`;

  const translateX = slideWidth ? currentIndex * (slideWidth + GAP) : 0;

  return (
    <section
      className={`w-full overflow-hidden bg-[#002E5B] py-16 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-4">
        <div className="section-heading">
          <h2 className="section-title">{title}</h2>

          <div className="live-line mt-4">
            <span className="live-line-bar"></span>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="mt-6 w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-5"
            style={{
              transform: `translate3d(-${translateX}px, 0, 0)`,
              transition:
                isResetting || !isLayoutReady
                  ? "none"
                  : "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform",
            }}
          >
            {duplicatedItems.map((item, index) => {
              const isPriorityImage = index < visibleCards;

              return (
                <div
                  key={`${item.name}-${index}`}
                  className="shrink-0"
                  style={{
                    width: slideWidth ? `${slideWidth}px` : fallbackWidth,
                  }}
                >
                  <div className="my-3 flex min-h-[430px] flex-col items-center rounded-md border-b-8 border-r-[12px] border-b-amber-600 border-r-yellow-300 bg-amber-800/90 px-6 py-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-[#dd9416c7]">
                    <div className="mb-6 flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white shadow-xl">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={108}
                        height={108}
                        className="h-[108px] w-[108px] object-contain"
                        priority={isPriorityImage}
                        loading={isPriorityImage ? "eager" : "lazy"}
                        fetchPriority={isPriorityImage ? "high" : "low"}
                        sizes="108px"
                      />
                    </div>

                    <h3 className="mb-5 rounded border border-yellow-300 bg-black/40 px-3 py-1.5 text-[18px] font-bold text-white backdrop-blur-md sm:text-[20px] lg:text-[22px]">
                      {item.name}
                    </h3>

                    <p className="mb-10 text-[14px] leading-6 text-white sm:text-[15px] lg:text-[16px]">
                      {item.result}
                    </p>

                    <div className="mb-7 flex flex-wrap items-center justify-center gap-8 sm:gap-10">
                      {item.stats.map((stat, statIndex) => (
                        <CountCircle
                          key={`${item.name}-${stat.label}-${statIndex}`}
                          {...stat}
                        />
                      ))}
                    </div>

                    <div className="mt-auto w-full">
                      <button className="mt-6 w-full rounded-md border-2 border-gray-100 bg-amber-700 px-5 py-3 text-[20px] font-medium text-white transition hover:bg-[#002E5B]">
                        💬 Claim Your Growth
                      </button>
                    </div>
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