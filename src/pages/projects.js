import React from "react"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/Icons"
import  project1 from "../../public/images/projects/image-coming-soon.jpeg"
import TransitionEffect from "@/components/TransitionEffect"
// import Layout from "@/components/Layout";
// import Head from "next/head";


const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return (
       <article className="w-full flex items-center justify-between relative border border-solid border-light bg-light shadow-2xl p-12">

        {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark"/>  */}

        <Link href={link} target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden"
        >
            <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
            <span className=" text-primary font-medium text-xl">{type}</span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-2xl font-semibold">{title}</h2>
            </Link>
            <p>{summary}</p>
            <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
            <Link href={link} target="_blank" className="ml-4 bg-dark text-light p-2 px-6 text-medium font-semibold"> Visit Project </Link>
            </div>
        </div>

       </article>
    )

}

const Project = ({title, type, img, link, github}) => {

    return (
        <article className="w-full flex flex-col items-center justify-center border border-solid border-light bg-light p-6 relative shadow-2xl">

        <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden"
        >
            <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className=" text-primary font-medium text-xl">{type}</span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-1xl font-semibold">{title}</h2>
            </Link>

            <div className=" w-full mt-2 flex items-center justify-between underline">
            <Link href={link} target="_blank" className="  font-semibold"> Visit</Link>
            <Link href={github} target="_blank" className="w-8"> <GithubIcon />{" "} </Link>
          
            </div>
        </div>
        </article>
    )

}

const projects = () => {
  return (
    <>
    {/* <Head></Head> */}
    
    <TransitionEffect />

    <main className="w-full mb-16 flex flex-col items-center justify-center">
        
        <div className="pt-10">
            <AnimatedText text="Creatively Coding :)"
            />
            

            <div className="pt-20 flex flex-wrap items-center justify-center">

                <div className="border-black w-4/5 mb-20">
                    <FeaturedProject 
                  title="Web3 Wiki App"  
                  img={project1}
                  summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS "
                  link="https://github.com/kayishau/web3-wiki"
                  type="Featured Project"
                  github="https://github.com/kayishau/web3-wiki"
                  />

                 </div>
                <div className="border-black w-1/2">
                <Project 
                  title="Carbon Footprint Tracker"  
                  img={project1}
                  summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS "
                  link="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
                  type="Featured Project"
                  github="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
                  />
                </div>

                <div className="border-black w-1/2">
                   <Project 
                  title="WTW Blog"  
                  img={project1}
                  summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS "
                  link="https://github.com/kayishau/WTW-Blog"
                  type="Featured Project"
                  github="https://github.com/kayishau/WTW-Blog"
                  />
                </div>
               
            </div>

            
            
    
        </div>
       
            
            
        
    </main>
    </>
  )
};

export default projects
