import { motion } from "framer-motion";
import pfp from '/images/myphoto.jpeg';

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 1,
    },
  },
};

export default function Hero() {
  return (
    <motion.div
      className='font-rubik flex flex-col items-center mt-[60px] mb-[30px] md:mt-[50px] md:mb-[60px]'
      id="/"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.img
        src={pfp}
        alt="My Photo"
        className='rounded-full w-[80%] md:w-[25%] mb-[30px] border-[5px] border-green-500 md:border-black md:border-[10px] hover:border-green-500 transition duration-500'
        variants={item}
      />
      <motion.div
        className='text-center text-[30px] md:mt-[23px] font:sans font-bold md:text-[50px]  sm:mt-[15px] px-[56px] pb-[60px]'
        variants={item}
      >
        <p>
          Hey, I'm <span className='text-green-600'>Wassim El Boussi.</span> I'm a full stack web developer. Here, you can check out what I'm working on and see my code in action.
        </p>
      </motion.div>
    </motion.div>
  );
}
