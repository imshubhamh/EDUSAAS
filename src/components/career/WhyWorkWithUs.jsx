import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, Rocket, Trophy, Users } from 'lucide-react';

const WhyWorkWithUs = () => {
    const scrollContainer = useRef(null);

    const cards = [
        {
            Icon: Award,
            title: "Innovative Culture",
            desc: "We celebrate fresh ideas and encourage creativity and passion for hardcore ed-tech drive.",
            bg: "bg-purple-50/60",
            color: "text-purple-900"
        },
        {
            Icon: Rocket,
            title: "Growth Opportunities",
            desc: "Be a game-changer, be critical during rapid scaling and a clear path to success, leading to wealth and fulfillment.",
            bg: "bg-orange-50/80",
            color: "text-orange-700"
        },
        {
            Icon: Trophy,
            title: "Impactful Work",
            desc: "At Wises, your work directly contributes to transforming the education system, creating lasting value.",
            bg: "bg-purple-50/60",
            color: "text-purple-900"
        },
        {
            Icon: Users,
            title: "Collaborative Team",
            desc: "Work with passionate peers and mentors who value collaboration and knowledge-sharing.",
            bg: "bg-green-50/70",
            color: "text-green-700"
        },
    ];

    return (
        <section className="pb-20 md:pb-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading with arrows */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-16">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-600 mb-3">Our Advantages</p>
                        <h2 className="text-3xl md:text-5xl font-semibold">
                            Why Work With Us?
                        </h2>
                    </div>

                    {/* Arrows */}
                    <div className="hidden md:flex items-center gap-3 mt-8 md:mt-0">
                        <div className="border rounded-full px-2 py-2.5">
                            <button
                                onClick={() => scrollContainer.current.scrollBy({ left: -320, behavior: "smooth" })}
                                className="opacity-60 hover:opacity-100 transition"
                                aria-label="Previous"
                            >
                                <ChevronLeft size={28} />
                            </button>
                        </div>

                        <div className="border rounded-full px-2 py-2.5">
                            <button
                                onClick={() => scrollContainer.current.scrollBy({ left: 320, behavior: "smooth" })}
                                className="opacity-60 hover:opacity-100 transition"
                                aria-label="Next"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scrollable Cards */}
                <div
                    ref={scrollContainer}
                    className="flex gap-8 overflow-x-auto px-6 md:px-0 snap-x snap-mandatory scroll-smooth hide-scrollbar"
                >
                    {cards.map((card, idx) => (
                        <div key={idx} className="flex-shrink-0 w-80 md:w-96 snap-center">
                            <div className={`border rounded-lg p-10 text-center`}>
                                <card.Icon className={`mx-auto mb-6`} size={60} />
                                <h3 className={`text-2xl font-semibold mb-4`}>{card.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUs;
