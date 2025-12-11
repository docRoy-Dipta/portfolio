"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    if (res.ok) {
      setStatus("Message sent!");
      form.reset();
    } else {
      setStatus("Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input type="text" id="name" name="name" required className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input type="email" id="email" name="email" required className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea id="message" name="message" required className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" rows={4} />
      </div>

      <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
        Send Message
      </button>

      <p className="text-center mt-2 text-sm">{status}</p>
    </form>
  );
}
