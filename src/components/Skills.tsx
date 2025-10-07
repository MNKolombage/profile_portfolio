"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiVsco, SiC } from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
  FaFigma,
  FaTools,
  FaLaptopCode,
  FaDatabase,
  FaPalette,
  FaTerminal,
  FaProjectDiagram,
  FaMobileAlt,
  FaSitemap,
  FaDraftingCompass,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiIntellijidea,
  SiJavascript,
} from "react-icons/si";

const skillIcons: Record<string, React.ReactNode> = {
  React: <FaReact color="#61DAFB" size={22} className="inline-block mr-1" />,
  "Next.js": (
    <SiNextdotjs color="#000" size={22} className="inline-block mr-1" />
  ),
  HTML5: <FaHtml5 color="#E34F26" size={22} className="inline-block mr-1" />,
  CSS3: <FaCss3Alt color="#1572B6" size={22} className="inline-block mr-1" />,
  "Tailwind CSS": (
    <SiTailwindcss color="#38BDF8" size={22} className="inline-block mr-1" />
  ),
  "Node.js": (
    <FaNodeJs color="#339933" size={22} className="inline-block mr-1" />
  ),
  ExpressJS: <SiExpress color="#000" size={22} className="inline-block mr-1" />,
  MongoDB: (
    <SiMongodb color="#47A248" size={22} className="inline-block mr-1" />
  ),
  MySQL: <SiMysql color="#4479A1" size={22} className="inline-block mr-1" />,
  Figma: <FaFigma color="#F24E1E" size={22} className="inline-block mr-1" />,
  C: <SiC color="#A8B9CC" size={22} className="inline-block mr-1" />,
  Java: <FaJava color="#007396" size={22} className="inline-block mr-1" />,
  Python: <FaPython color="#3776AB" size={22} className="inline-block mr-1" />,
  JavaScript: (
    <SiJavascript color="#F7DF1E" size={22} className="inline-block mr-1" />
  ),
  "VS Code": (
    <img
      src="/vscode.ico"
      alt="VS Code"
      style={{ width: 22, height: 22, marginRight: 6 }}
      className="inline-block align-middle rounded"
    />
  ),
  "IntelliJ IDEA": (
    <SiIntellijidea color="#000" size={22} className="inline-block mr-1" />
  ),
  GitHub: <FaGithub color="#181717" size={22} className="inline-block mr-1" />,
  "Lucid Chart": (
    <FaProjectDiagram color="#4E8CFF" size={22} className="inline-block mr-1" />
  ),
  "Responsive Design": (
    <FaMobileAlt color="#38BDF8" size={22} className="inline-block mr-1" />
  ),
  Wireframing: (
    <FaSitemap color="#A259FF" size={22} className="inline-block mr-1" />
  ),
  Prototyping: (
    <FaDraftingCompass
      color="#F4B400"
      size={22}
      className="inline-block mr-1"
    />
  ),
};

export default function Skills() {
  const categories = [
    {
      icon: <FaLaptopCode size={28} className="text-indigo-400" />,
      title: "Frontend Development",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      icon: <FaDatabase size={28} className="text-green-400" />,
      title: "Backend Development",
      skills: ["Node.js", "ExpressJS", "MongoDB", "MySQL"],
    },
    {
      icon: <FaPalette size={28} className="text-pink-400" />,
      title: "UI/UX Design",
      skills: ["Figma", "Responsive Design", "Wireframing", "Prototyping"],
    },
    {
      icon: <FaTerminal size={28} className="text-yellow-400" />,
      title: "Programming Languages",
      skills: ["C", "Java", "Python", "JavaScript"],
    },
    {
      icon: <FaTools size={28} className="text-gray-400" />,
      title: "Tools & Tech",
      skills: ["VS Code", "IntelliJ IDEA", "GitHub", "Lucid Chart"],
    },
  ];

  return (
    <section className="mt-20 w-full px-6 max-w-[1440px] mx-auto">
      <h3 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center">
        Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-indigo-500/30 transition transform hover:-translate-y-2"
          >
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              {category.icon} {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills?.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-700 rounded-full text-base font-medium hover:bg-indigo-500 hover:scale-105 transition flex items-center"
                >
                  {skillIcons[skill] || null}
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
