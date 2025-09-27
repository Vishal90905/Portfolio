import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section aria-labelledby="experience-title" className="px-4 sm:mt-40 mt-12 flex flex-col items-center">
      <motion.h2
        id="experience-title"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          scale: { type: "spring", bounce: 0.2 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-white font-semibold text-3xl sm:text-5xl mb-8"
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          scale: { type: "spring", bounce: 0.3 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-sm md:max-w-md w-full border-2 border-amber-700 bg-gray-800 rounded-lg p-6 shadow-lg  transition-shadow duration-300"
      >
        <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
          Sqilco
        </h3>
        <p className="text-white text-base sm:text-2xl mb-3">
          2025 - Present
        </p>
        <p className="text-amber-400 text-sm sm:text-xl leading-relaxed">
          I have completed a 3-month internship program at Sqilco, gaining practical experience in front-end development and teamwork.
        </p>
      </motion.div>
    </section>
  );
}




