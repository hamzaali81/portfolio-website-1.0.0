import Image from "next/image"


export default function Header() {
    return (
        <main className="flex justify-between">
         <div className="flex flex-col object-cover" style={{width: "40rem"}} >
           <p className="text-3xl tracking-wider font-semibold">{`Hello! I'Hamza, a developer based in Pakistan`}</p>
           <p className="tracking-wider">I love building tools that are user-friendly, simple and delightful.
              I was a student at Sylani Mass IT Training where I spent 8 months learning 
              the fundamentals of web development and programming. I also learned 
              about the Mern Stack and I have built a few projects using it.
              {"\n"}
              <br />
              Through these experiences, I had the opportunity to work with a variety of
              technologies and frameworks.  I am currently working as a freelance developer in Fiverr and I am currently looking for a new role full-time position as a developer. Hire me?
           </p>

           <div className="flex mt-4">
           <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View LinkedIn</button>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Github</button>
           </div>
         </div>
         <div className="flex-grow-0">
              <Image
              src={'/hamza.jpg'}
              alt="Picture of the author"
              width={400}
              height={800}
              
              className="rounded-md shadow-2xl object-fit"
              />
         </div>
        </main>
    );
  }