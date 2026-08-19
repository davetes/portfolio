"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Upwork Client",
    role: "Verified Contract Review",
    company: "Upwork",
    quote:
      "Tesfahun is an exceptional developer - highly professional and extremely skilled in Node.js, Next.js, Express.js, React, API development, and PostgreSQL. He consistently delivers high-quality work and goes far beyond the requirements to ensure everything is perfect. Communication is smooth, deadlines are met, and his deep technical expertise shows in every step of the project.",
  },
  {
    name: "Mesfin Tsegaye",
    role: "Founder & CEO",
    company: "Mevinai PLC",
    quote:
      "I highly recommend Tesfahun Kere. He worked as an Intern Frontend Developer under my supervision at Mevinai PLC. Tesfahun is a talented, honest, and responsible individual with a strong work ethic. During his internship, he successfully developed a complex Next.js and Frappe-based project using a Test-Driven Development (TDD) approach.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative border-t border-zinc-200 dark:border-zinc-800/60 bg-zinc-100/40 dark:bg-zinc-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col gap-2">
            <div className="text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">Recommendations</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-zinc-100">
              Client & Founder Testimonials
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl font-normal leading-relaxed">
              Feedback from clients, founders, and engineering leads.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl p-7 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <Quote className="h-6 w-6 text-indigo-600/60 dark:text-indigo-400/60 mb-4" />
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/60 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{item.name}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      {item.role} · <span className="text-zinc-700 dark:text-zinc-300">{item.company}</span>
                    </p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                    ★ 5.0 Rating
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
