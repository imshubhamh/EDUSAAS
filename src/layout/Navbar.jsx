import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = [
    {
      name: "Products",
      items: [
        {
          title: "LMS Platform",
          desc: "Create and manage courses, notes and students",
          path: "/products/lms",
        },
        {
          title: "Multi-Tenant SaaS",
          desc: "Launch multiple education websites from one panel",
          path: "/products/saas",
        },
        {
          title: "Admin Dashboard",
          desc: "Manage users, analytics and payments",
          path: "/products/admin-dashboard",
        },
      ],
    },
    {
      name: "Solutions",
      items: [
        {
          title: "For Colleges",
          desc: "Centralized learning system for institutions",
          path: "/solutions/colleges",
        },
        {
          title: "For Teachers",
          desc: "Manage content, batches and students",
          path: "/solutions/teachers",
        },
        {
          title: "For Students",
          desc: "Learn, track progress and get certificates",
          path: "/solutions/students",
        },
      ],
    },
    {
      name: "Resources",
      items: [
        {
          title: "Docs",
          desc: "Developer & platform documentation",
          path: "/docs",
        },
        {
          title: "Blog",
          desc: "Updates, guides and best practices",
          path: "/blog",
        },
        {
          title: "Support",
          desc: "Help center and FAQs",
          path: "/support",
        },
      ],
    },
  ];


  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-semibold text-slate-900 hover:opacity-80"
          >
            SPYI<span className="font-normal text-slate-600">WEB</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menus.map((menu) => (
              <div
                key={menu.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {/* Trigger */}
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
                  {menu.name}
                  <ChevronDown size={14} />
                </button>

                {/* Dropdown */}
                {activeMenu === menu.name && (
                  <div className="absolute left-0 top-full mt-1 w-72">
                    {/* Hover buffer */}
                    <div className="absolute -top-2 left-0 right-0 h-2" />

                    <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-1">
                      {menu.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="block rounded-md px-3 py-2.5 hover:bg-slate-50"
                          onClick={() => setActiveMenu(null)}
                        >
                          <p className="text-sm font-medium text-slate-800 text-start">{item.title}</p>
                          <p className="mt-0.5 text-xs text-slate-500 leading-snug text-start">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/signin"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 text-sm rounded-md border border-slate-300 text-slate-800 hover:bg-slate-100"
            >
              Get started
            </Link>
          </div>


          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            {menus.map((menu) => (
              <details key={menu.name}>
                <summary className="cursor-pointer text-sm font-medium text-slate-700 text-start">
                  {menu.name}
                </summary>
                <div className="mt-2 pl-3 space-y-3">
                  {menu.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block"
                    >
                      <p className="text-sm text-slate-800 text-start">{item.title}</p>
                      <p className="text-xs text-slate-500 text-start">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            <div className="pt-4 border-t flex flex-col gap-3">
              <button className="text-left text-sm">Sign in</button>
              <button className="px-4 py-2 rounded-md border border-slate-300 text-sm">
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
