// 'use client';
import Image from "next/image"
import { useEffect, useState } from "react";

async function fetchBlogs() {
  const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hamzaahmed_46108/');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return response.json();
}


// 218fc4158259c72e947f08897c949d287b91f24b66a41daba7f4de2a15bb81495
// https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hamzaahmed_46108/
export default function Certification() {
  // const blogs = await fetchBlogs();
  // console.log(blogs.items.map((blog: any) => blog.title));

//   const Blogs = blogs?.map((blog: any, index: any) =>
//    {
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//     <Image className="rounded-t-lg" src={blog.thumbnail} alt="" />
//       </a>
// <div className="p-5">
//     <a href="#">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
//     </a>
//     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.description.substring(0,10)}</p>
//     <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

//         Read more
//         <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//     </a>
// </div>
// </div>
// })
 
    return (
        <main className="w-100 h-100 mt-10">
        <h1 className="xl:2xl md:text-xl xl:text-left md:text-left min-[320px]:text-sm tracking-wide font-semibold min-[320px]:text-center">Certifications</h1>
      <div className="mt-5"></div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 min-[320px]:grid-cols-1">
        {/* {Blogs} */}
        {/* 1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://digiskills.pk/verify/" target="_blank">
             <Image
              src={'/digiskills.png'}
              alt="Picture of the author"
              width={400}
              height={300}
              
              className="rounded-md shadow-2xl object-fit"
              />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl min-[320px]:text-sm font-bold tracking-tight text-gray-900 dark:text-white">COMMUNICATION AND SOFT SKILLS</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 md:text-sm xl:text-sm 2xl:text-xl  min-[320px]:text-xs">Credential ID: 4TYWH5BMK</p>
        
    </div>
    </div>
    {/* 2 */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://digiskills.pk/verify/">
             <Image
              src={'/digiskills.png'}
              alt="Picture of the author"
              width={400}
              height={800}
              
              className="rounded-md shadow-2xl object-fit"
              />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-[320px]:text-sm">Creative Writting</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 min-[320px]:text-xs dark:text-gray-400">Credential ID: 3YUT3P6MK</p>
        
    </div>
    </div>

    {/* 03 */}

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://www.hackerrank.com/hamza54834">
             <Image
              src={'/hackerrank.png'}
              alt="Picture of the author"
              width={400}
              height={800}
              
              className="rounded-md shadow-2xl object-fit"
              />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-[320px]:text-sm">Problem Solution Badge</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 min-[320px]:text-xs dark:text-gray-400">Hacker Rank Problem Solving Badge</p>
        
    </div>
    </div>
 
        </div>
      </main>
    );
  }