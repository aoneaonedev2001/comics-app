import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Alret18 = ({ enterAge }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleYesClick = () => setStep(1);
  const handleNoClick = () => navigate('/');;

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <motion.div 
            className='w-[613px] h-[400px] border-[black] border-[2px] flex flex-col justify-end   sm:w-[361px] sm:h-[257px] sm:bg-contain  sm:bg-no-repeat  sm:mt-[-300px]'
            initial={{ opacity: 0, x: -200 }}          
            animate={{ opacity: 1, x: 0 }}              
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ backgroundImage: `url(/alert-img/alert-1.png)`, backgroundSize: "cover" }}
          >
            <div className='h-[full]'>
              <div className="border-[2px] px-[25px] sm:p-[15px]  flex items-center border-[black] max-w-[450px] bg-white h-[70px] mx-auto sm:max-w-[270px]">
                <h2 className='text-[17px] font-semibold sm:text-[13px]'>Sorry, you must be at least 18 years old to access this content.</h2>
              </div>
              <div className="my-[20px] flex flex-row justify-around text-[17px] font-semibold">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='bg-white border-[2px] border-[black] w-[180px] h-[50px] sm:w-[133px] sm:h-[35px]'
                  onClick={handleYesClick}
                >
                  Yes
                </motion.button>
                <motion.button 
                  onClick={handleNoClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='bg-white border-[2px] border-[black] w-[180px] h-[50px] sm:w-[133px] sm:h-[35px]'
                >
                  No
                </motion.button>
              </div>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div 
            className='relative w-[613px] h-[400px] border-[black] border-[2px] flex flex-col justify-end sm:w-[361px] sm:h-[257px] sm:bg-contain  sm:bg-no-repeat  sm:mt-[-300px]'
            style={{ backgroundImage: `url(/alert-img/alert-2.png)`, backgroundSize: "cover" }}
          >
            <motion.img
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 200 }}
              transition={{ duration: 1, delay: 1 }}
              className='cover absolute w-[350px] h-[300px] bottom-[-189px] left-[92px] sm:w-[200px] sm:left-[60px]' 
              src="/alert-img/vector-alert.png" 
              alt="" 
              onAnimationComplete={() => setTimeout(() => setStep(2), 1000)}
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.img 
            className='cover border-[black] border-[2px] md:w-[613px] md:h-[400px] sm:w-[361px] sm:h-[257px] sm:bg-contain  sm:bg-no-repeat  sm:mt-[-300px]'
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 600 }}
            src="/alert-img/alert-3.png" 
            alt=""
            onAnimationComplete={() => setTimeout(() => setStep(3), 1000)}
          />
        );
      case 3:
        return (
          <motion.div className='w-[900px] h-[511px] flex flex-row justify-between items-center sm:mt-[-300px] sm:w-[361px] sm:h-[257px] '>
            {['alert-4-1.png', 'alert-4-2.png', 'alert-4-3.png', 'alert-4-4.png'].map((img, index) => (
              <motion.img 
                key={img}
                className='cover border-[2px] border-black  sm:w-[80px] sm:h-[350px] sm:bg-contain  sm:bg-no-repeat'
                initial={{ opacity: 0, x: -75 }}          
                animate={{ opacity: 1, x: 0 }}              
                transition={{ duration: 0.5, delay: 0.5 + index * 0.7 }}
                src={`/alert-img/${img}`} 
                alt="" 
                onAnimationComplete={() => index === 3 && setTimeout(() => setStep(4), 2000)}
              />
            ))}
          </motion.div>
        );
      case 4:
        return (
          <motion.img 
            className='cover border-[black] border-[2px] md:w-[700px] md:h-[400px]   sm:mt-[-300px]'
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 600 }}
            src="/alert-img/alert-5.png" 
            alt=""
            onAnimationComplete={() => {
              setTimeout(() => {
                enterAge(true)
              }, 1000);
            }}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderStepContent()}</>;
};

export default Alret18;
