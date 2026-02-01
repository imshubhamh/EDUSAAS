

import CardsSection from "./CardsSection";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-36 pb-32 text-center">

        <h1 className="text-4xl md:text-6xl font-semibold text-slate-900">
          Building blocks for
          <br />
          modern education platforms
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          Launch LMS websites without rebuilding everything from scratch.
        </p>

        <CardsSection />
      </div>
    </section>
  );
}


