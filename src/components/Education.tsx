"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 w-full py-24 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center">
          Education
        </h3>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
          {/* University */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center gap-6 bg-[#18182f] rounded-xl p-6 shadow-lg min-w-[320px] md:min-w-[400px]"
          >
            <div className="flex-shrink-0">
              <Image
                src="/uni_logo.png"
                alt="University of Moratuwa"
                width={64}
                height={64}
                className="rounded-lg w-16 h-16"
              />
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-indigo-300">
                University of Moratuwa
              </h4>
              <p className="text-gray-300 text-lg">
                BSc. Hons in Information Technology (Undergraduate)
              </p>
              <p className="text-gray-400 text-sm mt-1">2022 - Present</p>
            </div>
          </motion.div>
          {/* School */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center gap-6 bg-[#18182f] rounded-xl p-6 shadow-lg min-w-[320px] md:min-w-[400px]"
          >
            <div className="flex-shrink-0">
              <Image
                src="/scl_logo.png"
                alt="Southlands College Galle"
                width={64}
                height={64}
                className="rounded-lg w-16 h-16"
              />
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-indigo-300">
                Southlands College, Galle
              </h4>
              <p className="text-gray-300 text-lg">School Education</p>
              <p className="text-gray-400 text-sm mt-1">Galle, Sri Lanka</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
