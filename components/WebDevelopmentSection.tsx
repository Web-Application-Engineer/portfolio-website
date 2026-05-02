"use client";

export default function WebDevelopmentSection() {
  const techIcons = [
    { src: "/Images/wordpress.png", alt: "WordPress" },
    { src: "/Images/php.png", alt: "PHP" },
    { src: "/Images/Laravel.png", alt: "Laravel" },
    { src: "/Images/nodejs.png", alt: "Node.JS" },
    { src: "/Images/reactjs.png", alt: "React.JS" },
    { src: "/Images/html.png", alt: "HTML" },
    { src: "/Images/CSS.webp", alt: "CSS" },
    { src: "/Images/JavaScript.png", alt: "JavaScript" },
    { src: "/Images/mongodb.png", alt: "Backend Databage" },
  ];

  return (
    <section className="overflow-hidden border-t border-[#004a94] bg-[#002E5B] py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">

        {/* LEFT CONTENT */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h2 className="mb-5 text-xl font-bold uppercase leading-snug sm:text-2xl md:text-3xl">
            Web Development Services
          </h2>

          <p className="mx-auto max-w-[650px] text-justify text-sm font-medium leading-7 text-white/80 sm:text-base sm:leading-8 lg:mx-0 lg:text-justify">
            We are top-class web designing and development services to help
            your business for improving sales and productivity of your business.
            We understand that different businesses have different requirements,
            so we offer customized web development solutions as per the unique
            requirements of various business niche. Our web developers are
            expert in all latest web development frameworks such as NodeJS,
            AngularJS, ReactJS, Magento, WordPress, .NET, and many others.
          </p>

          {/* ICONS */}
      <div className="mt-8 flex w-full items-center">
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-1 items-center justify-center"
          >
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-white p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg sm:h-14 sm:w-14">
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

          {/* BUTTON */}
        <a href="#contact" className="btn-primary mt-7 sm:text-base ml-2 ">
          VIEW MORE
        </a>
        </div>

        {/* RIGHT ROTATING RING */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px]">

            {/* Rotating outer image only */}
            <img
              src="/Images/Web-Development.png"
              alt="Web Development Services"
              className="absolute inset-0 h-full w-full rounded-full object-contain animate-spin-slow origin-center"
            />

            {/* Fixed center text/logo */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full sm:h-[125px] sm:w-[125px] md:h-[160px] md:w-[160px] lg:h-[175px] lg:w-[175px]">
              
              <img
                src="/Images/sreste-digital-marketing-and-it-solution-logo.png"   // 👉 your logo path
                alt="Sreste Digital Marketing and IT Solution Logo"
                className="w-[100%] h-[100%] object-contain"
              />

            </div>
          </div>

          </div>
        </div>

      </div>
    </section>
  );
}