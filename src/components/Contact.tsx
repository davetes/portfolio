"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SERVICE_ID = "service_ql3gbm7";
const TEMPLATE_ID = "template_7nxi10i";
const USER_ID = "hLfD77h55XOuwyGAa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
          message: formData.message,
        },
        USER_ID
      );

      toast({
        title: "Message sent!",
        description: "I'll get back to you within 24 hours.",
        duration: 5000,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try again or email me directly.",
        variant: "destructive",
        duration: 5000,
      });
    }

    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-20 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Contact</h2>
          <p className="text-zinc-500">Email me at <a href="mailto:tesfa4706@gmail.com" className="text-zinc-900 dark:text-zinc-100 hover:underline">tesfa4706@gmail.com</a></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="h-12 rounded-lg border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="h-12 rounded-lg border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            />
          </div>

          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={5}
            required
            className="resize-none rounded-lg border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
          />

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full h-12 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            {isSubmitting ? "Sending..." : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
