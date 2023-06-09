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
    <main className='xl:flex min-[320px]:text-center min-[320px]:flex-col xl:justify-between lg:m-10 flex-col min-[320px]:w-100 xl:w-90 sm:m-2 2xl:w-90 mr-20 ml-20'>
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
