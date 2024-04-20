import {useState} from 'react'
import { motion} from "framer-motion"

const Test = () => {
  
   
  const [ShowA1,setShowA1]=useState(false)
   //console.log(ShowA1);
  
  return (
    <div  className='max-w-[1200px]  mx-auto border-[3px] mt-[30px] '>
  {/*1 Page */}
      <div className='box-1 relative'>
    {/*2 Backgroud-Img */}
        <img className='box-items-1 max-w-full ' src="full.png" alt="" />
    {/*3 Box-Content */}
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
       {/*4 Box-items-1 */}
             <div className='flex flex-row justify-between items-center relative top-[22%]  mx-[8%]  h-[22%] '>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/mask-group-2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/mask-group-3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/mask-group-4.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>

       {/*1 Page */}
       <div className='box-1 relative'>
    {/*2 Backgroud-Img */}
        <img className='box-items-1 max-w-full ' src="full.png" alt="" />
    {/*3 Box-Content */}
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
       {/*4 Box-items-1 */}
             <div className='flex flex-row justify-between items-center relative top-[22%]  mx-[8%]  h-[22%] '>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}
                        viewport={{margin:"-600px",once: true}} //จุดเเสดง -600px               
                        transition={{ type: "spring", stiffness: 400 }} 
                        style={{
                            backgroundImage: `url(/mask-group-2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}} 
                        viewport={{margin:"-600px",once: true}} //จุดเเสดง -600px             
                        transition={{ type: "spring", stiffness: 400 }}
                        style={{
                            backgroundImage: `url(/mask-group-3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                              
                                   
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, repeatDelay: 1 }}
                        
                        style={{
                            backgroundImage: `url(/mask-group-4.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/*2 Page */}
      <div className='box-1 relative'>
    {/*2 Backgroud-Img */}
        <img className='box-items-1 max-w-full ' src="full.png" alt="" />
    {/*3 Box-Content */}
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
       {/*4 Box-items-1 */}
       
             <div  className='flex flex-row justify-between items-center relative top-[22%]  mx-[8%]  h-[22%] '>
                  <motion.div 
                    onClick={()=>setShowA1(!ShowA1)}  
                    className='w-[30%]  h-full border-[1px] border-black'   
                    style={{
                        backgroundImage: `url(/mask-group-2.png)`,
                        backgroundSize: "cover",
                    }}> 
                  </motion.div>   
                  <motion.div
                    className='w-[30%] h-full border-[1px] border-black'
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate={ShowA1 ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: ShowA1 ? 0.5 : 0 }}
                    style={{
                      backgroundImage: `url(/mask-group-3.png)`,
                      backgroundSize: 'cover',
                    }}>
                    </motion.div>
                    <motion.div
                      className='w-[30%] h-full border-[1px] border-black'
                      variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial='hidden'
                      animate={ ShowA1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -75 }}
                      transition={{ duration: 0.5, delay: ShowA1 ? 0.75 : 0 }}
                      style={{
                        backgroundImage: `url(/mask-group-4.png)`,
                        backgroundSize: 'cover',
                      }}>
                        <div className='bg-red-300 h-full '>
                          <h2 className='bg-red text-[2vw]'>Aone5555555555555555</h2>
                        </div>
                        
                      </motion.div>
            </div>
          </div>
        </div>
      </div>

      <img src="full2.jpg" alt="" />

      
    </div>
  );
};

export default Test;
