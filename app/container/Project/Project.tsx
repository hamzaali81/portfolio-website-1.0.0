import Image from "next/image"


export default function Project() {
    return (
        <main className="flex justify-around w-full h-100">
         <div>
           <p>{`Hello! I'Hamza, a developer based in Pakistan`}</p>
           <p>I love building tools that are user-friendly, simple and delightful \r
              I was a student at Sylani Mass IT Training where I spent 8 months learning 
              the fundamentals of web development and programming. I also learned 
              about the Mern Stack and I have built a few projects using it. \r
              \r
              Through these experiences, I had the opportunity to work with a variety of
              technologies and frameworks.  I am currently working as a freelance
              developer in Fiverr and I am looking for a full-time position as a developer.
           </p>
         </div>
         <div>
              <Image
              src={'/hamza.jpg'}
              alt="Picture of the author"
              width={500}
              height={500}
              />
         </div>
        </main>
    );
  }