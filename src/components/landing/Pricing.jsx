export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      desc: "For beginners & students",
      features: [
        "Limited Courses",
        "Community Access",
        "Basic Support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹999",
      desc: "Best for serious learners",
      features: [
        "All Courses Access",
        "Download Notes",
        "Certificates",
        "Priority Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For institutes & colleges",
      features: [
        "Multi-Tenant SaaS",
        "Admin Dashboard",
        "Custom Branding",
        "Dedicated Support",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-slate-500">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Choose a plan that works for individuals, learners, or institutions.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 bg-white
                ${
                  plan.highlight
                    ? "border-slate-400"
                    : "border-slate-200"
                }`}
            >
              {/* Plan name */}
              <h3 className="text-lg font-semibold text-slate-900">
                {plan.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mt-6">
                <span className="text-3xl font-semibold text-slate-900">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-sm text-slate-500"> / month</span>
                )}
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-slate-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-8 w-full rounded-md px-4 py-2 text-sm font-medium
                  ${
                    plan.highlight
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                  }`}
              >
                {plan.highlight ? "Get started" : "Choose plan"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
