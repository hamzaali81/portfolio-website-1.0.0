'use client'
import Image from "next/image"

export default function Contact() {
   
    return (
        <main className="mt-20">
         <h1 className="text-2xl tracking-wider font-bold min-[320px]:text-center">Get in touch</h1>
         <p className="mt-4 min-[320px]:text-center">Do you have any job oppourtunity or idea {`you'd`} like to discuss? Feel Free to reach me at 
         
         <span>
            <a href="mailto:hamzaali81811@gmail.com" 
            target="_blank"
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> hamzaali81811@gmail.com</a>
             </span> . 
         You can also find me on 
         
         <span>
            <a 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            href="https://twitter.com/_hamzaahmed81" target="_blank"> Twitter</a>
         </span>
         
         , 
         <span>
            <a 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            href="https://github.com/hamzaali81" target="_blank"> Github </a>
         </span>
         and 
         <span>
            <a 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            href="https://www.linkedin.com/in/hamzaali81/" target="_blank"> LinkedIn </a>
         </span>
         </p>
        

         <div className="mt-20"></div>
         <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <footer className="flex justify-between">
            <p className="text-sm font-normal tracking-wider min-[320px]:text-xs">Build With Typescript, Tailwind and Next.js 13 🖤</p>
            
            <p className="flex">
            <a href="https://github.com/hamzaali81" target="_blank" className="text-gray-200 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
             </a>
             <a href="https://twitter.com/_hamzaahmed81_" target="_blank" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
             </a>    
             <a href="https://www.linkedin.com/in/hamzaali81/" target="_blank" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Linked</span>
             </a>
             <a href="mailto:hamzaali81811@gmail.com">
                  <span className="sr-only">
                    
                    Email: hamzaali81811@gmail.com
                    </span>
             </a>
            </p>
        </footer>
        <div className="mt-10"></div>
            <div className="flex justify-center items-center min-[320px]:text-center">
            <p className="min-[320px]:text-xs">© 2023 Hamza Ali. All rights reserved.</p>
            </div>
            <div className="mt-10"></div>
        </main>
    );
  }