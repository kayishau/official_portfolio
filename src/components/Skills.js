import React from "react"
import { ReactIcon, TailwindIcon, Bootstrap, Figma, Canva, Adobe, MongoDB, Django, Sql, NodeJs, NextJs, JavaScript, Python, Rust} from "./Icons"
import { motion, Variants } from "framer-motion";
// import Router from "next/router";


const Skills = () => {

    // const router = useRouter()

    // const logoVariants = {
    //     offscreen: {
    //       y: 300
    //     },
    //     onscreen: {
    //       y: 50,
    //       rotate: -10,
    //       transition: {
    //         type: "spring",
    //         bounce: 0.4,
    //         duration: 0.8
    //       }
    //     }
    //   }

  return (
    <>


        <h2 className="font-bold text-6xl w-full text-center">Skills</h2>
        <div className="w-full h-screen relative items-center flex justify-centers flex-col">
            <div className="mt-20 mb-10 flex flex-col justify-center items-center">
                <h3 className="mb-5 text-lg font-bold uppercase text-dark/75">Frontend</h3>
                    <div className="flex">
                        <ul className="flex flex-row text-light">
                        <motion.li className="m-5 box"
                             
                             initial={{ opacity: 0, scale: 0.5 }}
                             
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{
                               duration: 0.8,
                               delay: 5,
                               ease: [0, 0.71, 0.2, 1.01]}}>
                         Placeholder text
                        <ReactIcon />
                        </motion.li>
                        <motion.li className="m-5 mt-8"
                         initial={{ opacity: 0, scale: 0.5 }}
                             
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{
                           duration: 0.8,
                           delay: 5,
                           ease: [0, 0.71, 0.2, 1.01]}}>
                        
                        Placeholder text
                        <NextJs />
                        </motion.li>

                        <motion.li className="m-5"
                         initial={{ opacity: 0, scale: 0.5 }}
                             
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{
                           duration: 0.8,
                           delay: 5,
                           ease: [0, 0.71, 0.2, 1.01]}}>
                            Placeholder text
                        <TailwindIcon />
                        </motion.li>
                        <li className="m-5">
                        Placeholder text
                        <Bootstrap />
                        </li>
                        <li className="text-black m-5">Framer-motion</li>
                        <li className="m-5">
                            Placeholder text
                        <Adobe />
                        </li>
                        <li className="m-5">
                        Placeholder text
                        <Figma />
                        </li>
                        <li className="m-5">
                        Placeholder text
                        <Canva />
                        </li>
                        </ul>
                    </div> 
            </div>

            <div className="mb-10 flex flex-col justify-center items-center">
                <h3 className="mb-4 text-lg font-bold uppercase text-dark/75">Backend</h3>
                <ul className="flex flex-row text-light">
                    <li className="m-5">
                    Placeholder text
                    <MongoDB />
                    </li>
                    <li className="m-5">
                        Placeholder text
                        <Django />
                    </li>
                    <li className="m-5">
                        Placeholder text
                        <Sql />
                    </li>
                    <li className="m-5">
                        Placeholder text
                        <NodeJs />
                    </li>
                  
                </ul> 
            </div>

            <div className="flex flex-col justify-center items-center">
                <h3 className="mb-4 text-lg font-bold uppercase text-dark/75">Languages</h3>
                <ul className="flex text-light">
                    <li className="m-5">
                        Placeholder text
                        <JavaScript />
                    </li>
                    <li className="m-5">
                        Placeholder text
                        <Python />
                    </li>
                    <li className="m-5">
                        Placeholder text
                        <Rust />
                    </li>
                </ul>
            </div>

        </div>
    </>
  )
};

export default Skills;

