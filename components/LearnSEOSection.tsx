"use client";

import SectionHeading from "./SectionHeading";
import { useState } from "react";

export default function LearnSEOSection() {
  const [activeTab, setActiveTab] = useState("keyword");
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Organic Growth, Organic Relationships",
      body: "Organic growth and organic relationships both develop naturally over time without external forces. Organic growth refers to expansion through internal resources rather than mergers or acquisitions, allowing for sustainable scaling.",
    },
    {
      title: "Freedom from the Ad Algorithm Rollercoaster",
      body: "Organic growth and organic relationships both develop naturally over time without external forces. Organic growth refers to expansion through internal resources rather than mergers or acquisitions, allowing for sustainable scaling.",
    },
    {
      title: "The Gift that Keeps on Giving",
      body: "Organic growth and organic relationships both develop naturally over time without external forces. Organic growth refers to expansion through internal resources rather than mergers or acquisitions, allowing for sustainable scaling.",
    },
    {
      title: "Building Brand Equity, Not Just Clicks",
      body: "Organic growth and organic relationships both develop naturally over time without external forces. Organic growth refers to expansion through internal resources rather than mergers or acquisitions, allowing for sustainable scaling.",
    },
    {
      title: "A Future-Proof Investment",
      body: "Organic growth and organic relationships both develop naturally over time without external forces. Organic growth refers to expansion through internal resources rather than mergers or acquisitions, allowing for sustainable scaling.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#002E5B] text-white">
      <div className="py-4 text-center">
       <div className="mx-auto mb-[30px] max-w-[1450px] px-[10px] max-[991px]:mb-[26px] max-[767px]:mb-[22px]">
        <SectionHeading title="Let Me Cultivate Your Brand." />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
            {accordionItems.map((item, index) => (
              <div
                key={item.title}
                className="border-b border-slate-200 last:border-b-0"
              >
                <button
                  type="button"
                 onClick={() => setOpenAccordion(index)}
                  className="flex w-full items-center justify-between bg-slate-100 px-4 py-4 text-left text-sm font-bold text-slate-900"
                >
                  <span>{item.title}</span>
                  <span className="flex h-4 w-4 items-center justify-center bg-blue-600 text-xs text-white">
                    {openAccordion === index ? "▼" : "▶"}
                  </span>
                </button>

                {openAccordion === index && (
                  <div className="animate-zoomIn bg-white px-4 py-5">
                    <p className="text-sm font-medium leading-7 text-slate-900">
                      {item.body}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
            type="button"
            onClick={() => setActiveTab("keyword")}
            className={`w-full sm:w-auto rounded-sm px-6 py-3 text-sm font-bold ${
            activeTab === "keyword"
                ? "bg-green-500 text-white"
                : "border-2 border-blue-500 text-white/80"
            }`}
        >
            ◎ Keyword Research
        </button>

        <button
            type="button"
            onClick={() => setActiveTab("golden")}
            className={`w-full sm:w-auto rounded-sm px-6 py-3 text-sm font-bold ${
            activeTab === "golden"
                ? "bg-green-500 text-white"
                : "border-2 border-blue-500 text-white/80"
            }`}
        >
            ◎ Golden Keyword Research
        </button>
        </div>

          {activeTab === "keyword" && (
            <div className="animate-zoomIn grid grid-cols-1 items-start gap-4 rounded bg-white px-3 py-5 shadow sm:grid-cols-[1fr_150px]">
              <div>
                <h2 className="mb-3 text-base font-bold text-slate-900">
                  Primary & Secondary Keyword
                </h2>
                <p className="text-justify text-sm font-medium leading-6 text-slate-900">
                  Primary keyword research involves identifying the main search
                  terms people use online. This helps optimize content to match
                  audience needs and boost visibility.
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src="Images/keyword-research.webp"
                  alt="Keyword Illustration"
                  className="h-35 w-40 rounded border object-cover shadow"
                />
              </div>
            </div>
          )}

          {activeTab === "golden" && (
            <div className="animate-zoomIn grid grid-cols-1 items-start gap-4 rounded bg-white px-3 py-5 shadow sm:grid-cols-[1fr_150px]">
              <div>
                <h2 className="mb-3 text-base font-bold text-slate-900">
                  Golden Keyword Research (KGR)
                </h2>
                <p className="text-justify text-sm font-medium leading-6 text-slate-900">
                  Golden Keyword Research is a method for identifying
                  high-potential, low-competition keywords. It helps content
                  rank faster and drive organic traffic.
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src="Images/golden-keyword-research.webp"
                  alt="Golden Keyword Research"
                  className="h-35 w-40 rounded border object-cover shadow"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mx-auto w-full max-w-md overflow-hidden rounded-b-3xl rounded-t-md border-4 border-orange-400 shadow-lg">
          <div className="bg-[#063b67] px-8 pt-6">
            <img
              src="Images/Best-SEO-Expert-in-Bangladesh.webp"
              alt="Best SEO Expert in Bangladesh"
              className="mx-auto h-[520px] w-full object-contain object-bottom"
            />
          </div>

          <div className="grid grid-cols-[120px_1fr] items-center gap-5 bg-white px-7 py-5">
            <div className="flex items-center justify-center">
            <img
                src="Images/Signature-Anwar-Hossain.webp"
                alt="Signature"
                className="h-12 object-cover scale-135"
            />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">
                Anwar Hossain
              </h3>
              <p className="mt-1 text-xs font-bold italic leading-5 text-slate-800 text-justify">
                SEO is an investment, not a sprint. Be persistent, be
                consistent, and watch your brand bloom with organic growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}