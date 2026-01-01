// import FloatingCard from "../common/FloatingCard";

// export default function CardsSection() {
//   return (
//     <div className="mt-24 flex justify-center">
//       <div className="flex gap-6">
//         <FloatingCard title="Documentation" to="/docs" rotate="-rotate-6">
//           <div className="relative w-full h-full">
//             <div className="absolute left-4 top-8 w-20 h-14 rounded-md bg-slate-900 shadow" />
//             <div className="absolute left-8 top-12 w-20 h-14 rounded-md bg-slate-100 border" />
//           </div>
//         </FloatingCard>

//         <FloatingCard title="Plans" to="/pricing" rotate="-rotate-2">
//           <div className="flex gap-2">
//             <div className="w-10 h-14 rounded-md bg-yellow-100 border" />
//             <div className="w-10 h-14 rounded-md bg-blue-100 border" />
//             <div className="w-10 h-14 rounded-md bg-slate-100 border" />
//           </div>
//         </FloatingCard>

//         <FloatingCard title="Next.js Starter" to="/starter" rotate="rotate-1">
//           <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center text-white font-bold">
//             N
//           </div>
//         </FloatingCard>

//         <FloatingCard title="Plugins" to="/plugins" rotate="rotate-3">
//           <div className="flex gap-2">
//             <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-xs font-medium">
//               S
//             </div>
//             <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-medium">
//               G
//             </div>
//           </div>
//         </FloatingCard>

//         <FloatingCard title="Modules" to="/modules" rotate="rotate-6">
//           <div className="space-y-2">
//             <div className="w-24 h-6 rounded bg-slate-100" />
//             <div className="w-20 h-6 rounded bg-slate-100" />
//           </div>
//         </FloatingCard>
//       </div>
//     </div>
//   );
// }


// ---------------

import FloatingCard from "../common/FloatingCard";

export default function CardsSection() {
  return (
    <div className="mt-16 flex justify-center px-4">
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-5
          gap-6
          max-w-6xl
          w-full
          justify-items-center
        "
      >
        <FloatingCard title="Documentation" to="/docs" rotate="-rotate-6">
          <div className="relative w-full h-full">
            <div className="absolute left-4 top-8 w-20 h-14 rounded-md bg-slate-900 shadow" />
            <div className="absolute left-8 top-12 w-20 h-14 rounded-md bg-slate-100 border" />
          </div>
        </FloatingCard>

        <FloatingCard title="Plans" to="/pricing" rotate="-rotate-2">
          <div className="flex gap-2">
            <div className="w-10 h-14 rounded-md bg-yellow-100 border" />
            <div className="w-10 h-14 rounded-md bg-blue-100 border" />
            <div className="w-10 h-14 rounded-md bg-slate-100 border" />
          </div>
        </FloatingCard>

        <FloatingCard title="Next.js Starter" to="/starter" rotate="rotate-1">
          <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center text-white font-bold">
            N
          </div>
        </FloatingCard>

        <FloatingCard title="Plugins" to="/plugins" rotate="rotate-3">
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-xs font-medium">
              S
            </div>
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-medium">
              G
            </div>
          </div>
        </FloatingCard>

        <FloatingCard title="Modules" to="/modules" rotate="rotate-6">
          <div className="space-y-2">
            <div className="w-24 h-6 rounded bg-slate-100" />
            <div className="w-20 h-6 rounded bg-slate-100" />
          </div>
        </FloatingCard>
      </div>
    </div>
  );
}
