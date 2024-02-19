import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactSvg from "../components/ContactSvg";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const [isLoading, set_isLoading] = useState(false);
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    set_isLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          set_isLoading(false);
          toast.success("your email has been send successfully");
          setSuccess(true);
        },
        (error) => {
          toast.error("Something went wrong, Please try again later!");
          setError(true);
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <motion.div
      ref={ref}
      className=" m-auto flex h-full max-w-[85%] flex-col items-center overflow-scroll md:flex-row lg:max-w-[70%]"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="textContainer flex flex-col items-start justify-start gap-10 text-start"
        variants={variants}
      >
        <motion.h1
          className="mr-4 pt-10 text-[50px] font-semibold lg:text-[80px] "
          variants={variants}
        >
          Let’s work together
        </motion.h1>
        <motion.div className="grid grid-cols-2 gap-4 md:grid-cols-1 ">
          <motion.div className="item" variants={variants}>
            <h2 className="text-[25px] font-bold md:text-[40px]">Mail</h2>
            <span className="text-[17px] font-[300] md:text-[25px]">
              rezaandhamze@gmail.com
            </span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2 className="text-[25px] font-bold md:text-[40px]">Address</h2>
            <span className="text-[17px] font-[300] md:text-[25px]">
              khozestan ahvas golestan
            </span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2 className="text-[25px] font-bold md:text-[40px]">Phone</h2>
            <span className="text-[17px] font-[300] md:text-[25px]">
              {/* {english.phoneNumber} */}
              0936 526 1859
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="formContainer relative mt-8 flex w-[80%] items-center justify-center">
        <motion.div
          className="absolute z-[-1] stroke-primary-500"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <ContactSvg isInView={isInView}></ContactSvg>
        </motion.div>
        <motion.form
          ref={formRef}
          className="flex  w-full flex-col gap-4 "
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            className="input rounded-md bg-inherit p-3"
          />
          <input
            className="input rounded-md bg-inherit p-3"
            type="email"
            required
            placeholder="Email"
            name="email"
          />
          <textarea
            className="input rounded-md bg-inherit p-3"
            rows={8}
            placeholder="Message"
            name="message"
          />
          <button className="mb-10 flex h-[50px] items-center justify-center rounded-2xl bg-primary-500">
            {isLoading ? <Loader>Loading...</Loader> : "Submit"}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
