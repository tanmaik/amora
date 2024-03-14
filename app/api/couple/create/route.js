import prisma from "@/lib/prisma";

export async function POST(req, res) {
  const { userId } = await req.json();
  try {
    const new_couple = await prisma.couple.create({
      data: {
        creation_partner: userId,
        onboarded: false,
        couple_key: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
      },
    });
    // Update the user's couple_id to the new couple's id
    const newUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        couple_id: new_couple.id,
      },
    });
    return new Response(JSON.stringify(newUser), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
