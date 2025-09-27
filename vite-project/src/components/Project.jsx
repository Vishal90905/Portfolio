import React from "react";
import { FaGithub } from "react-icons/fa";
import img from "../assets/images/image2.png";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: "spring", bounce: 0.2 },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col-reverse md:flex-row md:items-center justify-center px-4 mt-7 sm:mt-15 py-12 gap-6"
      aria-label="Project 2: Amazon clone"
    >
      {/* Text Section */}
      <div className="max-w-md pl-8 mt-5 w-full">
        <h3 className="text-2xl md:text-3xl text-white font-semibold mb-2">
          Project #2
        </h3>
        <p className="text-white text-base md:text-lg mb-4">Amazon clone.</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="rounded-lg px-4 py-2 text-sm md:text-base font-semibold shadow-sm shadow-gray-900 bg-amber-600 hover:scale-110 transition-all duration-300 hover:bg-amber-700 text-white text-center"
            aria-label="View Project #2 site"
          >
            View Site
          </a>
          <a
            href="#"
            className="flex items-center justify-center shadow-sm shadow-gray-900 bg-amber-600 text-white hover:scale-110 transition-all duration-300 rounded-xl text-2xl md:text-3xl h-10 w-10 hover:bg-amber-700"
            aria-label="View Project #2 GitHub repository"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="shadow-xl shadow-gray-900 sm:w-[480px] sm:mr-[-150px] sm:h-[320px] rounded-2xl overflow-hidden">
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={img}
          alt="Screenshot of Amazon clone project"
          loading="lazy"
        />
      </div>
    </motion.section>
  );
}
