import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";

// Helper for slugs
const slugify = (text) =>
  (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const SidebarItem = ({ item, tab, activeDoc, pageSlug, level = 0 }) => {
  const title = typeof item === "string" ? item : item.title;
  const children = typeof item === "string" ? null : item.children;
  const slug = slugify(title);
  const path = `/docs/${tab === "docs" ? "" : tab + "/"}${slug}/`;

  // Robust active check
  const isActive = slug === pageSlug ||
    activeDoc?.slug === slug ||
    slugify(activeDoc?.metaTitle) === slug ||
    slugify(activeDoc?.subject) === slug ||
    slugify(activeDoc?.title) === slug;

  // Expansion state
  const [isOpen, setIsOpen] = useState(false);

  // Auto-expand if a child is active OR if this item is active
  useEffect(() => {
    if (isActive) {
      setIsOpen(true);
    }
  }, [isActive]);

  const handleToggle = (e) => {
    if (children) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center group">
        <Link
          to={path}
          onClick={handleToggle}
          className={`
            flex-1 flex items-center justify-between transition-all
            ${level === 0
              ? "px-4 py-2.5 text-[12px] font-bold uppercase tracking-tight"
              : "px-4 py-2 text-[14px] ml-2"}
            ${isActive
              ? "border-l-2 border-slate-900 bg-slate-50 text-slate-900"
              : "border-l-2 border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50"}
          `}
        >
          <span>{title}</span>
          {children && (
            <span className={`ml-2 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
              <ChevronDown size={14} />
            </span>
          )}
        </Link>
      </div>

      {children && isOpen && (
        <div className="mt-1 border-l border-slate-100 ml-4">
          {children.map((child, idx) => (
            <SidebarItem
              key={idx}
              item={child}
              tab={tab}
              activeDoc={activeDoc}
              pageSlug={pageSlug}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const DocsSidebar = ({ sidebarData, tab, activeDoc, pageSlug }) => {
  return (
    <aside className="w-[280px] h-full bg-white border-r border-slate-200 overflow-y-auto shrink-0 hidden md:block font-sans">
      <div className="py-8">

        <div className="space-y-1">
          {sidebarData?.map((section, idx) => (
            <SidebarItem
              key={idx} b
              item={section}
              tab={tab}
              activeDoc={activeDoc}
              pageSlug={pageSlug}
              level={0}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default DocsSidebar;
