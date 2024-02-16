import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { motion } from "framer-motion";
function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const aText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const abg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <main
      ref={ref}
      className={`relative z-[-1] flex h-screen w-full justify-center  overflow-hidden  ${type == "services" ? "bg-[linear-gradient(180deg,#000000,#439bff40)]" : "bg-[linear-gradient(180deg,#439bff40,#000000)]"}`}
    >
      <motion.h1
        className="pt-[20%] text-[50px] font-semibold text-white"
        style={{ y: aText }}
      >
        {type == "services" ? "What We Do?" : "What we Did?"}
      </motion.h1>

      <motion.div
        style={{ y: abg }}
        className="absolute h-full w-full bg-[url('/planets.png')] bg-cover bg-bottom"
      ></motion.div>
      <motion.div
        style={{ x: abg }}
        className="absolute  h-full w-full bg-[url('/stars.png')] bg-cover bg-bottom"
      ></motion.div>
      <motion.div className="absolute h-full w-full bg-[url('/mountains.png')] bg-cover bg-bottom"></motion.div>
    </main>
  );
}
export default Parallax;
