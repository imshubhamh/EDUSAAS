export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">

        {/* Label */}
        <p className="text-sm text-slate-500 mb-4">
          EDU SAAS Platform
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-medium text-slate-900 leading-tight">
          One platform to manage
          <br className="hidden sm:block" />
          learning, courses, and institutions
        </h1>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
          Create and manage modern LMS websites for colleges, teachers, and
          institutions from a single, simple dashboard.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-md border border-slate-300 text-slate-900 text-sm hover:bg-slate-100">
            Get started
          </button>

          <button className="px-6 py-3 rounded-md text-slate-700 text-sm hover:bg-slate-50 border border-transparent">
            Contact sales
          </button>
        </div>

        {/* Note */}
        <p className="mt-6 text-sm text-slate-500">
          No credit card required • Free trial available
        </p>
      </div>
    </section>
  );
}
