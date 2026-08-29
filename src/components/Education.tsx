import {
  GraduationCap,
  Award,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const certifications = [
  {
    title: "Python Module Certification",
    issuer: "Microsoft",
    date: "Oct 2024",
  },
  {
    title: "Object-Oriented Programming in C++",
    issuer: "Udemy",
    date: "Mar 2024",
  },
  {
    title: "Digital Skills: Artificial Intelligence",
    issuer: "Accenture",
    date: "2024",
  },
  {
    title: "JLPT N5 — Japanese Language Proficiency",
    issuer: "JLPT, Japan",
    date: "Aug 2022",
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
                05 / Education
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
              Learning & credentials.
            </h2>
          </div>

          <p className="max-w-xl text-base font-medium leading-7 text-neutral-700 sm:text-lg">
            Building a strong foundation in computer science while continuously
            expanding my domain expertise through production projects, internships,
            and specialized certifications.
          </p>
        </div>


        {/* ================= EDUCATION CARDS ================= */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          {/* University Card */}
          <div className="rounded-[28px] border-2 border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-neutral-900 hover:shadow-lg sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-sm">
                <GraduationCap size={22} strokeWidth={1.8} />
              </div>

              <span className="flex items-center gap-2 rounded-full border-2 border-neutral-200 bg-[#f8f7f3] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-700">
                <CalendarDays size={13} className="text-neutral-700" />
                2023 — 2027
              </span>
            </div>

            <p className="mt-7 font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
              Bachelor's Degree
            </p>

            <h3 className="mt-1 text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl">
              SRM University, Delhi-NCR
            </h3>

            <p className="mt-2 text-base font-semibold text-neutral-700">
              B.Tech · Computer Science & Engineering
            </p>

            {/* CGPA Crème Box */}
            <div className="mt-7 rounded-2xl border-2 border-neutral-200 bg-[#f8f7f3] p-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-600">
                Academic Performance
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-black tracking-tight text-neutral-950">
                  8.72
                </span>
                <span className="mb-1 text-base font-bold text-neutral-600">
                  / 10.0 CGPA
                </span>
              </div>

              <p className="mt-1 text-xs font-bold text-neutral-600">
                Six semesters completed
              </p>
            </div>
          </div>


          {/* School Card */}
          <div className="rounded-[28px] border-2 border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-neutral-900 hover:shadow-lg sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white">
                <GraduationCap size={22} strokeWidth={1.8} />
              </div>

              <span className="rounded-full border-2 border-neutral-200 bg-[#f8f7f3] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-700">
                2013 — 2023
              </span>
            </div>

            <p className="mt-7 font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
              Higher Secondary Education
            </p>

            <h3 className="mt-1 text-2xl font-black tracking-tight text-neutral-950">
              Delhi Public School, Rewari
            </h3>

            <p className="mt-2 text-base font-semibold text-neutral-700">
              CBSE · All India Senior School Certificate
            </p>

            {/* Scores Grid */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border-2 border-neutral-200 bg-[#f8f7f3] p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-neutral-600">
                  Class 10
                </p>
                <p className="mt-1 text-3xl font-black text-neutral-950">
                  97.6%
                </p>
              </div>

              <div className="rounded-2xl border-2 border-neutral-200 bg-[#f8f7f3] p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-neutral-600">
                  Class 12
                </p>
                <p className="mt-1 text-3xl font-black text-neutral-950">
                  82.8%
                </p>
              </div>
            </div>
          </div>

        </div>


        {/* ================= CERTIFICATIONS ================= */}
        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
                Certifications
              </p>
              <h3 className="mt-1 text-2xl font-black tracking-tight text-neutral-950">
                Verified Credentials
              </h3>
            </div>

            <Award size={26} strokeWidth={1.8} className="text-neutral-700" />
          </div>

          {/* Certification List */}
          <div className="overflow-hidden rounded-[24px] border-2 border-neutral-200 bg-white shadow-sm">
            {certifications.map((certificate, index) => (
              <div
                key={certificate.title}
                className="group flex flex-col gap-4 border-b-2 border-neutral-200 p-5 last:border-b-0 transition-colors duration-200 hover:bg-[#f8f7f3] sm:flex-row sm:items-center sm:justify-between sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="text-base font-bold text-neutral-950">
                      {certificate.title}
                    </p>

                    <p className="mt-0.5 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-600">
                      {certificate.issuer}
                    </p>
                  </div>
                </div>

                <span className="w-fit rounded-full border-2 border-neutral-200 bg-[#f8f7f3] px-3.5 py-1.5 font-mono text-xs font-bold text-neutral-700">
                  {certificate.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 border-t border-neutral-200 pt-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
            Computer Science · Software Engineering · Artificial Intelligence
          </p>
        </div>

      </div>
    </section>
  );
}