"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // Offset for sticky navbar
      let current = "Home";
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section && section instanceof HTMLElement) {
          if (scrollY >= section.offsetTop) {
            current = link.label;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a23]/70 border-b border-indigo-500/20"
    >
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Image */}
          <div className="relative h-12 w-32 flex items-center">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={160}
              height={160}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 object-contain"
              priority
            />
          </div>
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
            {navLinks.map((item) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={item.label}
                className="cursor-pointer relative group transition-colors"
              >
                <a
                  href={item.href}
                  className={`transition-colors ${
                    active === item.label ? "text-indigo-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </a>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-400 transition-all ${
                    active === item.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.li>
            ))}
          </ul>
          {/* Burger Icon for Mobile */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden flex flex-col gap-6 mt-4 bg-[#18182f] rounded-xl p-6 shadow-lg text-center"
            >
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`text-lg font-semibold cursor-pointer transition-colors ${
                    active === item.label ? "text-indigo-400" : "text-gray-200"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
