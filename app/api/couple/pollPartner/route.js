import prisma from "@/lib/prisma";

export async function POST(req, res) {
  const { coupleId } = await req.json();
  try {
    // Retrieve couple

    const couple = await prisma.couple.findFirst({
      where: {
        id: coupleId,
      },
      select: {
        invited_partner: true,
      },
    });

    return new Response(JSON.stringify(couple), {
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
