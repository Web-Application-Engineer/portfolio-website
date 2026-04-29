"use client";

import { useLayoutEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function BeforeAfterTreatment() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [ready, setReady] = useState(false);

  const videos = [
    "https://www.youtube.com/embed/N2jc2hkUTbg",
    "https://www.youtube.com/embed/MeucRSwz1-8",
    "https://www.youtube.com/embed/COR7tNXO62E",
    "https://www.youtube.com/embed/aL3qj1LmsS4",
  ];

  const sliderVideos = [
    videos[videos.length - 1],
    ...videos,
    videos[0],
  ];

  useLayoutEffect(() => {
    const slider = sectionRef.current;
    const track = trackRef.current;

    if (!slider || !track) return;

    const slides = slider.querySelectorAll(".dr-video-slide");
    const prev = slider.querySelector(".dr-prev");
    const next = slider.querySelector(".dr-next");

    if (!slides.length) return;

    let index = 1;
    let autoSlide: ReturnType<typeof setInterval> | null = null;
    const autoDelay = 3000;
    const transitionTime = 500;

    const update = (animate = true) => {
      const slideWidth = (slides[0] as HTMLElement).offsetWidth;

      track.style.transition = animate
        ? `transform ${transitionTime}ms ease`
        : "none";

      track.style.transform = `translate3d(-${index * slideWidth}px, 0, 0)`;
    };

    const nextSlide = () => {
      index++;
      update(true);

      if (index === slides.length - 1) {
        window.setTimeout(() => {
          index = 1;
          update(false);
        }, transitionTime);
      }
    };

    const prevSlide = () => {
      index--;
      update(true);

      if (index === 0) {
        window.setTimeout(() => {
          index = slides.length - 2;
          update(false);
        }, transitionTime);
      }
    };

    const stopAuto = () => {
      if (autoSlide) {
        clearInterval(autoSlide);
        autoSlide = null;
      }
    };

    const startAuto = () => {
      stopAuto();
      autoSlide = setInterval(nextSlide, autoDelay);
    };

    const restartAuto = () => {
      stopAuto();
      startAuto();
    };

    const handleNextClick = () => {
      nextSlide();
      restartAuto();
    };

    const handlePrevClick = () => {
      prevSlide();
      restartAuto();
    };

    const handleResize = () => update(false);

    const mediaFrames = slider.querySelectorAll(".dr-media-frame");

    mediaFrames.forEach((frame) => {
      frame.addEventListener("mouseenter", stopAuto);
      frame.addEventListener("mouseleave", startAuto);
      frame.addEventListener("touchstart", stopAuto, { passive: true });
      frame.addEventListener("touchend", startAuto, { passive: true });
    });

    next?.addEventListener("click", handleNextClick);
    prev?.addEventListener("click", handlePrevClick);
    window.addEventListener("resize", handleResize);

    update(false);
    setReady(true);
    startAuto();

    return () => {
      stopAuto();

      next?.removeEventListener("click", handleNextClick);
      prev?.removeEventListener("click", handlePrevClick);
      window.removeEventListener("resize", handleResize);

      mediaFrames.forEach((frame) => {
        frame.removeEventListener("mouseenter", stopAuto);
        frame.removeEventListener("mouseleave", startAuto);
        frame.removeEventListener("touchstart", stopAuto);
        frame.removeEventListener("touchend", startAuto);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="dr-video-section overflow-hidden bg-[#002E5B] py-10"
    >
      <div className="mx-auto w-full max-w-[1450px] px-2">
        <div className="mx-auto mb-[30px] max-w-[1450px] px-[10px] max-[991px]:mb-[26px] max-[767px]:mb-[22px]">
          <SectionHeading title="Explore Me" />
        </div>

        <div className="group relative flex items-center">
          <button
            type="button"
            className="dr-slider-btn dr-prev pointer-events-none absolute left-5 top-1/2 z-[5] h-[60px] w-[42px] -translate-y-1/2 cursor-pointer rounded-full border-[3px] border-white bg-[rgba(239,131,36,0.9)] text-xl text-white opacity-0 transition-all duration-300 hover:scale-110 hover:bg-[#165C5F] group-hover:pointer-events-auto group-hover:opacity-100 max-[767px]:pointer-events-auto max-[767px]:left-[10px] max-[767px]:flex max-[767px]:h-9 max-[767px]:w-9 max-[767px]:items-center max-[767px]:justify-center max-[767px]:p-0 max-[767px]:text-base max-[767px]:leading-none max-[767px]:opacity-100"
            aria-label="Previous slide"
          >
            &#10094;
          </button>

          <div className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className={`dr-video-track flex will-change-transform ${
                ready ? "opacity-100" : "opacity-0"
              }`}
            >
              {sliderVideos.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="dr-video-slide box-border shrink-0 basis-1/2 px-[10px] max-[767px]:basis-full"
                >
                  <div className="rounded-[20px] bg-[rgba(255,215,0,0.9)] p-3 max-[767px]:mx-3">
                    <div className="dr-media-frame relative aspect-video w-full overflow-hidden rounded-[14px] bg-black">
                      <iframe
                        src={src}
                        title={`Video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="block h-full w-full rounded-[14px] border-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="dr-slider-btn dr-next pointer-events-none absolute right-5 top-1/2 z-[5] h-[60px] w-[42px] -translate-y-1/2 cursor-pointer rounded-full border-[3px] border-white bg-[rgba(239,131,36,0.9)] text-xl text-white opacity-0 transition-all duration-300 hover:scale-110 hover:bg-[#165C5F] group-hover:pointer-events-auto group-hover:opacity-100 max-[767px]:pointer-events-auto max-[767px]:right-[10px] max-[767px]:flex max-[767px]:h-9 max-[767px]:w-9 max-[767px]:items-center max-[767px]:justify-center max-[767px]:p-0 max-[767px]:text-base max-[767px]:leading-none max-[767px]:opacity-100"
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}