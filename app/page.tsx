// import { Inter } from 'next/font/google'
import localFont from '@next/font/local'
import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import Project from './container/Project/Project'
import Blog from './container/Blog/Blog'

export default function Home() {
  return (
    <main className='flex flex-col justify-between w-90 mr-20 ml-20'>
        <Navbar />
      <div className='flex flex-1 flex-col justify-between mt-20 h-100'>
        <Header />
      </div>
       <Project/>
        <Blog/>
    </main>
  )
}
