import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ProjectList({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="bg-[linear-gradient(180deg,#000000,#439bff20)]">
      <div className="flex h-full w-full items-center justify-center overflow-scroll">
        <div className="m-auto flex max-w-[80%]  flex-col  items-center justify-center gap-12 lg:flex-row xl:max-w-[70%]">
          <div
            className="flex h-[100%] w-[100%] max-w-[550px] lg:min-w-[400px]"
            ref={ref}
          >
            <img
              src={item.img}
              className="h-full w-full object-cover "
              alt=""
            />
          </div>
          <motion.div
            className="relative flex flex-col justify-start  gap-8 text-start"
            // style={{ y }}
          >
            <motion.h2 className="text-start text-[32px] lg:text-[50px] xl:text-[72px]">
              {item.title}
            </motion.h2>
            <p className="text-[20px] text-gray-500">{item.desc}</p>
            <button className="w-[200px] cursor-pointer rounded-xl border-none bg-primary-500 p-3">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default ProjectList;
