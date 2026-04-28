"use client";

// Import React hooks for state management and lifecycle
import { useEffect, useMemo, useState } from "react";

// Main Hero component
export default function Hero() {
  // Memoized words array to prevent re-creation on each render
  const words = useMemo(
    () => ["Web Application Engineer & SEO Expert"],
    []
  );

  // State for animated typing text
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0); // Current word index
  const [charIndex, setCharIndex] = useState(0); // Current character index
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout = 80; // Default typing speed

    // Handle deleting animation
    if (isDeleting) {
      setText(currentWord.substring(0, charIndex - 1));
      timeout = 45;
    } else {
      // Handle typing animation
      setText(currentWord.substring(0, charIndex + 1));
      timeout = 80;
    }

    // Pause before deleting starts
    if (!isDeleting && charIndex === currentWord.length) {
      timeout = 1200;
      const id = setTimeout(() => setIsDeleting(true), timeout);
      return () => clearTimeout(id);
    }

    // Reset when word is fully deleted
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Update character index for typing/deleting
    const id = setTimeout(() => {
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, timeout);

    return () => clearTimeout(id);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    // Main hero section container
    <section
      id="home"
      className="relative flex min-h-[760px] w-full items-center border-t border-[#004a94] bg-[#002E5B] border-2 border-amber-500"
    >
      {/* Wrapper container */}
      <div className="mx-auto w-full max-w-[1450px] px-2 pt-6 sm:px-4 border-1 border-gray-600">
        {/* Flex layout for content and image */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-10">
          
          {/* Left content section */}
          <div className="w-full max-w-[46rem] lg:mt-[-60px] lg:max-w-[720px]">
            
            {/* Card container with animated border */}
            <div className="relative overflow-hidden rounded-[5px] p-[3px]">
              
              {/* Spinning gradient border */}
              <div className="hero-spin absolute inset-[-120%] bg-[conic-gradient(from_0deg,#FFDF20,transparent_20%,transparent_60%,#FFDF20_75%,transparent)]" />

              {/* Inner card content */}
              <div className="relative rounded-[5px] border border-gray-600 bg-[#071F37] px-[22px] py-10 sm:px-7 sm:py-[46px] lg:px-9 lg:py-[38px] lg:pb-12">
                
                {/* Intro heading */}
                <h2 className="m-0 text-2xl text-gray-100 sm:text-[30px]">
                  Hi, I am{" "}
                  <span className="font-bold text-yellow-300">
                    Anwar Hossain
                  </span>
                </h2>

                {/* Animated typing text */}
                <h1 className="mt-1 min-h-[36px] text-[18px] font-bold leading-[2.50] text-gray-100 sm:leading-[1.6] md:leading-[1.4] lg:leading-[1.35] sm:mt-4 sm:text-[20px] md:mt-4 md:text-[28px] lg:mt-3 lg:text-[26px] xl:text-[33px]">
                  <span className="font-bold text-yellow-300">{text}</span>

                  {/* Blinking cursor */}
                  <span className="hero-pulse font-bold text-gray-100">|</span>
                </h1>

                {/* Location text */}
                <div className="mt-0 text-4xl font-bold leading-[1.25] text-gray-100 sm:text-5xl lg:mt-[-5px] lg:text-[72px]">
                  in <span className="text-green-400">Bangladesh</span>
                </div>

                {/* Description paragraph */}
                <p className="mb-0 mt-6 text-justify leading-7 text-gray-100">
                  The Best Website Developer & SEO Expert in Bangladesh
                  provides customized solutions, enhancing website performance,
                  boosting organic traffic, and driving business growth through
                  smart optimization.
                </p>
              </div>
            </div>

            {/* CTA section */}
            <div className="mx-auto mt-[-24px] w-full max-w-[640px] cursor-pointer rounded-[5px] border border-gray-600 bg-[#f18900e0] px-5 py-7 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-gray-600 hover:bg-[#002E5B] lg:mt-[-26px] lg:max-w-[670px] lg:px-[22px] lg:py-[30px]">
              
              {/* CTA title */}
              <h2 className="relative z-10 m-0 text-[22px] font-bold text-gray-100 sm:text-[26px]">
                Proven SEO expertise for long-term success!
              </h2>

              {/* CTA description */}
              <p className="mb-0 mt-2 text-center leading-8 text-gray-100 sm:leading-7">
                Helping businesses in Bangladesh grow online with proven SEO
                strategies.
              </p>

              {/* Hire button link */}
              <a
                href="https://anwarhosain.com/hire-me/"
                className="inline-block w-full"
              >
                <button className="mt-3 w-full rounded-full border border-gray-100 bg-[#071f37b4] px-3 py-3 font-bold text-green-400 transition hover:scale-[1.02] hover:bg-[#b83a08b6] hover:text-gray-100">
                  Hire Me
                </button>
              </a>
            </div>
          </div>

          {/* Right image section */}
          <div className="flex h-auto w-full justify-center p-2 sm:p-4 lg:-mt-[30px] lg:w-auto">
            <div className="relative w-full max-w-[320px] sm:max-w-[390px] lg:max-w-[500px]">
              
              {/* Profile image */}
              <div className="relative">
                <img
                  src="./images/Web-Application-Engineer-and-SEO-Expert.webp"
                  alt="Anwar Hossain"
                  title="Anwar Hossain-Web Application Engineer & SEO Expert"
                  className="block h-auto w-full max-w-[360px] sm:max-w-[410px] lg:max-w-[500px]"
                />

                {/* Rotating circular badge */}
                <div className="absolute bottom-10 left-[-25px] flex h-[140px] w-[140px] items-center justify-center bg-[#004a94]/50 rounded-full sm:bottom-[55px] sm:left-[-35px] sm:h-[170px] sm:w-[170px] md:bottom-[65px] md:left-[-45px] md:h-[190px] md:w-[190px] lg:bottom-20 lg:left-[-60px] lg:h-[220px] lg:w-[220px]">
                  
                  {/* SVG rotating text */}
                  <div className="hero-spin h-full w-full">
                    <svg viewBox="0 0 200 200" className="h-full w-full">
                      <defs>
                        <path
                          id="circlePathHero"
                          d="M 100,100
                             m -70,0
                             a 70,70 0 1,1 140,0
                             a 70,70 0 1,1 -140,0"
                        />
                      </defs>

                      {/* Outer circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#E17100"
                        strokeWidth="5"
                      />

                      {/* Circular text */}
                      <text
                        fill="#dedede"
                        className="text-[17.5px] font-bold [letter-spacing:1.5px]"
                      >
                        <textPath href="#circlePathHero" startOffset="0%">
                          • WEB APPLICATION ENGINEER & SEO EXPERT
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Center name badge */}
                  <div className="absolute flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 border-[#E17100] bg-[#071F37] text-center sm:h-[75px] sm:w-[75px] md:h-[85px] md:w-[85px] lg:h-[120px] lg:w-[120px]">
                    <span className="text-[10px] font-bold leading-4 text-gray-200 sm:text-xs sm:leading-5 md:text-sm lg:text-[22px] lg:leading-7">
                      Anwar
                      <br />
                      Hossain
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom progress bar animation */}
              <div className="absolute bottom-[-10px] left-2 h-2 w-[87%] overflow-hidden rounded-b-[32px] bg-[rgba(225,113,0,0.3)]">
                <div className="hero-slide h-full w-[40%] rounded-full bg-[#E17100]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS animations */}
      <style jsx>{`
        /* Rotation animation */
        .hero-spin {
          animation: heroSpin 10s linear infinite;
        }

        /* Blinking cursor */
        .hero-pulse {
          animation: heroPulse 2s infinite;
        }

        /* Sliding bar animation */
        .hero-slide {
          animation: heroSlide 3.5s linear infinite alternate;
        }

        /* Keyframes for rotation */
        @keyframes heroSpin {
          100% {
            transform: rotate(360deg);
          }
        }

        /* Keyframes for pulse */
        @keyframes heroPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        /* Keyframes for sliding */
        @keyframes heroSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(150%);
          }
        }
      `}</style>
    </section>
  );
}