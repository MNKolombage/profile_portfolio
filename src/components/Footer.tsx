"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code2, Coffee } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="w-full mt-20 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent backdrop-blur-sm border-t border-gray-800">
      <div className="w-full mx-auto py-16 max-w-[1440px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Code2 className="text-indigo-400" size={28} />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Maleesha
              </h3>
            </motion.div>
            <p className="text-gray-400 text-sm max-w-sm">
              Passionate full-stack developer creating innovative digital
              experiences. Always learning, always growing.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>and lots of</span>
              <Coffee size={16} className="text-amber-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-indigo-400">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm py-1"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Connect & Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-indigo-400">
              Let&apos;s Connect
            </h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/MNKolombage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700/50 transition-all group"
              >
                <Github
                  size={20}
                  className="text-gray-400 group-hover:text-indigo-400"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/maleesha-nuwanthi-6a744533b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700/50 transition-all group"
              >
                <Linkedin
                  size={20}
                  className="text-gray-400 group-hover:text-blue-400"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:maleesha.kolombage2001@gmail.com"
                className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700/50 transition-all group"
              >
                <Mail
                  size={20}
                  className="text-gray-400 group-hover:text-purple-400"
                />
              </motion.a>
            </div>

            {/* Tech Stack */}
            <div className="pt-4">
              <p className="text-xs text-gray-500 mb-2">Built with:</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-800/30 text-gray-400 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Maleesha Nuwanthi Kolombage. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed & Developed with passion in Sri Lanka 🇱🇰
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
