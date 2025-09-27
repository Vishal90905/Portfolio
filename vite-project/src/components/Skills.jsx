import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Element name="skills" className="mt-20 sm:mt-32">
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          scale: { type: "spring", bounce: 0.2 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        aria-labelledby="skills-title"
        className="px-4 flex justify-center"
      >
        <div className="max-w-md w-full text-center">
          {/* Title */}
          <h2
            id="skills-title"
            className="text-white text-3xl sm:text-4xl font-semibold mb-4"
          >
            Skills
          </h2>

          {/* Description */}
          <p className="text-white text-base sm:text-lg mb-6">
            I have worked on various frontend projects. Check them{" "}
            <a
              href="#portfolio"
              className="underline text-amber-400 hover:text-amber-500 transition-colors"
            >
              here
            </a>
            .
          </p>

          {/* Skills Card */}
          <div className="mx-auto w-full sm:w-[320px] bg-gray-800 border-2 border-amber-600 rounded-lg px-6 py-6 shadow-lg">
            <div className="text-white text-xl font-bold mb-6">Frontend</div>

            {/* Skill Rows */}
            <div className="flex justify-around mb-6">
              <SkillItem icon={<FaHtml5 />} label="HTML" color="text-orange-600" />
              <SkillItem icon={<FaCss3Alt />} label="CSS" color="text-blue-600" />
            </div>
            <div className="flex justify-around">
              <SkillItem icon={<AiOutlineJavaScript />} label="JavaScript" color="text-amber-300" />
              <SkillItem icon={<FaReact />} label="React" color="text-blue-600" />
            </div>
          </div>
        </div>
      </motion.section>
    </Element>
  );
}

function SkillItem({ icon, label, color }) {
  return (
    <div
      className={`flex items-center space-x-3 cursor-default ${color} text-lg hover:text-amber-400 transition-colors duration-300`}
      aria-label={label}
    >
      <div className="text-3xl">{icon}</div>
      <span className="text-amber-400 font-semibold">{label}</span>
    </div>
  );
}
