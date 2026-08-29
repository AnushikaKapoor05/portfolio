import {
  Code2,
  Database,
  BrainCircuit,
  Wrench,
  Layers,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Core languages I write for algorithms, backend logic, and user interfaces.",
    skills: [
      "C++",
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "SQL",
      "C",
      "HTML / CSS",
    ],
    className: "lg:col-span-1",
  },
  {
    icon: Layers,
    title: "Frameworks & Backend",
    description: "Architecting modular full-stack web applications and cross-platform mobile apps.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flutter",
      "Firebase",
      "Prisma ORM",
    ],
    className: "lg:col-span-1",
  },
  {
    icon: Database,
    title: "Databases & Analytics",
    description: "Relational modeling, ETL pipelines, and high-performance financial data visualizations.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Firestore",
      "Pandas",
      "NumPy",
      "Plotly",
      "Streamlit",
    ],
    className: "lg:col-span-1",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Integrating predictive models, disease diagnosis pipelines, and intelligent API endpoints.",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Predictive Modeling",
      "Feature Engineering",
      "API Integration",
    ],
    className: "lg:col-span-1",
  },
  {
    icon: Wrench,
    title: "Developer Tools & Environments",
    description: "Version control, IDEs, emulators, and computational notebooks used in daily engineering workflow.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Xcode",
      "Jupyter Notebook",
      "Google Colab",
      "Vite",
    ],
    className: "lg:col-span-2",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
                04 / Technical Toolkit
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
              Skills & technologies.
            </h2>
          </div>

          <p className="max-w-xl text-base font-medium leading-7 text-neutral-700 sm:text-lg">
            A comprehensive overview of the programming languages, full-stack frameworks,
            data pipelines, and development environments I use to engineer scalable products.
          </p>
        </div>


        {/* ================= SKILLS BENTO GRID ================= */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className={`group flex flex-col justify-between rounded-[28px] border-2 border-neutral-200 bg-[#f8f7f3] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:bg-white hover:shadow-xl sm:p-8 ${group.className}`}
              >
                <div>
                  {/* Icon & Index Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-neutral-200 bg-white text-neutral-900 shadow-sm transition-all duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-xs font-bold text-neutral-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-black tracking-tight text-neutral-950 sm:text-2xl">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-600">
                    {group.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-neutral-200/80">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neutral-300 bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-neutral-800 shadow-sm transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

        </div>


        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-14 border-t border-neutral-200 pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
              C++ · React · Flutter · Node.js · PostgreSQL · Python · AI
            </p>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                Continuously building & exploring
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}