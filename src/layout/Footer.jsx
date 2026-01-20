import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";


const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "LMS Platform", to: "/lms" },
      { label: "Multi-Tenant SaaS", to: "/saas" },
      { label: "Admin Dashboard", to: "/dashboard" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", to: "/docs" },
      { label: "Blog", to: "/blog" },
      { label: "FAQs", to: "/faqs" },
      { label: "Support", to: "/support" },
      { label: "Roadmap", to: "/roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Privacy", to: "/privacy-policy" },
      { label: "Terms", to: "/terms" },
      { label: "Changelog", to: "/changelog" },

    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Youtube, href: "https://youtube.com" },
];


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
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4 text-slate-400 hover:text-slate-700 transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold text-slate-900">
                {section.title}
              </h4>

              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="hover:text-slate-900 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SPYI TECH</p>
          <p>Built for educators & institutions</p>
        </div>
      </div>
    </footer>
  );
}
