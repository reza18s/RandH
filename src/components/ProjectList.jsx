import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ProjectList({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className=" bg-[linear-gradient(180deg,#000000,#439bff20)] ">
      <div className="flex h-full w-full items-center justify-center overflow-scroll pb-24 pt-24">
        <div
          dir="rtl"
          className="m-auto flex max-w-[85%]  flex-col  items-center justify-center gap-12 lg:flex-row xl:max-w-[90%]"
        >
          <div
            className="flex h-[100%] w-[100%] max-w-[550px] bg-white lg:min-w-[400px] xl:max-w-[800px]"
            ref={ref}
          >
            <img
              src={item.img}
              className="h-full w-full object-cover "
              alt=""
            />
          </div>
          <motion.div
            className="relative flex flex-col items-center justify-center gap-8 text-start  lg:max-w-[50%]"
            // style={{ y }}
          >
            <motion.h2 className="text-start text-[32px] lg:text-[50px] xl:text-[72px]">
              {item.title}
            </motion.h2>
            <p dir="rtl" className="text-[20px] text-gray-500">
              {item.desc}
            </p>
            <button
              onClick={() => (window.location.href = item.link)}
              className="w-[200px] cursor-pointer rounded-xl border-none bg-primary-500 p-3"
            >
              مشاهده
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default ProjectList;
