"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchMessages() {
    setLoading(true);
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Contact Me
      </h1>

      <ContactForm />

      {/* Button to fetch messages */}
      <div className="text-center mt-6">
        <button
          onClick={fetchMessages}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-md transition-colors"
        >
          {loading ? "Loading..." : "Get Messages"}
        </button>
      </div>

      {/* Display messages */}
      {messages.length > 0 && (
        <div className="mt-8 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="border p-4 rounded shadow-sm">
              <p><strong>Name:</strong> {m.name}</p>
              <p><strong>Email:</strong> {m.email}</p>
              <p><strong>Message:</strong> {m.message}</p>
              <p className="text-sm text-gray-500">{new Date(m.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
