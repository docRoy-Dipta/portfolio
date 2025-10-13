// app/about/page.tsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          Hi, I&apos;m Your Name, a passionate data analyst with experience in transforming data into actionable insights. I specialize in helping businesses make data-driven decisions.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Data Analysis</li>
          <li>Data Visualization</li>
          <li>Business Development Support</li>
          <li>Power BI Dashboard Development</li>
          <li>Python-Based Automation and Analytics</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Tools Used</h2>
        <ul className="list-disc pl-6">
          <li>Python (Pandas, NumPy, Scikit-learn)</li>
          <li>Power BI</li>
          <li>SQL</li>
          <li>Excel</li>
          <li>Tableau</li>
        </ul>
      </motion.div>
    </div>
  );
}