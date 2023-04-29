import AnimatedText from "@/components/AnimatedText";
import React from "react"
import Footer from "@/components/Footer";
// import Head from 'react'

const about = () => {
  return (
    <div>
        {/* <Head>
            <title>Kayisha | About Page</title>
            <meta name="description" content="any description" />
        </Head> */}
        <main className="flex w-full flex-col items-center justify-center">
            <div className="pt-16">

            <AnimatedText text="Passion Fuels Purpose!" className="mb-14" />
            <div className="grid w-full grid-cols-8 gap-16">
                <div className="col-span-3 flex flex-col items-start justify-start ml-40 my-20 pl-10">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About Me</h2>
                    <p className="my-4 font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="font-medium"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
            </div>
         </div>
        </main>
      <Footer />
    </div>
  )
};

export default about;
