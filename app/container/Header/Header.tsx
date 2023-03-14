'use client';
import Image from "next/image"
import Highlighter from "react-highlight-words";


export default function Header() {
    return (
        <main className="flex  min-[320px]:gap-2 md:justify-between lg:justify-between md:w-70 xl:text-left min-[640px]:text-center min-[640px]:gap-4">
         <div className="flex lg:flex-col md:flex-col min-[320px]:flex-col object-cover md:max-xl:flex sm:flex-col" style={{width: "44rem"}}>
           <p className="xl:text-2xl tracking-wider object-fill 2xl:justify-start xl:text-left xl:justify-start min-[320px]:text-center font-bold text-gray-900 sm:text-lg lg:text-3xl md:xl md:text-sm min-[320px]:text-sm">
            
            {`Hello! I'm Hamza, a fullstack Javascript developer based in Pakistan!`}
            </p>
           <br />
           <p className="tracking-wider leading-loose min-[320px]:text-center min-[320px]:text-xs xl:text-left md:justify-center md:items-center text-gray-800 sm:text-sm md:text-sm">
           <Highlighter
          highlightClassName="YourHighlightClass"
         searchWords={["fullstack", "Javascript", "React", "Node", "Express", "MongoDB","8 months", "Mongoose", "Nextjs", "Tailwindcss", "Git", "Github", "Vercel" ,"Sylnai", "Fiverr", "level 1 seller on", "user-friendly", "simple", "delightful", "communication", "teamwork", "problem solving", "interpersonal", "googling", "documentation reading", "debugging", "researching", "documentation writing"]}
    autoEscape={true}
    textToHighlight={
      ` I am a fullstack Javascript and level 1 seller on Fiverr. I have been
      working as a developer for the past 1 years. I have worked on a variety
      of projects from building a website for a local business to building a
      fullstack application for a startup. I love building tools that are user-friendly, simple and delightful.
      I was a student at Sylani Mass IT Training where I spent 8 months learning 
      the fundamentals of web development and programming and i have build alot of practice projects.
      I have also developed my technical skills like Javascript, React, Node, Express, MongoDB, Mongoose, Nextjs, Tailwindcss, Git, Github, Vercel.
      Througtout my journey i have develop my soft skills like communication, teamwork, problem solving, interpersonal and
      also develop my googling, documentation reading, debugging, researching
      and documentation writing skills as well.   
      ${"\n"}
     `
    }
  />
  {"\n"}
  <div className="mt-0"></div>
  
          
      Through these experiences, I had the opportunity to work with a variety of
      technologies and frameworks.  I am currently working as a freelance developer in Fiverr and I am currently looking for a new role full-time position as a developer. 
      <span className="border-2	rounded border-green bg-gray-800 text-white 2xl:text-left xl:text-left md:text-left  sm:text-center min-[320px]:text-sm"> Hire me?</span>
        
           </p>
          
          
           <br />
           <div className="flex mt-4 sm:justify-center items-center xl:justify-start">
           
           <button type="button" className="text-white min-[320px]:text-sm bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
           
           <a href="https://www.linkedin.com/in/hamzaali81/" target="_blank">View LinkedIn</a>
           </button>
            <button type="button" className="text-gray-900 min-[320px]:text-sm bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              
              <a href="https://github.com/hamzaali81"target="_blank" className="min-[320px]:text-sm">View Github</a>
              </button>
           </div>
         </div>
         <div className="flex-grow-0">
              <Image
              src={'/hamza.jpg'}
              alt="Picture of the author"
              width={400}
              height={300}
              
              className="rounded-md min-[320px]:rounded-sm shadow-2xl object-fit lg:visible md:visible sm:visible"
              />
         </div>
        </main>
    );
  }