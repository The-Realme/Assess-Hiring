import { ArrowLeft, ArrowRight, BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/ui/Logo";

export default function CreateJob() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Top bar */}
      <header className="flex h-16 items-center justify-between border-b border-zinc-200 px-8">
        <Logo />

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/recruiter")}
            className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
          >
            Cancel
          </button>

          <button
            className="flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Continue
            <ArrowRight size={15} />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-4xl px-8 py-12">
        {/* Back */}
        <button
          onClick={() => navigate("/recruiter")}
          className="mb-8 flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-950"
        >
          <ArrowLeft size={15} />
          Back to dashboard
        </button>

        {/* Heading */}
        <div className="mb-10">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100">
            <BriefcaseBusiness size={19} />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Create a new job
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
            Tell us about the role. We'll use the requirements to build an
            assessment and evaluate candidates against the skills that matter.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-8">
          {/* Job title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-900">
              Job title
            </label>

            <input
              type="text"
              placeholder="e.g. Backend Engineer"
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
            />
          </div>

          {/* Department */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-900">
              Department
            </label>

            <input
              type="text"
              placeholder="e.g. Engineering"
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
            />
          </div>

          {/* Job description */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-medium text-zinc-900">
                Job description
              </label>

              <span className="text-xs text-zinc-400">
                Include responsibilities and requirements
              </span>
            </div>

            <textarea
              rows={12}
              placeholder={`Example:

We are looking for a Backend Engineer to build scalable APIs and services.

Responsibilities:
• Design and build REST APIs
• Work with PostgreSQL databases
• Develop backend services using Node.js
• Write clean, maintainable code

Requirements:
• Strong JavaScript / TypeScript knowledge
• Node.js and Express
• PostgreSQL
• REST APIs
• Problem solving`}
              className="w-full resize-none rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
            />
          </div>

          {/* Bottom action */}
          <div className="flex items-center justify-between border-t border-zinc-200 pt-6">
            <p className="max-w-md text-xs leading-5 text-zinc-400">
              Next, Assess Hiring will identify the skills and competencies
              relevant to this role.
            </p>

            <button 
            onClick={() => navigate("/recruiter/jobs/requirements")}
            className="flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800">
              Analyze requirements
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}