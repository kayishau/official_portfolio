import React from "react"
import Link from "next/link"

const Footer = (props) => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
        <div className="py-8 flex items-center justify-between">
            <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
            <div className="flex items-center">
                Checkout What I'm Building in Web3! <span className="text-primary text-2xl px-1">&#9825;</span>
                <Link href="https://twitter.com/litter_token" className="underline underline-offset-2" target={"_blank"}>Litter Token</Link>
            </div>
           
        </div>
    </footer>
  )
};

export default Footer;
