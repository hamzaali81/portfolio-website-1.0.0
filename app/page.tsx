// import { Inter } from 'next/font/google'
import localFont from '@next/font/local'
import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import Project from './container/Project/Project'
import Certification from './container/Certification/Certification'
import Testimonial from './container/Testimonial/Testimonial'
import Contact from './container/Contact/Contact'
export default function Home() {
  return (
    <main className='flex lg:m-10 flex-col  sm:w-70 sm:m-4 w-90 mr-20 ml-20'>
        <Navbar />
      <div className='flex  flex-col justify-between mt-20 h-100'>
        <Header />
      </div>
       <Project/>
        <Certification />
        <Testimonial/>
        <Contact/>
    </main>
  )
}
