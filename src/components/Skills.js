import React from "react"
import { ReactIcon, TailwindIcon, Bootstrap, Figma, Canva, Adobe, MongoDB, Django, Sql, NodeJs, NextJs, JavaScript, Python, Rust} from "./Icons";


const Skills = () => {
  return (
    <>
        <h2 className="font-bold text-6xl w-full text-center">Skills</h2>
        <div className="w-full h-screen relative items-center flex justify-centers flex-col">
            <div className="mt-20 mb-10 flex flex-col justify-center items-center">
                <h3 className="mb-5 text-lg font-bold uppercase text-dark/75">Frontend</h3>
                    <div className="flex">
                        <ul className="flex flex-row text-light">
                        <li className="m-5">
                         Placeholder text
                        <ReactIcon  />
                        </li>
                        <li className="m-5 mt-8">
                        Placeholder text
                        <NextJs />
                        </li>
                        <li className="m-5">
                            Placeholder text
                        <TailwindIcon />
                        </li>
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

