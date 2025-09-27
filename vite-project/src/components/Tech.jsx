import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Tech() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: "spring", bounce: 0.2 },
      }}
      viewport={{ once: true, amount: 0.5 }}
      aria-labelledby="techstack-title"
      className="flex flex-col items-center mt-16 sm:mt-32 px-4"
    >
      <h2
        id="techstack-title"
        className="text-white text-3xl sm:text-4xl font-semibold mb-6 text-center"
      >
        My Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        <TechIcon label="HTML5" color="text-orange-600">
          <FaHtml5 />
        </TechIcon>
        <TechIcon label="CSS3" color="text-blue-700">
          <FaCss3Alt />
        </TechIcon>
        <TechIcon label="JavaScript" color="text-amber-300">
          <AiOutlineJavaScript />
        </TechIcon>
        <TechIcon label="React" color="text-blue-700">
          <FaReact />
        </TechIcon>
      </div>
    </motion.section>
  );
}

function TechIcon({ label, color, children }) {
  return (
    <div
      className={`${color} text-5xl sm:text-7xl`}
      aria-label={label}
      title={label}
      role="img"
    >
      {children}
    </div>
  );
}
