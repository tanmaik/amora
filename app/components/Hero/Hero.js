// components/Hero/Hero.js

import Navbar from "../Navbar/Navbar";

import localFont from "next/font/local";
import Button from "../shared/Button";

const headerFont = localFont({ src: "./hornbill_black.otf" });
export default function Hero() {
  return (
    <>
      <main
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/background.jpg')`,
        }}
      >
        <Navbar />
        <div className="flex justify-center h-[80%] items-center px-8">
          <div>
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
          </div>
        </div>
      </main>
    </>
  );
}
