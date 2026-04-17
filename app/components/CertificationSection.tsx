"use client";

export default function CertificationSection() {
  return (
    <section className="w-full bg-[#002E5B] border-2 border-amber-500 py-10">
      <div className="mx-auto w-full max-w-full">
        {/* Top content */}
        <div className="px-4 pb-6 pt-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ">
          <h2 className="text-[24px] font-extrabold leading-tight text-[#E17102] sm:text-[30px] lg:text-[38px]">
            Government Certified Web Application Engineer & Digital Marketer!
          </h2>

          <p className="mt-5 text-[15px] font-semibold leading-[1.9] text-white/80 sm:text-[16px] lg:text-[18px] text-justify">
            Mr. Anwar Hossain has been nationally recognized as a{" "}
            <strong className="text-yellow-300">Government Certified Web Application Engineer & Digital Marketer</strong>.
           Mr. Hossain is a highly skilled Web Application Engineer and SEO Expert, showcasing his expertise in modern 
            web development, technical SEO, performance optimization, and scalable application architecture. With strong experience 
            in building fast, secure, and user-friendly digital solutions, Mr. Anwar has demonstrated his ability to develop 
            result-driven web platforms. His combined knowledge of development and SEO solidifies his reputation as a trusted 
            professional, helping businesses improve online visibility, enhance user experience, and achieve sustainable digital 
            growth effectively.{" "}
            <a
              href="https://www.nsda.gov.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-yellow-300 hover:text-[#E17102]"
            >
              www.nsda.gov.bd
            </a>
            , Reg No: RPL-ICT-DMF-L3-002136 &amp; Certification No-45739211
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="/images/Government-Certified-Web-Application-Engineer-and-Digital-Marketing.webp"
            alt="Government Certified Digital Marketing Expert"
            className="block h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}