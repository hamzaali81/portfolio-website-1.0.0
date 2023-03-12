'use client'
import Image from "next/image"

export default function Contact() {
   
    return (
        <main className="mt-20">
         <h1 className="text-2xl tracking-wider font-bold">Get in touch</h1>
         <p className="mt-4">Do you have any job oppourtunity or idea {`you'd`} like to discuss? Feel Free to reach me at 
         
         <span>
            <a href="#" 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> hamzaali81811@gmail.com</a>
             </span> . 
         You can also find me on 
         
         <span>
            <a 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            href="#"> Twitter</a>
         </span>
         
         , 
         <span>
            <a 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            href="#"> Github </a>
         </span>
         and 
         <span>
            <a 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            href="#"> LinkedIn </a>
         </span>
         </p>
        

         <div className="mt-20"></div>
         <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <footer className="flex justify-between">
            <p className="text-sm font-normal tracking-wider">Build With Typescript, Tailwind and Next.js 🖤</p>
            
            <p className="flex">
            <a href="#" className="text-gray-200 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
             </a>
             <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
             </a>    
             <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Linked</span>
             </a>
             <a href="#">
                  <span className="sr-only">Email: hamzaali81811@gmail.com</span>
             </a>
            </p>
        </footer>
        <div className="mt-10"></div>
            <div className="flex justify-center items-center">
            <p>© 2023 Hamza Ali. All rights reserved.</p>
            </div>
            <div className="mt-10"></div>
        </main>
    );
  }