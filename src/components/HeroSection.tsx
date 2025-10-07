"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import dynamic from "next/dynamic";

// Separate complex animations into a component that only renders client-side
const BackgroundEffects = dynamic(() => import("./BackgroundEffects"), {
  ssr: false,
});

export default function HeroSection() {
  // Generate random dots with different positions, sizes and delays
  const dots = [
    {
      left: "20%",
      top: "15%",
      size: "w-2 h-2",
      delay: 0.2,
      duration: 3.2,
    },
    {
      left: "85%",
      top: "25%",
      size: "w-3 h-3",
      delay: 1.1,
      duration: 4.1,
    },
    {
      left: "78%",
      top: "70%",
      size: "w-2.5 h-2.5",
      delay: 0.7,
      duration: 3.5,
    },
    {
      left: "15%",
      top: "65%",
      size: "w-3 h-3",
      delay: 1.5,
      duration: 2.8,
    },
    {
      left: "45%",
      top: "5%",
      size: "w-2 h-2",
      delay: 0.5,
      duration: 3.8,
    },
    {
      left: "92%",
      top: "48%",
      size: "w-2 h-2",
      delay: 1.8,
      duration: 4.2,
    },
  ];

  return (
    <>
      {/* Hero Section - removed max-width constraint */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 w-full bg-gradient-to-b from-[#0a0a23] via-[#141432] to-[#0a0a23]"
      >
        {/* Indigo shade background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[100px]" />
        </div>

        {/* Dynamically loaded background effects */}
        <BackgroundEffects />

        {/* Profile Image with animated dots - REDUCED SIZE */}
        <div className="relative z-10 w-72 h-72 flex items-center justify-center mb-8">
          {/* Animated dots around the profile - random placement */}
          {dots.map((dot, i) => (
            <motion.div
              key={i}
              className={`absolute ${dot.size} bg-indigo-400 rounded-full`}
              style={{
                left: dot.left,
                top: dot.top,
              }}
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Profile image - REDUCED SIZE */}
          <div className="relative rounded-full overflow-hidden w-56 h-56 shadow-lg shadow-indigo-500/20">
            <Image
              src="/profile.jpeg"
              alt="Profile Photo"
              width={224}
              height={224}
              priority
              className="object-cover"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <h2 className="mt-8 text-5xl md:text-6xl font-bold z-10 relative">
          Hello! I&apos;m{" "}
          <span className="text-indigo-400">Maleesha Nuwanthi</span>
        </h2>

        <p className="mt-6 text-2xl text-gray-300 max-w-3xl z-10 relative">
          IT Undergraduate | Full Stack Developer
        </p>

        {/* Enhanced buttons with hover effects */}
        <div className="mt-12 flex gap-6 flex-wrap justify-center z-10 relative">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
          >
            <FileText size={20} /> Get Resume
          </a>
          <a
            href="https://www.linkedin.com/in/maleesha-nuwanthi-6a744533b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/MNKolombage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 px-8 py-4 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/20 hover:-translate-y-1"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </section>

      {/* About Section - simplified */}
      <section
        id="about"
        className="relative w-full py-32 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-10 text-indigo-400">
              About Me
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              I&apos;m an enthusiastic and adaptable IT undergraduate at the
              University of Moratuwa with a strong passion for full-stack
              development and user-centric design. I enjoy turning ideas into
              functional, visually appealing digital experiences and thrive in
              collaborative environments where I can learn, experiment and grow.
              My goal is to contribute to innovative teams, build impactful
              solutions and continuously sharpen my skills as a developer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
