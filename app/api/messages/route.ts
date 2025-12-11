import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch messages" }), { status: 500 });
  }
}
