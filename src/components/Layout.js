import React from "react"
import Image from 'next/image'
import profilePic from '../../public/images/profile/flower.png'


const Layout = ({childern, className=""}) => {
  return (
    <div className={`${className}`}>
     {childern}
     <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt='Kayisha' className='w-full h-auto' />
            </div>
            <div className="w-1/2">
                <h1> Kayisha Ulysse </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
          </div>
    </div>
  )
};

export default Layout
