export default function Navbar() {
    return (
      <nav className="top-0 z-30 opacity-1 bg-white xl:justify-between 2xl:flex-row xl:flex-row md:flex-row  min-[320px]:flex-col min-[320px]:w-100 min-[320px]:object-fill min-[320px]:text-center lg:text-base sticky sm:justify-between mt-2 sm:text-sm sm:flex min-[638px]:flex  min-[320px]:flex min-[320px]:justify-between">
   
          <div className="font-bold max-xl:first-letter:first-line"> {`<Hamza Ali />`} </div>
                <div className="md:flex lg:gap-8 justify-end md:gap-6 sm:gap-4 min-[320px]">
                <p><a href="#about">About</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#blog">Certifications</a></p>
                <p><a href="#testimonial">Testimonial</a></p>
                <p><a href="#contact">Contact</a></p>
                
           </div>
      </nav>
    )
  }