import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

type Project = {
  title: string;
  year: string;
  image: string;
  desc: string;
  fullDesc?: string;
  tech?: string[];
  codeLink?: string;
  liveLink?: string;
};

export default function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#18182f] rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative flex flex-col"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-indigo-400 z-10 bg-black/20 rounded-full p-1"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Scrollable content area */}
            <div className="overflow-y-auto p-6 pt-12">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-indigo-300 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm mb-2">{project.year}</p>

              {/* Scrollable description with max height */}
              <div className="max-h-60 overflow-y-auto mb-4 pr-2">
                <p className="text-gray-200">
                  {project.fullDesc || project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech?.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="bg-indigo-500/10 text-indigo-300 text-xs px-3 py-1.5 rounded-full border border-indigo-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.codeLink && project.codeLink !== "#" && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    View Code
                  </a>
                )}
                {project.liveLink && project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
