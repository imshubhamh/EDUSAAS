import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <section className=" text-black py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-beige-100 opacity-90"></div> {/* Light beige overlay to match the screenshot */}

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Small nav-like text if needed */}
          <p className="text-sm text-gray-600 mb-2">Our Careers</p>

          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight mb-2">
            Build the Future of Education
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mb-8">
            Join our mission to make learning accessible, engaging, and impactful
            for millions of learners.
          </p>

          {/* Images Grid - Responsive layout similar to the screenshot */}
          <div className="mt-16 -mx-6 md:-mx-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 scrollbar-hide">
              {/* Image 1 - Slightly up */}
              <div className="flex-shrink-0 md:-mt-12">
                <img
                  src="https://images.presentationgo.com/2025/04/team-collaboration-modern-office.jpg"
                  alt="Team collaboration"
                  className="rounded-lg shadow-md object-cover w-72 h-54 md:w-96 md:h-60"
                />
              </div>

              {/* Image 2 - Slightly down */}
              <div className="flex-shrink-0 md:mt-12">
                <img
                  src="https://blog.gainapp.com/wp-content/uploads/2023/03/2302_mktBrainstormingExcercise-blog-op.png"
                  alt="Brainstorming session"
                  className="rounded-lg shadow-md object-cover w-72 h-54 md:w-96 md:h-60"
                />
              </div>

              {/* Image 3 - Up */}
              <div className="flex-shrink-0 md:-mt-8">
                <img
                  src="https://media.istockphoto.com/id/479842074/photo/empty-road-at-building-exterior.jpg?s=612x612&w=0&k=20&c=SbyfZGN0i2O_QPLCdBcu9vhuzbQvTz4bGEn-lIzrN0E="
                  alt="Modern office building"
                  className="rounded-lg shadow-md object-cover w-72 h-54 md:w-96 md:h-60"
                />
              </div>

              {/* Image 4 - Down */}
              <div className="flex-shrink-0 md:mt-16">
                <img
                  src="https://thumbs.dreamstime.com/b/joyful-diverse-colleagues-celebrate-success-vibrant-office-party-349991810.jpg"
                  alt="Team celebrating"
                  className="rounded-lg shadow-md object-cover w-72 h-54 md:w-96 md:h-60"
                />
              </div>

              {/* Image 5 - Up */}
              <div className="flex-shrink-0 md:-mt-12">
                <img
                  src="https://thumbs.dreamstime.com/b/busy-start-up-partners-working-casual-clothes-focused-d-busy-start-up-partners-working-casual-clothes-focused-117117267.jpg"
                  alt="Startup team working"
                  className="rounded-lg shadow-md object-cover w-72 h-54 md:w-96 md:h-60"
                />
              </div>
            </div>
          </div>

          {/* Call to action button - adapted to your original */}
          <div className="mt-20">
            <a
              href="#open-roles"
              className="inline-block bg-white border text-gray-800 font-medium px-6 py-2 text-sm rounded-lg hover:bg-gray-100 transition"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
