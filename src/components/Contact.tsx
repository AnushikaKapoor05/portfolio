import {
  ArrowUpRight,
  Mail,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-neutral-200 bg-white text-neutral-900"
    >
      {/* Background grid matching Hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-neutral-900" />
            <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-700 sm:text-sm">
              <Sparkles size={14} className="text-amber-500" />
              06 / Get In Touch
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="text-neutral-500"> useful.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-neutral-700 sm:text-xl">
            I'm open to Software Engineering and AI opportunities, internships,
            collaborations, and innovative ideas. Feel free to reach out directly!
          </p>
        </div>

        {/* ================= PRIMARY CONTACT (EMAIL) ================= */}
        <div className="mt-12">
          <a
            href="mailto:anushikakapoor05@gmail.com"
            className="group block rounded-[28px] border-2 border-neutral-200 bg-neutral-50/70 p-7 text-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:bg-white hover:shadow-xl sm:p-9"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-md">
                  <Mail size={24} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
                    Email me
                  </p>
                  <p className="mt-1 break-all text-xl font-black tracking-tight text-neutral-950 sm:text-2xl lg:text-3xl">
                    anushikakapoor05@gmail.com
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-500">
                    Click to start a conversation
                  </p>
                </div>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-neutral-300 bg-white transition-all duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </a>
        </div>

        {/* ================= OTHER CONTACT OPTIONS ================= */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anushika-kapoor-b482992a9"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[28px] border-2 border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
              </div>

              <ArrowUpRight
                size={20}
                className="text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-950"
              />
            </div>

            <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
              Connect on
            </p>
            <h3 className="mt-1 text-xl font-bold text-neutral-950">
              LinkedIn
            </h3>
            <p className="mt-1 text-sm font-medium text-neutral-600">
              Let's connect professionally.
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AnushikaKapoor05"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[28px] border-2 border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </div>

              <ArrowUpRight
                size={20}
                className="text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-950"
              />
            </div>

            <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
              Explore my work
            </p>
            <h3 className="mt-1 text-xl font-bold text-neutral-950">
              GitHub
            </h3>
            <p className="mt-1 text-sm font-medium text-neutral-600">
              Browse repositories & codebases.
            </p>
          </a>

        </div>

        {/* ================= PHONE ================= */}
        <a
          href="tel:+919306633779"
          className="group mt-5 flex flex-col gap-4 rounded-[28px] border-2 border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-neutral-900 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
              <Phone size={19} strokeWidth={1.8} />
            </div>

            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-500">
                Phone
              </p>
              <p className="mt-0.5 text-base font-bold text-neutral-950">
                +91 93066 33779
              </p>
            </div>
          </div>

          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-neutral-600 transition-colors group-hover:text-neutral-950">
            Call directly →
          </span>
        </a>

        {/* ================= AVAILABILITY FOOTER ================= */}
        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-700">
              Open to opportunities
            </span>
          </div>

          <a
            href="mailto:anushikakapoor05@gmail.com"
            className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-600 transition-colors hover:text-neutral-950"
          >
            <Send size={14} />
            Start a conversation
          </a>
        </div>

      </div>
    </section>
  );
}