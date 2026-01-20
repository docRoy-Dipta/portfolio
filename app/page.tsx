"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, Code2, TrendingUp, Sparkles, ArrowRight, CheckCircle2, Database, Zap, Shield, LineChart, Brain, HelpCircle, Star, Users, Clock, Award } from "lucide-react";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-600/10 dark:to-blue-700/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-400/15 to-cyan-500/15 dark:from-emerald-600/10 dark:to-cyan-700/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 text-cyan-700 dark:text-cyan-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>AI-Powered Data Excellence</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
              >
                Transform Data into{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Pure Magic
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl"
              >
                Unleash the power of your data with cutting-edge analytics, stunning visualizations, and intelligent automation that drives real results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10"
              >
                <Link href="/services">
                  <button className="group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:rotate-1">
                    Start Your Journey
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-100 px-10 py-5 rounded-2xl text-xl font-bold border-2 border-cyan-200 dark:border-cyan-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1">
                    Watch Demo
                  </button>
                </Link>
              </motion.div>

              {/* Enhanced Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                {[
                  { icon: Brain, text: "AI Analytics", color: "from-cyan-500 to-blue-500" },
                  { icon: Zap, text: "Real-time Insights", color: "from-blue-500 to-purple-500" },
                  { icon: Shield, text: "Enterprise Security", color: "from-purple-500 to-pink-500" }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-100">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

             {/* ⭐ RIGHT LOGO SECTION — FIXED! */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative">

                {/* 🌟 REPLACED OLD LOGO WITH YOUR NEW BLOCK */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                  
                  {/* Outer glowing animated circle */}
                  <div className="absolute inset-0 rounded-full border-4 border-orange-500/70 animate-pulse"></div>

                  {/* Inner white circle */}
                  <div className="w-64 h-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner">
                    <Logo size="2xl" />
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-12 -left-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-xl"
                >
                  <BarChart3 className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-12 -right-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 shadow-xl"
                >
                  <TrendingUp className="w-10 h-10 text-white" />
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ... existing code ... */}
      {/* Condensed About Section */}
      <section className="py-20 bg-gradient-to-r from-white via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
              Why OrynTel Rocks
            </h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We turn complex data into game-changing insights that fuel your success
            </p>
          </motion.div>

          {/* Simplified Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
          >
            {[
              { icon: Users, number: "500+", label: "Happy Clients", color: "from-cyan-500 to-blue-500" },
              { icon: Award, number: "1000+", label: "Projects Done", color: "from-blue-500 to-purple-500" },
              { icon: Clock, number: "24/7", label: "Support", color: "from-purple-500 to-pink-500" },
              { icon: Star, number: "5.0", label: "Rating", color: "from-pink-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-200 dark:hover:border-cyan-700"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black bg-gradient-to-r from-gray-800 to-gray-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-2 pb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Streamlined Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Superpowers
            </h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Three core services that transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                icon: Brain,
                title: "AI Analytics",
                description: "Smart algorithms that find patterns humans miss and predict what's coming next.",
                color: "from-cyan-500 to-blue-600",
                bgColor: "from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-800"
              },
              {
                icon: BarChart3,
                title: "Visual Dashboards",
                description: "Beautiful, interactive dashboards that make complex data instantly understandable.",
                color: "from-blue-500 to-purple-600",
                bgColor: "from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800"
              },
              {
                icon: Zap,
                title: "Smart Automation",
                description: "Intelligent workflows that work 24/7 to optimize your operations automatically.",
                color: "from-purple-500 to-pink-600",
                bgColor: "from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white dark:border-gray-600 hover:border-opacity-50 overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Quick Answers
            </h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300">Everything you need to know</p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How fast can you deliver results?",
                a: "Most projects show initial insights within 2-3 weeks. Full implementations typically take 4-8 weeks depending on complexity."
              },
              {
                q: "Is my data secure with you?",
                a: "Absolutely. We use enterprise-grade encryption, comply with all major standards (GDPR, SOC 2), and never share your data."
              },
              {
                q: "Do you work with small businesses?",
                a: "Yes! We have flexible packages for businesses of all sizes, from startups to Fortune 500 companies."
              },
              {
                q: "What makes you different?",
                a: "We combine cutting-edge AI with human expertise to deliver insights that are not just accurate, but actionable and profitable."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-200 dark:hover:border-cyan-700"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  {faq.q}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white rounded-3xl p-16 text-center shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-black mb-6"
              >
                Ready to Go Viral with Data?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl mb-10 opacity-90"
              >
                Join thousands of companies already crushing it with OrynTel
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-12 py-5 rounded-2xl text-xl font-black hover:shadow-2xl transition-all duration-300"
                  >
                    Start Free Trial
                  </motion.button>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-4 border-white text-white px-12 py-5 rounded-2xl text-xl font-black hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Book Demo Call
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}