import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message)
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });

    await prisma.contactMessage.create({
      data: { name, email, message },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Server error",
        details: err instanceof Error ? err.message : err,
      }),
      { status: 500 }
    );
  }
}
