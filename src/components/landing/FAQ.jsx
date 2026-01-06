import { useState } from "react";
import { ChevronDown } from "lucide-react";

const defaultFaqs = [
  {
    question: "What is EDU SAAS?",
    answer:
      "EDU SAAS is a multi-tenant education platform that allows you to create LMS websites for colleges, teachers, and institutions from a single dashboard.",
  },
  {
    question: "Can I create multiple websites from one account?",
    answer:
      "Yes. With our multi-tenant SaaS system, you can manage and launch multiple education websites from one admin panel.",
  },
  {
    question: "Is this platform suitable for Polytechnic & Colleges?",
    answer:
      "Absolutely. EDU SAAS is designed especially for colleges, polytechnic institutes, coaching centers, and individual educators.",
  },
  {
    question: "Do you support payments and subscriptions?",
    answer:
      "Yes. We support course payments, subscriptions, and plan-based access with Razorpay integration.",
  },
  {
    question: "Is it beginner friendly?",
    answer:
      "Yes. The interface is simple and intuitive. Even non-technical users can manage courses, students, and payments easily.",
  },
];

export default function FAQ({
  faqs,
  title,
  description,
  subtitle = "Help & Support",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Fallback logic
  const faqList = faqs && faqs.length > 0 ? faqs : defaultFaqs;
  const heading = title || "Frequently asked questions";
  const desc =
    description || "Quick answers to common questions about EDU SAAS.";

  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-medium text-slate-500">
            {subtitle}
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-900">
            {heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {desc}
          </p>
        </div>

        {/* FAQ list */}
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="bg-white">
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
