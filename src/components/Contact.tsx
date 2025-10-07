"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Hide message on outside click
  useEffect(() => {
    if (!sent && !error) return;
    const handler = () => {
      setSent(false);
      setError(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [sent, error]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSent(true);
        formRef.current.reset();
      } else {
        setError("Failed to send. Please try again.");
      }
    } catch {
      setError("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 w-full py-24 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center">
          Contact Me
        </h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Have a question or want to work together? Drop me a message!
            </p>
            <div className="space-y-5">
              <a
                href="mailto:maleesha.kolombage2001@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition"
              >
                <Mail size={22} />
                <span>maleesha.kolombage2001@gmail.com</span>
              </a>
              <a
                href="tel:+94719402448"
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition"
              >
                <Phone size={22} />
                <span>+94 719402448</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={22} />
                <span>Galle, Sri Lanka</span>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#18182f] rounded-xl p-8 shadow-lg space-y-6"
            onSubmit={handleSend}
          >
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-indigo-400"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-indigo-400"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject (optional)"
              className="bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-indigo-400 w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-indigo-400 w-full"
              required
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            {sent && (
              <div className="text-green-400 text-center font-medium">
                Message sent successfully!
              </div>
            )}
            {error && (
              <div className="text-red-400 text-center font-medium">
                {error}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
