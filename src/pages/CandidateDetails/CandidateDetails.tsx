import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Brain,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/ui/Logo";

const skills = [
  {
    name: "Node.js",
    score: 91,
    icon: Code2,
  },
  {
    name: "PostgreSQL",
    score: 84,
    icon: Database,
  },
  {
    name: "REST APIs",
    score: 94,
    icon: Globe,
  },
  {
    name: "Problem Solving",
    score: 76,
    icon: Brain,
  },
];

const evidence = [
  "Completed API implementation task",
  "Successfully designed PostgreSQL queries",
  "Completed backend debugging exercise",
  "Solved practical problem-solving challenge",
];

export default function CandidateDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-zinc-200 px-8">
        <Logo />

        <button
          onClick={() => navigate("/recruiter")}
          className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
        >
          <ArrowLeft size={15} />
          Back to dashboard
        </button>
      </header>

      <main className="mx-auto max-w-6xl px-8 py-10">
        {/* Candidate heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
              Candidate profile
            </p>

            <h1 className="text-3xl font-semibold tracking-tight">
              Arjun Mehta
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              Backend Engineer · Assessment completed Sep 18, 2026
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 px-4 py-3 text-right">
            <p className="text-xs text-zinc-500">Overall competency</p>

            <p className="mt-1 text-2xl font-semibold">87%</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Skills */}
          <section>
            <div className="mb-4">
              <h2 className="text-sm font-semibold">
                Demonstrated competencies
              </h2>

              <p className="mt-1 text-xs text-zinc-500">
                Based on completed practical assessments.
              </p>
            </div>

            <div className="divide-y divide-zinc-200 rounded-xl border border-zinc-200">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 px-5 py-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100">
                      <Icon size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>

                        <span className="text-sm font-semibold">
                          {skill.score}%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">
                        <div
                          className="h-full rounded-full bg-zinc-900"
                          style={{ width: `${skill.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Evidence */}
          <section>
            <div className="mb-4">
              <h2 className="text-sm font-semibold">
                Assessment evidence
              </h2>

              <p className="mt-1 text-xs text-zinc-500">
                What the candidate demonstrated during evaluation.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <div className="space-y-4">
                {evidence.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-zinc-700"
                    />

                    <p className="text-sm leading-5 text-zinc-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Match */}
            <div className="mt-4 rounded-xl bg-zinc-950 p-5 text-white">
              <p className="text-xs text-zinc-400">
                Match against Backend Engineer
              </p>

              <p className="mt-1 text-3xl font-semibold">87%</p>

              <p className="mt-2 text-xs leading-5 text-zinc-400">
                Strong alignment across the core competencies required for
                this role.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}