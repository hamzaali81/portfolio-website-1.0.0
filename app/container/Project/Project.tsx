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
    <main className="mt-10 leading-6">
      <p className="text-2xl tracking-wide font-semibold">Projects</p>
      <p className="leading-relaxed mt-1">Some of the side projects. I am currently working on</p>
      <div className="flex mt-6">
        <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
           <a href="#!"> 
             <Image
              className="rounded-t-lg"
              src="/cvvlogs.png"
              alt=""
              width={400}
              height={300}
            /> 
           </a>
           <div className="p-6">
            <h1>CVV Logs video Resume Website</h1>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              A website where you can upload your video resume and share it with
              the world.
            </p>
           <Link href={`/cvv-logs`}>View Project</Link>
          </div>
        </div>
        </div>
              
    </main>
  );
}
