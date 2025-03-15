import { motion } from "framer-motion";
import HeroImage from "./HeroImage";
import TypingEffect from "./TypingEffect";

const Profile = () => {
  return <div className="">
    <div className="flex flex-col md:flex-row p-8 mt-3  gap-9 border-b-2 border-blue-200 m-auto w-[80%] justify-between">
    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
     className="w-full md:w-1/2 ">
        <h2 className=" tracking-tighter text-5xl p-2 m-auto">Hello,</h2>
        
        <p>"I am Kavali Pavan, a 3rd-year CSE student specializing in full-stack web development. Proficient in React.js, Next.js, Node.js, MongoDB, and Tailwind CSS, I focus on creating scalable applications and seamless API integrations with deployments. "</p>
        <TypingEffect className=""/>
        <div className="mt-5">
          <a href="../../resume.pdf" target="_blank">
          <button className="bg-[#f5b000fb] p-2 rounded-md">view resume</button>
          </a>
        </div>
    </motion.div>
    <motion.div 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className=" md:w-1/2 flex justify-center  md:justify-end  ">

      {/* <img src={profileim} alt="" className="rounded-full max-w-full h-auto" /> */}
      <HeroImage className="w-full h-full"/>
    </motion.div>
    </div>
  </div>;
};

export default Profile;
