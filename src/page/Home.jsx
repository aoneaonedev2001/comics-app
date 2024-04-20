import React from 'react'
import Alret18 from '../component/Alret18'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div  className=' max-w-[1200px] flex justify-center h-screen items-center   mx-auto border-1 border '>
      <Alret18/>
      
      <Link to="/predater1" className=''>Ep1</Link>
      <Link to="/predater2" className=''>Ep2</Link>
    </div>
  )
}

export default Home