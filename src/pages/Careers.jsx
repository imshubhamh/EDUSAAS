import { Briefcase, Users, Heart, Rocket, MapPin } from "lucide-react";
import EmployeeTestimonials from "../components/career/EmployeeTestimonials";
import FAQ from "../components/landing/FAQ";
import WhyWorkWithUs from "../components/career/WhyWorkWithUs";
import {
  ClockIcon,
  HomeModernIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import HeroSection from "../components/career/HeroSection";
import Benefits from "../components/career/Benefits";

const jobs = [
  {
    title: "Frontend Developer (React)",
    type: "Full Time",
    location: "Remote",
    experience: "0–2 Years",
  },
  {
    title: "Content Creator (Education)",
    type: "Full Time",
    location: "On-site",
    experience: "1–3 Years",
  },
  {
    title: "Marketing Intern",
    type: "Internship",
    location: "Remote",
    experience: "Freshers",
  },
];

export const careerFAQs = [
  {
    question: "Are freshers allowed to apply?",
    answer:
      "Yes, we welcome freshers who are passionate about learning and building impactful solutions. We provide mentorship and learning support."
  },
  {
    question: "Is remote work available?",
    answer:
      "Yes, we offer remote and hybrid work options depending on the role and team requirements."
  },
  {
    question: "Do you offer internship opportunities?",
    answer:
      "Yes, we regularly offer internships across technology, content, marketing, and design roles."
  },
  {
    question: "How does the growth and appraisal cycle work?",
    answer:
      "We follow a transparent performance-based growth system with regular feedback, learning goals, and annual appraisals."
  },
  {
    question: "How long does the interview process take?",
    answer:
      "The complete interview process typically takes 1–2 weeks, depending on the role and candidate availability."
  }
];


export default function Careers() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Culture & Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-2">
            Our Culture & Values
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-10 max-w-2xl mx-auto text-center">
            We believe in a culture of learning, innovation, and collaboration.
            Our values guide us to create meaningful impact for our team and learners.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Value title="Student First">
              Every decision starts with learner impact.
            </Value>
            <Value title="Ownership">
              We take responsibility, not excuses.
            </Value>
            <Value title="Innovation">
              Experiment, learn, and improve continuously.
            </Value>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Benefits />

      {/* Open Positions */}
      <section id="open-roles" className=" py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Open Positions
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="bg-white border rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between transition"
              >
                <div>
                  <h3 className="text-lg font-semibold ">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>{job.type}</span>
                    <span>{job.experience}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {job.location}
                    </span>
                  </div>
                </div>

                <button className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmployeeTestimonials />
      <FAQ faqs={careerFAQs} description="Quick answers to common questions about career opportunities" />

      {/* Final CTA */}
      <section className="text-black pb-20 text-center">
        <h2 className="text-3xl font-semibold mb-2">
          Didn’t find a suitable role?
        </h2>
        <p className="text-gray-600 mb-6">
          We’re always looking for talented people.
        </p>
        <a
          href="mailto:careers@edusaas.com"
          className="inline-block bg-blue-500 border text-white px-8 py-2 text-sm rounded-lg hover:bg-blue-600 transition"
        >
          Send Your Resume
        </a>
      </section>
    </div>
  );
}

const Feature = ({ icon, title, desc }) => (
  <div className="text-center p-6 border rounded-lg transition">
    <div className="mx-auto mb-4 text-blue-600">{icon}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const Value = ({ title, children }) => (
  <div className="bg-white p-8 rounded-2xl border text-center">
    <h3 className="font-semibold text-lg mb-3">{title}</h3>
    <p className="text-gray-600 text-sm">{children}</p>
  </div>
);
