import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const CoverVideo = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/Video.mp4"
      />

      {/* Simple Dull Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated Text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center pt-[29vh] h-full text-white"
      >
        <div className="flex gap-2 text-6xl font-bold tracking-widest ">
          {"ELVORA".split("").map((letter, index) => (
            <motion.h1 key={index} variants={item}>
              {letter}
            </motion.h1>
          ))}
        </div>

        <motion.h2
          variants={item}
          className="mt-6 text-lg tracking-wide"
        >
          Crafted. Creamy. Classic.
        </motion.h2>
      </motion.div>

      {/* Bottom Luxury Text */}
      <div className="absolute bottom-8 left-0 w-full flex justify-between px-10 text-white text-sm tracking-widest uppercase z-10">
        <span>SCOOP COLLECTION</span>
        <span>PURE DAIRY · REAL FLAVOR</span>
      </div>

    </div>
  );
};

export default CoverVideo;