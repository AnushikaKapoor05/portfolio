import {
  BriefcaseBusiness,
  CalendarDays,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-200/80 bg-[#f8f7f3] text-neutral-900"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-neutral-900" />
              <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-700 sm:text-sm">
                <Sparkles size={14} className="text-amber-500" />
                03 / Industry Experience
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
              Where I've built.
            </h2>
          </div>

          <p className="max-w-xl text-base font-medium leading-7 text-neutral-700 sm:text-lg">
            Practical experience working on data analysis, business
            intelligence, and data-driven analytical workflows.
          </p>
        </div>

        {/* ================= EXPERIENCE CARD ================= */}
        <div className="mt-14 rounded-[28px] border-2 border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-neutral-900 hover:shadow-xl sm:p-9 lg:p-10">

          {/* Top Row */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-md">
                <BriefcaseBusiness size={24} strokeWidth={1.8} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
                    Industry Internship
                  </span>

                  <span className="text-neutral-300">•</span>

                  <span className="flex items-center gap-1 font-mono text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Remote
                  </span>
                </div>

                <h3 className="mt-1.5 text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl">
                  Data Science Intern
                </h3>

                <p className="mt-1 text-base font-bold text-neutral-700">
                  Bluestock Fintech
                </p>
              </div>
            </div>

            {/* Date Pill */}
            <span className="flex items-center gap-2 rounded-full border-2 border-neutral-200 bg-[#f8f7f3] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-700">
              <CalendarDays size={13} className="text-neutral-700" />
              May — Jul 2026
            </span>
          </div>

          {/* Divider */}
          <div className="my-8 h-[2px] bg-neutral-100" />

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

            {/* Left Box */}
            <div className="rounded-2xl border-2 border-neutral-200 bg-[#f8f7f3] p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
                Role Focus
              </p>

              <h4 className="mt-3 text-xl font-black text-neutral-950">
                Data Analytics & Business Intelligence
              </h4>

              <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-600">
                Contributed to data analytics and business intelligence
                initiatives involving structured datasets, analysis,
                visualization, and data-driven insights.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
                Key Responsibilities & Impact
              </p>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-3.5 text-sm font-medium leading-relaxed text-neutral-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                  <span>
                    Applied <strong className="font-bold text-neutral-950">Python</strong>
                    {" "}and data analysis techniques for processing,
                    transforming, and analyzing structured datasets.
                  </span>
                </li>

                <li className="flex items-start gap-3.5 text-sm font-medium leading-relaxed text-neutral-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                  <span>
                    Contributed to{" "}
                    <strong className="font-bold text-neutral-950">
                      data-driven analytical workflows
                    </strong>
                    {" "}supporting research and business intelligence.
                  </span>
                </li>

                <li className="flex items-start gap-3.5 text-sm font-medium leading-relaxed text-neutral-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                  <span>
                    Worked with databases and visualization tools to
                    organize and communicate analytical insights.
                  </span>
                </li>

                <li className="flex items-start gap-3.5 text-sm font-medium leading-relaxed text-neutral-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                  <span>
                    Improved analytical workflows through reusable
                    components and efficient data processing.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-9 flex flex-col gap-4 border-t-2 border-neutral-100 pt-7 sm:flex-row sm:items-center">
            <p className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
              Skills Applied
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Data Analysis",
                "SQL",
                "Data Visualization",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-300 bg-[#f8f7f3] px-3.5 py-1.5 font-mono text-xs font-bold text-neutral-800 transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM STATUS ================= */}
        <div className="mt-12 flex items-center justify-between border-t border-neutral-200/80 pt-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
            Data Analytics · Business Intelligence · Data Engineering
          </p>

          <span className="hidden h-[2px] w-24 bg-neutral-300 sm:block" />
        </div>

      </div>
    </section>
  );
}