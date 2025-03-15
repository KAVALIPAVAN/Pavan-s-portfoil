"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase, CheckCircle } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "MERN Developer",
      company: "CoinHarbour",
      duration: "17 Feb 2025 – 18 March 2025",
      responsibilities: [
        "Collaborated with the co-founder to develop and deploy the company's landing page from scratch.",
        "Built a responsive website with animations to enhance user experience.",
        "Contributed to the user dashboard by adding features and ensuring full responsiveness.",
      ],
    },
  ]

  return (
    <div className="w-full max-w-[1400px] mx-auto py-4 sm:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8 sm:mb-12 p-2"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="border-l-4 border-[#f5b000fb] pl-6 py-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <Briefcase className="text-[#f5b000fb] h-5 w-5" />
                  <h3 className="text-xl sm:text-2xl font-semibold">{exp.title}</h3>
                  <span className="text-lg font-medium text-gray-700">@ {exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm sm:text-base">{exp.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mt-4">
                {exp.responsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * idx }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-[#f5b000fb] mt-0.5 flex-shrink-0" />
                    <p className="text-sm sm:text-base">{responsibility}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 border-t-2 border-blue-200 pt-6 text-center"
        >
          <p className="text-gray-600 text-sm sm:text-base italic">Open to new opportunities and collaborations</p>
          <div className="mt-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kavalipavan22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#f5b000fb] p-2 px-5 rounded-md hover:bg-[#e6a700] hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium shadow-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience
