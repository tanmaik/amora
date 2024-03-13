import Hero from "./components/Hero/Hero";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import SignOutButton from "./components/shared/SignOutButton";
import CoupleCreation from "./components/CoupleCreation/CoupleCreation";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    const user = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      await prisma.user.create({
        data: {
          email: session.user.email,
          name: session.user.name,
          image: session.user.image,
        },
      });
    } else {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: session.user.name,
          image: session.user.image,
        },
      });
    }

    let couple = await prisma.couple.findFirst({
      where: {
        partner_1: user.id,
      },
    });
    if (!couple) {
      let couple = await prisma.couple.findFirst({
        where: {
          partner_2: user.id,
        },
      });
      if (!couple) {
        return <CoupleCreation />;
      }
    }

    return (
      <div className="text-white">
        Hi {session.user?.name}!<SignOutButton>Sign out!</SignOutButton>
      </div>
    );
  }
  return <Hero />;
}
