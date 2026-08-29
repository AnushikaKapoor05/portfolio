import { ArrowUp, Mail } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">

        {/* ================= TOP ================= */}

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Name */}

          <div>
            <a
              href="#"
              className="text-xl font-bold tracking-[-0.04em] text-white"
            >
              Anushika
              <span className="text-neutral-500">.</span>
            </a>

            <p className="mt-2 text-sm text-neutral-500">
              Software & AI Engineer
            </p>
          </div>


          {/* Social Links */}

          <div className="flex items-center gap-3">

            {/* Email */}

            <a
              href="mailto:anushikakapoor05@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-all duration-200 hover:border-white hover:bg-white hover:text-neutral-900"
            >
              <Mail size={16} />
            </a>


            {/* GitHub */}

            <a
              href="https://github.com/AnushikaKapoor05"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-all duration-200 hover:border-white hover:bg-white hover:text-neutral-900"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/anushika-kapoor-b482992a9"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-all duration-200 hover:border-white hover:bg-white hover:text-neutral-900"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>


            {/* Back to Top */}

            <a
              href="#"
              aria-label="Back to top"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 transition-all duration-200 hover:-translate-y-1 hover:bg-neutral-200"
            >
              <ArrowUp size={16} />
            </a>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="my-8 h-px bg-neutral-800" />


        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col gap-3 text-[10px] sm:flex-row sm:items-center sm:justify-between">

          <p className="font-mono uppercase tracking-[0.14em] text-neutral-600">
            © {new Date().getFullYear()} Anushika Kapoor
          </p>

          <p className="font-mono uppercase tracking-[0.14em] text-neutral-600">
            Built with React · TypeScript · Tailwind CSS
          </p>

          <p className="font-mono uppercase tracking-[0.14em] text-neutral-600">
            Sonepat, Haryana
          </p>

        </div>

      </div>
    </footer>
  );
}