import Hero from "./components/Hero/Hero";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import SignOutButton from "./components/shared/SignOutButton";
export default async function Home() {
  const session = await getServerSession();
  if (session) {
    return (
      <div className="text-white">
        Hi {session.user?.name}!<SignOutButton>Sign out!</SignOutButton>
      </div>
    );
  }
  return <Hero />;
}
