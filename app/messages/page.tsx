import { prisma } from "@/lib/prisma";

export default async function MessagesPage() {
  // Fetch all contact messages from the database, newest first
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((m) => (
            <li key={m.id} className="border p-4 rounded shadow-sm">
              <p>
                <strong>Name:</strong> {m.name}
              </p>
              <p>
                <strong>Email:</strong> {m.email}
              </p>
              <p>
                <strong>Message:</strong> {m.message}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(m.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
