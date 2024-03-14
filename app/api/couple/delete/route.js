import prisma from "@/lib/prisma";

export async function POST(req, res) {
  const { userId, coupleId } = await req.json();

  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        couple_id: null,
      },
    });
    await prisma.couple.delete({
      where: {
        id: coupleId,
      },
    });
    return new Response(JSON.stringify(user), {
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
