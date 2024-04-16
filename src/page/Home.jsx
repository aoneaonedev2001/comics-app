import {useState} from 'react'
import { motion } from "framer-motion"

const Home = () => {
    const [ShowA1, setShowA1] = useState(false);
    console.log(ShowA1);
  return (
    <div className=' max-w-[1200px]    mx-auto border-1 border '>

    {/* page 1*/}
      <div
          className="bg-contain bg-no-repeat h-[1800px] max-w-[full]   flex flex-col border-1 border  "
          style={{
          backgroundImage: `url(/full.png)`
           }}
       >
            <div className='flex flex-row justify-between items-center h-[20%]   relative mx-[96px] top-[405px]'>
                
            <motion.div
        onClick={() => setShowA1(!ShowA1)}
        className='w-[30%] h-full border-[1px] border-black'
        style={{
          backgroundImage: `url(/mask-group-2.png)`,
          backgroundSize: 'cover',
        }}
      ></motion.div>
      <motion.div
        className='w-[30%] h-full border-[1px] border-black'
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={ShowA1 ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: ShowA1 ? 0.5 : 0 }}
        style={{
          backgroundImage: `url(/mask-group-3.png)`,
          backgroundSize: 'cover',
        }}
      ></motion.div>
      <motion.div
        className='w-[30%] h-full border-[1px] border-black'
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={ShowA1 ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: ShowA1 ? 0.75 : 0 }}
        style={{
          backgroundImage: `url(/mask-group-4.png)`,
          backgroundSize: 'cover',
        }}
      ></motion.div>
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