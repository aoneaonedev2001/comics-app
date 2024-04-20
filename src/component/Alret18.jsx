import { useState} from 'react';
import { motion,useAnimate } from "framer-motion";

const Alret18 = () => {
  const [showPlay1, setShowPlay1] = useState(false);
  const [showPlay2, setShowPlay2] = useState(false);
  const [showPlay3, setShowPlay3] = useState(false);
  const [showPlay4, setShowPlay4] = useState(false);

  const enterAnimation = async () => {
    setShowPlay1(true)
  };

  return (
    <>
        {!showPlay1 &&(
            <motion.div 
              
              className='w-[613px] h-[400px] border-[black] border-[3px] flex flex-col justify-end'
              initial={{opacity:0,x:-200}}          
              animate={{opacity:1,x:0}}              
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{
                backgroundImage: `url(/alert-img/alert-1.png)`,
                backgroundSize: "cover",
              }} 
              >
              <div className=' h-[full] '>
                <div className="border-[3px] flex items-center  border-[black] max-w-[450px] bg-white h-[70px] mx-auto">
                  <h2>Sorry, you must be at least 18 years old to access this content.</h2>
                </div>
                <div className=" my-[20px] flex flex-row justify-around">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='bg-white border-[3px] border-[black] w-[180px] h-[50px]'
                  >
                    Yes
                  </motion.button>
                  <motion.button 
                    onClick={enterAnimation}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='bg-white border-[3px] border-[black] w-[180px] h-[50px]'
                  >
                    no
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
       {showPlay1 &&(
            <motion.div 
              className={`${showPlay2 ? 'hidden':'relative w-[613px] h-[400px] border-[black] border-[3px] flex flex-col justify-end'}`}
              
              style={{
                backgroundImage: `url(/alert-img/alert-2.png)`,
                backgroundSize: "cover",
              }} 
            >
              <motion.img
               
               initial={{ opacity: 0, x: 0}}
               animate={{ opacity: 1, x: 200}}
               transition={{ duration: 1, delay: 1 }}
               className={`cover absolute w-[350px] h-[300px] bottom-[-189px] left-[92px] `} 
               src="/alert-img/vector-alert.png" alt="" 
               onAnimationComplete={() =>{
                setTimeout(() => {
                  setShowPlay2(true)
                }, 1000);
                } }
               />
            </motion.div>
         )}
         {showPlay2 &&(
          <motion.img 
          className={`${showPlay3 ? 'hidden':'cover border-[black] border-[3px]'}`}
          initial={{opacity:0,x:200}}          
          animate={{opacity:1,x:0}}              
          transition={{ type: "spring", stiffness: 600 }}
          src="/alert-img/alert-3.png" alt=""
          onAnimationComplete={() =>{
            setTimeout(() => {
              setShowPlay3(true)
            }, 1000);
            } }
          />
         )}
         {showPlay3 &&(
          <motion.div 
          className={`${showPlay4 ? 'hidden' : 'w-[900px] h-[511px] flex flex-row justify-between items-center'} `}
          
          >
          <motion.img className='cover border-[3px] border-black '
          initial={{opacity:0,x:-75}}          
          animate={{opacity:1,x:0}}              
          transition={{duration: 0.5,delay: 0.5}} 
          src="/alert-img/alert-4-1.png" alt="" 
          /> 
          <motion.img className='cover border-[3px] border-black '
          initial={{opacity:0,x:-75}}          
          animate={{opacity:1,x:0}}              
          transition={{duration: 0.5,delay: 1.2}} 
           src="/alert-img/alert-4-2.png" alt="" 
          /> 
          <motion.img className='cover border-[3px] border-black '
          initial={{opacity:0,x:-75}}          
          animate={{opacity:1,x:0}}              
          transition={{duration: 0.5,delay: 2}} 
          src="/alert-img/alert-4-3.png" alt="" 
          /> 
          <motion.img className='cover border-[3px] border-black '
          initial={{opacity:0,x:-75}}          
          animate={{opacity:1,x:0}}              
          transition={{duration: 0.5,delay: 3}} 
          src="/alert-img/alert-4-4.png" alt="" 
           onAnimationComplete={() =>{
            setTimeout(() => {
              setShowPlay4(true)
            }, 2000);
            } }
          /> 
          </motion.div>
         )}

         {showPlay4 &&(
          <motion.img 
          className={`cover border-[black] border-[3px]`}
          initial={{opacity:0,x:200}}          
          animate={{opacity:1,x:0}}              
          transition={{ type: "spring", stiffness: 600 }}
          src="/alert-img/alert-5.png" alt=""
          onAnimationComplete={() =>{
            // setTimeout(() => {
            //   setShowPlay3(true)
            // }, 1000);
            } }
          />
         )}
        </>
  )
}

export default Alret18