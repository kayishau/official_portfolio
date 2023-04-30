import { Inter } from 'next/font/google'
import Layout from "@/components/Layout"
import Image from 'next/image'
import TransitionEffect from "@/components/TransitionEffect"



export default function Home() {
  return (
    <>
    <TransitionEffect />
      <main className='flex items-center text-dark w-full h-full'>
        <Layout className='pt-0 pl-10 pr-10'/>
         
       
        
      </main>
    </>
  )
}
