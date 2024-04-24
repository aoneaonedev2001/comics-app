import React from 'react'
import { motion} from "framer-motion"

const PredaterEp3 = () => {
  return (
    <div  className='max-w-[980px]  mx-auto border-[3px] mt-[30px] '>
  {/*1 Page */}
      <div className='relative'>
    {/*2 Backgroud-Img */}
        <img className=' max-w-full ' src="predater-img/ep3/full-1.png" alt="" />
    {/*3 Box-Content */}
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
       {/*4 Box-items-1 */}
             
            <div className='flex flex-row justify-between items-center relative top-[25%]  mx-[4%]  h-[27%] '>
                <motion.div className='w-[40%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/1.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[27%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/1.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[27%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/predater-img/ep3/1.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            
          </div>
        </div>
      </div>
  {/* 2 */}
      <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-2.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex flex-row justify-end items-center relative top-[4%]  mx-[2%]  h-[22%] '>
                <motion.div className='w-[36%]   h-full '

                    initial={{opacity:0,x:-75}}          
                    whileInView={{opacity:1,x:0}}              
                    transition={{duration: 0.5,delay: 0.25}} 
                    viewport={{ once: true }}  //เล่นครั้งเดียว
                    style={{
                        backgroundImage: `url(/predater-img/ep3/2.2.png)`,
                        backgroundSize: "cover",
                    }}> 
                </motion.div>
                <motion.div className='w-[36%]  h-full '

                    initial={{opacity:0,x:-75}}          
                    whileInView={{opacity:1,x:0}}              
                    transition={{duration: 0.5,delay: 0.25}} 
                    viewport={{ once: true }}  //เล่นครั้งเดียว
                    style={{
                        backgroundImage: `url(/predater-img/ep3/2.3.png)`,
                        backgroundSize: "cover",
                    }}> 
                    </motion.div>
               
             </div>
             <div className='flex flex-row justify-end items-center relative top-[54%]  mx-[2%]  h-[22%] '>
                <motion.div className='w-[80%]   h-full '

                    initial={{opacity:0,x:-75}}          
                    whileInView={{opacity:1,x:0}}              
                    transition={{duration: 0.5,delay: 0.25}} 
                    viewport={{ once: true }}  //เล่นครั้งเดียว
                    style={{
                        backgroundImage: `url(/predater-img/ep3/2.5.png)`,
                        backgroundSize: "cover",
                    }}> 
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    {/* 3 */}
       <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-3.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex flex-row justify-end items-center relative top-[80%]  mx-[2%]  h-[15%] '>
                <motion.div className='w-[47%]   h-full '

                    initial={{opacity:0,x:-75}}          
                    whileInView={{opacity:1,x:0}}              
                    transition={{duration: 0.5,delay: 0.25}} 
                    viewport={{ once: true }}  //เล่นครั้งเดียว
                    style={{
                        backgroundImage: `url(/predater-img/ep3/3.1.png)`,
                        backgroundSize: "cover",
                    }}> 
                </motion.div>
             </div>
           
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-4.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='relative flex justify-center top-[40%]  mx-[1%]  h-[16%] '>
                <motion.div className='w-[64%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/4.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            
        </div>
      </div>
    </div>
    {/* 5 */}
    <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-5.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='flex  items-center relative top-[50%]  mx-[0%]  h-[13%] '>
                <motion.div className='w-[100%]   h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/5.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
          </div>
        </div>
      </div>
    </div>
    {/* 6 */}
    <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-6.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='flex flex-row justify-center items-center relative top-[4%]  mx-[1%]  h-[13%] '>
                <motion.div className='w-[94%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/6.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-center items-center relative top-[22%]  mx-[7%]  h-[18%] '>
                <motion.div className='w-[50%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/6.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[50%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/6.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
        
            </div>
              
        </div>
      </div>
    </div>
    {/* 7 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-7.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex  items-center relative top-[1%]  mx-[1%]  h-[21%] '>
                <motion.div className='w-[100%]   h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/7.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
          </div>
          <div className='flex  items-center relative top-[1%]  mx-[1%]  h-[21%] '>
                <motion.div className='w-[100%]   h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/7.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
          </div>
          </div>
        </div>
      </div>
    {/* 8 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-8.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex flex-row justify-start items-center relative top-[4.5%]  mx-[4%]  h-[15%] '>
                <motion.div className='w-[48%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/8.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>  
            </div>
            <div className='flex flex-row justify-center items-center relative top-[62%]  mx-[1%]  h-[18%] '>
                <motion.div className='w-[94%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/8.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>
      
       {/* 9 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-9.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative flex justify-end items-center top-[51%]  mx-[1%]  h-[15%] '>
                <motion.div className='w-[68%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/9.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='relative flex justify-end items-center top-[52%]  mx-[1%]  h-[28%] '>
                <motion.div className='w-[68%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/9.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            
          </div>
        </div>
      </div>
         {/* 10 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-10.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
         
            
          </div>
        </div>
      </div>
       {/* 11 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep3/full-11.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex flex-row justify-between items-center relative top-[26%]  mx-[7%]  h-[18%] '>
                <motion.div className='w-[49%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/11.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[49%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/11.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-center items-center relative top-[27%]  mx-[1%]  h-[30%] '>
                <motion.div className='w-[94%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep3/11.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            
          </div>
        </div>
      </div>
            
         
    

      
    </div>
  )
}

export default PredaterEp3