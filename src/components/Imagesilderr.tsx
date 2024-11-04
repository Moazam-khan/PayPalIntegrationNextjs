"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export default function ImagesSliderr() {

  
  const images = [
    "/assets/hero/imgb.jpg",
    "/assets/hero/imga.jpg",
    "/assets/hero/imgs.jpg",
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
       <motion.p className="font-extrabold text-2xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-red-600 py-4 px-2">
    Experience the Thrill of a Desert Safari Ride! <br />
    <span className="text-2xl md:text-4xl text-gray-200 mt-2 block">
        Unforgettable adventures await under the endless Arabian sky.
    </span>
    <span className="text-lg text-gray-300 block mt-2">
        Dune bashing, camel rides, and mesmerizing sunsets—book your adventure today!
    </span>
</motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Booking now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
