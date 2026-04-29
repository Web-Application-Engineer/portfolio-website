"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t-[5px] bg-[#002E5B] text-white/80">
      <div className="mx-auto w-full max-w-[90%] px-2 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 p-3 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-[850px] text-left">
            <h2 className="text-[28px] font-extrabold sm:text-[30px]">
              Anwar Hossain
            </h2>

            <p className="mt-6 max-w-[450px] text-justify text-[15px] font-semibold leading-7 text-white/80">
              Web Application Engineer & SEO Expert specializing in building
              high-performance web applications and implementing strategic SEO
              to boost search rankings, drive targeted traffic, and help
              businesses grow faster and achieve measurable results.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex flex-wrap justify-between gap-4 rounded-3xl border border-yellow-300/20 p-3">
              <a
                href="https://facebook.com/YOUR_PAGE_NAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon bg="#4969A8">
                  <FaFacebookF />
                </SocialIcon>
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon bg="#0077B5">
                  <FaLinkedinIn />
                </SocialIcon>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <SocialIcon bg="#000000">
                  <FaTwitter />
                </SocialIcon>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <SocialIcon bg="#D92323">
                  <FaYoutube />
                </SocialIcon>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <SocialIcon bg="#25D366">
                  <FaWhatsapp />
                </SocialIcon>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <SocialIcon bg="#0084FF">
                  <FaFacebookMessenger />
                </SocialIcon>
              </a>
            </div>

            <a
              href="https://wa.me/8800000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-[5px] bg-[#00C853] px-4 py-3 text-[16px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#00a844]"
            >
              <FaWhatsapp />
              Let’s Talk
            </a>
          </div>

          {/* Important Links */}
          <FooterColumn
            title="Manu Links"
            links={[
              ["Home", "/"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Blog", "/blog"],
            ]}
          />

          {/* Services */}
          <FooterColumn
            title="Services Path"
            links={[
              ["Local SEO", "/services/local-seo"],
              ["E-Commerce SEO", "/services/ecommerce-seo"],
              ["Social Media Marketing", "/services/social-media-marketing"],
              ["Website Development", "/services/website-development"],
            ]}
          />

          {/* Explore */}
          <div className="text-left">
            <FooterHeading title="Explore Me" />

            <FooterLinks
              links={[
                ["Case Study", "/case-study"],
                ["Testimonials", "/testimonials"],
                ["Press Release", "/press"],
              ]}
            />

            <div className="mt-6 flex flex-col items-start gap-2">
              <Tag color="#c77008">SEO</Tag>
              <Tag color="#7f9b13">Digital Marketing</Tag>
              <Tag color="#7d26d9">Social Media Marketing</Tag>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-white/30 pt-6">
          <div className="flex flex-col items-start justify-between gap-3 text-left text-[14px] text-white/80 md:flex-row md:items-center md:text-center">
            <div>
              © {new Date().getFullYear()} Anwar Hossain. All rights reserved.
            </div>

            <div>
              Design &amp; Development by{" "}
              <a
                href="#"
                className="font-semibold text-white/80 transition hover:text-[#FFDF20] hover:underline"
              >
                Sreste Digital Marketing &amp; IT Solutions
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .ah-footer-live-line {
          position: relative;
          width: 130px;
          height: 2px;
          margin-top: 8px;
          margin-bottom: 24px;
          background: #636462;
          border-radius: 999px;
          overflow: hidden;
        }

        .ah-footer-live-line-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 25%;
          height: 100%;
          background: #ffdf20;
          border-radius: 999px;
          animation: ahFooterSlideLR 2.5s ease-in-out infinite alternate;
        }

        @keyframes ahFooterSlideLR {
          0% {
            left: 0%;
          }

          100% {
            left: 75%;
          }
        }

        @media (max-width: 767px) {
          .ah-footer-live-line {
            margin-left: 0;
            margin-right: auto;
          }
        }
      `}</style>
    </footer>
  );
}

/* Footer Column */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div className="text-left">
      <FooterHeading title={title} />
      <FooterLinks links={links} />
    </div>
  );
}

/* Footer Heading with Animated Line */
function FooterHeading({ title }: { title: string }) {
  return (
    <>
      <h3 className="text-[24px] font-bold text-white/80">{title}</h3>

      <div className="ah-footer-live-line">
        <span className="ah-footer-live-line-bar"></span>
      </div>
    </>
  );
}

/* Footer Links */
function FooterLinks({ links }: { links: [string, string][] }) {
  return (
    <ul className="space-y-3">
      {links.map(([label, href]) => (
        <li key={label}>
          <Link
            href={href}
            className="group flex items-center justify-start gap-2 text-[18px] font-semibold text-white/80"
          >
            <span className="text-[#FFDF20]">⊕</span>

            <span className="transition duration-300 group-hover:translate-x-1 group-hover:text-[#FFDF20]">
              {label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* Social Icon */
function SocialIcon({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <div
      className="flex h-[44px] w-[44px] items-center justify-center rounded-full border-3 border-yellow-300 text-[18px] text-white transition hover:-translate-y-1 hover:border-3 hover:border-white sm:h-[50px] sm:w-[50px] sm:text-[20px]"
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

/* Tag */
function Tag({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <span
      className="rounded px-3 py-2 text-[14px] font-bold text-white"
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}