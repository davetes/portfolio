"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Replace these with your actual EmailJS credentials
const SERVICE_ID = "service_ql3gbm7";
const TEMPLATE_ID = "template_7nxi10i";
const USER_ID = "hLfD77h55XOuwyGAa"; // aka Public Key

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tesfa4706@gmail.com",
      link: "mailto:tesfa4706@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+251-968-651-1265",
      link: "tel:+251968651265",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "#",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        USER_ID
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    }

    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you. Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                Let's Connect
              </h3>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, innovative
                projects, or just having a friendly chat about technology and
                development. Feel free to reach out through any of the channels
                below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 glass-card p-4 rounded-lg hover-lift">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        {info.title}
                      </h4>
                      {info.link !== "#" ? (
                        <a
                          href={info.link}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-foreground">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 glass-card rounded-xl">
                <h4 className="text-lg font-semibold mb-3 text-foreground">
                  Response Time
                </h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond to emails within 24 hours. For urgent
                  inquiries, feel free to reach out via phone or LinkedIn.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={6}
                    required
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-smooth py-6 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
