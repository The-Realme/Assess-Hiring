import {
  Bell,
  BriefcaseBusiness,
  ChevronRight,
  ClipboardCheck,
  LayoutDashboard,
  Search,
  Users,
} from "lucide-react";
import Logo from "../../components/ui/Logo";

const jobs = [
  {
    title: "Backend Engineer",
    department: "Engineering",
    candidates: 43,
    status: "Hiring",
  },
  {
    title: "Frontend Engineer",
    department: "Engineering",
    candidates: 27,
    status: "Hiring",
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    candidates: 18,
    status: "Reviewing",
  },
];

const candidates = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    role: "Backend Engineer",
    score: 94,
  },
  {
    name: "Ananya Kapoor",
    initials: "AK",
    role: "Backend Engineer",
    score: 91,
  },
  {
    name: "Arjun Mehta",
    initials: "AM",
    role: "Backend Engineer",
    score: 87,
  },
];

function RecruiterDashboard() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">

      {/* TOP NAV */}

      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-zinc-200 bg-white/90 backdrop-blur">

        <div className="flex h-full items-center justify-between px-5">

          <div className="flex items-center gap-10">
            <Logo />

            <div className="hidden h-5 w-px bg-zinc-200 md:block" />

            <span className="hidden text-sm text-zinc-400 md:block">
              Recruiter workspace
            </span>
          </div>


          <div className="flex items-center gap-3">

            <button className="hidden items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-900 sm:flex">
              <Search size={14} />
              Search
              <span className="ml-4 rounded border border-zinc-200 px-1.5 py-0.5 text-[10px]">
                ⌘ K
              </span>
            </button>

            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900">
              <Bell size={17} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
            </button>

            <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white">
              RS
            </div>

          </div>

        </div>

      </header>


      {/* APP */}

      <div className="flex pt-16">

        {/* SIDEBAR */}

        <aside className="fixed bottom-0 left-0 top-16 hidden w-60 border-r border-zinc-200 bg-white md:block">

          <div className="flex h-full flex-col px-3 py-5">

            <nav className="space-y-1">

              <SidebarItem
                icon={<LayoutDashboard size={16} />}
                label="Overview"
                active
              />

              <SidebarItem
                icon={<BriefcaseBusiness size={16} />}
                label="Jobs"
              />

              <SidebarItem
                icon={<Users size={16} />}
                label="Candidates"
              />

              <SidebarItem
                icon={<ClipboardCheck size={16} />}
                label="Assessments"
              />

            </nav>


            <div className="mt-auto border-t border-zinc-100 pt-4">

              <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                Workspace
              </p>

              <button className="mt-2 w-full rounded-lg px-3 py-2 text-left text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900">
                Settings
              </button>

            </div>

          </div>

        </aside>


        {/* MAIN */}

        <main className="w-full md:ml-60">

          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

            {/* HEADER */}

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>
                <p className="text-sm text-zinc-400">
                  Monday, September 19
                </p>

                <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                  Good morning, Rahul.
                </h1>

                <p className="mt-1 text-sm text-zinc-500">
                  Here's what's happening with your hiring pipeline.
                </p>
              </div>

              <button className="flex w-fit items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">
                Create job
                <ChevronRight size={15} />
              </button>

            </div>


            {/* METRICS */}

            <div className="mt-8 grid gap-3 sm:grid-cols-3">

              <MetricCard
                label="Active jobs"
                value="12"
                description="+2 this month"
              />

              <MetricCard
                label="Candidates assessed"
                value="128"
                description="+18 this week"
              />

              <MetricCard
                label="Strong matches"
                value="24"
                description="18.7% of candidates"
              />

            </div>


            {/* CONTENT */}

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">

              {/* JOBS */}

              <section>

                <div className="mb-3 flex items-center justify-between">

                  <div>
                    <h2 className="text-sm font-semibold">
                      Recent jobs
                    </h2>

                    <p className="mt-0.5 text-xs text-zinc-400">
                      Your active hiring pipeline
                    </p>
                  </div>

                  <button className="text-xs font-medium text-zinc-500 hover:text-zinc-950">
                    View all
                  </button>

                </div>


                <div className="overflow-hidden rounded-xl border border-zinc-200">

                  {jobs.map((job, index) => (

                    <div
                      key={job.title}
                      className={`group flex items-center justify-between p-5 transition hover:bg-zinc-50 ${
                        index !== jobs.length - 1
                          ? "border-b border-zinc-100"
                          : ""
                      }`}
                    >

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50">
                          <BriefcaseBusiness
                            size={17}
                            className="text-zinc-500"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            {job.title}
                          </p>

                          <p className="mt-1 text-xs text-zinc-400">
                            {job.department}
                          </p>
                        </div>

                      </div>


                      <div className="flex items-center gap-5">

                        <div className="hidden text-right sm:block">

                          <p className="text-sm font-medium">
                            {job.candidates}
                          </p>

                          <p className="text-[11px] text-zinc-400">
                            candidates
                          </p>

                        </div>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            job.status === "Hiring"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-zinc-100 text-zinc-600"
                          }`}
                        >
                          {job.status}
                        </span>

                        <ChevronRight
                          size={15}
                          className="text-zinc-300 transition group-hover:translate-x-0.5 group-hover:text-zinc-600"
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </section>


              {/* TOP CANDIDATES */}

              <section>

                <div className="mb-3">

                  <h2 className="text-sm font-semibold">
                    Top candidates
                  </h2>

                  <p className="mt-0.5 text-xs text-zinc-400">
                    Based on demonstrated skills
                  </p>

                </div>


                <div className="overflow-hidden rounded-xl border border-zinc-200">

                  {candidates.map((candidate, index) => (

                    <div
                      key={candidate.name}
                      className={`flex items-center justify-between p-4 ${
                        index !== candidates.length - 1
                          ? "border-b border-zinc-100"
                          : ""
                      }`}
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-xs font-medium text-zinc-600">
                          {candidate.initials}
                        </div>

                        <div>

                          <p className="text-sm font-medium">
                            {candidate.name}
                          </p>

                          <p className="mt-0.5 text-xs text-zinc-400">
                            {candidate.role}
                          </p>

                        </div>

                      </div>


                      <div className="text-right">

                        <p className="text-sm font-semibold">
                          {candidate.score}%
                        </p>

                        <p className="text-[10px] text-emerald-600">
                          Strong match
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </section>

            </div>


            {/* INSIGHT */}

            <section className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">

              <div className="flex items-start gap-3">

                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-zinc-200">
                  <ClipboardCheck size={15} />
                </div>

                <div>

                  <p className="text-sm font-medium">
                    Your hiring signal is improving
                  </p>

                  <p className="mt-1 max-w-2xl text-xs leading-5 text-zinc-500">
                    Candidates completing practical assessments give you
                    more evidence to compare than profile information alone.
                  </p>

                </div>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}


function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
        active
          ? "bg-zinc-100 font-medium text-zinc-950"
          : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}


function MetricCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">

      <p className="text-xs text-zinc-400">
        {label}
      </p>

      <div className="mt-3 flex items-end justify-between">

        <p className="text-3xl font-semibold tracking-tight">
          {value}
        </p>

        <p className="text-[11px] text-zinc-400">
          {description}
        </p>

      </div>

    </div>
  );
}


export default RecruiterDashboard;