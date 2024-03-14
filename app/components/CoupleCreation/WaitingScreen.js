"use client";

import Logo from "../shared/Logo";
import { motion } from "framer-motion";
import DeleteButton from "./DeleteButton";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";

import { useState, useEffect } from "react";
const headerFont = localFont({ src: "../shared/hornbill_black.otf" });

export default function WaitingScreen({ user, couple }) {
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    const pollDatabase = async () => {
      try {
        const response = await fetch(`/api/couple/pollPartner`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            coupleId: user.couple_id,
          }),
        });
        const data = await response.json();
        console.log("Data: ", data);
        if (data.invited_partner) {
          setPartner(data.invited_partner);
        }
      } catch (e) {
        console.log("Error polling database: ", e);
      }
    };

    const intervalId = setInterval(pollDatabase, 2000);
    return () => clearInterval(intervalId);
  }, [partner?.id]);

  return (
    <div className="h-screen flex justify-center items-center w-full ">
      <div className="text-center w-full px-4 sm:px-0 sm:w-[30rem]">
        <div className="flex justify-center">
          <Logo fill="#B27070" width={"100"} />
        </div>
        <h1 className={`mt-20 ${headerFont.className} text-[#B27070] text-4xl`}>
          {partner?.id
            ? `You're now connected with ${partner.name}!`
            : "We are still waiting..."}
        </h1>
        <h1 className={`${headerFont.className} text-[#B27070] text-4xl mt-20`}>
          Waiting for your partner...
        </h1>
        <p className="text-[#B27070] font-semibold mt-2">
          Give your partner the following code to join you.
        </p>

        <h1 className={`mt-4 ${GeistMono.className} text-8xl text-[#B27070]`}>
          {couple.couple_key.toString()}
        </h1>
        <div className="mt-4">
          <DeleteButton coupleId={user.couple_id} userId={user.id} />
        </div>
      </div>
    </div>
  );
}
