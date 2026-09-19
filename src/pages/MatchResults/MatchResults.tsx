import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Globe,
  Brain,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/ui/Logo";

const candidates = [
  {
    name: "Arjun Mehta",
    initials: "AM",
    match: 87,
    status: "Strong match",
  },
  {
    name: "Ananya Kapoor",
    initials: "AK",
    match: 91,
    status: "Strong match",
  },
  {
    name: "Rahul Sharma",
    initials: "RS",
    match: 84,
    status: "Good match",
  },
];

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
  "Completed practical API implementation successfully",
  "Demonstrated strong PostgreSQL query skills",
  "Solved backend debugging exercise",
  "Completed practical problem-solving challenge",
];

export default function MatchResults() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-8">
        <Logo />

        <button
          onClick={() => navigate("/recruiter")}
          className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
        >
          <ArrowLeft size={15} />
          Back to dashboard
        </button>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
            Match results
          </p>

          <h1 className="text-2xl font-semibold tracking-tight">
            Backend Engineer
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            43 candidates assessed · ranked by demonstrated competency
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.5fr]">
          {/* Candidate list */}
          <section>
            <div className="mb-4">
              <h2 className="text-sm font-semibold">
                Candidates
              </h2>

              <p className="mt-1 text-xs text-zinc-500">
                Select a candidate to inspect their evidence.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
              {candidates.map((candidate, index) => (
                <button
                  key={candidate.name}
                  className={`flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-zinc-50 ${
                    index !== candidates.length - 1
                      ? "border-b border-zinc-200"
                      : ""
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold">
                    {candidate.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">
                      {candidate.name}
                    </p>

                    <p className="mt-0.5 text-xs text-zinc-400">
                      {candidate.status}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold">
                      {candidate.match}%
                    </p>

                    <p className="text-[10px] text-zinc-400">
                      match
                    </p>
                  </div>

                  <ChevronRight
                    size={15}
                    className="text-zinc-300"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Candidate analysis */}
          <section>
            <div className="mb-4 flex items-end justify-between">
              <div>
                <h2 className="text-sm font-semibold">
                  Candidate analysis
                </h2>

                <p className="mt-1 text-xs text-zinc-500">
                  Demonstrated ability against the requirements.
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-zinc-400">
                  Overall match
                </p>

                <p className="text-3xl font-semibold tracking-tight">
                  87%
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-xl border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-5 py-4">
                <h3 className="text-sm font-semibold">
                  Demonstrated competencies
                </h3>
              </div>

              <div className="divide-y divide-zinc-200">
                {skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 px-5 py-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100">
                        <Icon size={15} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex justify-between">
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
            </div>

            {/* Evidence */}
            <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-sm font-semibold">
                Assessment evidence
              </h3>

              <div className="mt-4 space-y-3">
                {evidence.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0"
                    />

                    <p className="text-sm leading-5 text-zinc-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Explanation */}
            <div className="mt-4 rounded-xl bg-zinc-950 p-5 text-white">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
                Match explanation
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Strong demonstrated performance across API development,
                backend fundamentals, and database work. Problem-solving
                performance was comparatively lower and may require further
                evaluation.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}