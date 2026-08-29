import {
  BriefcaseBusiness,
  CalendarDays,
  Sparkles,
  Layers,
  MapPin,
  TrendingUp,
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
            Practical experience engineering data-driven platforms, designing automated
            SQL pipelines, and deploying interactive intelligence dashboards for enterprise analytics.
          </p>
        </div>


        {/* ================= EXPERIENCE CARD ================= */}
        <div className="mt-14 rounded-[28px] border-2 border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-neutral-900 hover:shadow-xl sm:p-9 lg:p-10">

          {/* Top Row: Title, Company & Date */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-md">
                <BriefcaseBusiness size={24} strokeWidth={1.8} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
                    Engineering Internship
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


          {/* Main Grid: Project Highlight + Key Contributions */}
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

            {/* Left Box: Project Callout */}
            <div className="flex flex-col justify-between rounded-2xl border-2 border-neutral-200 bg-[#f8f7f3] p-6">
              <div>
                <div className="flex items-center gap-2 text-neutral-950 font-bold text-base mb-2">
                  <TrendingUp size={18} className="text-neutral-800" />
                  <span>Financial Intelligence Dashboard</span>
                </div>

                <p className="text-sm font-medium leading-relaxed text-neutral-600">
                  Architected an enterprise screening and equity valuation engine for benchmark enterprise stocks, processing structured financial datasets into modular analytical reports.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/80">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-700">
                  <Layers size={14} className="text-neutral-800" />
                  <span>8 Modular Analytics Engines</span>
                </div>
                <p className="mt-1 text-xs font-medium text-neutral-500">
                  Company Profile, Screener, Peers, Trend, Sector & Valuation.
                </p>
              </div>
            </div>


            {/* Right Column: Key Accomplishments */}
            <div>
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
                Key Responsibilities & Impact
              </p>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-3.5 text-sm font-medium leading-relaxed text-neutral-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                  <span>
                    Architected an end-to-end dashboard analyzing{" "}
                    <strong className="font-bold text-neutral-950">
                      92 Nifty 100 benchmark companies
                    </strong>{" "}
                    with real-time financial screenings.
                  </span>
                </li>

                <li className="flex items-start gap-3.5 text-sm font-medium leading-relaxed text-neutral-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                  <span>
                    Engineered automated <strong className="font-bold text-neutral-950">SQL ETL pipelines</strong> to ingest, clean, and integrate multi-year financial statements for instant query execution.
                  </span>
                </li>

                <li className="flex items-start gap-3.5 text-sm font-medium leading-relaxed text-neutral-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                  <span>
                    Implemented core financial valuation metrics including <strong className="font-bold text-neutral-950">ROE, OPM, Debt-to-Equity, and CAGR</strong> with interactive Plotly graphs.
                  </span>
                </li>

                <li className="flex items-start gap-3.5 text-sm font-medium leading-relaxed text-neutral-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                  <span>
                    Boosted app responsiveness through <strong className="font-bold text-neutral-950">cached SQLite queries</strong> and reusable computational modules.
                  </span>
                </li>
              </ul>
            </div>

          </div>


          {/* Technology Stack Footer */}
          <div className="mt-9 flex flex-col gap-4 border-t-2 border-neutral-100 pt-7 sm:flex-row sm:items-center">
            <p className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
              Technologies Used
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Streamlit",
                "SQLite",
                "Pandas",
                "Plotly",
                "SQL ETL",
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
            Enterprise Dashboards · Data Engineering · Quantitative Analytics
          </p>

          <span className="hidden sm:block h-[2px] w-24 bg-neutral-300" />
        </div>

      </div>
    </section>
  );
}