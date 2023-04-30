import React from "react"
import Image from 'next/image'
import profilePic from '../../public/images/profile/flower.png'
import AnimatedText from "./AnimatedText"
import Link from "next/link"
import { LinkArrow } from "./Icons"
import Footer from "./Footer"

const Layout = ({childern, className=""}) => {
  return (
    <div className={`${className}`}>
     {childern}
     <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt='Kayisha' className='w-full h-auto' />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
                <AnimatedText text=' Kayisha Ulysse' />
                <p className="my-4 text-base font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex items-center self-start mt-2">
                    <Link href="/resume.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark" download={true}>Resume <LinkArrow className={"w-6 ml-1"}/>
                    </Link>
                    <Link href='mailto:ulyssekayisha@gmail.com' target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline" >Contact</Link>
                </div>
            </div>
        </div>
      
    </div>
  )
};

export default Layout
