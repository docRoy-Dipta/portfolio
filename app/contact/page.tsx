// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">Contact Me</h1>
        <ContactForm />
        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Social Media</h2>
          <div className="space-x-4">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">X (Twitter)</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}