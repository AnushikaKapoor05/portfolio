import { ArrowDown, ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import resume from "../assets/AnushikaKapoor_Resume.pdf";
import profile from "../assets/profile.png";

const highlights = [
  "Full-Stack & Mobile",
  "AI & Data Pipelines",
  "C++ / DSA Problem Solver",
  "React, Flutter & Node.js",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white text-neutral-900"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:px-10 lg:pb-32 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">

          {/* LEFT SIDE */}
          <div>

            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-neutral-900" />

              <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-700 sm:text-sm">
                <Sparkles size={14} className="text-amber-500" />
                Software & AI Engineer
              </p>
            </div>

            {/* Name */}
            <h1 className="mt-5 text-5xl font-black tracking-tight text-neutral-950 sm:text-6xl md:text-7xl">
              Anushika Kapoor
            </h1>

            {/* Tagline */}
            <p className="mt-5 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-neutral-800 sm:text-3xl">
              Bridging
              <span className="text-neutral-500"> core computer science </span>
              with scalable, product-ready systems.
            </p>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-lg font-medium leading-8 text-neutral-700 sm:text-xl sm:leading-9">
              Computer Science undergraduate at SRM University, Delhi-NCR. I architect reliable 
              end-to-end applications — from responsive web and mobile interfaces to backend microservices, 
              real-time databases, and AI-driven predictive pipelines.
            </p>

            {/* Highlight pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-300 bg-neutral-50 px-3.5 py-1.5 text-xs font-semibold text-neutral-700 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Location & Availability Status */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-600 sm:text-base">
              <div className="flex items-center gap-2">
                <MapPin size={18} strokeWidth={2} className="text-neutral-700" />
                <span>Delhi-NCR / Haryana, India</span>
              </div>
              <span className="hidden sm:inline text-neutral-300">•</span>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 font-semibold">Open for SDE Roles</span>
              </div>
            </div>

            {/* Buttons */}
<div className="mt-10 flex flex-wrap items-center gap-4">

{/* View Projects (Styled like Résumé button) */}
<a
  href="#projects"
  className="group inline-flex items-center gap-3 rounded-full border-2 border-neutral-900 bg-white px-7 py-4 text-base font-bold text-neutral-900 transition-all duration-200 hover:-translate-y-1 hover:bg-neutral-900 hover:text-white hover:shadow-lg active:scale-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
>
  View Projects
  <ArrowUpRight
    size={18}
    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</a>

{/* Resume */}
<a
  href={resume}
  download="AnushikaKapoor_Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="group inline-flex items-center gap-3 rounded-full border-2 border-neutral-900 bg-white px-7 py-4 text-base font-bold text-neutral-900 transition-all duration-200 hover:-translate-y-1 hover:bg-neutral-900 hover:text-white hover:shadow-lg active:scale-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
>
  <Download
    size={18}
    className="transition-transform duration-200 group-hover:translate-y-0.5"
  />
  Résumé
</a>

</div>
            {/* Social links */}
            <div className="mt-10 flex items-center gap-5">

              {/* GitHub */}
              <a
                href="https://github.com/AnushikaKapoor05"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-sm text-base font-semibold text-neutral-700 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-lg"
                />
                GitHub
              </a>

              <span className="h-5 w-px bg-neutral-300" />

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/anushika-kapoor-b482992a9"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-sm text-base font-semibold text-neutral-700 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-lg"
                />
                LinkedIn
              </a>

            </div>
          </div>

          {/* RIGHT SIDE - PROFILE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Decorative frame */}
              <div className="absolute -right-5 -top-5 h-full w-full rounded-[28px] border-2 border-neutral-300" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[28px] border-2 border-neutral-200 bg-neutral-100 shadow-xl">
                <img
                  src={profile}
                  alt="Anushika Kapoor"
                  className="h-[440px] w-[340px] object-cover sm:h-[500px] sm:w-[390px]"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-7 -left-7 rounded-2xl border-2 border-neutral-200 bg-white px-6 py-5 shadow-xl">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500">
                  Focus Area
                </p>

                <p className="mt-1 text-base font-bold text-neutral-950">
                  Full-Stack & AI Systems
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Explore */}
        <a
          href="#projects"
          className="mt-24 flex w-fit items-center gap-4 rounded-sm text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
            Explore Work
          </span>

          <ArrowDown
            size={18}
            className="animate-bounce"
          />
        </a>

      </div>
    </section>
  );
}