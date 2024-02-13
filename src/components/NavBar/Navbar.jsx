import { motion } from "framer-motion";
import { socialIconUrl } from "../../../array";
function NavBar() {
  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
    hidden: { opacity: 0 },
  };
  return (
    <nav className="navbar">
      <div className="rounded-full bg-white">
        <img src="/public/icons8-bulleted-list-64.png" width={40}></img>
      </div>
      <div className="flex w-full max-w-[1366px] justify-end">
        <span className="hidden">R&H</span>
        <motion.ul
          className="flex  flex-row-reverse gap-3 sm:gap-5 md:gap-7 lg:gap-8 xl:gap-9"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {socialIconUrl.map((i) => (
            <motion.li key={i.Url} variants={variants}>
              <a href="#">
                <img src={i.Url} alt="" className="social" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
}
export default NavBar;
