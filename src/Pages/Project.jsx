import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ProjectList from "../components/ProjectList";
import { Projects } from "../../array";

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 60,
  });

  return (
    <div className="" ref={ref}>
      <div className="sticky left-0 top-0 p-[50px] text-center text-[36px] font-semibold ">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="h-2 w-full rounded-3xl bg-primary-500"
        ></motion.div>
      </div>
      {Projects.map((item) => (
        <ProjectList key={item.id} item={item}></ProjectList>
      ))}
    </div>
  );
};

export default Project;
