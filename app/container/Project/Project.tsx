'use client'
import Image from "next/image";
import Link from "next/link";

// import projects from "../../../data/project.json";
// export async function getStaticProps() {
//   console.log('5',projects);
//   return {
//     props: {
//       data: projects,
//     }, 
//   }
// }
export default function Project() {
  return (
    <main className="xl:text-left sm:text-left  mt-10 leading-6 min-[320px]:text-center min-[320px]:mt-10 min-[320px]:justify-center sm:text-sm min-[320px]:text-sm">
      <p className="2xl:text-2xl xl:text-2xl text-gray-900  tracking-wide font-semibold">Projects</p>
      <p className="leading-relaxed gap-3 mt-1 text-gray-800">Some of the side projects. I am currently working on</p>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 min-[320px]:grid-cols-1 mt-6 gap-4">

        <div className="max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
           <a href="#"> 
             <Image
              className="rounded-t-lg"
              src="/cvvlogs.png"
              alt=""
              width={400}
              height={300}
            /> 
           </a>
           <div className="p-6">
            <h1 className="min-[320px]:text-sm font-bold">CVV Logs video Resume Website</h1>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 min-[320px]:text-xs">
              A website where you can upload your video resume and share it with
              the world.
            </p>
           <a href={`https://cvvlogs.com/`} target="_blank" className="font-bold">View Project</a>
          </div>
        </div>
       

       {/*  */}

       <div className="max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
           <a href="#!"> 
             <Image
              className="rounded-t-lg"
              src="/smartzskillzhub.png"
              alt=""
              width={400}
              height={300}
            /> 
           </a>
           <div className="p-6">
            <h1 className="min-[320px]:text-sm font-bold">Smartz Skillzhub</h1>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 min-[320px]:text-xs">
              A educational website where you can learn new skills and share your
              skills with the world.
            </p>
           <a className="font-bold" href={`https://smart-skillz-hub-website.vercel.app/quiz`} target="_blank">View Project</a>
          </div>
        </div>
          
          {/* 03 */}

          <div className="max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
           <a href="#!"> 
             <Image
              className="rounded-t-lg"
              src="/omnifood.png"
              alt=""
              width={400}
              height={300}
            /> 
           </a>
           <div className="p-6">
            <h1 className="min-[320px]:text-sm font-bold	">Omni Food</h1>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 min-[320px]:text-xs">
              A food delivery website where you can order food online.
              Practice Project HTML, CSS and JQuery.
            </p>
           <Link href={`https://omnifood-shopkit.netlify.app/`} className="font-bold">View Project</Link>
          </div>
        </div>
          

          {/* 04 */}

          <div className="max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
           <a href="#!"> 
             <Image
              className="rounded-t-lg"
              src="/ecommerce.png"
              alt=""
              width={400}
              height={300}
            /> 
           </a>
           <div className="p-6">
            <h1 className="min-[320px]:text-sm font-bold">Modern Ecommerce App (Site Project)</h1>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 min-[320px]:text-xs">
              A ecommerce website where you can buy and sell products.
              Practice Project React, Redux, Node, Express, MongoDB, Socket.io and DialogFlow.
            </p>
           <Link href="#" className="font-bold">View Project</Link>
          </div>
        </div>



        {/* 02 */}

        
        </div>
              
    </main>
  );
}
