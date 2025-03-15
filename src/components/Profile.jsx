"use client"

import { motion } from "framer-motion"
import HeroImage from "./HeroImage"
import TypingEffect from "./TypingEffect"

const Profile = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto py-4 sm:py-8">
      <div className="flex flex-col md:flex-row p-4 sm:p-6 md:p-8 mt-3 gap-8 md:gap-12 border-b-2 border-blue-200 mx-auto w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] justify-between items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-5 md:pr-4"
        >
          <h2 className="tracking-tighter text-3xl sm:text-4xl md:text-5xl p-2">Hello,</h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I am Kavali Pavan, a 3rd-year CSE student specializing in full-stack web development. Proficient in
            React.js, Next.js, Node.js, MongoDB, and Tailwind CSS, I focus on creating scalable applications and
            seamless API integrations with deployments.
          </p>

          <TypingEffect className="text-sm sm:text-base md:text-lg" />

          <div className="mt-5 pt-2">
            <a href="../../resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#f5b000fb] p-2 px-5 rounded-md hover:bg-[#e6a700] hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium shadow-sm">
                View Resume
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          className="w-full sm:w-3/4 md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0"
        >
          <div className="w-full max-w-[400px] md:max-w-none relative">
            <HeroImage className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile

