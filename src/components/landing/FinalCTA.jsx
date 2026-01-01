export default function FinalCTA() {
  return (
    <section className="w-full bg-white py-24 sm:py-28 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Small Label */}
        <p className="text-sm font-medium text-slate-500 mb-4">
          EDU SAAS Platform
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
          Start building your
          <br className="hidden sm:block" />
          education platform today
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
          EDU SAAS helps institutions, educators, and founders create
          professional LMS platforms with ease — no technical complexity,
          no setup hassle.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
            Get started
          </button>

          <button className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50">
            Contact sales
          </button>
        </div>

        {/* Helper text */}
        <p className="mt-6 text-sm text-slate-500">
          Free trial available • No credit card required
        </p>
      </div>
    </section>
  );
}
