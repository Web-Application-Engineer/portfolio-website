"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#002E5B] pt-10 border-t border-[#004a94]">
      {/* Clean background overlay image */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-10 bg-no-repeat bg-top bg-contain"
        style={{
          backgroundImage: "url('/images/')",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1450px] items-center px-4 py-12 sm:px-6 md:px-8 lg:min-h-[700px] lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left content */}
          <div className="mx-auto w-full max-w-[650px]">
            <span className="inline-block text-[30px] font-bold text-[#ff6b00] underline underline-offset-4">
              About
            </span>

            <h2 className="mt-5 text-[28px] font-bold text-white sm:text-[32px] lg:text-[36px]">
              Anwar Hossain
            </h2>

            <p className="mt-5 text-justify text-[15px] leading-[1.9] text-white/80 sm:text-[16px] lg:text-[17px]">
              As a proficient{" "}
              <a href="#" className="font-semibold text-[#3ea6ff] underline">
                SEO
              </a>{" "}
              professional and considering SEO Expert, my journey in the digital
              marketing backdrop has been one of nonstop growth and success.
              With over a period of understanding, I have proven myself and that
              listed as a{" "}
              <strong className="text-white">
                Best SEO Expert in Bangladesh
              </strong>
              , recognized for my inventive outline and results-driven
              methodology. At the core of my attitude lies a deep understanding
              of the dynamic nature of{" "}
              <a href="#" className="font-semibold text-[#3ea6ff] underline">
                Search Engine Algorithms
              </a>{" "}
              and user behavior, enabling me to dexterity SEO resolutions that
              are not only operative but also sustainable &amp; as well as
              defendable in the long term.
            </p>

            {/* CTA Card */}
            <div className="mt-7 w-full max-w-[950px] overflow-hidden rounded-[28px] border border-[#d9d9d9] bg-[#f3f3f3] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[15px_7px_0_#E17100] sm:mt-8">
              <div className="flex">
                <div className="w-[22px] shrink-0 bg-[#d7d7d7] sm:w-[30px]" />

                <div className="w-full px-5 py-5 sm:px-6 sm:py-5 md:px-7 md:py-6">
                  <h3 className="mb-3 text-center text-[26px] font-extrabold leading-tight text-[#002E5B] sm:text-[32px] lg:text-[40px]">
                    Web Engineer & SEO Expert
                  </h3>

                  <p className="mx-auto max-w-[720px] text-[14px] leading-[1.7] text-[#4a4a4a] sm:text-[15px] lg:text-[17px] text-justify">
                    <strong>Anwar Hossain</strong> Delivering fast, scalable, and SEO-friendly web applications that help businesses succeed in the modern digital world.
                  </p>

                  <a
                    href="https://miqbalurrahman.com/about-us/"
                    className="mt-5 inline-block w-full rounded-full border-[3px] border-[#E17100] bg-[#002E5B] px-5 py-[10px] text-center text-[14px] font-bold text-[#faff00] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-[#2C2F72] hover:bg-[#E17100] hover:text-white sm:px-7 sm:text-[15px] lg:text-[17px]"
                  >
                    Let’s Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right image with LIVE BORDER ANIMATION */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px]">
              
              <div className="relative rounded-[200px] p-[4px] overflow-hidden">
                
                {/* Animated border */}
                <div className="img-spin absolute inset-[-120%] bg-[conic-gradient(from_0deg,#E17100,#002E5B,#E17100,#002E5B)]" />

                {/* Image */}
                <div className="relative rounded-[200px] bg-[#002E5B] overflow-hidden">
                <Image
                  src="/Images/about-web-application-engineer-and-seo-expert.webp"
                  alt="About Web Application Engineer & SEO Expert"
                  title="Anwar Hossain - Web Application Engineer & SEO Expert"
                  width={460}
                  height={460}
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, (max-width: 1024px) 420px, 460px"
                  className="block h-auto w-full object-cover"
                />
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Animation ONLY for image border */}
      <style jsx>{`
        .img-spin {
          animation: spinBorder 8s linear infinite;
        }

        @keyframes spinBorder {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}