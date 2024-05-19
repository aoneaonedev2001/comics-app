import React from "react";
import { motion } from "framer-motion";

const GodzillaEp2 = () => {
  return (
    <div className="max-w-[980px]  mx-auto border-[3px] mt-[30px] scroll-smooth">
      {/*1 Page */}
      <div className="relative">
        {/*2 Backgroud-Img */}
        <img
          className=" max-w-full "
          src="godzilla-img/ep2/full-1.png"
          alt=""
        />
        {/*3 Box-Content */}
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">{/*4 Box-items-1 */}</div>
        </div>
      </div>
      {/* 2 */}
      <div className="box-1 relative">
        <img
          className="box-items-1 max-w-full "
          src="godzilla-img/ep2/full-2.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row  items-center relative top-[3%]  mx-[2%]  h-[24%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/2.1.png)`,
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
          src="godzilla-img/ep2/full-3.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row justify-start items-center relative top-[31%]  mx-[5%]  h-[37%] ">
              <motion.div
                className="w-[62%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/3.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-center items-center relative top-[33%]  mx-[5%]  h-[29%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/3.2.png)`,
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
          src="godzilla-img/ep2/full-4.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row  items-center relative top-[5%]  mx-[2%]  h-[25%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/4.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row  items-center relative top-[6%]  mx-[2%]  h-[28%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/4.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-between items-center relative top-[7%]  mx-[5%]  h-[38%] ">
              <motion.div
                className="w-[48%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/4.3.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <motion.div
                className="w-[48%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }} //เล่นครั้งเดียว
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/4.4.png)`,
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
          src="godzilla-img/ep2/full-5.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row  items-center relative top-[59%]  mx-[2%]  h-[35%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/5.1.png)`,
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
          src="godzilla-img/ep2/full-6.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row justify-between items-center relative top-[0%]  mx-[5%]  h-[45%] ">
              <motion.div
                className="w-[49%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/6.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <motion.div
                className="w-[49%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }} //เล่นครั้งเดียว
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/6.2.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row justify-between items-center relative top-[3%]  mx-[5%]  h-[45%] ">
              <motion.div
                className="w-[49%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/6.3.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
              <motion.div
                className="w-[49%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }} //เล่นครั้งเดียว
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/6.4.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* 7 */}
      <div className="box-1 relative">
        <img
          className="box-items-1 max-w-full "
          src="godzilla-img/ep2/full-7.png"
          alt=""
        />
        <div className="absolute inset-0 ">
          <div className="max-h-[100%] h-[1800px]">
            <div className="flex flex-row justify-end items-center relative top-[5%]  mx-[3%]  h-[35%] ">
              <motion.div
                className="w-[23%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/7.1.png)`,
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="flex flex-row  items-center relative top-[7%]  mx-[2%]  h-[58%] ">
              <motion.div
                className="w-[100%]  h-full border-[1px] border-black"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(/godzilla-img/ep2/7.2.png)`,
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

export default GodzillaEp2;
