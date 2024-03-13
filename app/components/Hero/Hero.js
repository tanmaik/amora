"use client";
// components/Hero/Hero.js

import React from "react";
import Navbar from "../Navbar/Navbar";
import localFont from "next/font/local";
import Button from "../shared/Button";
import { motion, useAnimation } from "framer-motion";

const headerFont = localFont({ src: "./hornbill_black.otf" });

export default function Hero() {
  const textAnimation = useAnimation();

  const handleBackgroundAnimationComplete = async () => {
    await textAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.165, 0.84, 0.44, 1] },
    });
  };

  return (
    <>
      <motion.main
        className="h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('/background.jpg')`,
        }}
        initial={{ y: "100%", scale: 1.2 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }}
        onAnimationComplete={handleBackgroundAnimationComplete}
      >
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.165, 0.84, 0.44, 1],
            delay: 1.2,
          }}
        >
          <Navbar />
        </motion.div>
        <div className="flex justify-center h-[80%] items-center px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={textAnimation}>
            <p className="text-white font-semibold text-center text-lg sm:text-xl">
              Communicate better, grow closer, and keep your relationship
              thriving
            </p>
            <h1
              className={`text-7xl sm:text-9xl text-center text-white mt-6 ${headerFont.className}`}
            >
              Bringing hearts
            </h1>
            <h1
              className={`text-7xl sm:text-9xl text-center text-white ${headerFont.className}`}
            >
              closer
            </h1>
            <div className="flex justify-center mt-4">
              <Button text="Join the journey ->" />
            </div>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}
