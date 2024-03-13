"use client";
// components/Hero/AmoraLogo.js
import React from "react";
import { motion } from "framer-motion";

export default function AmoraLogo({ onAnimationComplete }) {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      onAnimationComplete={onAnimationComplete}
    >
      <motion.svg
        width="130"
        height="41"
        viewBox="0 0 130 41"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M8.694 36.336C5.502 36.336 1.68 34.992 1.68 30.54C1.68 25.248 9.702 23.778 14.238 23.148C14.532 23.106 14.7 22.896 14.7 22.602V21.678C14.7 18.948 13.86 17.268 11.802 17.268C9.576 17.268 8.694 19.536 7.434 20.796C6.804 21.426 5.922 21.72 5.124 21.72C3.822 21.72 2.604 20.922 2.604 19.452C2.604 16.722 7.266 14.79 11.802 14.79C16.422 14.79 20.538 16.68 20.538 21.972V30.372C20.538 33.144 22.218 32.262 22.848 33.144C23.52 34.11 21.756 36.126 19.11 36.126C17.808 36.126 16.338 35.706 15.498 33.816C15.414 33.648 15.33 33.564 15.246 33.564C15.162 33.564 15.036 33.648 14.952 33.774C13.566 35.328 11.382 36.336 8.694 36.336ZM7.854 29.91C7.812 31.926 9.324 33.144 11.046 33.144C12.684 33.144 14.448 31.926 14.7 30.246V26.088C14.7 25.752 14.532 25.71 14.238 25.71C11.886 26.088 7.938 27.054 7.854 29.91ZM45.0342 19.284C46.4622 16.722 48.6882 14.79 51.5442 14.79C55.7862 14.79 58.2642 17.31 58.2642 21.762V31.044C58.2642 33.06 60.1122 32.808 60.1122 34.362C60.1122 35.412 59.4402 35.79 58.4322 35.916C57.3822 36.042 56.3742 36.126 55.4082 36.126C54.3162 36.126 53.2662 36.042 52.2582 35.916C50.9982 35.79 50.3262 35.412 50.3262 34.362C50.3262 32.808 52.4682 33.06 52.4682 31.044V23.568C52.4682 20.502 51.4182 18.822 49.4442 18.822C46.9242 18.822 45.3702 23.106 45.0342 25.962V31.044C45.0342 33.06 46.8402 32.808 46.8402 34.362C46.8402 35.412 46.2102 35.79 45.1602 35.916C44.1102 36.042 43.1442 36.126 42.1362 36.126C41.0862 36.126 40.0362 36.042 39.0282 35.916C37.7682 35.79 37.0542 35.538 37.0542 34.446C37.0542 32.892 39.1962 33.06 39.1962 31.044V23.568C39.1962 20.502 38.1882 18.822 36.2142 18.822C33.6942 18.822 32.1402 23.106 31.7622 25.962V31.002C31.7622 33.06 33.5682 32.766 33.5682 34.32C33.5682 35.37 32.9382 35.79 31.9302 35.874C30.9222 36.042 29.9562 36.084 28.9902 36.084C27.8982 36.084 26.8062 36 25.7562 35.874C24.4962 35.748 23.8242 35.412 23.8242 34.404C23.8242 32.892 25.9662 33.186 25.9662 31.212V20.292C25.9662 18.612 23.8242 18.36 23.8242 16.68C23.8242 15.756 24.6642 15.168 26.3862 15.168H28.2762C29.4942 15.168 30.8382 15.84 31.3842 17.226C31.4262 17.436 31.4682 18.696 31.5102 18.948C31.5522 19.116 31.6362 19.2 31.7202 19.2C31.7622 19.2 31.8882 19.116 31.9722 18.99C33.3582 16.638 35.5422 14.79 38.2722 14.79C41.5902 14.79 43.8162 16.386 44.5722 19.242C44.6562 19.41 44.6982 19.494 44.7822 19.494C44.8662 19.494 44.9502 19.41 45.0342 19.284ZM96.8599 18.948C97.6999 16.68 99.3379 14.79 102.236 14.79C104.924 14.79 106.52 15.966 106.52 18.108C106.478 20.04 105.218 21.048 103.37 21.048C101.438 21.006 100.304 20.082 99.2959 20.082C99.0439 20.082 98.8339 20.124 98.5819 20.25C97.7839 20.754 97.0699 22.266 96.8179 24.282V31.254C96.8179 33.228 98.9599 32.976 98.9599 34.446C98.9599 35.454 98.2879 35.79 96.9859 35.958C96.0619 36.084 95.0539 36.168 94.0039 36.168C92.9959 36.168 91.9039 36.084 90.8119 35.958C89.5519 35.79 88.8799 35.454 88.8799 34.446C88.8799 32.976 91.0219 33.228 91.0219 31.254V20.334C91.0219 18.612 88.8799 18.36 88.8799 16.68C88.8799 15.756 89.7199 15.168 91.4419 15.168H93.3319C94.3399 15.168 95.5159 15.672 96.1459 16.764C96.3139 17.184 96.4399 18.486 96.5659 18.906C96.6079 19.032 96.6499 19.116 96.7339 19.116C96.7759 19.116 96.8179 19.032 96.8599 18.948ZM113.845 36.336C110.653 36.336 106.831 34.992 106.831 30.54C106.831 25.248 114.853 23.778 119.389 23.148C119.683 23.106 119.851 22.896 119.851 22.602V21.678C119.851 18.948 119.011 17.268 116.953 17.268C114.727 17.268 113.845 19.536 112.585 20.796C111.955 21.426 111.073 21.72 110.275 21.72C108.973 21.72 107.755 20.922 107.755 19.452C107.755 16.722 112.417 14.79 116.953 14.79C121.573 14.79 125.689 16.68 125.689 21.972V30.372C125.689 33.144 127.369 32.262 127.999 33.144C128.671 34.11 126.907 36.126 124.261 36.126C122.959 36.126 121.489 35.706 120.649 33.816C120.565 33.648 120.481 33.564 120.397 33.564C120.313 33.564 120.187 33.648 120.103 33.774C118.717 35.328 116.533 36.336 113.845 36.336ZM113.005 29.91C112.963 31.926 114.475 33.144 116.197 33.144C117.835 33.144 119.599 31.926 119.851 30.246V26.088C119.851 25.752 119.683 25.71 119.389 25.71C117.037 26.088 113.089 27.054 113.005 29.91Z"
          variants={pathVariants}
          stroke="red"
          fill="white"
          strokeWidth="2"
        />
        <motion.path
          stroke="white"
          strokeWidth="2"
          fill="red"
          d="M73.4448 36.2183L73.4368 36.2136L73.4064 36.1981C72.775 35.8653 72.155 35.5128 71.5472 35.141C70.0982 34.2578 68.7175 33.2735 67.416 32.196C64.472 29.7362 61.2 26.0456 61.2 21.625C61.2002 20.1827 61.6619 18.7758 62.5215 17.5982C63.3812 16.4206 64.5966 15.5302 66.0003 15.0495C67.4041 14.5687 68.9271 14.5214 70.3598 14.914C71.7924 15.3066 73.0642 16.1198 74 17.2416C74.9358 16.1198 76.2076 15.3066 77.6403 14.914C79.0729 14.5214 80.596 14.5687 81.9997 15.0495C83.4034 15.5302 84.6188 16.4206 85.4785 17.5982C86.3382 18.7758 86.7999 20.1827 86.8 21.625C86.8 26.0456 83.5296 29.7362 80.584 32.196C78.735 33.7265 76.7275 35.0677 74.5936 36.1981L74.5632 36.2136L74.5552 36.2183H74.552C74.382 36.3055 74.1926 36.3512 74.0002 36.3515C73.8078 36.3518 73.6183 36.3066 73.448 36.2198L73.4448 36.2183Z"
          variants={pathVariants}
        />
      </motion.svg>
    </motion.div>
  );
}