// import { Inter } from 'next/font/google'
import localFont from '@next/font/local'
import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'


export default function Home() {
  return (
    <main className='flex flex-col justify-between w-90'>
      <div className='flex flex-col justify-between p-10 m-10'>
        <Navbar />
        <Header />
      </div>
      
    </main>
  )
}
