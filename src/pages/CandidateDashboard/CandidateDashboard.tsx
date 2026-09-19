import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  LayoutDashboard,
  LogOut,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/ui/Logo";

const assessments = [
  {
    company: "Acme Technologies",
    role: "Backend Engineer",
    skills: "Node.js · PostgreSQL · REST APIs",
    duration: "45 min",
    status: "Available",
  },
  {
    company: "Nova Systems",
    role: "Frontend Engineer",
    skills: "React · JavaScript · CSS",
    duration: "40 min",
    status: "Available",
  },
];

const completed = [
  {
    role: "Data Analyst",
    company: "Vertex Labs",
    score: 86,
    date: "Sep 14, 2026",
  },
  {
    role: "Software Engineer",
    company: "Orbit Systems",
    score: 91,
    date: "Sep 8, 2026",
  },
];

export default function CandidateDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      {/* Top navigation */}
      <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-8">
        <Logo />

        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-950">
            <UserRound size={16} />
            Arjun Mehta
          </button>

          <button className="text-zinc-400 transition hover:text-zinc-950">
            <LogOut size={17} />
          </button>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 border-r border-zinc-200 bg-white p-4 md:block">
          <nav className="space-y-1">
            <button className="flex w-full items-center gap-3 rounded-lg bg-zinc-100 px-3 py-2.5 text-sm font-medium text-zinc-950">
              <LayoutDashboard size={17} />
              Dashboard
            </button>

            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950">
              <ClipboardCheck size={17} />
              Assessments
            </button>

            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950">
              <BriefcaseBusiness size={17} />
              Applications
            </button>
          </nav>

          <div className="mt-8 border-t border-zinc-200 pt-5">
            <p className="px-3 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400">
              Your profile
            </p>

            <button className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950">
              <UserRound size={17} />
              Competency profile
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 px-6 py-8 md:px-10">
          <div className="mx-auto max-w-6xl">
            {/* Heading */}
            <div className="mb-8">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
                Candidate workspace
              </p>

              <h1 className="text-2xl font-semibold tracking-tight">
                Good morning, Arjun.
              </h1>

              <p className="mt-1 text-sm text-zinc-500">
                Demonstrate what you can actually do.
              </p>
            </div>

            {/* Stats */}
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                  <ClipboardCheck size={16} />
                </div>

                <p className="text-xs text-zinc-500">Assessments completed</p>

                <p className="mt-1 text-2xl font-semibold tracking-tight">
                  3
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                  <CheckCircle2 size={16} />
                </div>

                <p className="text-xs text-zinc-500">Average competency</p>

                <p className="mt-1 text-2xl font-semibold tracking-tight">
                  88%
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                  <BriefcaseBusiness size={16} />
                </div>

                <p className="text-xs text-zinc-500">Active opportunities</p>

                <p className="mt-1 text-2xl font-semibold tracking-tight">
                  2
                </p>
              </div>
            </div>

            {/* Available assessments */}
            <section className="mb-10">
              <div className="mb-4">
                <h2 className="text-sm font-semibold">
                  Available assessments
                </h2>

                <p className="mt-1 text-xs text-zinc-500">
                  Assessments attached to opportunities you can participate in.
                </p>
              </div>

              <div className="space-y-3">
                {assessments.map((assessment) => (
                  <div
                    key={`${assessment.company}-${assessment.role}`}
                    className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300"
                  >
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="text-sm font-semibold">
                            {assessment.role}
                          </h3>

                          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600">
                            {assessment.status}
                          </span>
                        </div>

                        <p className="text-sm text-zinc-500">
                          {assessment.company}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                          <span>{assessment.skills}</span>

                          <span className="flex items-center gap-1">
                            <Clock3 size={13} />
                            {assessment.duration}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          navigate("/candidate/assessments/backend-engineer")
                        }
                        className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
                      >
                        View opportunity
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Completed */}
            <section>
              <div className="mb-4">
                <h2 className="text-sm font-semibold">
                  Completed assessments
                </h2>

                <p className="mt-1 text-xs text-zinc-500">
                  Your previous assessment results.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
                {completed.map((assessment, index) => (
                  <div
                    key={`${assessment.company}-${assessment.role}`}
                    className={`flex items-center justify-between px-5 py-4 ${
                      index !== completed.length - 1
                        ? "border-b border-zinc-200"
                        : ""
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium">
                        {assessment.role}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500">
                        {assessment.company} · {assessment.date}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold">
                        {assessment.score}%
                      </p>

                      <p className="text-[11px] text-zinc-400">
                        competency
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}