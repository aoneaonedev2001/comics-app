import React from 'react'
import { motion} from "framer-motion"

const GodzillaEp3 = () => {
  return (
    <div  className='max-w-[980px]  mx-auto border-[3px] mt-[30px] '>
  {/*1 Page */}
      <div className='relative'>
    {/*2 Backgroud-Img */}
        <img className=' max-w-full ' src="godzilla-img/ep3/full-1.png" alt="" />
    {/*3 Box-Content */}
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
       {/*4 Box-items-1 */}
           
          </div>
        </div>
      </div>
  {/* 2 */}
      <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-2.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative flex flex-col gap-2 justify-start items-start top-[5%]  mx-[5%]  h-[51%] '>
                <motion.div className='w-[35%]  h-full '

                        initial={{opacity:0,x:75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/2.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[35%]   h-full '

                        initial={{opacity:0,x:75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/2.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[35%]   h-full '

                        initial={{opacity:0,x:75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/2.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-start items-center relative top-[11%]  mx-[5%]  h-[35%] '>
                <motion.div className='w-[61%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/2.4.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
           </div>
          </div>
        </div>
      </div>
    {/* 3 */}
       <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-3.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex flex-row justify-between items-center relative top-[2%]  mx-[2%]  h-[31%] '>
                <motion.div className='w-[33%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/3.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[66%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/3.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
          </div>
          <div className='flex flex-row justify-end items-center relative top-[4%]  mx-[2%]  h-[33%] '>
                <motion.div className='w-[46%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/3.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
           </div>
        </div>
        </div>
      </div>
      {/* 4 */}
      <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-4.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='flex flex-row justify-center items-center relative top-[3%]  mx-[5%]  h-[45%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/4.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                
            </div>
        </div>
      </div>
    </div>
    {/* 5 */}
    <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-5.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='flex flex-row justify-center items-center relative top-[2%]  mx-[5%]  h-[32%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/5.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                
            </div>
          <div className='flex flex-row justify-start items-center relative top-[27%]  mx-[2%]  h-[39%] '>
                <motion.div className='w-[33%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/5.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
             </div>
        </div>
      </div>
    </div>
    {/* 6 */}
    <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-6.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='flex flex-row justify-center items-center relative top-[1%]  mx-[5%]  h-[59%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/6.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                
            </div>
              
        </div>
      </div>
    </div>
    {/* 7 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-7.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
            <div className='flex flex-row justify-end items-center relative top-[2%]  mx-[3%]  h-[46%] '>
                <motion.div className='w-[30%] mr-[2%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/7.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/7.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    {/* 8 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-8.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative top-[43%]  mx-[0%]  h-[19%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/8.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex justify-end relative top-[43%]  mx-[3%]  h-[33%] '>
                <motion.div className='w-[41%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/8.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>
       {/* 9 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-9.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex justify-end relative top-[27%]  mx-[3%]  h-[25%] '>
                <motion.div className='w-[25%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/9.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-between items-center relative top-[28%]  mx-[2%]  h-[22%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/9.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                
            </div>
            
          </div>
        </div>
      </div>
       {/* 10 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-10.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex flex-row justify-between items-center relative top-[1%]  mx-[2%]  h-[34%] '>
                <motion.div className='w-[19%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/10.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[19%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/10.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[19%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/10.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[19%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/10.4.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[19%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/10.5.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-between items-center relative top-[48%]  mx-[8%]  h-[14%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/10.6.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                
            </div>
            
          </div>
        </div>
      </div>
       {/* 11 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="godzilla-img/ep3/full-11.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          
            <div className='flex flex-row justify-end items-center relative top-[6%]  mx-[3%]  h-[15%] '>
                <motion.div className='w-[76%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/11.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-center items-center relative top-[22%]  mx-[3%]  h-[15%] '>
                <motion.div className='w-[76%] z-10  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/11.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-between items-center relative top-[18%]  mx-[3%]  h-[51%] '>
                <motion.div className='w-[50%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/11.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[50%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/godzilla-img/ep3/11.4.png)`,
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

export default GodzillaEp3

