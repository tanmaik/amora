import prisma from "@/lib/prisma";

export async function POST(req, res) {
  const { userId } = await req.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
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
