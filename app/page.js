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
      // If the user doesn't exist, create them in the database
      await prisma.user.create({
        data: {
          email: session.user.email,
          name: session.user.name,
          image: session.user.image,
        },
      });
    } else {
      // If the user already exists, update their avatar if it has changed
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          image: session.user.image,
        },
      });
    }
    // If the user isn't already in a couple, show the couple creation screen so that they can create/join one
    if (!user.couple_id) {
      return <CoupleCreation />;
    } else {
      // Find the couple that the user is in
      const couple = await prisma.couple.findFirst({
        where: {
          id: user.couple_id,
        },
      });

      if (!couple.invited_partner) {
        return <CoupleCreation />;
      }
      // If the user is not in an onboarded couple, show the onboarding couple screen
      if (!couple.onboarded) {
      }
      // If the user is in an onboarded couple, show the home screen
      else {
        return (
          <div className="text-white">
            Hi {session.user?.name}!<SignOutButton>Sign out!</SignOutButton>
          </div>
        );
      }
    }
  }

  return <Hero />;
}
