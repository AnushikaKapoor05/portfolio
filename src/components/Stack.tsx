import {
  Code2,
  Database,
  BrainCircuit,
  Smartphone,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";

const technologies = [
  {
    icon: Code2,
    name: "Frontend Development",
    description: "Responsive interfaces, component architecture, and type-safe applications.",
    technologies: ["React.js", "TypeScript", "JavaScript", "HTML / CSS"],
  },
  {
    icon: Server,
    name: "Backend & Systems",
    description: "Designing scalable server architectures, routing, and RESTful APIs.",
    technologies: ["Node.js", "Express.js", "REST APIs", "Prisma"],
  },
  {
    icon: Database,
    name: "Databases & Storage",
    description: "Relational schema design, querying, and real-time cloud data synchronization.",
    technologies: ["PostgreSQL", "SQLite", "MySQL", "Firestore"],
  },
  {
    icon: BrainCircuit,
    name: "AI & Data Science",
    description: "Data processing pipelines, quantitative analytics, and predictive ML models.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit"],
  },
  {
    icon: Smartphone,
    name: "Mobile Engineering",
    description: "Cross-platform mobile apps with native performance for iOS and Android.",
    technologies: ["Flutter", "Dart", "Firebase Auth", "State Management"],
  },
  {
    icon: Wrench,
    name: "Dev Tools & Workflow",
    description: "Version control, containerized environments, and fast build tooling.",
    technologies: ["Git", "GitHub", "VS Code", "Vite"],
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
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
                01 / Technology Stack
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
              What I work with.
            </h2>
          </div>

          <p className="max-w-xl text-base font-medium leading-7 text-neutral-700 sm:text-lg">
            I enjoy working across the engineering spectrum and choosing the right tools
            for each problem — from polished user interfaces to high-throughput backends
            and intelligent data models.
          </p>
        </div>


        {/* ================= TECHNOLOGY GRID ================= */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group flex flex-col justify-between rounded-[28px] border-2 border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl sm:p-8"
              >
                <div>
                  {/* Top: Icon + Index */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-neutral-200 bg-[#f8f7f3] text-neutral-900 transition-all duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-xs font-bold text-neutral-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-black tracking-tight text-neutral-950">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>

                {/* Technology Tags */}
                <div className="mt-7 flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-300 bg-[#f8f7f3] px-3.5 py-1.5 font-mono text-xs font-bold text-neutral-800 transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>


        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-200/80 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
            Frontend · Backend · Databases · Mobile · Machine Learning
          </p>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-700">
              Actively Expanding Stack
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}