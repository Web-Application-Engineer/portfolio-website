"use client";

import { useEffect, useMemo, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";

const videos = ["8.webp", "6.webp", "4.webp", "3.webp", "2.webp", "1.webp", "5.webp"];

export default function VideoCarousel() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const loopVideos = useMemo(() => [...videos, ...videos], []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;

    if (!wrap || !track) return;

    const updateAnimation = () => {
      const half = track.scrollWidth / 2;
      if (!half) return;

      wrap.style.setProperty("--half", `${half}px`);
      track.style.animationDuration = `${half / 85}s`;
      track.style.animationPlayState = "running";
    };

    updateAnimation();

    const resizeObserver = new ResizeObserver(updateAnimation);
    resizeObserver.observe(wrap);

    const pause = () => {
      track.style.animationPlayState = "paused";
    };

    const run = () => {
      track.style.animationPlayState = "running";
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", run);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", run);

    window.addEventListener("load", updateAnimation);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("load", updateAnimation);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", run);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("focusout", run);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#002E5B] py-10">
      <SectionHeading
        title="Customer Reviews"
        description="Hear what our clients have to say about their experience with us."
      />

      <div
        ref={wrapRef}
        className="review-carousel mx-auto w-full overflow-hidden px-5 py-10"
      >
        <div
          ref={trackRef}
          className="review-track flex w-max items-center gap-10"
        >
          {loopVideos.map((img, index) => (
            <a
              key={`${img}-${index}`}
              className="relative block aspect-square w-[calc(100vw-40px)] max-w-[320px] shrink-0 overflow-hidden rounded-[10px] bg-gray-200 transition duration-300 hover:z-10 hover:scale-[1.03] hover:shadow-[0_1px_10px_rgba(255,255,255,0.45)] sm:w-[calc((100vw-60px)/2)] md:w-[calc((100vw-80px)/3)] lg:w-[calc((100vw-100px)/4)] lg:max-w-[330px]"
              href="https://www.youtube.com/watch?v=N2jc2hkUTbg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch customer review video"
            >
              <img
                src={`https://doctorreazulahsan.com/wp-content/uploads/2025/09/${img}`}
                alt="Customer review"
                width={330}
                height={330}
                loading={index < 4 ? "eager" : "lazy"}
                fetchPriority={index < 4 ? "high" : "low"}
                decoding="async"
                className="block h-full w-full object-cover"
              />

              <span className="pointer-events-none absolute inset-0 rounded-[5px] border-[5px] border-amber-600" />

              <span className="absolute bottom-3 left-1/2 z-10 flex h-[55px] w-[55px] -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-md">
                <span className="absolute inset-0 rounded-full border-[5px] border-[#ffb50a] animate-[pulseRing_1.8s_infinite]" />
                <span className="ml-[3px] h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-[#BC262D]" />
              </span>
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .review-carousel {
          --half: 0px;
        }

        .review-track {
          animation-name: reviewScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 35s;
          animation-play-state: paused;
          will-change: transform;
        }

        @keyframes reviewScroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(calc(-1 * var(--half)), 0, 0);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}