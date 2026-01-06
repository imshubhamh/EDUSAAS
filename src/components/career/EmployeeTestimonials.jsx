import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working here gave me ownership from day one. I was trusted with real responsibilities, encouraged to take initiatives, and supported by a team that genuinely cares about growth. Every project I work on feels meaningful and impactful.",
    name: "Aman Verma",
    role: "Frontend Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The culture encourages learning and innovation. Every idea is heard and valued, and there's always an opportunity to upskill through workshops and mentoring. I feel motivated to contribute my best while constantly growing professionally.",
    name: "Simran Kaur",
    role: "Content Strategist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "This is not just a job; it feels like building something meaningful for learners. I enjoy collaborating with passionate colleagues, tackling challenging problems, and seeing the real impact of our work on education. It’s both rewarding and inspiring.",
    name: "Rahul Mehta",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];


export default function EmployeeTestimonials() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="pt-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 relative">
                <h2 className="text-4xl font-semibold text-center mb-12">
                    Our Own Words
                </h2>

                {/* Card */}
                <div className="bg-gray-50 border rounded-lg p-10 text-center relative overflow-hidden">


                    <Quote className="mx-auto mb-6 text-blue-600" size={36} />

                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
                        “{testimonials[index].quote}”
                    </p>

                    <div>
                        {/* User Image */}
                        <img
                            src={testimonials[index].image}
                            alt={testimonials[index].name}
                            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                        />
                        <p className="font-semibold text-gray-900">
                            {testimonials[index].name}
                        </p>
                        <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 hover:bg-gray-100 transition"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 hover:bg-gray-100 transition"
                    >
                        <ChevronRight />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            className={`h-2 w-2 rounded-full transition ${i === index ? "bg-blue-600" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
