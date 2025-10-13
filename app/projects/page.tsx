// app/projects/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import projects from "@/data/projects.json";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  // State to track which service section is expanded (null means all collapsed)
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Group projects by service
  const groupedProjects = projects.reduce((acc, project) => {
    const service = project.service || "Other";
    if (!acc[service]) acc[service] = [];
    acc[service].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  // Define service categories in desired order
  const services = [
    "Core Data Services",
    "Machine Learning and Automation",
    "Website Development",
    "Other",
  ];

  // Toggle function for expanding/collapsing sections
  const toggleService = (service: string) => {
    setExpandedService(expandedService === service ? null : service);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-white dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Projects
      </h1>
      {services.map((service) => {
        const serviceProjects = groupedProjects[service] || [];
        if (serviceProjects.length === 0) return null; // Skip empty services
        return (
          <section key={service} className="mb-12">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-primary dark:text-blue-300 cursor-pointer flex items-center justify-between"
              onClick={() => toggleService(service)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span>{service}</span>
              <span className="text-xl">
                {expandedService === service ? "−" : "+"}
              </span>
            </motion.h2>
            <AnimatePresence>
              {expandedService === service && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                      >
                        <div>
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary dark:text-blue-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            View Project
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        );
      })}
    </div>
  );
}