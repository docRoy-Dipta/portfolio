"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, Building2 } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Fortune 500 Retail Chain Increases Revenue by 40%",
    client: "Major Retail Corporation",
    industry: "Retail",
    challenge: "The company was struggling with inventory management and couldn't predict customer demand accurately, leading to stockouts and overstock situations.",
    solution: "We implemented a comprehensive Power BI dashboard with predictive analytics using Python machine learning models to forecast demand and optimize inventory levels.",
    results: [
      { metric: "Revenue Increase", value: "40%", icon: DollarSign },
      { metric: "Inventory Costs Reduced", value: "25%", icon: TrendingUp },
      { metric: "Customer Satisfaction", value: "+35%", icon: Users },
      { metric: "Implementation Time", value: "8 weeks", icon: Clock },
    ],
    testimonial: "OrynTel's analytics solution transformed our business. We now make data-driven decisions that have significantly improved our bottom line.",
    author: "Sarah Johnson, Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare Provider Streamlines Patient Care",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    challenge: "Patient data was scattered across multiple systems, making it difficult to get a comprehensive view of patient health and hospital operations.",
    solution: "We created an integrated analytics platform that consolidated data from all systems into a unified Power BI dashboard, providing real-time insights into patient care and hospital efficiency.",
    results: [
      { metric: "Patient Wait Time", value: "-45%", icon: Clock },
      { metric: "Operational Efficiency", value: "+30%", icon: TrendingUp },
      { metric: "Cost Savings", value: "$2.5M/year", icon: DollarSign },
      { metric: "Patient Satisfaction", value: "+28%", icon: Users },
    ],
    testimonial: "The analytics platform has revolutionized how we deliver patient care. We can now identify issues before they become critical.",
    author: "Dr. Michael Chen, Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Manufacturing Company Reduces Downtime by 60%",
    client: "Global Manufacturing Leader",
    industry: "Manufacturing",
    challenge: "Unexpected equipment failures were causing costly production downtime and missed delivery deadlines.",
    solution: "We developed a predictive maintenance system using Python and machine learning to analyze equipment sensor data and predict failures before they occur.",
    results: [
      { metric: "Downtime Reduction", value: "60%", icon: TrendingUp },
      { metric: "Maintenance Costs", value: "-35%", icon: DollarSign },
      { metric: "Production Efficiency", value: "+25%", icon: TrendingUp },
      { metric: "ROI", value: "450%", icon: DollarSign },
    ],
    testimonial: "The predictive maintenance solution has been a game-changer. We've virtually eliminated unexpected downtime.",
    author: "Robert Kim, VP of Operations",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Financial Services Firm Detects Fraud 3X Faster",
    client: "Leading Financial Institution",
    industry: "Finance",
    challenge: "The company needed to improve fraud detection capabilities while reducing false positives that frustrated legitimate customers.",
    solution: "We built an AI-powered fraud detection system using advanced machine learning algorithms that analyze transaction patterns in real-time.",
    results: [
      { metric: "Fraud Detection Speed", value: "3x faster", icon: Clock },
      { metric: "False Positives", value: "-70%", icon: TrendingUp },
      { metric: "Annual Savings", value: "$5.2M", icon: DollarSign },
      { metric: "Customer Satisfaction", value: "+42%", icon: Users },
    ],
    testimonial: "OrynTel's fraud detection system has dramatically improved our security while enhancing customer experience.",
    author: "Jennifer Lee, Chief Risk Officer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "E-commerce Platform Boosts Conversion Rate by 55%",
    client: "Fast-Growing E-commerce Startup",
    industry: "E-commerce",
    challenge: "The company had high traffic but low conversion rates and couldn't understand why customers were abandoning their carts.",
    solution: "We implemented comprehensive analytics tracking and created interactive dashboards that revealed customer journey insights and optimization opportunities.",
    results: [
      { metric: "Conversion Rate", value: "+55%", icon: TrendingUp },
      { metric: "Cart Abandonment", value: "-40%", icon: TrendingUp },
      { metric: "Revenue Growth", value: "+85%", icon: DollarSign },
      { metric: "Customer Insights", value: "Real-time", icon: Users },
    ],
    testimonial: "The insights we gained from OrynTel's analytics have been invaluable. Our conversion rate has never been higher.",
    author: "David Park, CEO",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    featured: false,
  },
];

export default function CaseStudies() {
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 px-6 py-3 rounded-full mb-8">
            <Building2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              Success Stories
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
            Case Studies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable results through data-driven solutions.
          </p>
        </motion.div>
      </section>

      {/* Featured Case Study */}
      <section className="container mx-auto px-4 pb-16 max-w-7xl">
        {caseStudies
          .filter((study) => study.featured)
          .map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-12 text-white">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                    Featured Case Study
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h2>
                  <p className="text-lg text-blue-100 mb-8">{study.challenge}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                        <result.icon className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">{result.value}</div>
                        <div className="text-sm text-blue-100">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Read Full Story
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="h-full min-h-[500px] lg:min-h-0">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
      </section>

      {/* All Case Studies */}
      <section className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies
            .filter((study) => !study.featured)
            .map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-64">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {study.results.slice(0, 4).map((result, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3"
                      >
                        <result.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-1" />
                        <div className="text-xl font-bold text-gray-900 dark:text-white">{result.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
                      "{study.testimonial}"
                    </p>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      — {study.author}
                    </p>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
          className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 text-center border border-cyan-200 dark:border-gray-600"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar results with data-driven solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
