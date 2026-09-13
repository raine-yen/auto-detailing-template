"use client";

import { useState, useTransition } from "react";
import { useInView } from "@/lib/animations";
import { business, contactServices } from "@/lib/data";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  vehicle: string;
  date: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  vehicle: "",
  date: "",
  message: "",
};

export default function ContactForm() {
  const ref = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData(initialFormData);
    }, 1200);
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-gray-50">
        <div className="mx-auto max-w-xl px-4 py-16 md:py-24">
          <div ref={ref} className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-charcoal">
              Quote Request Received!
            </h2>
            <p className="mb-6 text-gray-500">
              Thank you for your interest. We&apos;ll get back to you within
              24 hours with a free estimate.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-outline-gold"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-xl px-4 py-16 md:py-24">
        <div ref={ref} className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#d4a053]">
            Get In Touch
          </p>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Request a Free Quote
          </h2>
          <p className="mb-8 text-gray-500">
            Fill out the form below and we&apos;ll get back to you with a
            personalized estimate — no obligation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="form-label">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="form-input"
            />
          </div>

          {/* Phone + Email */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="form-input"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="form-label">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select a service...</option>
              {contactServices.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Vehicle */}
          <div>
            <label htmlFor="vehicle" className="form-label">
              Vehicle Info
            </label>
            <input
              id="vehicle"
              name="vehicle"
              type="text"
              value={formData.vehicle}
              onChange={handleChange}
              placeholder="e.g., 2023 Tesla Model Y"
              className="form-input"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="form-label">
              Preferred Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="form-label">
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your vehicle's condition or any special requests..."
              className="form-input resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                  />
                  <path
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    fill="currentColor"
                    className="opacity-75"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Get My Free Quote"
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            By submitting this form, you agree to be contacted about our
            services. We respect your privacy.
          </p>
        </form>
      </div>
    </section>
  );
}
