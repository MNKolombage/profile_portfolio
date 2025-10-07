"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "../components/Navbar";

// Simple loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#1a1a35] to-[#0a0a23] text-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-indigo-400"></div>
  </div>
);

// Dynamically import components with framer-motion
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

const Skills = dynamic(() => import("../components/Skills"), {
  ssr: false,
  loading: () => (
    <div className="py-12 flex justify-center">
      <div className="animate-pulse h-8 w-32 bg-indigo-500/20 rounded"></div>
    </div>
  ),
});
const Education = dynamic(() => import("../components/Education"), {
  ssr: false,
});
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#1a1a35] to-[#0a0a23] text-white">
      <Navbar />

      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>

      <Suspense>
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>
      </Suspense>

      <Suspense>
        <section id="education" className="scroll-mt-20">
          <Education />
        </section>
      </Suspense>

      <Suspense>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
      </Suspense>

      <Suspense>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </Suspense>

      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
}
