import { motion } from "framer-motion";
function Home() {
  return (
    <main className="flex h-[calc(100dvh-60px)] w-full flex-col overflow-hidden bg-[linear-gradient(180deg,#000000,#439bff40)]  md:flex-row">
      <div className="flex h-[50%] w-full flex-col items-start gap-7 pl-[10%]  pt-5 md:h-full md:justify-center md:gap-5 md:pl-[15%] 2xl:items-start">
        <h2 className="font-semibold tracking-[5px] text-white ">
          REZA<span className="text-primary-500 ">&</span>HAMZA
        </h2>
        <h1 className="flex flex-col  whitespace-nowrap text-[30px]  font-bold text-white md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[70px]">
          <span className="text-[33px] md:text-[36px] lg:text-[41px] xl:text-[53px] 2xl:text-[73px] ">
            Web Developers
          </span>
          <span> and Programers</span>
        </h1>
        <div className="flex flex-row gap-[20px]  ">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button rounded-md bg-transparent p-2 text-[15px] font-light lg:text-[20px]"
          >
            See the Latest Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md bg-primary-500 p-2 text-[15px] text-white lg:text-[20px]"
          >
            Contact me
          </motion.button>
        </div>
        <motion.img
          // initial={{ opacity: 1 }}
          // animate={{ y: "5px" }}
          src="/public/scroll.png"
        ></motion.img>
      </div>
      {/* <div className="absolute  bottom-[-90px] z-[-2] max-w-full overflow-hidden whitespace-nowrap text-[50vh] text-[#ffffff10]">
        Writer Content Creator Influencer
      </div> */}
      <img src="/public/hero.png" className=""></img>
    </main>
  );
}
export default Home;
