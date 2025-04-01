"use client";
import React from "react";
import { motion } from "framer-motion";
import Search from "./Search";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 3 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 5 } },
};

const Hero = () => {
  return (
    <div className="bg-[#4B0082]">
    <div className="relative w-full h-screen text-black pb-[110px] pt-[120px] lg:pt-[150px] max-w-7xl mx-auto">
      <div className="w-full px-6 lg:px-16">
        <div className="flex flex-wrap items-center">
          {/* Left Content Section */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="hero-content text-center lg:text-left">
              <h1 className="mb-5 text-white text-4xl font-extrabold leading-snug sm:text-[42px] lg:text-[40px] xl:text-5xl">
                Elevate Your Startup with <span className="text-yellow-300">TailGrids</span>
              </h1>

              <p className="mb-8 max-w-[500px] text-lg text-cyan-100">
                With TailGrids, businesses and students thrive together. Empower your ideas with sleek, modern designs tailored for success.
              </p>
              <Search />

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-4 mt-6">
                <a
                  href="/#"
                  className="inline-flex items-center rounded-full bg-yellow-400 px-6 py-3 text-black text-base font-medium shadow-md hover:bg-yellow-500 transition-all"
                >
                  Get Started
                </a>

                <button
                  className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white text-base font-medium shadow-md hover:bg-blue-700 transition-all"
                >
                  Download App
                </button>
              </div>
            </div>
          </motion.div>

          {/* Spacer for Alignment */}
          <div className="hidden lg:block lg:w-1/12"></div>

          {/* Right Image Section */}
          <motion.div 
            className="w-full lg:w-6/12"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                  alt="hero"
                  className="max-w-full w-full rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;