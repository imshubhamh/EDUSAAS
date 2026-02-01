import {
    AcademicCapIcon,
    CreditCardIcon,
    WrenchScrewdriverIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDown,
    BookOpen,
    PlayCircle,
    FileText,
    HelpCircle,
} from "lucide-react";
import { useState } from "react";
import ContactForm from "../components/support/ContactForm";

export default function Support() {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="relative isolate bg-white">
            {/* ================= HERO ================= */}
            <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900">
                        Support & Help Center
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                        Need help? Find answers quickly or reach out to our support team.
                        We’re here to help students, teachers, and institutes.
                    </p>
                </div>
            </div>


            {/* ================= FAQ ================= */}
            <div className="mx-auto max-w-4xl px-6 mt-10 pb-10">
                {/* <h2 className="text-3xl font-semibold text-gray-900 text-center mb-5">
                    Common Queries
                </h2> */}

                <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
                    {[
                        {
                            q: "How do I reset my password?",
                            a: "Go to login page → Forgot password → Enter your registered email.",
                        },
                        {
                            q: "Payment deducted but course not unlocked?",
                            a: "Don’t worry. Contact support with your transaction ID.",
                        },
                        {
                            q: "How can I download my certificate?",
                            a: "Certificates are available after course completion in your dashboard.",
                        },
                        {
                            q: "How can institutes add teachers?",
                            a: "Admins can manage teachers from the Institute Dashboard.",
                        },
                    ].map((faq, i) => {
                        const isOpen = openIndex === i;

                        return (
                            <div key={i} className="bg-white">
                                {/* Question */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : i)
                                    }
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
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
                                    <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed text-start">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ================= QUICK HELP ================= */}
            <div className="mx-auto max-w-7xl px-6 mt-10 pb-10">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            title: "Student Support",
                            desc: "Courses, assignments, certificates",
                            icon: AcademicCapIcon,
                        },
                        {
                            title: "Teacher Support",
                            desc: "Content, classes & reports",
                            icon: UserIcon,
                        },
                        {
                            title: "Billing & Payments",
                            desc: "Subscriptions & invoices",
                            icon: CreditCardIcon,
                        },
                        {
                            title: "Technical Issues",
                            desc: "Bugs, errors & access issues",
                            icon: WrenchScrewdriverIcon,
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition"
                        >
                            <item.icon className="h-6 w-6 text-blue-500" />
                            <h3 className="mt-3 text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>
                            <p className=" text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

  {/* ================= HELP BY CATEGORY ================= */}
            <div className="mx-auto max-w-7xl px-6 mt-16 pb-10">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">
                    Find help by category
                </h2>
                <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
                    Browse our help center by topic and get quick answers with detailed guides
                    and step-by-step instructions.
                </p>


                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Getting Started",
                        "Course & Content",
                        "Assignments & Exams",
                        "Payments & Subscriptions",
                        "Certificates & Reports",
                        "Privacy & Security",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Explore guides and step-by-step help articles.
                            </p>
                            <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
                                View articles →
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            
            {/* ================= CONTACT + FORM ================= */}
            <ContactForm />

          

            {/* ================= SELF HELP RESOURCES ================= */}
            <div className="mx-auto max-w-7xl px-6 mt-20">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">
                    Helpful resources
                </h2>
                <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
                    Access detailed guides, documentation, and tutorials to make the most of our
                    platform.
                </p>


                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            title: "Guides",
                            desc: "Step-by-step instructions to help you get started quickly.",
                            icon: BookOpen,
                        },
                        {
                            title: "Tutorials",
                            desc: "Watch short videos and learn visually at your own pace.",
                            icon: PlayCircle,
                        },
                        {
                            title: "Documentation",
                            desc: "Detailed technical documentation for advanced usage.",
                            icon: FileText,
                        },
                        {
                            title: "Articles",
                            desc: "Quick answers to common questions and issues.",
                            icon: HelpCircle,
                        },
                    ].map((res, i) => (
                        <div
                            key={i}
                            className="group relative rounded-lg border border-gray-200 bg-white p-6 transition"
                        >
                            {/* Icon */}
                            <div className="flex h-12 w-12 items-center justify-center text-2xl">
                                <res.icon className="h-6 w-6 text-black" />
                            </div>

                            {/* Content */}
                            <h3 className="mt-1 text-base font-semibold text-gray-900">
                                {res.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-600">
                                {res.desc}
                            </p>

                            {/* CTA */}
                            <button className="mt-4 text-sm font-medium text-blue-600 group-hover:underline">
                                Explore →
                            </button>
                        </div>
                    ))}
                </div>

            </div>



            {/* ================= FEEDBACK ================= */}
            <div className="mx-auto max-w-4xl px-6 mt-20 pb-10 text-center">
                <h2 className="text-3xl font-semibold text-gray-900">
                    Was this helpful?
                </h2>

                <textarea
                    rows={3}
                    placeholder="Share your feedback or suggestions..."
                    className="mt-6 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />

                <button className="mt-4 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
                    Submit Feedback
                </button>
            </div>



        </div>
    );
}
