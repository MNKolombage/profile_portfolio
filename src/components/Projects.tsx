"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "SkillSwap (Ongoing)",
    year: "2025",
    image: "/SkillSwap.png",
    desc: "A peer learning platform where individuals share knowledge with others and gain needed skills. Contribution: Full-stack development.",
    fullDesc:
      "SkillSwap is a peer learning platform that connects individuals who want to learn with those who have knowledge to share. The platform allows users to create profiles, list the skills they can teach or want to learn, and connect with each other to schedule learning sessions. The project was developed as a full-stack application using ReactJS for the front-end and NodeJS, Express, and MongoDB for the back-end.",
    tech: ["ReactJS", "NodeJS", "Express", "MongoDB"],
    codeLink: "https://github.com/MNKolombage/SkillSwap-frontend.git",
    liveLink: "#",
  },
  {
    title: "Hybrid Workspace Management System",
    year: "2024-2025",
    image: "/HWMS.png",
    desc: "A hybrid workspace management system for parking and seating reservations with real-time updates, visual dashboards, and admin panel.",
    fullDesc:
      "The Hybrid Workspace Management System is designed to manage and optimize the use of hybrid workspaces, including parking and seating reservations. The system provides real-time updates and visual dashboards for users to easily find and reserve available resources. The admin panel allows for efficient management of the workspace resources and reservations. This project was developed using ReactJS, NodeJS, Express, and MongoDB.",
    tech: ["ReactJS", "NodeJS", "Express", "MongoDB"],
    codeLink: "https://github.com/dulshanMMS/HWMS_frontend.git",
    liveLink: "#",
  },
  {
    title: "PlanBee",
    year: "2025",
    image: "/PlanBee.png",
    desc: "An AI-powered study assistant to help everyone streamline their study routines and boost productivity.",
    fullDesc:
      "PlanBee is an AI-powered study assistant that helps users streamline their study routines and boost productivity. The application uses the Gemini (1.5 flash) API to provide intelligent study recommendations and schedule optimizations. It is built with Next.js 15, Tailwind CSS, TypeScript, and MongoDB.",
    tech: [
      "Next.js 15",
      "Tailwind CSS",
      "TypeScript",
      "MongoDB",
      "Gemini(1.5 flash) API",
    ],
    codeLink: "https://github.com/tetrabytes-uom/tetrabytes_hackelite2.0.git",
    liveLink: "https://planbee-tetrabytes.vercel.app/",
  },
  {
    title: "Hopely",
    year: "2025",
    image: "/Hopely.png",
    desc: "A digital platform designed to connect donors with hospitals in need.",
    fullDesc:
      "Hopely is a comprehensive healthcare donation platform designed to connect hospitals in need with generous donors across Sri Lanka. Built with a focus on transparency and efficiency, it empowers hospitals to post medicine shortages while enabling donors to contribute directly toward saving lives. The platform features a hospital management dashboard, real-time progress tracking with visual donation goals, and secure PayHere integration for safe transactions. With modern UI/UX in a dark green and gold theme, Hopely offers a responsive, mobile-first experience supported by a secure authentication system. Beyond donations, it highlights community impact through live analytics, showcasing funds raised, and hospitals supported, making it a truly impactful solution for healthcare accessibility. The project is developed using Next.js, Ballerina, Tailwind CSS, and MongoDB.",
    tech: ["Next.js", "Ballerina", "Tailwind CSS", "MongoDB"],
    codeLink: "https://github.com/praveesha/Hopely.git",
    liveLink: "#",
  },
  {
    title: "Sentiment Analysis Web App",
    year: "2025",
    image: "/SentimentAnalysis.png",
    desc: "Classifies customer reviews as Positive/Negative using ML. Model trained on labeled data & deployed with Microsoft Azure.",
    fullDesc:
      "This project involves building a Sentiment Analysis web application that classifies customer reviews as positive or negative. The machine learning model is trained on labeled data and deployed using Microsoft Azure. The web app is built using Python, Flask, NLTK, and Scikit-learn.",
    tech: ["Python", "Flask", "NLTK", "Scikit-learn"],
    codeLink: "https://github.com/MNKolombage/sentiment_analysis_project.git",
    liveLink: "#",
  },
  {
    title: "Clean World",
    year: "2024",
    image: "/CleanWorld.png",
    desc: "Platform bringing together community-driven environmental cleanups. Full-stack development of login & events page.",
    fullDesc:
      "Clean World is a platform that brings together community-driven environmental cleanups. The project involved full-stack development of the login and events page, allowing users to register, log in, and participate in environmental cleanup events. The technology stack includes HTML, CSS, Ballerina, and JavaScript.",
    tech: ["HTML", "CSS", "Ballerina", "JavaScript"],
    codeLink: "https://github.com/MNKolombage/iwb372-mysticoders.git",
    liveLink: "#",
  },
  {
    title: "Power Measuring Device",
    year: "2023-2024",
    image: "/CurrentMeasuringDevice.jpg",
    desc: "IoT-based microcontroller project enabling proactive electricity usage management with ESP32 & sensors.",
    fullDesc:
      "This project is an IoT-based microcontroller system that enables proactive management of electricity usage. It uses an ESP32 microcontroller and various sensors to monitor and control electrical devices. The project involves both hardware and software development, including programming the ESP32 and developing a web interface for users to monitor and control their devices.",
    tech: ["ESP32", "HTML", "CSS", "JavaScript"],
    codeLink: "#",
    liveLink: "#",
  },
];

export default function Projects() {
  type Project = typeof projects[number];
  const [selected, setSelected] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mt-20 w-full px-6 max-w-[1440px] mx-auto">
      <h3 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center">
        Projects
      </h3>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-600/80 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg hidden md:block"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={28} />
        </button>
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide py-2 px-1"
          style={{ scrollBehavior: "smooth" }}
        >
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="min-w-[320px] max-w-xs flex-shrink-0 bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-indigo-500/40 transition group cursor-pointer"
              onClick={() => setSelected(proj)}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-56 w-full"
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90} // Changed from 95 to 90
                  priority={idx < 3}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-indigo-300">
                  {proj.title}
                </h4>
                <p className="text-gray-400 text-sm">{proj.year}</p>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-indigo-500/10 text-indigo-300 text-xs px-3 py-1.5 rounded-full border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-6">
                  {proj.codeLink !== "#" && (
                    <a
                      href={proj.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      <Code size={16} /> Code
                    </a>
                  )}
                  {proj.liveLink !== "#" && (
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-600/80 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg hidden md:block"
          aria-label="Scroll Right"
        >
          <ChevronRight size={28} />
        </button>
      </div>
      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
