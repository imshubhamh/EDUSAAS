// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       {/* subtle background */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />

import CardsSection from "./CardsSection";

//       <div className="max-w-6xl mx-auto px-6 pt-36 pb-28 text-center">
//         {/* Label / Badge */}
//         <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-600 mb-6">
//           🚀 EDU SAAS Platform
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-tight tracking-tight">
//           One platform to manage
//           <br className="hidden sm:block" />
//           learning, courses, and{" "}
//           <span className="text-[#22998C]">institutions</span>
//         </h1>

//         {/* Description */}
//         <p className="mt-7 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
//           Build and scale modern LMS websites for colleges, teachers, and
//           institutions — all powered by a single, intuitive dashboard.
//         </p>

//         {/* Actions */}
//         <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
//           <button className="px-7 py-3.5 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition">
//             Get started free
//           </button>

//           <button className="px-7 py-3.5 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:bg-slate-100 transition">
//             Contact sales
//           </button>
//         </div>

//         {/* Trust note */}
//         <p className="mt-6 text-sm text-slate-500">
//           No credit card required • Free 14-day trial
//         </p>
//       </div>
//     </section>
//   );
// }



// ----------------

// import CardsSection from "../components/landing/CardsSection";

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


