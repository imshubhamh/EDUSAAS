import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
    "General",
    "Pricing & Plans",
    "Courses & Features",
    "Account & Billing",
    "Security & Privacy",
    "Support",
];

const faqsData = {
    General: [
        {
            q: "What is EDUSAAS?",
            a: "EDUSAAS is a scalable education SaaS platform that helps institutions and educators launch and manage LMS websites easily.",
        },
        {
            q: "Who can use EDUSAAS?",
            a: "Students, educators, coaching centers, colleges, and training institutes can all use EDUSAAS.",
        },
        {
            q: "What is EDU SAAS?",
            a:
                "EDU SAAS is a multi-tenant education platform that allows you to create LMS websites for colleges, teachers, and institutions from a single dashboard.",
        },
        {
            q: "Can I create multiple websites from one account?",
            a:
                "Yes. With our multi-tenant SaaS system, you can manage and launch multiple education websites from one admin panel.",
        },
        {
            q: "Is this platform suitable for Polytechnic & Colleges?",
            a:
                "Absolutely. EDU SAAS is designed especially for colleges, polytechnic institutes, coaching centers, and individual educators.",
        },
        {
            q: "Do you support payments and subscriptions?",
            a:
                "Yes. We support course payments, subscriptions, and plan-based access with Razorpay integration.",
        },
        {
            q: "Is it beginner friendly?",
            a:
                "Yes. The interface is simple and intuitive. Even non-technical users can manage courses, students, and payments easily.",
        },
    ],

    "Pricing & Plans": [
        {
            q: "Is there a free plan available?",
            a: "Yes, we offer a Free plan for beginners with limited features.",
        },
        {
            q: "What is the difference between monthly and annual plans?",
            a: "Annual plans are billed once per year and come with discounted pricing compared to monthly plans.",
        },
        {
            q: "Can I change my plan later?",
            a: "Yes, you can upgrade or downgrade your plan anytime from your dashboard.",
        },
        {
            q: "What is EDU SAAS?",
            a:
                "EDU SAAS is a multi-tenant education platform that allows you to create LMS websites for colleges, teachers, and institutions from a single dashboard.",
        },
        {
            q: "Can I create multiple websites from one account?",
            a:
                "Yes. With our multi-tenant SaaS system, you can manage and launch multiple education websites from one admin panel.",
        },
        {
            q: "Is this platform suitable for Polytechnic & Colleges?",
            a:
                "Absolutely. EDU SAAS is designed especially for colleges, polytechnic institutes, coaching centers, and individual educators.",
        },
        {
            q: "Do you support payments and subscriptions?",
            a:
                "Yes. We support course payments, subscriptions, and plan-based access with Razorpay integration.",
        },
        {
            q: "Is it beginner friendly?",
            a:
                "Yes. The interface is simple and intuitive. Even non-technical users can manage courses, students, and payments easily.",
        },
    ],

    "Courses & Features": [
        {
            q: "Do I get a certificate after completing a course?",
            a: "Yes, certificates are issued after successful course completion.",
        },
        {
            q: "Can I track my learning progress?",
            a: "Yes, EDUSAAS provides detailed progress tracking and analytics.",
        },
        {
            q: "What is EDU SAAS?",
            a:
                "EDU SAAS is a multi-tenant education platform that allows you to create LMS websites for colleges, teachers, and institutions from a single dashboard.",
        },
        {
            q: "Can I create multiple websites from one account?",
            a:
                "Yes. With our multi-tenant SaaS system, you can manage and launch multiple education websites from one admin panel.",
        },
        {
            q: "Is this platform suitable for Polytechnic & Colleges?",
            a:
                "Absolutely. EDU SAAS is designed especially for colleges, polytechnic institutes, coaching centers, and individual educators.",
        },
        {
            q: "Do you support payments and subscriptions?",
            a:
                "Yes. We support course payments, subscriptions, and plan-based access with Razorpay integration.",
        },
        {
            q: "Is it beginner friendly?",
            a:
                "Yes. The interface is simple and intuitive. Even non-technical users can manage courses, students, and payments easily.",
        },
    ],

    "Account & Billing": [
        {
            q: "How do I reset my password?",
            a: "You can reset your password using the 'Forgot Password' option on the login page.",
        },
        {
            q: "Will I receive invoices for payments?",
            a: "Yes, invoices are automatically generated and available in your account.",
        },
        {
            q: "What is EDU SAAS?",
            a:
                "EDU SAAS is a multi-tenant education platform that allows you to create LMS websites for colleges, teachers, and institutions from a single dashboard.",
        },
        {
            q: "Can I create multiple websites from one account?",
            a:
                "Yes. With our multi-tenant SaaS system, you can manage and launch multiple education websites from one admin panel.",
        },
        {
            q: "Is this platform suitable for Polytechnic & Colleges?",
            a:
                "Absolutely. EDU SAAS is designed especially for colleges, polytechnic institutes, coaching centers, and individual educators.",
        },
        {
            q: "Do you support payments and subscriptions?",
            a:
                "Yes. We support course payments, subscriptions, and plan-based access with Razorpay integration.",
        },
        {
            q: "Is it beginner friendly?",
            a:
                "Yes. The interface is simple and intuitive. Even non-technical users can manage courses, students, and payments easily.",
        },
    ],

    "Security & Privacy": [
        {
            q: "Is my data secure?",
            a: "Yes, all data is encrypted and stored securely following industry standards.",
        },
        {
            q: "Is my payment information safe?",
            a: "We use secure and trusted payment gateways with end-to-end encryption.",
        },
        {
            q: "What is EDU SAAS?",
            a:
                "EDU SAAS is a multi-tenant education platform that allows you to create LMS websites for colleges, teachers, and institutions from a single dashboard.",
        },
        {
            q: "Can I create multiple websites from one account?",
            a:
                "Yes. With our multi-tenant SaaS system, you can manage and launch multiple education websites from one admin panel.",
        },
        {
            q: "Is this platform suitable for Polytechnic & Colleges?",
            a:
                "Absolutely. EDU SAAS is designed especially for colleges, polytechnic institutes, coaching centers, and individual educators.",
        },
        {
            q: "Do you support payments and subscriptions?",
            a:
                "Yes. We support course payments, subscriptions, and plan-based access with Razorpay integration.",
        },
        {
            q: "Is it beginner friendly?",
            a:
                "Yes. The interface is simple and intuitive. Even non-technical users can manage courses, students, and payments easily.",
        },
    ],

    Support: [
        {
            q: "How can I contact support?",
            a: "You can contact our support team via email, chat, or support ticket.",
        },
        {
            q: "What is the response time?",
            a: "Our average response time is within 24 hours for standard plans.",
        },
        {
            q: "What is EDU SAAS?",
            a:
                "EDU SAAS is a multi-tenant education platform that allows you to create LMS websites for colleges, teachers, and institutions from a single dashboard.",
        },
        {
            q: "Can I create multiple websites from one account?",
            a:
                "Yes. With our multi-tenant SaaS system, you can manage and launch multiple education websites from one admin panel.",
        },
        {
            q: "Is this platform suitable for Polytechnic & Colleges?",
            a:
                "Absolutely. EDU SAAS is designed especially for colleges, polytechnic institutes, coaching centers, and individual educators.",
        },
        {
            q: "Do you support payments and subscriptions?",
            a:
                "Yes. We support course payments, subscriptions, and plan-based access with Razorpay integration.",
        },
        {
            q: "Is it beginner friendly?",
            a:
                "Yes. The interface is simple and intuitive. Even non-technical users can manage courses, students, and payments easily.",
        },
    ],
};

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState("General");
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pb-8 pt-24 px-6 text-center max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-sm sm:text-base text-gray-600">
                    Everything you need to know about EDUSAAS. Can’t find an answer?
                    Contact our support team.
                </p>
            </section>

            {/* Categories */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setOpenIndex(null);
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition
                                ${activeCategory === cat
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <section className="max-w-4xl mx-auto px-6">
                    <div className="rounded-xl border border-slate-200 divide-y divide-slate-200 bg-white">
                        {faqsData[activeCategory].map((faq, index) => {
                            const isOpen = openIndex === index

                            return (
                                <div key={index}>
                                    {/* Question */}
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left group"
                                    >
                                        <span className="text-sm sm:text-base font-medium text-slate-900">
                                            {faq.q}
                                        </span>

                                        <ChevronDown
                                            size={18}
                                            className={`shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Answer */}
                                    {isOpen && (
                                        <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </section>

            </div>

            {/* CTA */}
            <section className="mt-24 border-t py-20 text-center px-6">
                <h2 className="text-3xl font-bold text-gray-900">
                    Still have questions?
                </h2>
                <p className="mt-3 text-gray-600">
                    Our support team is here to help you anytime.
                </p>
                <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-6 py-3 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
                        Get started
                    </button>

                    <button className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50">
                        Contact sales
                    </button>
                </div>

                {/* Helper text */}
                <p className="mt-6 text-sm text-slate-500">
                    Free trial available • No credit card required
                </p>
            </section>
        </div>
    );
}
