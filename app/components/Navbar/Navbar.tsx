export default function Navbar() {
    return (
      <nav className="flex justify-between mt-2">
        {/* <Header/> */}
          <div className="">Hamza Ali </div>
                <div className="flex gap-8">
                <p><a href="#about">About</a></p>
                <p><a href="#project">Project</a></p>
                <p><a href="#blog">Blog</a></p>
                <p><a href="#testimonial">Testimonial</a></p>
                <p><a href="#contact">Contact</a></p>
                
           </div>
      </nav>
    )
  }