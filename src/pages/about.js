import AnimatedText from "@/components/AnimatedText";
import React from "react"
import Footer from "@/components/Footer";
// import Head from 'react'
import profilePic from "../../public/images/profile/Kayisha-profile-pic.png"
import Image from "next/image";
import Skills from "@/components/Skills";

const about = () => {
  return (
    <div>
        {/* <Head>
            <title>Kayisha | About Page</title>
            <meta name="description" content="any description" />
        </Head> */}
        <main className="flex w-full flex-col items-center justify-center min-h-screen">
            <div className="">

            <AnimatedText text="Passion Fuels Purpose!" className="mb-0" />
            <div className="flex items-center justify-between w-full ml-20 mb-0 p-0">
                <div className="w-1/2 flex flex-col mb-30">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About Me</h2>
                    <p className="my-4 font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="font-medium"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                    <p className="font-medium"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                </div>

                <div className="w-1/2">
                    <Image src={profilePic} alt="Kayisha" className="w-full h-auto" />
                </div>

            </div>
            <Skills />
         </div>
        
        </main>
        <Footer />
    </div>
  )
};

export default about;
