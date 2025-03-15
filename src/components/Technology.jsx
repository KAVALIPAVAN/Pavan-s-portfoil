import React from "react";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiShadcnui,
  SiSocketdotio,
  SiTypescript,
  SiWebrtc,
  SiRedux,
} from "react-icons/si";
import {
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import { IoLogoDocker, IoLogoFirebase, IoLogoPython } from "react-icons/io5";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbLetterC } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import { motion } from "framer-motion";

const techStack = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-600" />, name: "Reactjs" },
  { icon: <IoLogoPython className="text-7xl text-yellow-200" />, name: "Python" },
  { icon: <FaJava className="text-7xl text-blue-900" />, name: "Java" },
  { icon: <TbLetterC className="text-7xl text-[#4515e3]" />, name: "C" },
  { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "JavaScript" },
  { icon: <RiTailwindCssFill className="text-7xl text-cyan-500" />, name: "TailwindCss" },
  { icon: <FiFramer className="text-7xl text-black" />, name: "Framer" },
  { icon: <SiRedux className="text-7xl text-violet-700" />, name: "Redux" },
  { icon: <FaGithub className="text-7xl text-black" />, name: "Git & Github" },
  { icon: <SiShadcnui className="text-7xl text-cyan-700" />, name: "Shadcn-ui" },
  { icon: <IoLogoFirebase className="text-7xl text-yellow-500" />, name: "Firebase" },
  { icon: <FaBootstrap className="text-7xl text-[#9333ea]" />, name: "Bootstrap" },
  { icon: <SiMysql className="text-7xl" />, name: "MYSQL" },
  { icon: <RiNextjsLine className="text-7xl text-[9333ea]" />, name: "Next.js" },
  { icon: <SiPostman className="text-7xl text-[#ea6133]" />, name: "Postman" },
  { icon: <SiMongodb className="text-7xl text-[#3baa3d]" />, name: "Mongodb" },
  { icon: <IoLogoDocker className="text-7xl text-[#33ccea]" />, name: "Docker" },
  { icon: <SiExpress className="text-7xl text-[9333ea]" />, name: "Express.js" },
  { icon: <SiWebrtc className="text-7xl text-[9333ea]" />, name: "WebRTC" },
  { icon: <SiSocketdotio className="text-7xl text-[9333ea]" />, name: "Socket.io" },
  { icon: <SiTypescript className="text-7xl text-blue-500" />, name: "TypeScript" },
];

const Technology = () => {
  return (
    <div className="">
      <div className="border-b border-blue-200 w-[80%] m-auto pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {techStack.map(({ icon, name }, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-neutral-800 p-3 text-center"
            >
              {icon}
              <h4>{name}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
