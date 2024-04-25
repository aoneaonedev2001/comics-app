import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Data = [
  [
    { id: 1, srcImg: "/home/book-1.1.png", UrlLink: "/predater1" },
    { id: 2, srcImg: "/home/book-1.2.png", UrlLink: "/predater2" },
    { id: 3, srcImg: "/home/book-1.3.png", UrlLink: "/predater3" },
  ],
  [
    { id: 1, srcImg: "/home/book-2.1.png", UrlLink: "/godzilla1" },
    { id: 2, srcImg: "/home/book-2.2.png", UrlLink: "/godzilla2" },
    { id: 3, srcImg: "/home/book-2.3.png", UrlLink: "/godzilla3" },
  ],
  [
    { id: 1, srcImg: "/home/book-3.1.png", UrlLink: "/spiderman1" },
    { id: 2, srcImg: "/home/book-3.2.png", UrlLink: "/spiderman2" },
  ],
];

const Home = () => {
  const currentTheme = localStorage.getItem("Theme");

  return (
    <div className="w-[1200px] sm:w-[400px] lg:w-[1000px]  md:w-[700px]  mx-auto">
      <section
        className="section1 sm:h-[210px] md:h-[260px]  rounded-[10px] relative my-[60px]  h-[400px] border-[1px]  "
        style={{ backgroundImage: `url(/home/bg-home.png)` }}
      >
        {currentTheme === "darkMod" ? (
          <motion.img
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="cover z-10 absolute md:left-[-40px]   md:h-[303px]  sm:w-[235px] sm:h-[258px] sm:left-[-42px] left-[-105px] bottom-0 h-[450px] "
            src="/home/1.1-dark.png"
            alt=""
          />
        ) : (
          <motion.img
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="cover absolute   sm:w-[68px] sm:h-[172px] md:w-[102px] md:h-[226px] "
            src="/home/1.1.png"
            alt=""
          />
        )}

        {currentTheme === "darkMod" ? (
          <motion.img
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
            className="cover absolute md:h-[258px]  sm:w-[153px]  sm:h-[207px]  right-[0px] "
            src="/home/1.2-dark.png"
            alt=""
          />
        ) : (
          <motion.img
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
            className="cover absolute sm:w-[153px] sm:right-[-11px] sm:h-[207px] md:w-[269px] md:h-[259px] h-[392px] right-[-33px] md:right-[-20px] "
            src="/home/1.2.png"
            alt=""
          />
        )}

        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className={`cover absolute lg:w-[637px] lg:top-[43px]  sm:w-[294px] sm:h-[83px]  sm:left-[70px] md:w-[508px] md:h-[104px] md:left-[122px]   top-[3px]  ${
            currentTheme === "darkMod" ? "left-[310px] md:left-[171px]  sm:top-[-7px] " : "left-[200px] sm:top-[17px] "
          } `}
          src="/home/1.3.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
          className={`cover absolute lg:w-[313px] lg:h-[278px]   md:w-[267px] md:h-[203px] md:top-[18px] lg:top-[56px]  sm:w-[159px] sm:h-[157px]  sm:top-[24px]  top-[10px] ${
            currentTheme === "darkMod" ? "left-[547px] lg:left-[446px] md:left-[277px] sm:hidden" : "left-[369px] sm:left-[123px] md:left-[237px] lg:left-[349px]"
          } `}
          src="/home/1.4.png"
          alt=""
        />

        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
          className={`z-20 flex gap-4 absolute sm:left-[57px]  md:left-[86px] ${
            currentTheme === "darkMod" ? "left-[297px] " : "left-[155px] "
          } bottom-[20px]`}
        >
          {Data[0].map((item) => (
            <Link key={item.id} to={item.UrlLink}>
              <motion.img
                whileHover={{ opacity: 1, y: -10 }}
                className="cover sm:w-[47px] sm:h-[66px] md:w-[47px] md:h-[73px]"
                src={item.srcImg}
                alt=""
              />
            </Link>
          ))}
        </motion.div>
      </section>
      <section className="section2 sm:h-[210px] md:h-[260px]   rounded-[10px] relative my-[60px]  h-[400px] border-[1px]  bg-gradient-to-b from-[#EF1C25] to-[#FEDC0D]">
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="cover   absolute sm:w-[400px] sm:h-[206px]  md:w-[700px] md:h-[260px] z-10 h-[392px]"
          src="/home/2.1.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          viewport={{ once: true }}
          className="cover lg:left-[25px] md:w-[136px] md:h-[77px] sm:w-[89px] sm:h-[52px] sm:top-[-13px] sm:left-[7px]   top-[-27px] left-[50px]  absolute "
          src="/home/2.2.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="cover lg:left-[222px] lg:h-[207px]  lg:top-[1px] md:w-[484px] md:h-[136px] md:left-[171px]  sm:w-[294px] sm:h-[90px] sm:top-[7px] md:top-[-7px] sm:left-[85px]  top-[-27px] left-[289px]  absolute "
          src="/home/2.3.png"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
          className={`z-20 flex gap-4 absolute sm:left-[57px]  md:left-[86px] ${
            currentTheme === "darkMod" ? "left-[297px] " : "left-[155px] "
          } bottom-[20px]`}
        >
          {Data[1].map((item) => (
            <Link key={item.id} to={item.UrlLink}>
              <motion.img
                whileHover={{ opacity: 1, y: -10 }}
                className="cover sm:w-[47px] sm:h-[66px] md:w-[47px] md:h-[73px]"
                src={item.srcImg}
                alt=""
              />
            </Link>
          ))}
        </motion.div>
      </section>
      <section className="section3 sm:h-[210px] md:h-[260px]   rounded-[10px] relative mb-[60px]  h-[400px] border-[1px]  bg-gradient-to-b from-[#1973DC] to-[#BDE1EC]">
        <motion.img
          className="cover  md:w-[520px] md:h-[231px] sm:w-[301px] sm:h-[177px] sm:top-[61px] top-[67px] bottom-[0px] right-[0px]  absolute "
          src="/home/3.1.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="cover  md:w-[278px] md:h-[240px] sm:w-[160px] sm:h-[179px] h-[342px] bottom-[0px] light-[0px]  absolute "
          src="/home/3.2.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          viewport={{ once: true }}
          className="cover  md:w-[200px] md:h-[192px] sm:w-[161px] sm:h-[145px] sm:right-[-32px] top-[-30px] right-[-63px]  absolute "
          src="/home/3.3.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          viewport={{ once: true }}
          className="cover lg:right-[5px] md:w-[353px] md:h-[138px] sm:w-[220px] sm:h-[103px] sm:right-[13px] sm:top-[19px]  top-[27px] right-[45px]  absolute "
          src="/home/3.4.png"
          alt=""
        />
         <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
          className={`z-20 flex gap-4 absolute sm:left-[57px]  md:left-[86px] ${
            currentTheme === "darkMod" ? "left-[297px] " : "left-[155px] "
          } bottom-[20px]`}
        >
          {Data[2].map((item) => (
            <Link key={item.id} to={item.UrlLink}>
              <motion.img
                whileHover={{ opacity: 1, y: -10 }}
                className="cover sm:w-[47px] sm:h-[66px] md:w-[47px] md:h-[73px]"
                src={item.srcImg}
                alt=""
              />
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
