"use client";

const testimonials = [
  {
    name: "Upwork Client",
    role: "Verified Review",
    company: "Upwork",
    quote:
      "⭐️⭐️⭐️⭐️⭐️ 5/5 Tesfahun is an exceptional developer - highly professional and extremely skilled in Node.js, Next.js, Express.js, React, API development, and PostgreSQL. He consistently delivers high-quality work and goes far beyond the requirements to ensure everything is perfect. Communication is smooth, deadlines are met, and his deep technical expertise shows in every step of the project. I highly recommend him and will definitely work with him again.",
  },
  {
    name: "Mesfin Tsegaye",
    role: "Founder & CEO at Mevinai",
    company: "Mevinai PLC",
    quote:
      "I highly recommend Tesfahun Kere, who worked as an Intern Frontend Developer under my supervision at Mevinai PLC. Tesfahun is a talented, honest, and responsible individual with a strong work ethic. During his internship, he successfully developed a complex Next.js and Frappe-based project using a Test-Driven Development (TDD) approach. His ability to quickly learn and apply new technologies was impressive, and his proactive nature made him a valuable member of our team. I am confident that Tesfahun will be a great asset to any organization.",
  },
  
 
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-8 pb-8 relative">
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
