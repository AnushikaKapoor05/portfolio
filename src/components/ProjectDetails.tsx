import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import type { Project } from "../data/projects";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetails({
  project,
  onClose,
}: ProjectDetailsProps) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/40 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center py-6 sm:py-10">
        <div
          className="w-full max-w-5xl rounded-[32px] border-2 border-neutral-200 bg-[#f8f7f3] p-7 shadow-2xl sm:p-10 lg:p-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ================= TOP BAR ================= */}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-600 transition-colors hover:text-neutral-950"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </button>

            <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
              {project.number}
            </span>
          </div>

          {/* ================= HEADER ================= */}
          <div className="mt-8 border-b border-neutral-200 pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                {project.category}
              </span>

              {project.featured && (
                <span className="flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-neutral-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Featured
                </span>
              )}
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              {project.title}
            </h2>

            <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-neutral-600 sm:text-lg">
              {project.description}
            </p>

            {/* ================= PROJECT LINKS ================= */}
            <div className="mt-7 flex flex-wrap gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-white hover:text-neutral-950 hover:shadow-md"
                >
                  Live Demo
                  <ArrowUpRight size={16} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-neutral-900 bg-white px-5 py-3 text-sm font-bold text-neutral-950 shadow-sm transition-all duration-200 hover:bg-neutral-900 hover:text-white hover:shadow-md"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-base"
                  />
                  GitHub Code
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          {/* ================= PROBLEM / SOLUTION ================= */}
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                The Problem
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-neutral-950">
                Why I built it
              </h3>

              <p className="mt-4 text-sm font-medium leading-7 text-neutral-600 sm:text-base">
                {project.problem}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                The Solution
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-neutral-950">
                How I approached it
              </h3>

              <p className="mt-4 text-sm font-medium leading-7 text-neutral-600 sm:text-base">
                {project.solution}
              </p>
            </div>
          </div>

          {/* ================= KEY FEATURES ================= */}
          <div className="mt-12 border-t border-neutral-200 pt-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
              Key Features
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-tight text-neutral-950">
              What I engineered
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm font-semibold leading-6 text-neutral-800 transition-all duration-200 hover:border-neutral-900"
                >
                  <span className="mr-2 text-amber-500">✦</span>
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* ================= TECHNOLOGIES ================= */}
          <div className="mt-12 border-t border-neutral-200 pt-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
              Technology Stack
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-300 bg-white px-4 py-2 font-mono text-xs font-bold text-neutral-800 shadow-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* ================= BOTTOM CTA ================= */}
          <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
              Interested in the implementation?
            </p>

            <div className="flex flex-wrap gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-700 transition-colors hover:text-neutral-950"
                >
                  Open Live Demo
                  <ArrowUpRight size={14} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-700 transition-colors hover:text-neutral-950"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  View Source
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}