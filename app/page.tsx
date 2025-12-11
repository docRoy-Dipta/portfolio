// app/page.tsx (Updated Home with integrated About section and FAQs)
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Slideshow images for About section (replace with your images)
  const aboutImages = [
    "https://www.beyondkey.com/blog/wp-content/uploads/2022/08/Data-Visualization-Software-1024x454.jpg", // Placeholder: Add real images to /public/images/
    "https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/65ca6bb8bb240ca9b148207a_business-analyst-roles.png",
    "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3xLIr2uzIrWHW5wPa977VQ.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [aboutImages.length]);

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-background dark:bg-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Transform Data into <br /> Actionable Insights with OrynTel
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300"
        >
          Expert data analytics, visualization, and quality assurance services.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact">
            <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </motion.div>
      </section>

      {/* About Section with Slideshow */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About OrynTel
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Slideshow */}
            <motion.div
              className="w-full md:w-1/2 relative h-64 md:h-96 overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={aboutImages[currentImageIndex]}
                alt="About Image"
                fill
                className="object-cover transition-opacity duration-500"
              />
            </motion.div>
            {/* Bio, Skills, Tools */}
            <div className="w-full md:w-1/2">
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                OrynTel is a leading data analytics company with expertise in transforming data into actionable insights. We specialize in helping businesses make data-driven decisions through advanced analytics, visualization, and quality assurance.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
                <li>Data Analysis</li>
                <li>Data Visualization</li>
                <li>Business Development Support</li>
                <li>Power BI Dashboard Development</li>
                <li>Python-Based Automation and Analytics</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Tools Used</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                <li>Python (Pandas, NumPy, Scikit-learn)</li>
                <li>Power BI</li>
                <li>SQL</li>
                <li>Excel</li>
                <li>Tableau</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-16 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Empowering Your Business with Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Data Analysis & Visualization
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Uncover insights and communicate data effectively with advanced analytics and stunning visualizations.
              </p>
            </motion.div>
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Power BI Dashboards
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build interactive, real-time dashboards to monitor and drive business decisions.
              </p>
            </motion.div>
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Python Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automate processes and enhance analytics with custom Python solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-background dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                What is Data Analysis and how can it benefit my business?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Data Analysis involves examining datasets to draw conclusions about the information they contain. It helps businesses identify trends, make informed decisions, and improve efficiency.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-4 bg-background dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                How does Data Visualization help in understanding complex data?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Data Visualization turns complex data into graphical representations like charts and graphs, making it easier to spot patterns, outliers, and trends at a glance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 bg-background dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                What is Business Development Support?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Business Development Support uses data to identify growth opportunities, optimize strategies, and enhance market positioning for sustainable business expansion.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 bg-background dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                How can Power BI Dashboard Development improve my operations?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Power BI Dashboards provide interactive, real-time views of key metrics, enabling quick decision-making and performance tracking across your organization.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 bg-background dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                What are Python-Based Automation and Analytics?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Python-Based Automation uses scripts to streamline repetitive tasks, while Analytics leverages Python libraries for advanced data processing and modeling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 text-center shadow-2xl">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              Start Growing Your Brand Today
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/contact">
                <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
                  Contact Me
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}