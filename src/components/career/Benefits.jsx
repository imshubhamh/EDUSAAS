import React from 'react'

const Benefits = () => {
  return (
    <div>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              Benefits & Perks
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We believe in empowering our team with the best tools and environment to thrive both professionally and personally.
            </p>
          </div>

          <div className="relative">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-20">
              <div className="relative pl-6 md:pl-5">
                {/* Vertical left border */}
                <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Move faster
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Weekly product releases and updates, as requested by our users.
                </p>
              </div>

              <div className="relative pl-6 md:pl-5">
                <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Customer obsessed
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  You tell us what you want, we build it.
                </p>
              </div>

              <div className="relative pl-6 md:pl-5">
                <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Radical transparency
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  One place for all of your team and organization's work.
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
              {/* Empty div to offset */}
              <div className="hidden md:block" />

              <div className="relative pl-6 md:pl-5">
                <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Inclusivity
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  A place where everyone can feel comfortable working together.
                </p>
              </div>

              <div className="relative pl-6 md:pl-5">
                <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Empathy
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Always listening, always learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
