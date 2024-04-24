
import { motion} from "framer-motion"

const PredaterEp1 = () => {

  const Lang = localStorage.getItem('Lang');
  const textEn =["what!","WHAT HAPPENED","UUH UUH","HERH ...WHANT IT?","TAKE IT!","TOMMY REMEMBERED THE BIG ROCK. HE HAD HIDDEN UNDER IT WHEN JACK CHASED HIM FOR PUTTING HORSE HAIR IN HIS CIGARETTES.","At least Tommy could hear Jack coughing and swearing amidst the burning hair.","Good Lord!"
  ,"That's what killed your officer Sergeant."
  ,"You weren't kidding me this time...","Uh...","What does this cost? Can we afford to go into heavier production with this setup?"
  ,"Fire, but don't hit any civilians!",
  "This is great!",
  "Hmm. I can see him. With these special polarized goggles. Maybe he's affected by sound, like the white noise generated into the atomic interosciter."
,"YAAARG",
"HAHAHAHAHAHAHA",
"He seems to be insane. The creature is affected by the sound.", "He's trying to say something... communicate."
,"Say something... communicate.","I'll send it special delivery, Doc!",
"You can't stop us. We're going to take back what is ours."
,"Here... Want it? Take it. Really this time.",
"Tommy, get back!"]
  const textTh =["อะไรอะ","เกิดอะไรขึ้น","โอ้ยยยย","ต้องการไอนี้หรอ?","อยากได้ก็เอาไป!","อย่างน้อยทอมมีความจำเกี่ยวกับก้อนหินขนาดใหญ่ ที่เขาได้ซ่อนตัวอยู่ข้างใต้เมื่อแจ็คไล่ตามหาเขาเพราะว่าเขาใส่ขนม้าลงในบุหรี่ของเขา","อย่างน้อยทอมมีโอกาสได้ยินแจ็คไอเสียและสบประมาทขึ้นเสียงและเห็นการไหม้ของขนม้าที่ไฟไหม้ลุกขึ้น"]
  

  return (
    <div  className='max-w-[980px]  mx-auto border-[3px] mt-[30px] '>
  {/*1 Page */}
      <div className='relative'>
    {/*2 Backgroud-Img */}
        <img className=' max-w-full ' src="predater-img/ep1/full-1.png" alt="" />
    {/*3 Box-Content */}
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
       {/*4 Box-items-1 */}
             <div className='relative top-[1%]  mx-[8%]  h-[20%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/1.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                        
                </motion.div>
            </div>
            <div className='flex flex-row justify-between items-center relative top-[26%]  mx-[8%]  h-[20%] '>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/1.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/1.3.png)`,
                            backgroundSize: "cover",
                        }}>
                          <div className=' h-full '>
                            <h4 className='mt-[19%] ml-[6%] bg-red text-[1vw]'>{Lang ==="en"? textEn[1]:textTh[1]}</h4>
                          </div> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.75}}
                        viewport={{ once: true }} 
                        style={{
                            backgroundImage: `url(/predater-img/ep1/1.4.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-end items-center relative top-[27%]  mx-[8%]  h-[24%] '>
                <motion.div className='w-[50%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/1.5.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
             </div>
          </div>
        </div>
      </div>
  {/* 2 */}
      <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep1/full-2.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative top-[41%]  mx-[8%]  h-[18%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/2.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    {/* 3 */}
       <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep1/full-3.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative top-[1%]  mx-[8%]  h-[20%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/3.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex flex-row justify-start items-center relative top-[3%]  mx-[8%]  h-[28%] '>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/3.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[24%] ml-[2%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/3.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
              </div>
              <div className='relative top-[4%]  mx-[8%]  h-[18%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/3.4.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="predater-img/ep1/full-4.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='relative top-[63%]  mx-[8%]  h-[28%] '>
              <motion.div className='w-[25%] ml-[11%]  h-full border-[1px] border-black'

                      initial={{opacity:0,scale:2}}          
                      whileInView={{opacity:1,scale:1}}             
                      transition={{duration: 0.5,delay: 0.25}} 
                      viewport={{ once: true }}  //เล่นครั้งเดียว
                      style={{
                          backgroundImage: `url(/predater-img/ep1/4.1.png)`,
                          backgroundSize: "cover",
                      }}> 
              </motion.div>
          </div>
        </div>
      </div>
    </div>
    {/* 5 */}
    <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="predater-img/ep1/full-5.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='flex flex-row justify-start items-center relative top-[0%]  mx-[8%]  h-[28%] '>
                <motion.div className='w-[49%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/5.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
          </div>
        </div>
      </div>
    </div>
    {/* 6 */}
    <div className='box-1 relative'>
      <img className='box-items-1 max-w-full ' src="predater-img/ep1/full-6.png" alt="" />
      <div className='absolute inset-0 '>
        <div className='max-h-[100%] h-[1800px]'>
        <div className='flex flex-row justify-between items-center relative top-[0%]  mx-[8%]  h-[26%] '>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/6.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[30%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/6.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
                <motion.div className='w-[33%]  h-full border-[1px] border-black'
                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.50}}
                        viewport={{ once: true }} //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/6.3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
              </div>
              
        </div>
      </div>
    </div>
    {/* 7 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep1/full-7.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative top-[30%]  mx-[8%]  h-[18%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/7.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    {/* 8 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep1/full-8.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative top-[35%]  mx-[8%]  h-[27%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/8.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex justify-end relative top-[36.5%]  mx-[8%]  h-[31%] '>
                <motion.div className='w-[55%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/8.2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
          </div>
        </div>
      </div>
       {/* 9 */}
    <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="predater-img/ep1/full-9.png" alt="" />
        <div className='absolute inset-0 '>
          <div className='max-h-[100%] h-[1800px]'>
          <div className='relative top-[3%]  mx-[8%]  h-[27%] '>
                <motion.div className='w-[100%]  h-full border-[1px] border-black'

                        initial={{opacity:0,scale:0.2}}          
                        whileInView={{opacity:1,scale:1}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/9.1.png)`,
                            backgroundSize: "cover",
                        }}> 
                </motion.div>
            </div>
            <div className='flex justify-end relative top-[28%]  mx-[8%]  h-[39%] '>
                <motion.div className='w-[55%]  h-full border-[1px] border-black'

                        initial={{opacity:0,x:-75}}          
                        whileInView={{opacity:1,x:0}}              
                        transition={{duration: 0.5,delay: 0.25}} 
                        viewport={{ once: true }}  //เล่นครั้งเดียว
                        style={{
                            backgroundImage: `url(/predater-img/ep1/9.2.png)`,
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

export default PredaterEp1