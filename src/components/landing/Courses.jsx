export default function Courses() {
  const courses = [
    {
      title: "Full Stack Development",
      desc: "Build real-world SaaS applications using MERN stack with industry best practices.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200",
    },
    {
      title: "Backend Mastery",
      desc: "Design scalable backend systems with Node.js, MongoDB, authentication and payments.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200",
    },
    {
      title: "Frontend Pro",
      desc: "Create clean, responsive user interfaces using React and Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-slate-500">
            Courses
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
            Learn industry-ready skills
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Carefully designed courses to help students and institutions build practical skills.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-xl border border-slate-200 bg-white"
            >
              {/* Image with padding */}
              <div className="p-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-44 w-full rounded-lg object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {course.desc}
                </p>

                <div className="mt-5">
                  <button className="text-sm font-medium text-slate-700 hover:text-slate-900">
                    View course →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
