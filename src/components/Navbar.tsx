import { Menu, X } from "lucide-react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-[-0.04em] text-neutral-900"
        >
          Anushika
          <span className="text-neutral-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden items-center gap-5 md:flex">

          <a
            href="https://github.com/AnushikaKapoor05"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 transition-all duration-200 hover:-translate-y-0.5 hover:text-neutral-900"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-lg"
            />
          </a>

          <a
            href="https://linkedin.com/in/anushika-kapoor-b482992a9"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 transition-all duration-200 hover:-translate-y-0.5 hover:text-neutral-900"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-lg"
            />
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="rounded-xl border border-neutral-200 p-2.5 text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">

          <div className="mx-auto max-w-6xl px-6 py-6">

            <div className="flex flex-col gap-1">

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  {item.label}
                </a>
              ))}

            </div>

            {/* Mobile Socials */}
            <div className="mt-5 flex items-center gap-5 border-t border-neutral-100 pt-5">

              <a
                href="https://github.com/AnushikaKapoor05"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/anushika-kapoor-b482992a9"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                LinkedIn
              </a>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}