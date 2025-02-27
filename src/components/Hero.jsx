import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

// func (return an object): make motion props shorter in tags for better readability
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg: text-8x1"
            >
              Mohsin Ahmed Arfat
            </motion.h1>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={container(0.5)}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={container(1)}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-start"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        {/* image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="flex justify-center relative">
            <motion.img
              initial={{ x: +100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-3/4 rounded-2xl relative"
              src="https://imgur.com/lVerHjz.png"
              alt="Mohsin Ahmed Arfat"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-y-0 w-3/4 rounded-2xl bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
