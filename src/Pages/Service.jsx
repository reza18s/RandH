import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { servicesDescription } from "../../array";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  open: {
    width: "100%",
    transition: {
      staggerChildren: 1,
      delay: 0,
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    width: "80%",
    transition: {
      staggerChildren: 0.1,
      delay: 0,
      type: "spring",
      stiffness: 20,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const [open, setOpen] = useState();
  const isInView = useInView(ref, { margin: "-100px" });
  console.log(open);
  return (
    <motion.div
      className="flex h-screen w-full flex-col justify-between gap-10 overflow-y-scroll"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.header
        variants={variants}
        className="flex flex-row items-center justify-end pt-[40px] text-end text-[15px] text-gray-500 md:text-[20px]"
      >
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="hr w-[20%] bg-gray-500" />
      </motion.header>
      <motion.div
        className="flex w-full flex-[2] flex-col items-center justify-center text-[25px]  text-gray-300  md:text-[35px] xl:text-[65px]"
        dir="rtl"
        variants={variants}
      >
        <div className="flex items-center  gap-4">
          <img
            src="/people.webp"
            alt=""
            className="mr-5 h-[50px] w-[150px] rounded-full object-cover md:h-[80px] md:w-[250px] xl:h-[100px] xl:w-[300px] "
          />
          <h1 className="s-h1">
            <motion.span
              className="font-semibold"
              whileHover={{ color: "orange" }}
            >
              ساخت یک سایت
            </motion.span>{" "}
            حرفه ای
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
          <h1 className="s-h1">
            <motion.span
              className="font-semibold"
              whileHover={{ color: "orange" }}
            >
              از اینجا شروع
            </motion.span>{" "}
            می شود
          </h1>
          <a href="#Contact">
            <button className="w-40  rounded-full bg-primary-500 p-3 text-[15px]  font-extrabold text-black ">
              سفارش سایت
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="mb-[50px]  flex w-full flex-col items-center justify-center gap-5 lg:flex-row"
        variants={variants}
      >
        <div className="flex w-full flex-col items-center justify-center gap-5 lg:w-[80%] lg:flex-row">
          {servicesDescription.map((i, l) => (
            <motion.div
              className="hr noto-sans flex w-[80%] flex-col justify-between rounded-2xl p-[30px] text-start"
              variants={textVariants}
              animate={open == l ? "open" : "closed"}
              key={i.id}
              dir="rtl"
            >
              {open == l ? (
                <>
                  <div>
                    {" "}
                    <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      animate={open == l && { opacity: 1, y: 0 }}
                      transition={{ delay: 0 }}
                      className="noto-sans pb-3  text-[25px] font-extrabold"
                    >
                      {i.title2}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={open == l && { opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="noto-sans pb-5 text-[15px] font-light md:text-[20px]"
                    >
                      {i.Description2}
                    </motion.p>
                  </div>
                  <div>
                    <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      animate={open == l && { opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="noto-sans pb-3  text-[25px] font-extrabold"
                    >
                      {i.title3}
                    </motion.h1>
                    <motion.ul
                      initial={{ opacity: 0, y: 50 }}
                      animate={open == l && { opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {i.Advantages.map((i) => (
                        <li key={i}>✅{i}</li>
                      ))}
                    </motion.ul>
                  </div>
                  <div>
                    {" "}
                    <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      animate={open == l && { opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="noto-sans pb-3  text-[25px] font-extrabold"
                    >
                      {i.title4}
                    </motion.h1>
                    <motion.ul
                      initial={{ opacity: 0, y: 50 }}
                      animate={open == l && { opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      {i.Disadvantages.map((i) => (
                        <li key={i}>❌{i}</li>
                      ))}
                    </motion.ul>
                  </div>
                </>
              ) : (
                <>
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={open !== l && { opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="noto-sans pb-3  font-extrabold"
                  >
                    {i.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={open !== l && { opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="noto-sans pb-5 text-[15px] md:text-[20px]"
                  >
                    {i.Description}
                  </motion.p>
                </>
              )}
              <button
                onClick={() => {
                  setOpen((index) => (index == l ? null : l));
                }}
                className="mt-3 w-[100%]  rounded-[10px] bg-primary-500  p-2"
              >
                خواندن بیشتر
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
