'use client';
import Image from "next/image"
import Highlighter from "react-highlight-words";
import Typewriter from 'typewriter-effect';


export default function Header() {
    return (
        <main className="flex lg:justify-between lg:flex  lg:items-start sm:flex-col sm:items-center justify-between md:width-50 sm:width-50">
         <div className="flex flex-col object-cover md:max-xl:flex " style={{width: "44rem"}}>
           <p className="text-3xl tracking-wider font-bold text-gray-900 sm:text-lg lg:text-3xl">
            
<Typewriter
  options={{
    strings: [`Hello! I'm Hamza, a fullstack Javascript developer based in Pakistan!`, `Hello! I'm Hamza, a fullstack Javascript developer based in Pakistan!`],
    autoStart: true,
    loop: true,
  }}
/>
            {/* {`Hello! I'm Hamza, a fullstack Javascript developer based in Pakistan!`} */}
            </p>
           <br />
           <p className="tracking-wider  leading-loose text-gray-800 sm:text-sm md:text-sm">
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
      <span className="border-2	rounded border-green"> Hire me?</span>
        
           </p>
          
          
           <br />
           <div className="flex mt-4 md:justify-start sm:justify-center">
           
           <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
           
           <a href="https://www.linkedin.com/in/hamzaali81/" target="_blank">View LinkedIn</a>
           </button>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              
              <a href="https://github.com/hamzaali81"target="_blank">View Github</a>
              </button>
           </div>
         </div>
         <div className="flex-grow-0">
              <Image
              src={'/hamza.jpg'}
              alt="Picture of the author"
              width={400}
              height={400}
              
              className="rounded-md shadow-2xl object-fit lg:visible md:hidden sm:visible"
              />
         </div>
        </main>
    );
  }