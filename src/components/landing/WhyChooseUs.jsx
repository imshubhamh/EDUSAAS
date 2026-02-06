// import { CheckCircle } from "lucide-react";

// export default function WhyChooseUs() {
//   const points = [
//     {
//       title: "Multi-tenant SaaS",
//       desc: "Create and manage multiple education platforms from one dashboard.",
//     },
//     {
//       title: "Secure & Reliable",
//       desc: "Role-based access, secure authentication, and safe payments.",
//     },
//     {
//       title: "Modern Dashboard",
//       desc: "Clean UI with analytics, user management, and insights.",
//     },
//     {
//       title: "Scalable Architecture",
//       desc: "Built to scale from a single educator to large institutions.",
//     },
//     {
//       title: "Student-Friendly UX",
//       desc: "Simple, distraction-free learning experience for students.",
//     },
//     {
//       title: "Support & Docs",
//       desc: "Clear documentation and continuous support when needed.",
//     },
//   ];

//   return (
//     <section className="py-28 bg-slate-50 rounded-xl">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <p className="text-sm font-medium text-slate-500">
//             Why EDU SAAS
//           </p>
//           <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
//             Built for educators & institutions
//           </h2>
//           <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
//             Everything you need to launch, manage, and scale a modern learning
//             platform — without technical complexity.
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {points.map((item) => (
//             <div
//               key={item.title}
//               className="rounded-xl border border-slate-200 bg-white p-6"
//             >
//               <div className="flex items-start gap-3">
//                 {/* <CheckCircle className="h-5 w-5 text-slate-700 mt-1" /> */}
//                 <div>
//                   <h3 className="text-base font-semibold text-slate-900">
//                     {item.title}
//                   </h3>
//                   <p className="mt-2 text-sm text-slate-600 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// --------

import {
  Layers,
  ShieldCheck,
  LayoutDashboard,
  Server,
  Smile,
  BookOpen,
} from "lucide-react";

export default function WhyChooseUs() {
  /* 🔹 ICON MAP (title → icon) */
  const pointIcons = {
    "Multi-tenant SaaS": Layers,
    "Secure & Reliable": ShieldCheck,
    "Modern Dashboard": LayoutDashboard,
    "Scalable Architecture": Server,
    "Student-Friendly UX": Smile,
    "Support & Docs": BookOpen,
  };

  const points = [
    {
      title: "Multi-tenant SaaS",
      desc: "Create and manage multiple education platforms from one dashboard.",
    },
    {
      title: "Secure & Reliable",
      desc: "Role-based access, secure authentication, and safe payments.",
    },
    {
      title: "Modern Dashboard",
      desc: "Clean UI with analytics, user management, and insights.",
    },
    {
      title: "Scalable Architecture",
      desc: "Built to scale from a single educator to large institutions.",
    },
    {
      title: "Student-Friendly UX",
      desc: "Simple, distraction-free learning experience for students.",
    },
    {
      title: "Support & Docs",
      desc: "Clear documentation and continuous support when needed.",
    },
  ];

  return (
    <section className="py-28 bg-slate-50 rounded-xl">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-slate-500">
            Why EDU SAAS
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
            Built for educators & institutions
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Everything you need to launch, manage, and scale a modern learning
            platform — without technical complexity.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => {
            const Icon = pointIcons[item.title];

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  {Icon && (
                    <Icon className="h-5 w-5 text-slate-700 mt-1 shrink-0" />
                  )}

                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
