import React from "react";
import { motion } from "framer-motion";

const SpidermanEp2 = () => {
  return (
    <div className="max-w-[980px]  mx-auto border-[3px] mt-[30px] scroll-smooth">
      {/*1 Page */}
      <div className="relative">
        {/*2 Backgroud-Img */}
        <img
          className=" max-w-full "
          src="spiderman-img/ep2/full-1.png"
          alt=""
        />
        {/*3 Box-Content */}
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            {/*4 Box-items-1 */}
            <div className="relative flex justify-start top-[6%]  mx-[8%]  h-[37%] ">
              <motion.div
                className="w-[17%] ml-[19%]  h-full "
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/1.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-center  items-center relative top-[8%]  mx-[7%]  h-[29%] ">
              <motion.div
                className="w-[60%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/1.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="box-1 relative">
        <img
          className="box-items-1 max-w-full "
          src="spiderman-img/ep2/full-2.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row  items-center relative top-[2%]  mx-[8%]  h-[20%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/2.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-end  items-center relative top-[21%]  mx-[8%]  h-[15%] ">
              <motion.div
                className="w-[65%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/2.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="box-1 relative">
        <img
          className="box-items-1 max-w-full "
          src="spiderman-img/ep2/full-3.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row  items-center relative top-[23%]  mx-[8%]  h-[10%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/3.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-end  items-center relative top-[43%]  mx-[8%]  h-[13%] ">
              <motion.div
                className="w-[54%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/3.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row  items-center relative top-[44%]  mx-[8%]  h-[23%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/3.3.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="box-1 relative">
        <img
          className="box-items-1 max-w-full "
          src="spiderman-img/ep2/full-4.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row justify-end  items-center relative top-[5%]  mx-[5%]  h-[28%] ">
              <motion.div
                className="w-[38%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/4.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row  items-center relative top-[5.5%]  mx-[8%]  h-[17%] ">
              <motion.div
                className="w-[100%]  h-full "
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/4.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="box-1 relative">
        <img
          className="box-items-1 max-w-full "
          src="spiderman-img/ep2/full-5.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row justify-start  items-center relative top-[2%]  mx-[7%]  h-[18%] ">
              <motion.div
                className="w-[28%]  h-full "
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/5.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-center  items-center relative top-[21%]  mx-[7%]  h-[16%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/5.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-center  items-center relative top-[38%]  mx-[7%]  h-[18%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/5.3.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* 6 */}
      <div className="box-1 relative">
        <img
          className="box-items-1 max-w-full "
          src="spiderman-img/ep2/full-6.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row justify-center  items-center relative top-[3%]  mx-[7%]  h-[29%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/6.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-start  items-center relative top-[6%]  mx-[7%]  h-[30%] ">
              <motion.div
                className="w-[67%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/6.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-center  items-center relative top-[7%]  mx-[7%]  h-[25%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep2/6.3.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpidermanEp2;
