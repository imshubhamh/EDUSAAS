import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-600">
      {/* Main footer */}
      <div className="w-full px-6 sm:px-10 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              SPYI<span className="font-normal text-slate-500">TECH</span>
            </h3>

            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              A simple, scalable education SaaS platform to launch and manage
              LMS websites for institutions and educators.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className="h-4 w-4 cursor-pointer text-slate-400 hover:text-slate-700 transition"
                  />
                )
              )}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "LMS Platform",
                "Multi-Tenant SaaS",
                "Admin Dashboard",
                "Pricing",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-slate-900 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              {["Documentation", "Blog", "FAQs", "Support"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-slate-900 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "About",
                "Careers",
                "Privacy",
                "Terms",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-slate-900 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} SPYI TECH
          </p>
          <p>
            Built for educators & institutions
          </p>
        </div>
      </div>
    </footer>
  );
}
