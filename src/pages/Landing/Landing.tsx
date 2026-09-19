import {
  ArrowRight,
  FileCheck2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../components/ui/Logo";

const skills = [
  { name: "Python", score: 91 },
  { name: "SQL", score: 87 },
  { name: "REST APIs", score: 94 },
  { name: "Problem solving", score: 72 },
];

function Landing() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">

      {/* NAVBAR */}

      <header className="border-b border-zinc-100">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#product"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
            >
              Product
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
            >
              How it works
            </a>

            <a
              href="#why"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
            >
              Why Assess Hiring
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden text-sm font-medium text-zinc-600 hover:text-zinc-950 sm:block">
              Sign in
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">
              Get started
              <ArrowRight size={15} />
            </button>
          </div>

        </nav>
      </header>


      {/* HERO */}

      <main>

        <section className="relative overflow-hidden">

          {/* subtle grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(#e4e4e7 1px, transparent 1px), linear-gradient(90deg, #e4e4e7 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 80%)",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">

            <div className="mx-auto max-w-4xl text-center">

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm"
              >
                <Sparkles size={13} />
                Evidence-based hiring
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="text-5xl font-semibold tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-7xl"
              >
                Hire for what people
                <span className="block text-zinc-400">
                  can actually do.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg"
              >
                Assess Hiring helps teams evaluate real ability through
                practical assessments and turn candidate performance into
                evidence-backed hiring decisions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <button className="group flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 sm:w-auto">
                  Start hiring
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>

                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 sm:w-auto">
                  Take an assessment
                </button>
              </motion.div>

            </div>


            {/* PRODUCT PREVIEW */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mx-auto mt-20 max-w-5xl"
            >

              <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-2 shadow-2xl shadow-zinc-200/60">

                <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">

                  {/* fake browser header */}

                  <div className="flex h-11 items-center gap-1.5 border-b border-zinc-100 px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />

                    <div className="mx-auto hidden rounded-md bg-zinc-50 px-16 py-1 text-[10px] text-zinc-400 sm:block">
                      app.assesshiring.com
                    </div>
                  </div>

                  <div className="grid min-h-[390px] md:grid-cols-[190px_1fr]">

                    {/* sidebar */}

                    <aside className="hidden border-r border-zinc-100 bg-zinc-50/60 p-4 md:block">

                      <Logo showText={false} />

                      <div className="mt-8 space-y-1">

                        <div className="rounded-md bg-zinc-200/70 px-3 py-2 text-xs font-medium">
                          Overview
                        </div>

                        <div className="px-3 py-2 text-xs text-zinc-500">
                          Jobs
                        </div>

                        <div className="px-3 py-2 text-xs text-zinc-500">
                          Candidates
                        </div>

                        <div className="px-3 py-2 text-xs text-zinc-500">
                          Assessments
                        </div>

                      </div>

                    </aside>


                    {/* dashboard */}

                    <div className="p-6 sm:p-8">

                      <div className="flex items-start justify-between">

                        <div>
                          <p className="text-xs text-zinc-400">
                            Backend Engineer
                          </p>

                          <h3 className="mt-1 text-lg font-semibold tracking-tight">
                            Candidate overview
                          </h3>
                        </div>

                        <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                          Strong match
                        </div>

                      </div>


                      <div className="mt-7 grid gap-3 sm:grid-cols-3">

                        <div className="rounded-xl border border-zinc-100 p-4">
                          <p className="text-xs text-zinc-400">
                            Candidates assessed
                          </p>

                          <p className="mt-2 text-2xl font-semibold tracking-tight">
                            128
                          </p>
                        </div>

                        <div className="rounded-xl border border-zinc-100 p-4">
                          <p className="text-xs text-zinc-400">
                            Strong matches
                          </p>

                          <p className="mt-2 text-2xl font-semibold tracking-tight">
                            24
                          </p>
                        </div>

                        <div className="rounded-xl border border-zinc-100 p-4">
                          <p className="text-xs text-zinc-400">
                            Avg. assessment
                          </p>

                          <p className="mt-2 text-2xl font-semibold tracking-tight">
                            82%
                          </p>
                        </div>

                      </div>


                      {/* candidate */}

                      <div className="mt-5 rounded-xl border border-zinc-100">

                        <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">

                          <div>
                            <p className="text-sm font-medium">
                              Candidate match
                            </p>

                            <p className="mt-0.5 text-xs text-zinc-400">
                              Based on demonstrated skills
                            </p>
                          </div>

                          <span className="text-xl font-semibold tracking-tight">
                            87%
                          </span>

                        </div>


                        <div className="grid gap-3 p-5 sm:grid-cols-2">

                          {skills.map((skill) => (
                            <div key={skill.name}>

                              <div className="flex justify-between text-xs">
                                <span className="text-zinc-600">
                                  {skill.name}
                                </span>

                                <span className="font-medium">
                                  {skill.score}%
                                </span>
                              </div>

                              <div className="mt-2 h-1.5 rounded-full bg-zinc-100">
                                <div
                                  className="h-full rounded-full bg-zinc-900"
                                  style={{ width: `${skill.score}%` }}
                                />
                              </div>

                            </div>
                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </section>


        {/* TRUST / PHILOSOPHY */}

        <section
          id="product"
          className="border-y border-zinc-100 bg-zinc-50"
        >

          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
                A different signal
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Resumes tell you what someone says they can do.
                <span className="text-zinc-400">
                  {" "}
                  Assessments show you.
                </span>
              </h2>

            </div>


            <div
              id="how-it-works"
              className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-3"
            >

              {[
                {
                  icon: FileCheck2,
                  title: "Assess",
                  text: "Measure practical skills through structured, job-relevant assessments.",
                },
                {
                  icon: Target,
                  title: "Understand",
                  text: "Turn assessment performance into a clear competency profile.",
                },
                {
                  icon: Users,
                  title: "Match",
                  text: "Compare demonstrated ability against the requirements of a role.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white p-7"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200">
                      <Icon size={17} />
                    </div>

                    <h3 className="mt-6 text-base font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <Logo />

          <p className="text-xs text-zinc-400">
            Built for better hiring decisions.
          </p>

        </footer>

      </main>

    </div>
  );
}

export default Landing;