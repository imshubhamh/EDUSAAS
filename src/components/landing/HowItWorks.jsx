export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create Your Account",
      desc: "Sign up in minutes and get instant access to the dashboard.",
    },
    {
      step: "02",
      title: "Launch Your Platform",
      desc: "Upload courses, notes, and manage students easily.",
    },
    {
      step: "03",
      title: "Scale & Earn",
      desc: "Go live with payments, analytics, and growth tools.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative p-8 rounded-2xl border bg-white "
            >
              <span className="absolute -top-5 left-6 text-6xl font-extrabold text-gray-300">
                {s.step}
              </span>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-3 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
