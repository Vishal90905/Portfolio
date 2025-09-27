import React from "react";
import { FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";
import img from "../assets/images/image1.png";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <Element name="Portfolio" aria-label="Portfolio section">
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          scale: { type: "spring", bounce: 0.2 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="sm:mt-40 mt-20 px-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-center sm:gap-40 gap-10">
          {/* Left: Title + Image */}
          <div className="flex flex-col gap-7 items-center md:items-start">
            <h2 className="sm:text-5xl text-3xl text-white font-semibold text-center md:text-left">
              Portfolio
            </h2>
            <img
              className="w-full sm:w-[480px] sm:h-[320px] rounded-2xl shadow-xl shadow-gray-900 object-cover"
              src={img}
              alt="Screenshot of Project #1"
              loading="lazy"
            />
          </div>

          {/* Right: Description + Buttons */}
          <div className="flex flex-col justify-start max-w-md">
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-2">
              Project #1
            </h3>
            <p className="text-white text-base md:text-lg mb-4">
              UI for frontend development using React.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg shadow-sm shadow-gray-900 hover:scale-110 hover:bg-amber-700 transition-all duration-300 text-sm md:text-base text-center"
                aria-label="View Project #1 site"
              >
                View Site
              </a>
              <a
                href="#"
                className="flex items-center justify-center bg-amber-600 text-white rounded-xl text-2xl md:text-3xl h-10 w-10 shadow-sm shadow-gray-900 hover:scale-110 hover:bg-amber-700 transition-all duration-300"
                aria-label="View Project #1 GitHub repository"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </Element>
  );
}
