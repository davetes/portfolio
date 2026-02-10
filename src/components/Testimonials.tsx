"use client";

const testimonials = [
  {
    name: "Amanuel Tesfaye",
    role: "Product Manager",
    company: "Fintech Startup",
    quote:
      "Delivered a polished, production-ready dashboard ahead of schedule. Communication was clear and proactive throughout.",
  },
  {
    name: "Sara Bekele",
    role: "Founder",
    company: "E-commerce Brand",
    quote:
      "Took our rough idea and turned it into a fast, responsive storefront. The UI feels premium and performs great.",
  },
  {
    name: "Daniel Getachew",
    role: "CTO",
    company: "SaaS Platform",
    quote:
      "Solid engineering and clean code. The project scaled smoothly and the handoff was seamless.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Client Testimonials
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Trusted by teams and founders to deliver reliable, high-quality products.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="glass-card rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-colors"
              >
                <div className="text-primary text-4xl leading-none mb-4">“</div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.quote}
                </p>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.role} · {item.company}
                  </p>
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
