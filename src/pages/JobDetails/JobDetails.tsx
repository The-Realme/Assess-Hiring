import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
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
    icon: Code2,
  },
  {
    name: "PostgreSQL",
    icon: Database,
  },
  {
    name: "REST APIs",
    icon: Globe,
  },
  {
    name: "Problem Solving",
    icon: Brain,
  },
];

const assessmentDetails = [
  "45 minutes",
  "6 competency areas",
  "Practical assessment",
  "Evidence-based evaluation",
];

export default function JobDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-zinc-200 px-8">
        <Logo />

        <button
          onClick={() => navigate("/candidate")}
          className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
        >
          <ArrowLeft size={15} />
          Back to dashboard
        </button>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-8 py-12">
        {/* Company */}
        <div className="mb-8">
          <p className="text-sm font-medium text-zinc-500">
            Acme Technologies
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Backend Engineer
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Engineering · Full-time · Remote
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr]">
          {/* Left */}
          <div>
            {/* About */}
            <section className="mb-10">
              <h2 className="mb-3 text-sm font-semibold">
                About the role
              </h2>

              <p className="text-sm leading-7 text-zinc-600">
                We're looking for a Backend Engineer to build reliable,
                scalable services and APIs. You'll work closely with product
                and engineering teams to design backend systems, work with
                databases, and solve real-world engineering problems.
              </p>
            </section>

            {/* What you'll be assessed on */}
            <section>
              <h2 className="mb-2 text-sm font-semibold">
                What you'll be assessed on
              </h2>

              <p className="mb-5 text-xs text-zinc-500">
                Your assessment will focus on practical demonstration of
                these competencies.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-lg border border-zinc-200 p-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                        <Icon size={16} />
                      </div>

                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right */}
          <aside>
            <div className="sticky top-8 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <h2 className="text-sm font-semibold">
                Assessment
              </h2>

              <div className="mt-5 space-y-4">
                {assessmentDetails.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-zinc-700"
                    />

                    <span className="text-sm text-zinc-600">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-zinc-200" />

              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Clock3 size={14} />
                Estimated completion time: 45 minutes
              </div>

              <button
                onClick={() =>
                  navigate("/candidate/assessments/backend-engineer")
                }
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Start assessment
                <ArrowRight size={16} />
              </button>

              <p className="mt-3 text-center text-[11px] leading-5 text-zinc-400">
                You can review the assessment instructions before starting.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}