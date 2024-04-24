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
    <div className="w-[1200px]  mx-auto">
      <section
        className="section1 rounded-[10px] relative my-[60px]  h-[400px] border-[1px]  "
        style={{ backgroundImage: `url(/home/bg-home.png)` }}
      >
        {currentTheme === "darkMod" ? (
          <motion.img
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="cover z-10 absolute left-[-105px] bottom-0 h-[450px] "
            src="/home/1.1-dark.png"
            alt=""
          />
        ) : (
          <motion.img
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="cover absolute "
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
            className="cover absolute  right-[0px] "
            src="/home/1.2-dark.png"
            alt=""
          />
        ) : (
          <motion.img
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
            className="cover absolute h-[392px] right-[-33px] "
            src="/home/1.2.png"
            alt=""
          />
        )}

        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className={`cover absolute  top-[3px]  ${
            currentTheme === "darkMod" ? "left-[310px]" : "left-[200px]"
          } `}
          src="/home/1.3.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
          className={`cover absolute  top-[10px] ${
            currentTheme === "darkMod" ? "left-[547px]" : "left-[369px]"
          } `}
          src="/home/1.4.png"
          alt=""
        />

        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
          className={`z-20 flex gap-4 absolute ${
            currentTheme === "darkMod" ? "left-[297px]" : "left-[155px]"
          } bottom-[20px]`}
        >
          {Data[0].map((item) => (
            <Link key={item.id} to={item.UrlLink}>
              <motion.img
                whileHover={{ opacity: 1, y: -10 }}
                className="cover"
                src={item.srcImg}
                alt=""
              />
            </Link>
          ))}
        </motion.div>
      </section>
      <section className="section2 rounded-[10px] relative my-[60px]  h-[400px] border-[1px]  bg-gradient-to-b from-[#EF1C25] to-[#FEDC0D]">
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="cover  absolute z-10 h-[392px]"
          src="/home/2.1.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          viewport={{ once: true }}
          className="cover top-[-27px] left-[50px]  absolute "
          src="/home/2.2.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="cover top-[-27px] left-[289px]  absolute "
          src="/home/2.3.png"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
          className={`z-20 flex gap-4 absolute ${
            currentTheme === "darkMod" ? "left-[297px]" : "left-[155px]"
          } bottom-[20px]`}
        >
          {Data[1].map((item) => (
            <Link key={item.id} to={item.UrlLink}>
              <motion.img
                whileHover={{ opacity: 1, y: -10 }}
                className="cover"
                src={item.srcImg}
                alt=""
              />
            </Link>
          ))}
        </motion.div>
      </section>
      <section className="section3 rounded-[10px] relative mb-[60px]  h-[400px] border-[1px]  bg-gradient-to-b from-[#1973DC] to-[#BDE1EC]">
        <motion.img
          className="cover top-[67px] bottom-[0px] right-[0px]  absolute "
          src="/home/3.1.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="cover h-[342px] bottom-[0px] light-[0px]  absolute "
          src="/home/3.2.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          viewport={{ once: true }}
          className="cover top-[-30px] right-[-63px]  absolute "
          src="/home/3.3.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          viewport={{ once: true }}
          className="cover top-[27px] right-[45px]  absolute "
          src="/home/3.4.png"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
          className={`z-20 flex gap-4 absolute ${
            currentTheme === "darkMod" ? "left-[297px]" : "left-[155px]"
          } bottom-[20px]`}
        >
          {Data[2].map((item) => (
            <Link key={item.id} to={item.UrlLink}>
              <motion.img
                whileHover={{ opacity: 1, y: -10 }}
                className="cover"
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
