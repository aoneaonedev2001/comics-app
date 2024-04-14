import React from 'react';

const Test = () => {
  return (
    <div className='max-w-[1200px]  mx-auto border-[3px] mt-[30px] '>
      <div className='box-1 relative'>
        <img className='box-items-1 max-w-full ' src="full.png" alt="" />
        <div className='absolute inset-0 '>
    {/* box 1 page */}
          <div className='max-h-[100%] h-[1800px]  '>
       
       {/* box-items-1 */}
             <div className='flex flex-row justify-between items-center relative top-[22%]  mx-[8%]  h-[22%] '>
                <div className='w-[30%]  h-full border-[1px] border-black'
                        style={{
                            backgroundImage: `url(/mask-group-2.png)`,
                            backgroundSize: "cover",
                        }}> 
                </div>
                <div className='w-[30%]  h-full border-[1px] border-black'
                        style={{
                            backgroundImage: `url(/mask-group-3.png)`,
                            backgroundSize: "cover",
                        }}> 
                </div>
                <div className='w-[30%]  h-full border-[1px] border-black'
                        style={{
                            backgroundImage: `url(/mask-group-4.png)`,
                            backgroundSize: "cover",
                        }}> 
                </div>
            </div>
          </div>

        </div>
        
        
        
      </div>
    </div>
  );
};

export default Test;
