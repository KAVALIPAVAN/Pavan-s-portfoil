"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import PropTypes from "prop-types" // Import for prop validation

const TechBadge = ({ children }) => (
  <div className="rounded-md bg-[#3352fff6] px-2 py-1 text-white text-xs font-medium hover:bg-[#3352ff]/90 transition-colors duration-300">
    {children}
  </div>
)
TechBadge.propTypes = { children: PropTypes.node.isRequired }

const ProjectLink = ({ href, children, isCode = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-md bg-[#e27b14f6] px-2 py-1 h-8 flex items-center gap-1 text-white text-xs font-medium hover:bg-[#e27b14]/90 transition-colors duration-300"
  >
    {children}
    {isCode ? <Github size={14} /> : <ExternalLink size={14} />}
  </a>
)
ProjectLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isCode: PropTypes.bool,
}

const ProjectCard = ({ project }) => {
  const { title, description, videoSrc, technologies, liveLink, codeLink } = project

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-40px" }}
      className="w-full"
    >
      <div className="flex w-full gap-3 p-3 sm:p-4 flex-col lg:flex-row rounded-lg shadow-sm hover:shadow-lg border border-gray-200 bg-white">
        <div className="w-full lg:w-2/5 flex-shrink-0">
          <div className="aspect-video w-full rounded-md overflow-hidden shadow-sm">
            <video
              src={videoSrc}
              className="w-full h-full object-cover"
              controls
              preload="none"
              aria-label={`Demo video for ${title}`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-3/5 mt-2 lg:mt-0">
          <h2 className="font-semibold text-lg sm:text-xl mb-1 text-gray-900">{title}</h2>
          <p className="text-gray-700 text-xs sm:text-sm mb-3">{description}</p>
          <div className="flex-grow"></div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </div>
            <div className="flex gap-2 self-end">
              {liveLink && <ProjectLink href={liveLink}>Live Demo</ProjectLink>}
              {codeLink && (
                <ProjectLink href={codeLink} isCode={true}>
                  Code
                </ProjectLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
ProjectCard.propTypes = { project: PropTypes.object.isRequired }

const Projects = () => {
  const projects = [
    {
      title: "Tic-tac-toe (Multiplayer)",
      description:
        "Built a real-time Tic Tac Toe game using WebRTC for peer-to-peer communication and Socket.IO for real-time event handling and synchronization.",
      videoSrc: "../../multi1.mp4",
      technologies: ["WebRTC", "Socket.IO", "React"],
      liveLink: "https://tic-tac-toe-multiplayer-eight.vercel.app/",
    },
    {
      title: "To-Do App",
      description:
        "I developed a full-stack To-Do app with React, Redux Toolkit (AsyncThunk), Node.js, Express, and MongoDB. The app features a responsive UI built with Tailwind CSS and API testing was done using Postman.",
      videoSrc: "../../todo.mp4",
      technologies: ["Node.js", "MongoDB", "Redux"],
      liveLink: "https://todo-project-frontend-flame.vercel.app/",
    },
    {
      title: "Crypto-place",
      description:
        "Developed a Crypto Price tracking app with React, integrated third-party APIs for real-time data, and used React Router DOM for smooth navigation. Hosted the app on Vercel with GitHub for version control.",
      videoSrc: "../../Crypto_Place1.mp4",
      technologies: ["React", "API Integration", "React Router"],
      liveLink: "https://crypto-place-one.vercel.app/",
    },
    {
      title: "Next-blog App",
      description:
        "Developed a full-stack Blog Application using Next.js for server-side rendering, Tailwind CSS for responsive UI design, and MongoDB for database management.",
      videoSrc: "../../Blog1.mp4",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      codeLink: "https://github.com/KAVALIPAVAN/nextblog",
    },
  ]

  return (
    <section className="py-6 sm:py-10 max-w-6xl mx-auto px-3 sm:px-5">
      <div className="border-b border-blue-200 pb-3 mb-5">
        <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">PROJECTS</h1>
        <div className="space-y-3 sm:space-y-5 md:space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects