// components/Hero/Hero.js

import Navbar from "../Navbar/Navbar";

import localFont from "next/font/local";

const headerFont = localFont({ src: "./hornbill_black.otf" });

export default function Hero() {
  return (
    <main
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/background.jpg')`,
      }}
    >
      <Navbar />
    </main>
  );
}
