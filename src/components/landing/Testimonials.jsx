import { Twitter, Linkedin } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Amit Sharma",
      role: "College Admin",
      text: "This platform helped us launch our LMS in days, not months. The interface is simple and very reliable.",
      img: "https://i.pravatar.cc/150?img=12",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Neha Verma",
      role: "Educator",
      text: "Managing students, courses and payments feels effortless. Everything is where I expect it to be.",
      img: "https://i.pravatar.cc/150?img=32",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Rahul Singh",
      role: "Startup Founder",
      text: "A clean, scalable SaaS for education. No clutter, no confusion — just works.",
      img: "https://i.pravatar.cc/150?img=56",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm text-slate-500 mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Trusted by educators and teams
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            People using EDU SAAS to build and manage modern learning platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="
                rounded-xl border border-slate-200 bg-white
                p-6
              "
            >
              {/* User */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {r.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {r.role}
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className="text-sm text-slate-600 leading-relaxed">
                “{r.text}”
              </p>

              {/* Footer */}
              <div className="mt-5 flex gap-4 text-slate-400">
                <a
                  href={r.twitter}
                  className="hover:text-slate-600"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href={r.linkedin}
                  className="hover:text-slate-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
