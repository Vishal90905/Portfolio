import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Pdf from "../assets/pdf/VISHAL.pdf";
import { motion } from 'framer-motion';
import img1 from "../assets/images/first image.jpg";

export default function Journey() {
  return (
    <section
      aria-label="Introduction and profile"
      className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-around px-4 py-8 gap-8'
    >

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='text-center md:text-left max-w-md'
      >
        <div className='space-y-4'>
          <TypeAnimation
            className='text-amber-600 text-xl sm:text-2xl'
            sequence={[
              'Front-End Developer', 1000,
              'Web Designer', 1000,
              'Casual Gamer', 1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            aria-label="Professional roles typed out"
          />
          <h1 className='text-4xl md:text-6xl font-bold text-amber-500'>
            HEY, I AM
          </h1>
          <h2 className='font-semibold text-3xl md:text-5xl text-gray-400'>
            VISHAL
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-white pt-2'>
            I am a front-end developer with 6 months of internship experience.
          </p>

          {/* Buttons */}
          <div className='flex flex-wrap justify-center md:justify-start gap-4 mt-5'>
            <a
              href={Pdf}
              download="VISHAL_Resume.pdf"
              className='flex justify-center items-center border-2 border-amber-500 text-amber-200 font-semibold px-4 py-2 shadow-md shadow-gray-900 rounded-lg text-sm md:text-base hover:scale-105 transition-all duration-300'
              aria-label="Download Resume"
            >
              Download CV
            </a>

            <a
              href="https://github.com/Vishuu9090"
              target='_blank'
              rel='noopener noreferrer'
              aria-label="Visit GitHub profile"
            >
              <button
                className='bg-amber-700 p-3 rounded-full text-white shadow-md shadow-gray-900 hover:scale-110 transition duration-300'
                type="button"
              >
                <FaGithub className='text-xl md:text-2xl' />
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/vsknl"
              target='_blank'
              rel='noopener noreferrer'
              aria-label="Visit LinkedIn profile"
              title="LinkedIn Profile"
            >
              <button
                className='bg-amber-700 p-3 rounded-full shadow-md shadow-gray-900 text-white hover:scale-110 transition duration-300'
                type="button"
              >
                <FaLinkedin className='text-xl md:text-2xl' />
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='flex justify-center'
      >
        <div
          className='shadow-xl rounded-2xl shadow-gray-900 w-64 h-64 sm:w-100 sm:h-100 overflow-hidden'
          role="img"
          aria-label="Photo of Vishal"
        >
          <img
            className='w-full h-full object-cover rounded-2xl'
            src={img1}
            alt="Portrait of Vishal"
            loading="lazy"
          />
        </div>
      </motion.div>

    </section>
  );
}
