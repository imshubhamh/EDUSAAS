
// ---------

// import CardsSection from "./CardsSection";

// export default function Hero() {
//   return (
//     <section
//       className="relative bg-white overflow-hidden"
//       style={{
//         backgroundImage: `
//           linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
//           linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
//         `,
//         backgroundSize: "70px 70px",
//       }}
//     >
//       <div className="max-w-6xl mx-auto px-6 pt-36 pb-32 text-center relative z-10">
//         <h1 className="text-4xl md:text-6xl font-semibold text-slate-900">
//           Building blocks for
//           <br />
//           modern education platforms
//         </h1>

//         <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
//           Launch LMS websites without rebuilding everything from scratch.
//         </p>

//         <CardsSection />
//       </div>
//     </section>
//   );
// }


// -------

import CardsSection from "./CardsSection";

export default function Hero() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "70px 70px",
      }}
    >
      {/*  Bottom soft blur glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-slate-200/60 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 pt-36 pb-32 text-center relative z-10">
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
