"use client";

import Logo from "../shared/Logo";
import { motion } from "framer-motion";
import DeleteButton from "./DeleteButton";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { useState, useEffect } from "react";
import PartnerBubble from "./PartnerBubble";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const headerFont = localFont({ src: "../shared/hornbill_black.otf" });

export default function WaitingScreen({ user, couple }) {
  const [partner, setPartner] = useState(null);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

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
          setShowConfetti(true);

          const partner = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: data.invited_partner,
            }),
          });
          setPartner(partner);
        }
      } catch (e) {
        console.log("Error polling database: ", e);
      }
    };

    const intervalId = setInterval(pollDatabase, 2000);
    return () => clearInterval(intervalId);
  }, [partner?.id]);
  
  if (partner) {
    return (
      <div className="h-screen flex justify-center items-center w-full ">
        {showConfetti && <Confetti width={width} height={height} />}
        <div className="text-center w-full px-4 sm:px-0 sm:w-[30rem]">
          <div className="flex justify-center">
            <Logo fill="#B27070" width={"100"} />
          </div>
          <div className="mt-20 flex justify-center">
            <PartnerBubble user={user} partner={partner} />
          </div>
          <h1
            className={`${headerFont.className} text-[#B27070] text-4xl mt-4`}
          >
            You&apos;re all set!
          </h1>
          <p className="text-[#B27070] font-semibold mt-2">
            You&apos;re now connected with your partner.
          </p>
          <div className="mt-4">
            <DeleteButton coupleId={user.couple_id} userId={user.id} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen flex justify-center items-center w-full ">
      <div className="text-center w-full px-4 sm:px-0 sm:w-[30rem]">
        <div className="flex justify-center">
          <Logo fill="#B27070" width={"100"} />
        </div>
        <div className="mt-20 flex justify-center">
          <PartnerBubble user={user} partner={partner} />
        </div>
        <h1 className={`${headerFont.className} text-[#B27070] text-4xl mt-4`}>
          Waiting for your partner...
        </h1>
        <p className="text-[#B27070] font-semibold mt-2">
          Give your partner the following code to join you.
        </p>
        <h1
          className={`mt-4 ${GeistMono.className} text-6xl sm:text-8xl text-[#B27070]`}
        >
          {couple.couple_key.toString()}
        </h1>
        <div className="mt-4">
          <DeleteButton coupleId={user.couple_id} userId={user.id} />
        </div>
      </div>
    </div>
  );
}
