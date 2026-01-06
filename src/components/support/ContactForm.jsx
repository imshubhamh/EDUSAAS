import React from 'react'
import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

const ContactForm = () => {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 mt-16">
            {/* LEFT INFO */}
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-xl">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        Still need help?
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Reach out to our support team. We usually respond within 24 hours.
                    </p>

                    <dl className="mt-10 space-y-4 text-gray-600">
                        <div className="flex gap-x-4">
                            <BuildingOffice2Icon className="h-6 w-6 text-gray-400" />
                            <p>545 Mavis Island, Chicago, IL</p>
                        </div>
                        <div className="flex gap-x-4">
                            <PhoneIcon className="h-6 w-6 text-gray-400" />
                            <a href="tel:+15552345678" className="hover:text-gray-900">
                                +1 (555) 234-5678
                            </a>
                        </div>
                        <div className="flex gap-x-4">
                            <EnvelopeIcon className="h-6 w-6 text-gray-400" />
                            <a
                                href="mailto:support@example.com"
                                className="hover:text-gray-900"
                            >
                                support@example.com
                            </a>
                        </div>
                    </dl>
                </div>
            </div>


            {/* RIGHT FORM */}
            <form className="px-6 lg:px-8">
                <div className="mx-auto max-w-xl space-y-5">

                    {/* Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="field-outline">
                            <span className="field-label">First Name</span>
                            <input
                                type="text"
                                placeholder="Please enter first name"
                                className="field-input"
                            />
                        </div>

                        <div className="field-outline">
                            <span className="field-label">Last Name</span>
                            <input
                                type="text"
                                placeholder="Please enter last name"
                                className="field-input"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="field-outline">
                        <span className="field-label">Email Address</span>
                        <input
                            type="email"
                            placeholder="Please enter email address"
                            className="field-input"
                        />
                    </div>

                    {/* Phone */}
                    <div className="field-outline">
                        <span className="field-label">Phone (optional)</span>
                        <input
                            type="tel"
                            placeholder="Please enter phone number"
                            className="field-input"
                        />
                    </div>

                    {/* Department */}
                    <div className="field-outline">
                        <span className="field-label">Department</span>
                        <select className="field-input">
                            <option>Technical Support</option>
                            <option>Billing</option>
                            <option>Student Support</option>
                            <option>Teacher Support</option>
                        </select>
                    </div>

                    {/* Subject */}
                    <div className="field-outline">
                        <span className="field-label">Subject</span>
                        <input
                            type="text"
                            placeholder="Please enter subject"
                            className="field-input"
                        />
                    </div>

                    {/* Message */}
                    <div className="field-outline">
                        <span className="field-label">Describe your issue</span>
                        <textarea
                            rows={4}
                            placeholder="Please describe your issue"
                            className="field-input resize-none"
                        />
                    </div>

                    {/* Attachments */}
                    <div className="-mt-2">
                        <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                            Attachments
                        </h4>

                        <label className="flex items-center justify-center border border-dashed border-slate-300 rounded-xl px-4 py-4 cursor-pointer text-sm text-slate-600 hover:border-indigo-500 transition">
                            Upload files (optional)
                            <input type="file" multiple className="hidden" />
                        </label>
                    </div>

                    {/* Terms + Submit */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t">
                        <label className="flex items-start gap-2 text-sm text-slate-600">
                            <input type="checkbox" className="mt-1 rounded border-gray-300" />
                            I agree to the terms and privacy policy
                        </label>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition"
                        >
                            Submit Ticket
                        </button>
                    </div>

                </div>
            </form>


        </div>
    )
}

export default ContactForm
