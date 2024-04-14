import React from 'react'
import {Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='h-[61px] border-b-1 border sticky top-0 z-10 '>
      <div className='max-w-[1140px] mx-auto flex justify-between items-center h-full '>
          <Link to="/" className=''>MARVEl</Link>
          <div>
            en/th
          </div>
      </div>
    </div>
  )
}

export default Navbar