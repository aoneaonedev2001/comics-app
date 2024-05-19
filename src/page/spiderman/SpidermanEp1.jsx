import React from "react";
import { motion } from "framer-motion";

const SpidermanEp1 = () => {
  return (
    <div className="max-w-[980px]  mx-auto border-[3px] mt-[30px] scroll-smooth">
      {/*1 Page */}
      <div className="relative">
        {/*2 Backgroud-Img */}
        <img
          className=" max-w-full "
          src="spiderman-img/ep1/full-1.png"
          alt=""
        />
        {/*3 Box-Content */}
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            {/*4 Box-items-1 */}
            <div className="relative flex justify-end top-[5%]  mx-[8%]  h-[19.5%] ">
              <motion.div
                className="w-[50%]  h-full "
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/1.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="relative flex justify-start top-[39.5%]  mx-[7%]  h-[40%] ">
              <motion.div
                className="w-[28%]  h-full "
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/1.2.png)`,
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
          src="spiderman-img/ep1/full-2.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row  items-center relative top-[2%]  mx-[8%]  h-[25%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/2.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row  items-center relative top-[21%]  mx-[8%]  h-[25%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/2.2.png)`,
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
          src="spiderman-img/ep1/full-3.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row justify-between items-center relative top-[22%]  mx-[8%]  h-[45%] ">
              <motion.div
                className="w-[30%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/3.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <motion.div
                className="w-[30%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/3.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <motion.div
                className="w-[30%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/3.3.png)`,
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
          src="spiderman-img/ep1/full-4.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row  items-center relative top-[2%]  mx-[13%]  h-[17%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/4.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row  items-center relative top-[0%]  mx-[5%]  h-[27%] ">
              <motion.div
                className="w-[100%]  h-full "
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/4.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row gap-2 items-center relative top-[4%]  mx-[4%]  h-[50%] ">
              <motion.div
                className="w-[30%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/4.3.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <motion.div
                className="w-[30%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/4.4.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <div className="w-[39%] flex flex-col items-center py-[8%] justify-between h-full   ">
                <motion.div
                  className="w-[100%]  h-[38%] border-[1px] border-black"
                  initial={{ opacity: 0, x: -75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  style={{
                    backgroundImage: `url(/spiderman-img/ep1/4.5.png)`,
                    backgroundSize: "cover",
                  }}
                ></motion.div>
                <motion.div
                  className="w-[100%]  h-[38%] border-[1px] border-black"
                  initial={{ opacity: 0, x: -75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{
                    backgroundImage: `url(/spiderman-img/ep1/4.6.png)`,
                    backgroundSize: "cover",
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="box-1 relative">
        <img
          className="box-items-1 max-w-full "
          src="spiderman-img/ep1/full-5.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row  items-center relative top-[38%]  mx-[7%]  h-[19%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/5.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-center  items-center relative top-[39%]  mx-[7%]  h-[33%] ">
              <motion.div
                className="w-[47%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/5.2.png)`,
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
          src="spiderman-img/ep1/full-6.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row justify-between items-center relative top-[0%]  mx-[8%]  h-[32%] ">
              <motion.div
                className="w-[30%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/6.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <motion.div
                className="w-[20%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/6.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <motion.div
                className="w-[22%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/6.3.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <motion.div
                className="w-[24%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  backgroundImage: `url(/spiderman-img/ep1/6.4.png)`,
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

export default SpidermanEp1;
