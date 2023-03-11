'use client'
import Image from "next/image"

export default function Contact() {
   
    return (
        <main>
         <h1>Get in touch</h1>
         <p>Do you have any job oppourtunity or idea {`you'd`} like to discuss? Feel Free to reach me at 
         <span>
            <a href="#" 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> hamzaali81811@gmail.com</a>
             </span> . 
         You can also find me on 
         
         <span>
            <a 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            href="#">Twitter</a>
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
        
        <footer>
            <p>Build With Typescript, Tailwind and Next.js </p>
        </footer>
        </main>
    );
  }