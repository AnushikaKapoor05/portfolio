import { ArrowUpRight, Sparkles } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-neutral-200/80 bg-white text-neutral-900"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-neutral-900" />
              <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-700 sm:text-sm">
                <Sparkles size={14} className="text-amber-500" />
                02 / Featured Projects
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-xl text-base font-medium leading-7 text-neutral-700 sm:text-lg">
            A selection of production-ready systems, full-stack applications, and AI integrations
            where I've engineered solutions from architecture design to deployment.
          </p>
        </div>


        {/* ================= PROJECT LIST ================= */}
        <div className="mt-14 space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-[28px] border-2 border-neutral-200 bg-[#f8f7f3] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:bg-white hover:shadow-xl sm:p-9 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[60px_1fr_auto] lg:items-start">

                {/* Project Index Number */}
                <div className="hidden lg:block">
                  <span className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-200 bg-white px-3 py-1.5 font-mono text-xs font-bold text-neutral-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Content */}
                <div>
                  {/* Title & Featured Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl">
                      {project.title}
                    </h3>

                    {project.featured && (
                      <span className="flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-neutral-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-neutral-600 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-neutral-300 bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-neutral-800 shadow-sm transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub CTA Button */}
                <div className="shrink-0 pt-2 lg:pt-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-neutral-900 bg-white px-5 py-3 text-sm font-bold text-neutral-950 shadow-sm transition-all duration-200 hover:bg-neutral-900 hover:text-white hover:shadow-md"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-base"
                    />
                    <span>GitHub Code</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>


        {/* ================= GITHUB FOOTER ================= */}
        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200/80 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
            More open-source repositories on GitHub
          </p>

          <a
            href="https://github.com/AnushikaKapoor05"
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-700 transition-colors hover:text-neutral-950"
          >
            <FontAwesomeIcon icon={faGithub} className="text-sm" />
            @AnushikaKapoor05
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}