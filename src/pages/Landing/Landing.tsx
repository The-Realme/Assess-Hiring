import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">

      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-sm font-bold text-white">
            A
          </div>

          <span className="text-lg font-semibold tracking-tight">
            Assess Hiring
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
          <a href="#product" className="transition hover:text-zinc-950">
            Product
          </a>

          <a href="#how-it-works" className="transition hover:text-zinc-950">
            How it works
          </a>

          <a href="#about" className="transition hover:text-zinc-950">
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden px-4 py-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950 sm:block">
            Sign in
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">
            Get started
            <ArrowRight size={15} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-28">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-600">
            <Sparkles size={14} />
            Evidence-based hiring
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-7xl">
            Hire for what people
            <span className="block text-zinc-400">
              can actually do.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
            Assess Hiring helps recruiters discover real ability through
            practical assessments, measurable skills and evidence-backed
            candidate matching.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <button className="flex items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-zinc-800">
              Start hiring
              <ArrowRight size={16} />
            </button>

            <button className="rounded-lg border border-zinc-200 px-6 py-3.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50">
              Explore as candidate
            </button>

          </div>
        </div>

        {/* Product Preview */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-2 shadow-2xl shadow-zinc-200/50">

            <div className="rounded-xl border border-zinc-200 bg-white p-6">

              <div className="flex items-center justify-between border-b border-zinc-100 pb-5">
                <div>
                  <p className="text-sm text-zinc-400">
                    Candidate match
                  </p>

                  <h2 className="mt-1 text-lg font-semibold">
                    Backend Engineer
                  </h2>
                </div>

                <div className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                  87% match
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                {[
                  ["Python", "91%"],
                  ["SQL", "87%"],
                  ["REST APIs", "94%"],
                  ["Problem Solving", "72%"],
                ].map(([skill, score]) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-zinc-100 bg-zinc-50 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {skill}
                      </span>

                      <span className="text-sm font-semibold">
                        {score}
                      </span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-200">
                      <div
                        className="h-full rounded-full bg-zinc-950"
                        style={{
                          width: score,
                        }}
                      />
                    </div>
                  </div>
                ))}

              </div>

              <div className="mt-6 rounded-xl border border-zinc-100 p-5">

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />

                  <span className="font-medium">
                    Evidence-backed match
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Strong evidence in Python, SQL and REST API development.
                  Problem-solving performance is comparatively weaker.
                </p>

              </div>

            </div>
          </div>
        </div>

      </section>

    </main>
  );
}