export default function Navbar() {
    return (
      <nav className="flex sm:justify-between mt-2 sm:text-sm">
        {/* <Header/> */}
          <div className="font-bold max-xl:first-letter:first-line:"> {`<Hamza Ali />`} </div>
                <div className="flex gap-8">
                <p><a href="#about">About</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#blog">Blog</a></p>
                <p><a href="#testimonial">Testimonial</a></p>
                <p><a href="#contact">Contact</a></p>
                
           </div>
      </nav>
    )
  }