// app/services/page.tsx (Updated with Website Development and visually soothing design)
"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Data Analysis",
    description: "In-depth analysis of datasets to uncover trends and insights.",
  },
  {
    title: "Data Visualization",
    description: "Creating intuitive visualizations to communicate data effectively.",
  },
  {
    title: "Business Development Support",
    description: "Leveraging data to support business growth strategies.",
  },
  {
    title: "Power BI Dashboard Development",
    description: "Building interactive dashboards for real-time data monitoring.",
  },
  {
    title: "Python-Based Automation and Analytics",
    description: "Automating processes and performing advanced analytics with Python.",
  },
  {
    title: "Website Development",
    description: "Creating modern, responsive websites tailored to your business needs using technologies like React, Next.js, and Tailwind CSS.",
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-white dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <ServiceCard title={service.title} description={service.description} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}