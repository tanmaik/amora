import prisma from "@/lib/prisma";
import SignOutButton from "../shared/SignOutButton";
import { getServerSession } from "next-auth";
import Logo from "../shared/Logo";
import localFont from "next/font/local";

import { UsersIcon } from "@heroicons/react/20/solid";
import CreateButton from "./CreateButton";
import DeleteButton from "./DeleteButton";
import WaitingScreen from "./WaitingScreen";

const headerFont = localFont({ src: "../shared/hornbill_black.otf" });

export default async function CoupleCreation() {
  const session = await getServerSession();
  const user = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  if (user.couple_id) {
    const couple = await prisma.couple.findFirst({
      where: {
        id: user.couple_id,
      },
    });
    return (
      <div>
        <WaitingScreen user={user} couple={couple} />
      </div>
    );
  }
  return (
    <div className="h-screen flex justify-center items-center w-full ">
      <div className="text-center w-full px-4 sm:px-0 sm:w-[30rem]">
        <div className="flex justify-center">
          <Logo fill="#B27070" width={"100"} />
        </div>
        <h1 className={`mt-20 ${headerFont.className} text-[#B27070] text-4xl`}>
          Hey {user.name.split(" ")[0]}! You&apos;re one step closer to growing
          your relationship.
        </h1>
        <p className="text-[#B27070] font-semibold mt-2">
          First, let&apos;s get you started. Create a couple for you and your
          partner or join an existing one.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <CreateButton userId={user.id} />
          <button className="px-4 py-2 rounded-full bg-[#B27070] hover:bg-[#B27070]/80 transition-all text-white font-medium">
            <div className="flex gap-2 items-center">
              <UsersIcon className="w-4 h-4" />
              Join existing
            </div>
          </button>
        </div>
        <SignOutButton>
          <p className="mt-10 text-[#B27070]">Sign out</p>
        </SignOutButton>
      </div>
    </div>
  );
}
