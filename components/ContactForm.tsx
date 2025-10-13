// components/ContactForm.tsx
export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/your-formspree-id" // Replace with your Formspree ID
      method="POST"
      className="max-w-md mx-auto space-y-4"
    >
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
    </form>
  );
}