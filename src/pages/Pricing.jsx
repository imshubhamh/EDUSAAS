import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
import FAQ from '../components/landing/FAQ'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
const pricing = {
    tiers: [
        {
            id: 'free',
            name: 'Free',
            href: '#',
            price: { monthly: '$19', annually: '$199' },
            description: 'For beginners & students',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
            featured: false,
        },
        {
            id: 'pro',
            name: 'Pro',
            href: '#',
            price: { monthly: '$29', annually: '$299' },
            description: 'Best for serious learners',
            features: [
                '25 products',
                'Up to 10,000 subscribers',
                'Advanced analytics',
                '24-hour support response time',
                'Marketing automations',
            ],
            featured: true,
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            href: '#',
            price: { monthly: '$59', annually: '$599' },
            description: 'For institutes & colleges',
            features: [
                'Unlimited products',
                'Unlimited subscribers',
                'Advanced analytics',
                '1-hour, dedicated support response time',
                'Marketing automations',
                'Custom reporting tools',
            ],
            featured: false,
        },
    ],
}


export default function Pricing() {
    const [billing, setBilling] = useState('monthly')


    return (
        <div className="bg-white">

            <main>
                {/* Pricing section */}
                <form className="group/tiers py-10 pt-28">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 className="text-base/7 font-semibold text-blue-600">Pricing</h2>
                            <p className="mt-2 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                                Pricing that grows with you
                            </p>
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-center text-sm sm:text-base text-pretty text-gray-600">
                            Choose an affordable plan that’s packed with the best features for engaging your audience, creating
                            customer loyalty, and driving sales.
                        </p>
                        <div className="mt-16 flex justify-center">
                            <fieldset aria-label="Payment frequency">
                                <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold ring-1 ring-gray-200">

                                    <label
                                        className={`cursor-pointer rounded-full px-3 py-1 ${billing === 'monthly' ? 'bg-blue-600 text-white' : 'text-gray-600'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="frequency"
                                            value="monthly"
                                            checked={billing === 'monthly'}
                                            onChange={() => setBilling('monthly')}
                                            className="sr-only"
                                        />
                                        Monthly
                                    </label>

                                    <label
                                        className={`cursor-pointer rounded-full px-3 py-1 ${billing === 'annually' ? 'bg-blue-600 text-white' : 'text-gray-600'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="frequency"
                                            value="annually"
                                            checked={billing === 'annually'}
                                            onChange={() => setBilling('annually')}
                                            className="sr-only"
                                        />
                                        Annually
                                    </label>

                                </div>
                            </fieldset>
                        </div>

                        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {pricing.tiers.map((tier) => (
                                <div
                                    key={tier.id}
                                    data-featured={tier.featured ? 'true' : undefined}
                                    className={`rounded-3xl p-8 xl:p-10 transition
                                        ${tier.id === 'pro'
                                            ? 'ring-2 ring-blue-600 '
                                            : 'ring-1 ring-gray-200'
                                        }`}

                                >
                                    <div className="flex items-center justify-between gap-x-4">
                                        <h3
                                            id={`tier-${tier.id}`}
                                            className="text-lg/8 font-semibold text-gray-900 group-data-featured/tier:text-blue-600"
                                        >
                                            {tier.name}
                                        </h3>
                                        {tier.id === 'pro' && (
                                            <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold text-blue-600">
                                                Most popular
                                            </p>
                                        )}
                                    </div>
                                    <p className=" text-sm/6 text-gray-600">{tier.description}</p>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-4xl font-semibold tracking-tight text-gray-900">
                                            {billing === 'monthly'
                                                ? tier.price.monthly
                                                : tier.price.annually}
                                        </span>
                                        <span className="text-sm font-semibold text-gray-600">
                                            {billing === 'monthly' ? '/month' : '/year'}
                                        </span>
                                    </p>

                                    <a
                                        href={tier.href}
                                        aria-describedby={tier.id}
                                        className={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold transition
                                            ${tier.id === 'pro'
                                                ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-md'
                                                : 'text-blue-600 ring-1 ring-blue-200 hover:ring-blue-300'
                                            }`}

                                    >
                                        Buy plan
                                    </a>
                                    <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 xl:mt-10">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-blue-600" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>
            </main>


            {/* Testimonial section */}
            <div className="mx-auto mt-24 max-w-7xl sm:px-6 lg:px-8">
                <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                    <img
                        alt=""
                        src="https://media.istockphoto.com/id/2168009197/photo/internet-technology-education-features-learn-computer-based-training-internet-e-learning.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q4wYj-PHBQqhVkruA3EdM2I4Y1ozNKhCEULcQ4zKda8="
                        className="absolute inset-0 size-full object-cover brightness-150 saturate-0"
                    />
                    <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
                    <div aria-hidden="true" className="absolute -top-56 -left-80 transform-gpu blur-3xl">
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="aspect-1097/845 w-274.25 bg-linear-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                        />
                    </div>
                    <div
                        aria-hidden="true"
                        className="hidden md:absolute md:bottom-16 md:left-200 md:block md:transform-gpu md:blur-3xl"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="aspect-1097/845 w-274.25 bg-linear-to-r from-[#ff4694] to-[#776fff] opacity-25"
                        />
                    </div>
                    <div className="relative mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-white text-lg font-semibold">SPYITECH</h2>
                        <figure>
                            <blockquote className="mt-4 text-lg font-semibold text-white sm:text-xl/8">
                                <p>
                                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                                    alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 text-base text-white">
                                <div className="font-semibold">Judith Black</div>
                                <div className="mt-1">CEO of SpyiTech</div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <FAQ />
        </div>
    )
}

