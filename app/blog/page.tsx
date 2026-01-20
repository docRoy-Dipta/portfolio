"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Analytics",
    excerpt: "Explore how artificial intelligence is revolutionizing the way businesses analyze and leverage their data for competitive advantage.",
    author: "Sarah Johnson",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Power BI Tips for Better Data Visualization",
    excerpt: "Discover advanced techniques to create more impactful and insightful Power BI dashboards that tell compelling data stories.",
    author: "Michael Chen",
    date: "January 12, 2026",
    readTime: "6 min read",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Python for Data Analysis: Essential Libraries",
    excerpt: "A comprehensive guide to the most important Python libraries every data analyst should master in 2026.",
    author: "Emily Rodriguez",
    date: "January 10, 2026",
    readTime: "10 min read",
    category: "Python & Programming",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Building Real-Time Analytics Dashboards",
    excerpt: "Learn how to implement real-time data streaming and visualization for instant business insights.",
    author: "David Park",
    date: "January 8, 2026",
    readTime: "7 min read",
    category: "Real-Time Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Data Quality: The Foundation of Analytics",
    excerpt: "Understanding why data quality is crucial and how to implement effective data governance practices.",
    author: "Jennifer Lee",
    date: "January 5, 2026",
    readTime: "5 min read",
    category: "Data Quality",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Automating Business Processes with Python",
    excerpt: "Practical examples of how Python automation can save hours of manual work and reduce errors.",
    author: "Robert Kim",
    date: "January 3, 2026",
    readTime: "9 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    featured: false,
  },
];

const categories = ["All", "AI & Machine Learning", "Data Visualization", "Python & Programming", "Real-Time Analytics", "Data Quality", "Automation"];

export default function Blog() {
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full mb-8">
            <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Latest Insights & Trends
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
            OrynTel Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Expert insights, tutorials, and industry trends in data analytics, AI, and business intelligence.
          </p>
        </motion.div>
      </section>

      {/* Categories Filter */}
      <section className="container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                index === 0
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Featured Post */}
      {blogPosts[0].featured && (
        <section className="container mx-auto px-4 pb-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center text-white">
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6 w-fit">
                  Featured Post
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-blue-100 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 w-fit">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="h-full min-h-[400px] lg:min-h-0">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 text-center border border-cyan-200 dark:border-gray-600"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Get the latest insights and articles delivered directly to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
