import React from "react"
import Link from "next/link"
import Logo from "@/components/Logo"
import { useRouter } from  'next/router'
import { TwitterIcon, LinkedInIcon, GithubIcon } from "./Icons"
import {motion} from "framer-motion"


const CustomLink = ({href, title, className=""}) => {
    const router = useRouter()

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            
            <span className={`
            h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
           `}
            >&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header 
        className="w-full px-32 py-8 font-medium flex items-center justify-between"
        >
            <nav>
                <CustomLink href="/about" title="Home" className='mx-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
            </nav>
        
            <nav className="flex items-center justify-center flex-wra">
                <motion.a href="https://twitter.com/kaiusse" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3">
                    <TwitterIcon />
                </motion.a>
                <motion.a href="https://github.com/kayishau" target={"_blank"} className="w-6 mx-3"
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/kayisha-ulysse/" target={"_blank"} className="w-6 ml-3"
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>
                    <LinkedInIcon />
                </motion.a>
                   
            </nav>

           

        </header>
    )
}

export default NavBar

