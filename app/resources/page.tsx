"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, Download, ExternalLink, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    category: "Whitepapers",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        title: "AI-Driven Data Analytics: A Complete Guide",
        description: "Comprehensive guide on implementing AI-powered analytics in your organization.",
        type: "PDF",
        size: "2.5 MB",
        date: "Jan 2026",
      },
      {
        title: "Power BI Best Practices for Enterprise",
        description: "Learn how to build scalable and efficient Power BI dashboards.",
        type: "PDF",
        size: "1.8 MB",
        date: "Dec 2025",
      },
      {
        title: "Python for Business Analytics",
        description: "Leverage Python libraries for advanced business intelligence.",
        type: "PDF",
        size: "3.2 MB",
        date: "Nov 2025",
      },
    ],
  },
  {
    category: "Case Studies",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    items: [
      {
        title: "Fortune 500 Company Increases Revenue by 40%",
        description: "How data-driven insights transformed their business strategy.",
        type: "Case Study",
        readTime: "8 min read",
        date: "Jan 2026",
      },
      {
        title: "Healthcare Analytics Implementation",
        description: "Streamlining patient data analysis for better outcomes.",
        type: "Case Study",
        readTime: "6 min read",
        date: "Dec 2025",
      },
      {
        title: "Retail Chain Optimizes Inventory Management",
        description: "Reducing costs through predictive analytics.",
        type: "Case Study",
        readTime: "5 min read",
        date: "Nov 2025",
      },
    ],
  },
  {
    category: "Infographics",
    icon: TrendingUp,
    color: "from-cyan-500 to-teal-500",
    items: [
      {
        title: "Data Analytics Trends 2026",
        description: "Visual breakdown of emerging trends in data science.",
        type: "Infographic",
        format: "PNG",
        date: "Jan 2026",
      },
      {
        title: "The Data Analytics Process Flow",
        description: "Step-by-step visualization of our analytics methodology.",
        type: "Infographic",
        format: "PNG",
        date: "Dec 2025",
      },
      {
        title: "ROI of Business Intelligence",
        description: "Key metrics and statistics on BI investment returns.",
        type: "Infographic",
        format: "PNG",
        date: "Nov 2025",
      },
    ],
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 px-6 py-3 rounded-full mb-8">
            <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Free Resources & Downloads
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
            Knowledge Center
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Access our collection of whitepapers, case studies, infographics, and valuable resources to help you leverage data analytics effectively.
          </p>
        </motion.div>
      </section>

      {/* Resources Grid */}
      <section className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="space-y-20">
          {resources.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${category.color} text-white text-xs font-semibold rounded-full`}>
                        {item.type}
                      </span>
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>{item.date}</span>
                      <span>
                        {'size' in item && item.size}
                        {'readTime' in item && item.readTime}
                        {'format' in item && item.format}
                      </span>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Need Custom Resources?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            We can create tailored whitepapers and case studies for your specific industry needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5" />
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
