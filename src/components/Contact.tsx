"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="py-24 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800/60 bg-zinc-50/80 dark:bg-zinc-950/60">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-14 flex flex-col gap-2">
            <div className="text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">Contact</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-zinc-100">
              Let's Work Together
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl font-normal leading-relaxed">
              Available for full-stack web engineering, Telegram bot automation systems, and backend contract roles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-5 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 shadow-sm hover:shadow-md">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-0.5">
                        {info.title}
                      </h4>
                      {info.link !== "#" ? (
                        <a
                          href={info.link}
                          className="text-base text-zinc-800 dark:text-zinc-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-base text-zinc-800 dark:text-zinc-200 font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
                <h4 className="text-sm font-semibold mb-2 text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Response Time
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  I typically respond to project inquiries within 24 hours. Feel free to send a message directly or via email.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      required
                      className="bg-zinc-50 dark:bg-zinc-950/80 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-0 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      required
                      className="bg-zinc-50 dark:bg-zinc-950/80 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-0 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project requirements or system goals..."
                    rows={5}
                    required
                    className="resize-none bg-zinc-50 dark:bg-zinc-950/80 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-0 rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full h-11 text-xs font-medium rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-zinc-100 dark:border-zinc-950 mr-2"></div>
                      Sending message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="h-3.5 w-3.5" />
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
