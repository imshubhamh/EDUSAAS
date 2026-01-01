import {
  GraduationCap,
  LayoutDashboard,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: GraduationCap,
      title: "Complete LMS Solution",
      desc: "Manage courses, notes, lectures, progress tracking and certificates from one simple platform.",
    },
    {
      icon: LayoutDashboard,
      title: "Multi-Tenant SaaS",
      desc: "Launch and manage multiple education websites from a single admin dashboard.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Scalable",
      desc: "Role-based access, authentication, payments and a cloud-ready architecture.",
    },
    {
      icon: Rocket,
      title: "Launch Faster",
      desc: "Pre-built system that lets you start your education business without delays.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Everything you need to run education online
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            EDU SAAS provides essential tools to create, manage and scale
            modern learning platforms — without complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-6 text-left"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-base font-medium text-slate-900">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
