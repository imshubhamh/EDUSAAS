import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
    "All",
    "Platform",
    "For Institutions",
    "For Educators",
    "For Learners",
    "Guides & Tutorials",
    "Updates & News",
    "Documentation",
    "Support & Help",
];

const blogs = [
    {
        id: 1,
        title: "Understanding SpyiWeb Architecture",
        description:
            "Explore how our LMS platform is built with modular architecture for scalability, security, and smooth multi-user management.",
        date: "Sep 18, 2025",
        category: "Platform",
        featured: true,
        image: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    },
    {
        id: 2,
        title: "Why Multi-Tenant SaaS Matters",
        description:
            "Learn how our multi-tenant SaaS solution allows multiple institutions to manage their students, teachers, and courses efficiently.",
        date: "Sep 12, 2025",
        category: "Multi-Tenant SaaS",
        image: "https://media.istockphoto.com/id/1280129533/photo/young-woman-at-home-is-using-laptop-computer-for-scrolling-and-reading-news-about.jpg?s=612x612&w=0&k=20&c=tPYKgzn-Mq6mCjaPWKAP936RzupOBTvQ8fnAKNO_FsU=",
    },
    {
        id: 3,
        title: "Teacher Dashboard Explained",
        description:
            "A complete guide for teachers to manage courses, assignments, and student progress using our platform.",
        date: "Sep 08, 2025",
        category: "For Educators",
        image: "https://media.istockphoto.com/id/585488832/photo/typing-on-laptop-closeup-chatting-in-facebook.jpg?s=612x612&w=0&k=20&c=F1CFXCZniDfKWNWi7xH8Q9sHD5-mcESIeVcDbY7OYOA=",
    },
    {
        id: 4,
        title: "Optimizing Admin Dashboards",
        description:
            "Discover tips and best practices for creating an intuitive and efficient admin dashboard for managing institutions and users.",
        date: "Sep 03, 2025",
        category: "Guides & Tutorials",
        image: "https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.jpg?s=612x612&w=0&k=20&c=kpD3aZWVIH0VfOwdG4RX5vPRFPMftg5Dp4xCVo3Lito=",
    },
    {
        id: 5,
        title: "LMS Platform Key Features",
        description:
            "Explore the core features of our LMS platform designed to enhance student learning and teacher productivity.",
        date: "Aug 29, 2025",
        category: "Platform",
        image: "https://media.istockphoto.com/id/149217316/photo/science-publication.jpg?s=612x612&w=0&k=20&c=kUIVgPXyMTsd1MYi7eM65HerwyNrM2MFuBUGWEACdec=",
    },
    {
        id: 6,
        title: "Getting Started for Students",
        description:
            "Step-by-step guide for students to enroll, track progress, and access courses easily on our platform.",
        date: "Aug 24, 2025",
        category: "For Learners",
        image: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    },
    {
        id: 7,
        title: "Admin Tools for Efficient Management",
        description:
            "Learn how admins can manage users, generate reports, and monitor platform performance efficiently.",
        date: "Aug 20, 2025",
        category: "Guides & Tutorials",
        image: "https://media.istockphoto.com/id/1280129533/photo/young-woman-at-home-is-using-laptop-computer-for-scrolling-and-reading-news-about.jpg?s=612x612&w=0&k=20&c=tPYKgzn-Mq6mCjaPWKAP936RzupOBTvQ8fnAKNO_FsU=",
    },
    {
        id: 8,
        title: "Complete Documentation",
        description:
            "Access detailed guides, tutorials, and API documentation to get the most out of our platform.",
        date: "Aug 16, 2025",
        category: "Documentation",
        image: "https://media.istockphoto.com/id/585488832/photo/typing-on-laptop-closeup-chatting-in-facebook.jpg?s=612x612&w=0&k=20&c=F1CFXCZniDfKWNWi7xH8Q9sHD5-mcESIeVcDbY7OYOA=",
    },
    {
        id: 9,
        title: "Student Engagement Features",
        description:
            "Explore features designed to boost student participation, collaboration, and performance tracking.",
        date: "Aug 11, 2025",
        category: "For Learners",
        image: "https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.jpg?s=612x612&w=0&k=20&c=kpD3aZWVIH0VfOwdG4RX5vPRFPMftg5Dp4xCVo3Lito=",
    },
    {
        id: 10,
        title: "Admin Dashboard Security Tips",
        description:
            "Key practices to ensure your admin dashboard remains secure and your users’ data is protected.",
        date: "Aug 06, 2025",
        category: "Guides & Tutorials",
        image: "https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.jpg?s=612x612&w=0&k=20&c=kpD3aZWVIH0VfOwdG4RX5vPRFPMftg5Dp4xCVo3Lito=",
    },
    {
        id: 11,
        title: "Latest Platform Updates",
        description:
            "Stay informed about new features, performance improvements, and platform upgrades to enhance learning experiences.",
        date: "Aug 01, 2025",
        category: "Updates & News",
        image: "https://media.istockphoto.com/id/149217316/photo/science-publication.jpg?s=612x612&w=0&k=20&c=kUIVgPXyMTsd1MYi7eM65HerwyNrM2MFuBUGWEACdec=",
    },
    {
        id: 12,
        title: "Teacher Onboarding Guide",
        description:
            "Everything teachers need to know to start creating courses, managing classes, and engaging students effectively.",
        date: "Jul 26, 2025",
        category: "For Educators",
        image: "https://media.istockphoto.com/id/2192705122/photo/businessman-touching-the-interface-of-a-knowledge-management-system-network-connection-data.jpg?s=612x612&w=0&k=20&c=KQn85bKhc7Pmk-qTrEw6za9KkDy0usqDoR2lzpNdkDw=",
    },
];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory =
            activeCategory === "All" || blog.category === activeCategory;

        const matchesSearch =
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const latestBlog = blogs.find((b) => b.featured);

    // Blogs that match search only (for the div under search)
    const searchResults = blogs.filter(
        (blog) =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full bg-white">
            {/* ================= HERO ================= */}
            <section className="relative h-[30vh] flex items-center justify-center px-6 pt-28">
                <div className="text-center space-y-3">
                    <h1 className="text-3xl sm:text-3xl text-black">SPYI<span className="font-normal text-slate-600">WEB</span> BLOG's</h1>
                    {/* SPYI<h3 className="font-normal text-slate-600">TECH</h3> */}
                    {/* <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
                        Insights, updates, and guides on LMS platforms, SaaS solutions, and effective education management.
                    </p> */}
                </div>
            </section>

            {/* ================= SEARCH + CATEGORY FILTER ================= */}
            <section className="max-w-7xl mx-auto px-6 pb-10 space-y-8">
                {/* SEARCH BAR */}
                <div className="flex justify-center relative">
                    <div className="w-full max-w-xl relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search blogs..."
                            className="w-full px-5 py-2 rounded-full border border-gray-300 text-sm text-black placeholder-gray-400 focus:outline-none"
                        />
                        <svg
                            className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                            />
                        </svg>

                        {/* SEARCH RESULTS DIV */}
                        {searchQuery && searchResults.length > 0 && (
                            <div className="absolute top-full mt-2 w-full max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                {searchResults.map((blog) => {
                                    const slug = blog.title
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/g, "-")
                                        .replace(/^-+|-+$/g, "");

                                    return (
                                        <Link
                                            key={blog.id}
                                            to={`/blog/${slug}`}
                                            className="px-4 py-3 hover:bg-gray-100 border-b last:border-b-0 flex justify-between items-start cursor-pointer"
                                        >
                                            <div className="flex-1 pr-4">
                                                <p className="text-sm font-medium text-black">{blog.title}</p>
                                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                                    {blog.description}
                                                </p>
                                            </div>

                                            <span className="text-xs font-medium text-black hover:underline mt-10 flex-shrink-0">
                                                Read more →
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}


                    </div>
                </div>

                {/* CATEGORIES */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-1 rounded-full text-sm border transition ${activeCategory === cat
                                ? "bg-gray-50 text-black "
                                : "bg-white text-gray-600 border-gray-300"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* ================= LATEST BLOG ================= */}
            {/* {latestBlog && (
                <section className="max-w-7xl mx-auto px-6 mb-20">
                    <Link
                        to={`/blog/${latestBlog.title
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-+|-+$/g, "")}`}
                        className="block border border-gray-200 rounded-2xl p-8 md:p-12 hover:shadow-md transition"
                    >
                        <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
                            Latest Blog
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                            {latestBlog.title}
                        </h2>
                        <p className="text-gray-500 max-w-3xl mb-6">{latestBlog.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">{latestBlog.date}</span>
                            <span className="text-sm font-medium text-black hover:underline">
                                Read more →
                            </span>
                        </div>
                    </Link>
                </section>
            )} */}


            {/* ================= BLOG GRID ================= */}
            <section className="max-w-7xl mx-auto px-6 pb-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((blog) => {
                        const slug = blog.title
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-+|-+$/g, "");

                        return (
                            <>
                            <div className="group overflow-hidden bg-white flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs text-gray-400 mb-2">{blog.category}</span>
                                    <h3 className="text-lg font-semibold text-black mb-2 leading-snug">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm flex-grow">{blog.description}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-gray-400">{blog.date}</span>
                                         <Link
                                            key={blog.id}
                                            to={`/blog/${slug}`}
                                            className=""
                                        >
                                        <span className="text-sm text-blue-600 font-medium">
                                            Read more →
                                        </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Blog;
