import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { useNavigate, useParams } from "react-router-dom";
//import { Helmet } from 'react-helmet-async'; // Add this import
import { toast } from "sonner";
// import { website, BASE_URL } from "../Config/SeoConfig";
//import "../assets/global.css";
import { Breadcrumbs } from "../common/Breadcrumbs";
import CommentSection from "./CommentSection";
import { ArrowLeft } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Understanding SpyiWeb Architecture",
    type: "Blog",
    description:
      "Explore how our LMS platform is built with modular architecture for scalability, security, and smooth multi-user management.",
    date: "Sep 18, 2025",
    category: "Platform",
    featured: true,
   content: `<p>SpyiWeb's architecture is designed for scalability and modularity, ensuring that new features can be added without affecting existing functionality. Its multi-layered design enhances security while enabling seamless collaboration across multiple users and departments. This approach allows institutions to manage their operations efficiently, with improved performance and reliability.</p>`,

    readTime: 5,
    user: [{ name: "John Doe", _id: "1" }],
    tagDetails: [{ name: "Architecture", _id: "t1", slug: "architecture" }],
    typeDetails: [{ name: "Article" }],
    featuredImage:
      "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp",
    lastUpdated: "2025-09-20",
    location: { name: "Global" },
    averageRating: 4,
  },
  {
    id: 2,
    title: "Why Multi-Tenant SaaS Matters",
    type: "Blog",
    description:
      "Learn how our multi-tenant SaaS solution allows multiple institutions to manage their students, teachers, and courses efficiently.",
    date: "Sep 12, 2025",
    category: "Multi-Tenant SaaS",
    featured: false,
    content: "<p>Full content about the importance of Multi-Tenant SaaS.</p>",
    readTime: 4,
    user: [{ name: "Jane Smith", _id: "2" }],
    tagDetails: [{ name: "SaaS", _id: "t2", slug: "multi-tenant-saas" }],
    typeDetails: [{ name: "Article" }],
    featuredImage:
      "https://media.istockphoto.com/id/1280129533/photo/young-woman-at-home-is-using-laptop-computer-for-scrolling-and-reading-news-about.jpg?s=612x612&w=0&k=20&c=tPYKgzn-Mq6mCjaPWKAP936RzupOBTvQ8fnAKNO_FsU=",
    lastUpdated: "2025-09-13",
    location: { name: "Global" },
    averageRating: 4.2,
  },
  {
    id: 3,
    title: "Teacher Dashboard Explained",
    type: "Blog",
    description:
      "A complete guide for teachers to manage courses, assignments, and student progress using our platform.",
    date: "Sep 08, 2025",
    category: "For Educators",
    featured: false,
    content: "<p>Full content explaining Teacher Dashboard functionality.</p>",
    readTime: 6,
    user: [{ name: "Alice Johnson", _id: "3" }],
    tagDetails: [{ name: "Dashboard", _id: "t3", slug: "teacher-dashboard" }],
    typeDetails: [{ name: "Guide" }],
    featuredImage:
      "https://media.istockphoto.com/id/585488832/photo/typing-on-laptop-closeup-chatting-in-facebook.jpg?s=612x612&w=0&k=20&c=F1CFXCZniDfKWNWi7xH8Q9sHD5-mcESIeVcDbY7OYOA=",
    lastUpdated: "2025-09-09",
    location: { name: "Global" },
    averageRating: 4.5,
  },
  {
    id: 4,
    title: "Optimizing Admin Dashboards",
    type: "Blog",
    description:
      "Discover tips and best practices for creating an intuitive and efficient admin dashboard for managing institutions and users.",
    date: "Sep 03, 2025",
    category: "Guides & Tutorials",
    featured: false,
    content: "<p>Full content on admin dashboard optimization tips.</p>",
    readTime: 7,
    user: [{ name: "Bob Brown", _id: "4" }],
    tagDetails: [{ name: "Admin", _id: "t4", slug: "admin-dashboard" }],
    typeDetails: [{ name: "Tutorial" }],
    featuredImage:
      "https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.jpg?s=612x612&w=0&k=20&c=kpD3aZWVIH0VfOwdG4RX5vPRFPMftg5Dp4xCVo3Lito=",
    lastUpdated: "2025-09-04",
    location: { name: "Global" },
    averageRating: 4.3,
  },
  {
    id: 5,
    title: "LMS Platform Key Features",
    type: "Blog",
    description:
      "Explore the core features of our LMS platform designed to enhance student learning and teacher productivity.",
    date: "Aug 29, 2025",
    category: "Platform",
    featured: false,
    content: "<p>Full content describing key features of LMS platform.</p>",
    readTime: 5,
    user: [{ name: "Carol White", _id: "5" }],
    tagDetails: [{ name: "Features", _id: "t5", slug: "lms-features" }],
    typeDetails: [{ name: "Article" }],
    featuredImage:
      "https://media.istockphoto.com/id/149217316/photo/science-publication.jpg?s=612x612&w=0&k=20&c=kUIVgPXyMTsd1MYi7eM65HerwyNrM2MFuBUGWEACdec=",
    lastUpdated: "2025-08-30",
    location: { name: "Global" },
    averageRating: 4.1,
  },
  {
    id: 6,
    title: "Getting Started for Students",
    type: "Blog",
    description:
      "Step-by-step guide for students to enroll, track progress, and access courses easily on our platform.",
    date: "Aug 24, 2025",
    category: "For Learners",
    featured: false,
    content: "<p>Full content guide for students to get started.</p>",
    readTime: 4,
    user: [{ name: "David Green", _id: "6" }],
    tagDetails: [{ name: "Students", _id: "t6", slug: "getting-started" }],
    typeDetails: [{ name: "Guide" }],
    featuredImage:
      "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    lastUpdated: "2025-08-25",
    location: { name: "Global" },
    averageRating: 4.0,
  },
  {
    id: 7,
    title: "Admin Tools for Efficient Management",
    type: "Blog",
    description:
      "Learn how admins can manage users, generate reports, and monitor platform performance efficiently.",
    date: "Aug 20, 2025",
    category: "Guides & Tutorials",
    featured: false,
    content: "<p>Full content on admin tools and management tips.</p>",
    readTime: 6,
    user: [{ name: "Eve Black", _id: "7" }],
    tagDetails: [{ name: "Admin Tools", _id: "t7", slug: "admin-tools" }],
    typeDetails: [{ name: "Tutorial" }],
    featuredImage:
      "https://media.istockphoto.com/id/1280129533/photo/young-woman-at-home-is-using-laptop-computer-for-scrolling-and-reading-news-about.jpg?s=612x612&w=0&k=20&c=tPYKgzn-Mq6mCjaPWKAP936RzupOBTvQ8fnAKNO_FsU=",
    lastUpdated: "2025-08-21",
    location: { name: "Global" },
    averageRating: 4.2,
  },
  {
    id: 8,
    title: "Complete Documentation",
    type: "Blog",
    description:
      "Access detailed guides, tutorials, and API documentation to get the most out of our platform.",
    date: "Aug 16, 2025",
    category: "Documentation",
    featured: false,
    content: "<p>Full content covering documentation and APIs.</p>",
    readTime: 5,
    user: [{ name: "Frank Harris", _id: "8" }],
    tagDetails: [{ name: "Documentation", _id: "t8", slug: "documentation" }],
    typeDetails: [{ name: "Article" }],
    featuredImage:
      "https://media.istockphoto.com/id/585488832/photo/typing-on-laptop-closeup-chatting-in-facebook.jpg?s=612x612&w=0&k=20&c=F1CFXCZniDfKWNWi7xH8Q9sHD5-mcESIeVcDbY7OYOA=",
    lastUpdated: "2025-08-17",
    location: { name: "Global" },
    averageRating: 4.1,
  },
  {
    id: 9,
    title: "Student Engagement Features",
    type: "Blog",
    description:
      "Explore features designed to boost student participation, collaboration, and performance tracking.",
    date: "Aug 11, 2025",
    category: "For Learners",
    featured: false,
    content: "<p>Full content on student engagement features.</p>",
    readTime: 5,
    user: [{ name: "Grace Lee", _id: "9" }],
    tagDetails: [{ name: "Engagement", _id: "t9", slug: "student-engagement" }],
    typeDetails: [{ name: "Guide" }],
    featuredImage:
      "https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.jpg?s=612x612&w=0&k=20&c=kpD3aZWVIH0VfOwdG4RX5vPRFPMftg5Dp4xCVo3Lito=",
    lastUpdated: "2025-08-12",
    location: { name: "Global" },
    averageRating: 4.3,
  },
  {
    id: 10,
    title: "Admin Dashboard Security Tips",
    type: "Blog",
    description:
      "Key practices to ensure your admin dashboard remains secure and your users’ data is protected.",
    date: "Aug 06, 2025",
    category: "Guides & Tutorials",
    featured: false,
    content: "<p>Full content about admin dashboard security practices.</p>",
    readTime: 6,
    user: [{ name: "Henry Adams", _id: "10" }],
    tagDetails: [{ name: "Security", _id: "t10", slug: "admin-security" }],
    typeDetails: [{ name: "Tutorial" }],
    featuredImage:
      "https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.jpg?s=612x612&w=0&k=20&c=kpD3aZWVIH0VfOwdG4RX5vPRFPMftg5Dp4xCVo3Lito=",
    lastUpdated: "2025-08-07",
    location: { name: "Global" },
    averageRating: 4.4,
  },
  {
    id: 11,
    title: "Latest Platform Updates",
    type: "Blog",
    description:
      "Stay informed about new features, performance improvements, and platform upgrades to enhance learning experiences.",
    date: "Aug 01, 2025",
    category: "Updates & News",
    featured: false,
    content: "<p>Full content about latest updates on the platform.</p>",
    readTime: 4,
    user: [{ name: "Ivy Wilson", _id: "11" }],
    tagDetails: [{ name: "Updates", _id: "t11", slug: "platform-updates" }],
    typeDetails: [{ name: "News" }],
    featuredImage:
      "https://media.istockphoto.com/id/149217316/photo/science-publication.jpg?s=612x612&w=0&k=20&c=kUIVgPXyMTsd1MYi7eM65HerwyNrM2MFuBUGWEACdec=",
    lastUpdated: "2025-08-02",
    location: { name: "Global" },
    averageRating: 4.0,
  },
  {
    id: 12,
    title: "Teacher Onboarding Guide",
    type: "Blog",
    description:
      "Everything teachers need to know to start creating courses, managing classes, and engaging students effectively.",
    date: "Jul 26, 2025",
    category: "For Educators",
    featured: false,
    content: "<p>Full content covering teacher onboarding and course management.</p>",
    readTime: 6,
    user: [{ name: "Jack Miller", _id: "12" }],
    tagDetails: [{ name: "Onboarding", _id: "t12", slug: "teacher-onboarding" }],
    typeDetails: [{ name: "Guide" }],
    featuredImage:
      "https://media.istockphoto.com/id/2192705122/photo/businessman-touching-the-interface-of-a-knowledge-management-system-network-connection-data.jpg?s=612x612&w=0&k=20&c=KQn85bKhc7Pmk-qTrEw6za9KkDy0usqDoR2lzpNdkDw=",
    lastUpdated: "2025-07-27",
    location: { name: "Global" },
    averageRating: 4.2,
  },
];


const forbiddenProps = ["color", "font-size"];
DOMPurify.addHook("uponSanitizeAttribute", (node, data) => {
  if (data.attrName === "style") {
    const styles = data.attrValue.split(";").map((s) => s.trim());
    const filtered = styles.filter(
      (rule) =>
        !forbiddenProps.some((prop) =>
          rule.toLowerCase().startsWith(prop)
        )
    );
    data.attrValue = filtered.join("; ");
  }
});
const emojiList = ["👎", "😟", "😐", "😊", "❤️"];
const CustomEmojiRating = ({
  value = 0,
  onClick,
  edit = true,
}) => {
  const [temporaryValue, setTemporaryValue] = useState(value);
  const handleMouseEnter = (index) => {
    if (!edit) return;
    setTemporaryValue(index + 1);
  };
  const handleMouseLeave = () => {
    if (!edit) return;
    setTemporaryValue(value);
  };
  const handleClick = (index) => {
    if (edit && onClick) {
      onClick(index + 1);
    }
  };
  const displayValue = edit ? temporaryValue : value;
  return (
    <div style={{ display: 'inline-flex' }}>
      {emojiList.map((emoji, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          role="button"
          aria-label={`Rate ${index + 1}`}
          tabIndex={edit ? 0 : -1}
          onKeyDown={(e) => {
            if (edit && (e.key === "Enter" || e.key === " ")) {
              handleClick(index);
            }
          }}
          style={{
            cursor: edit ? 'pointer' : 'default',
            fontSize: 14,
            marginRight: 6,
            transform: displayValue === index + 1 ? 'scale(1.3)' : 'scale(1)',
            transition: 'transform 0.2s ease',
            opacity: displayValue >= index + 1 ? 1 : 0.5,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};
const ContentDescription = () => {
  const { slug } = useParams();
  const activeBlog = blogs.find(
    (b) => b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  ) || blogs[0];

  const navigate = useNavigate();
  const [rating, setRating] = useState(activeBlog.averageRating || 0);
  const [averageRating, setAverageRating] = useState(activeBlog.averageRating || null);
  const [readingTime, setReadingTime] = useState(activeBlog.readTime || 1);

  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("userDocRatings") || "{}");
    const storedRating = storedRatings[activeBlog.id]?.rating;
    if (storedRating) setRating(Number(storedRating));
  }, [activeBlog.id]);

  // Helper functions for SEO
  const getAbsoluteImageUrl = (imageUrl) => {
    if (!imageUrl) return `${BASE_URL}/default-og-image.jpg`;
    if (imageUrl.startsWith('https')) return imageUrl;
    return `${BASE_URL}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  };
  const getCurrentUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : `${BASE_URL}/docs/${activeSlug}`;
  };

  const getUserIP = async () => {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      return data.ip;
    } catch {
      return null;
    }
  };
  // Handle user rating submission
  const handleRatingSubmit = (ratingValue) => {
    const storedRatings = JSON.parse(localStorage.getItem("userDocRatings") || "{}");
    storedRatings[activeBlog.id] = { rating: ratingValue };
    localStorage.setItem("userDocRatings", JSON.stringify(storedRatings));
    setRating(ratingValue);
    setAverageRating(Math.round((averageRating + ratingValue) / 2));
    toast.success("Thanks for your rating!");
  };

  const sanitizedContent = DOMPurify.sanitize(activeBlog.content);

  return (
    <>

      <div className="flex flex-col-reverse lg:flex-row mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-8 min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col items-end w-full lg:w-80 shrink-0 py-5">
          {/* Info Card */}
          <div className="lg:sticky top-[4rem] w-full p-4 pr-0 pt-0 text-end text-[13px] space-y-1">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 bg-white inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <div>
              <span className="text-gray-500">By </span>
              <span className="text-primary font-medium">{activeBlog.user[0]?.name || "Anonymous"}</span>
            </div>
            <div>
              <span className="text-gray-500 font-medium">Type:</span>{" "}
              <a
                href={`/
                  "blog"
                  }`}
                className="text-primary"
              >
                {"Blog"}
              </a>
            </div>
            <div className="text-gray-500">
              Published:{" "}
              <span className="text-gray-800 font-medium">{new Date(activeBlog.date).toLocaleDateString()}</span>
            </div>
            <div className="text-gray-500">
              Updated:{" "}
              <span className="text-gray-800 font-medium">{new Date(activeBlog.date).toLocaleDateString()}</span>
            </div>

            {/* Reading Time Estimate */}
            <div className="text-gray-500">
              Reading Time Estimate:
              <span className="text-gray-800 font-medium">{readingTime} min read</span>
            </div>


            <div className="text-gray-500">Location: <span className="text-gray-800 font-medium">{activeBlog.location?.name || "-"}</span></div>


            <div className="flex flex-wrap justify-end gap-2 mt-2">
            {activeBlog.tagDetails.map((tag) => (
              <a
                key={tag._id}
                href={`/tag/${tag.slug}`}
                className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full hover:bg-gray-200 transition"
              >
                {tag.name}
              </a>
            ))}
          </div>
            <div className="flex justify-end items-center">
              <span className="text-gray-500 font-medium mr-2">
                Your Rating:
              </span>
              <CustomEmojiRating
                value={Number(rating) || 0}
                onClick={handleRatingSubmit}
                edit={true}
              />
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="mb-2 text-md text-default">Average Rating:</span>
              <span className="text-size text-dark-custom fw-medium text-gray-600">{averageRating}</span>
            </div>
            <div className="mt-8 text-default">
              <p className="mb-2 text-md">Share it with your friends</p>
              <div className="flex justify-end items-end gap-4 text-gray-600">
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition"
                  aria-label="Share on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.01 3.66 9.16 8.44 9.93v-7.03h-2.54v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.08 22 12.07z" />
                  </svg>
                </a>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition"
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.75 2.24 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.76-2.25-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.78 1.76-1.75 1.76zm13 10.27h-3v-4.98c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.61v5.07h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.03 0 3.59 1.99 3.59 4.58v4.75z" />
                  </svg>
                </a>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition"
                  aria-label="Share on Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a
                  href={""}
                  className="hover:text-gray-900 transition"
                  aria-label="Share via Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex-1 flex flex-col px-2 pt-6">
          <Breadcrumbs />
          <div className="prose prose-base text-default reset-prose break-words max-w-[45rem]">
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>

          <div className="mt-6 border-t pt-6 w-3/4">
            <CommentSection docId={activeBlog.id} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContentDescription;