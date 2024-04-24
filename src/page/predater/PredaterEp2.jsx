import React from 'react'
import { motion} from "framer-motion"

const PredaterEp2 = () => {
  // const textEn =["Y'om boys'll see!",
  // "The Klan smokes today. It's a busy day, in this heat, too.",
  // "It's Big John, I tell yom-- Let's hightail it outta here!",
  // "Hush now. We're getting close.", "The gollywomp.",
  // "Let's git outta here before he sees us.",
  // "Do you know how much people would pay t' see that thing?",
  // "Do what you want, I'ma git me a gollywomp.",
  // "Shit yourself, I'm leavin'.","You got him!", "MR. LEBLANC, WAIT FOR ME!","YOU GOTTA HELP ME!",
  // "I can lose him! I know this swamp like the back of my hand.","You'll slow me down, old man!",
  // "Big John! He's too small! You need somebody big, like me. I got a lot of skin.","AR HHGG",
  // "I got somethin' fer you, Mister Gollywomp.",]
  
  return (
    <div  className='max-w-[980px]  mx-auto border-[3px] mt-[30px] '>
  {/*1 Page */}
      <div className='relative'>
    {/*2 Backgroud-Img */}
        <img className=' max-w-full ' src="predater-img/ep2/full-1.png" alt="" />
    {/*3 Box-Content */}
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
       {/*4 Box-items-1 */}
             
            <div className='flex flex-row justify-between items-center relative top-[3%]  mx-[2%]  h-[49%] '>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/1.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/1.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/predater-img/ep2/1.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            
          </div>
        </div>
      </div>
  {/* 2 */}
      <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep2/full-2.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex flex-row justify-end items-center relative top-[59%]  mx-[8%]  h-[37%] '>
                <motion.div className='w-[50%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/2.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    {/* 3 */}
       <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep2/full-3.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative top-[62%]  mx-[1%]  h-[36%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/3.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
           
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="predater-img/ep2/full-4.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='relative top-[40%]  mx-[1%]  h-[20%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/4.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-between items-center relative top-[41%]  mx-[2%]  h-[37%] '>
                <motion.div className='w-[33%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/4.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/4.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/predater-img/ep2/4.4.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
        </div>
      </div>
    </div>
    {/* 5 */}
    <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="predater-img/ep2/full-5.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='flex flex-row justify-start items-center relative top-[46%]  mx-[0%]  h-[18%] '>
                <motion.div className='w-[49%] ml-[3%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/5.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
          </div>
        </div>
      </div>
    </div>
    {/* 6 */}
    <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="predater-img/ep2/full-6.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='flex flex-row justify-between items-center relative top-[1%]  mx-[2%]  h-[43%] '>
                <motion.div className='w-[33%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/6.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/6.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/predater-img/ep2/6.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/predater-img/ep2/6.4.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
              
        </div>
      </div>
    </div>
    {/* 7 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep2/full-7.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative top-[1%]  mx-[1%]  h-[34%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/7.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    {/* 8 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep2/full-8.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='flex flex-row justify-between items-center relative top-[1%]  mx-[2%]  h-[51%] '>
                <motion.div className='w-[33%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/8.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/8.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/predater-img/ep2/8.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                
            </div>
          </div>
        </div>
      </div>
      
       {/* 9 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep2/full-9.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative top-[37%]  mx-[1%]  h-[24%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep2/9.1.png)`,
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

export default PredaterEp2