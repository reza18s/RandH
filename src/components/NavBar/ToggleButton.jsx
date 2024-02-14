import { motion } from "framer-motion";

function ToggleButton({ setOpen }) {
  return (
    <button
      className="bg-primary-500 fixed left-[10px] top-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-full border-none   "
      onClick={() => {
        setOpen((open) => !open);
      }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23'">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
export default ToggleButton;
