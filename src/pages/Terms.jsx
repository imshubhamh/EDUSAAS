import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "data-collection", title: "Information We Collect" },
  { id: "data-use", title: "How We Use Your Information" },
  { id: "data-sharing", title: "Data Sharing & Third Parties" },
  { id: "data-security", title: "Data Storage & Security" },
  { id: "user-rights", title: "User Rights" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "children", title: "Children's Privacy" },
  { id: "policy-changes", title: "Changes to Privacy Policy" },
  { id: "contact", title: "Contact Information" },
];

export default function Terms() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const sectionRefs = useRef({});

  // Scroll to section with offset
  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const yOffset = -120; // height of sticky sidebar + heading
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;

      sections.forEach((section) => {
        const el = sectionRefs.current[section.id];
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top - 130 <= 0) current = section.id; // 130 = sticky header offset
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
          Learn how we collect, use, and protect your information on Edu-SaaS.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex gap-8">
        {/* Left Sidebar */}
        <div className="w-1/4 sticky top-32 self-start">
          <ul className="space-y-4">
            {sections.map((section, index) => (
              <li
                key={section.id}
                className={`flex items-center cursor-pointer transition-colors ${
                  activeId === section.id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                <span className="mr-2 font-bold">{index + 1}.</span>
                <span>{section.title}</span>
                {activeId === section.id && (
                  <ChevronRight className="ml-auto w-5 h-5" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-3/4 space-y-16">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="scroll-mt-32"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis dolor sit amet eros cursus, eget tristique felis
                facilisis. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Integer vel turpis
                non sapien viverra tempus.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
