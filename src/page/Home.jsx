import React from 'react'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className=' w-[1200px]  mx-auto border-1 border h-[1795px]'>

    {/* page 1*/}
      <div
          className="max-w-full  h-full flex flex-col border-1 border  "
          style={{
          backgroundImage: `url(/full.png)`,
          backgroundSize: "cover"
           }}
       >
            <div className='flex flex-row justify-between items-center   relative mx-[96px] top-[405px]'>
                
                <motion.div className='w-[35%]  h-[400px]'
                    style={{
                        backgroundImage: `url(/mask-group-2.png)`,
                        backgroundSize: "cover",
                    }}> 
                    
            {/* Test text */}
                    <div className='mt-[50px] bg-red-200 border-[3px]  border-black h-[50px]'>
                        <h1>ffffffffffffffffffffffffff</h1>
                    </div>
                    
                </motion.div>
                <motion.div  className='w-[30%]  h-[400px] border-[3px] border-black'
                    style={{
                        backgroundImage: `url(/mask-group-3.png)`,
                        backgroundSize: "cover",
                    }}>
            {/* Test text */}
                        <div className='absolute mt-[50px] bg-red-200 border-[3px]  border-black h-[50px]'>
                            <h1>ffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</h1>
                        </div> 
                    
                </motion.div>
                <motion.div className='w-[30%]  h-[400px] border-[3px] border-black'
                    style={{
                        backgroundImage: `url(/mask-group-4.png)`,
                        backgroundSize: "cover",
                    }}> 
                    {/* Test text */}
                    
                    
                </motion.div>
            </div>
        </div>

    {/* page 2*/}
        {/* <div
          className="max-w-full  h-full flex flex-col border-1 border  "
          style={{
          backgroundImage: `url(/full2.jpg)`,
          backgroundSize: "cover"
           }}
        >
      </div> */}

    </div>
  )
}

const cardContent = ()=>{
    return(
    <div>
       dfsdfsdfsdfsdf
    </div>
    )
}

export default Home