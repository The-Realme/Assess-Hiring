import {
  ArrowLeft,
  ArrowRight,
  Check,
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
    importance: "Required",
    icon: Code2,
  },
  {
    name: "Express.js",
    importance: "Required",
    icon: Code2,
  },
  {
    name: "PostgreSQL",
    importance: "Required",
    icon: Database,
  },
  {
    name: "REST APIs",
    importance: "Required",
    icon: Globe,
  },
  {
    name: "JavaScript",
    importance: "Important",
    icon: Code2,
  },
  {
    name: "Problem Solving",
    importance: "Important",
    icon: Brain,
  },
];

const assessmentAreas = [
  { name: "Backend Development", weight: 40 },
  { name: "Database & SQL", weight: 25 },
  { name: "API Development", weight: 20 },
  { name: "Problem Solving", weight: 15 },
];

export default function JobRequirements() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-zinc-200 px-8">
        <Logo />

        <button
          onClick={() => navigate("/recruiter/jobs/new")}
          className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
        >
          <ArrowLeft size={15} />
          Back
        </button>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-8 py-12">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
            Requirements analysis
          </p>

          <h1 className="text-3xl font-semibold tracking-tight">
            We found the skills that matter.
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
            These requirements will be used to design the candidate assessment
            and evaluate demonstrated ability.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Skills */}
          <section>
            <div className="mb-4">
              <h2 className="text-sm font-semibold">Required skills</h2>
              <p className="mt-1 text-xs text-zinc-500">
                Skills identified from the job description.
              </p>
            </div>

            <div className="divide-y divide-zinc-200 rounded-xl border border-zinc-200">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                        <Icon size={16} />
                      </div>

                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                        skill.importance === "Required"
                          ? "bg-zinc-950 text-white"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {skill.importance}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Assessment focus */}
          <section>
            <div className="mb-4">
              <h2 className="text-sm font-semibold">Assessment focus</h2>
              <p className="mt-1 text-xs text-zinc-500">
                How the assessment will distribute evaluation.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <div className="space-y-5">
                {assessmentAreas.map((area) => (
                  <div key={area.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-zinc-700">
                        {area.name}
                      </span>

                      <span className="text-xs font-medium text-zinc-500">
                        {area.weight}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className="h-full rounded-full bg-zinc-900"
                        style={{ width: `${area.weight}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-zinc-200 pt-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Check size={13} />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      Assessment ready to build
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Candidates will be evaluated against these competency
                      areas rather than relying only on resume claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom action */}
        <div className="mt-10 flex items-center justify-between border-t border-zinc-200 pt-6">
          <p className="max-w-md text-xs leading-5 text-zinc-400">
            You can review these requirements before creating the assessment.
          </p>

          <button
            onClick={() => navigate("/recruiter/assessments/new")}
            className="flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Create assessment
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}