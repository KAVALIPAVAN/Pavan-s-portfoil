import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const App = () => {
  return <div className="bg-gradient-to-r from-[#a9b3dd] to-[#ebebf1] w-screen">
    <div className=" flex flex-col">
    <Navbar/>
    <Profile/>
    <Technology/>
    <Projects/>
    <div className=" m-auto p-5">
    <div className=" m-7">
      <motion.h3 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
       
      className=" text-2xl tracking-tighter font-semibold mb-8">Get in touch</motion.h3>
     <motion.a 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:2}}
          className=" pl-4 text-xl flex items-center gap-2 hover:underline  hover:text-blue-600 cursor-pointer "><MdEmail />kavalipavan22@gmail.com</motion.a>
     

      <motion.a 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
        href="https://www.linkedin.com/in/kavali-pavan-598515274/" target="blank"  className=" pl-4 underline text-xl hover:underline flex items-center gap-2 hover:text-blue-600 cursor-pointer "><FaLinkedin />LinkedIn</motion.a>
      </div>

    </div>
    </div>

  </div>;
};

export default App;
