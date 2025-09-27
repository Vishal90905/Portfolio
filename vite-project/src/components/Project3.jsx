import React from "react";
import { FaGithub } from "react-icons/fa";
import img from "../assets/images/image3.png";
import { motion } from "framer-motion";

export default function Project3() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: "spring", bounce: 0.2 },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col md:flex-row sm:mt-15 items-center justify-center px-4 gap-6 md:gap-12"
      aria-label="Project 3: Basic HTML and CSS project"
    >
      {/* Image */}
      <div className="rounded-2xl sm:w-[480px] sm:h-[320px] sm:ml-[170px] shadow-xl shadow-gray-900 overflow-hidden">
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={img}
          alt="Screenshot of Project 3"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col pl-8 items-start w-full max-w-md">
        <h3 className="text-2xl md:text-3xl mt-4 text-white font-semibold">
          Project #3
        </h3>
        <p className="text-white text-base md:text-xl pt-2">
          Basic HTML and CSS project.
        </p>
        <div className="flex gap-4 pt-3 flex-wrap">
          <a
            href="#"
            className="rounded-lg px-4 py-2 text-sm md:text-base font-semibold bg-amber-600 text-white shadow-sm shadow-gray-900 hover:scale-110 transition-all duration-300 hover:bg-amber-700 text-center"
            aria-label="View Project #3 site"
          >
            View Site
          </a>
          <a
            href="#"
            className="flex items-center justify-center bg-amber-600 text-white shadow-sm shadow-gray-900 hover:scale-110 transition-all duration-300 rounded-xl text-2xl md:text-3xl h-10 w-10 hover:bg-amber-700"
            aria-label="View Project #3 GitHub repository"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
