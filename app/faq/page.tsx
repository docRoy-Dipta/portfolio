"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqCategories = [
  {
    category: "General Questions",
    faqs: [
      {
        question: "What services does OrynTel offer?",
        answer: "OrynTel provides comprehensive data analytics services including data analysis, data visualization, Power BI dashboard development, Python-based automation, business intelligence consulting, software quality assurance, and custom website development. We help businesses transform their data into actionable insights.",
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, technology, education, and more. Our data analytics solutions are tailored to meet the specific needs of each industry, ensuring maximum value and impact.",
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on complexity and scope. Simple dashboard projects may take 2-3 weeks, while comprehensive analytics implementations can take 2-3 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the process.",
      },
      {
        question: "Do you offer ongoing support and maintenance?",
        answer: "Yes! We provide comprehensive ongoing support and maintenance packages. This includes regular updates, performance monitoring, troubleshooting, user training, and continuous optimization of your analytics solutions to ensure they continue to meet your evolving business needs.",
      },
    ],
  },
  {
    category: "Technical Questions",
    faqs: [
      {
        question: "What tools and technologies do you use?",
        answer: "We work with industry-leading tools including Power BI, Tableau, Python (Pandas, NumPy, Scikit-learn), SQL databases, Excel, H2O.ai, and various cloud platforms (AWS, Azure, GCP). We select the best technology stack based on your specific requirements and existing infrastructure.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Absolutely! We specialize in seamless integration with existing systems. Whether you're using ERP systems, CRM platforms, databases, or cloud services, we can establish secure connections and create unified analytics solutions that work with your current infrastructure.",
      },
      {
        question: "How do you ensure data security?",
        answer: "Data security is our top priority. We implement enterprise-grade encryption (both in transit and at rest), follow industry best practices for data governance, comply with GDPR and other regulations, use secure authentication methods, and conduct regular security audits. We also sign NDAs and can work with your security team to meet specific compliance requirements.",
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, we offer comprehensive training programs tailored to your team's needs. This includes hands-on workshops, video tutorials, documentation, and ongoing support to ensure your team can effectively use and maintain the analytics solutions we develop.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    faqs: [
      {
        question: "How do you structure your pricing?",
        answer: "We offer flexible pricing models including project-based pricing for one-time implementations, monthly retainers for ongoing work, and hourly rates for consulting. We provide detailed quotes after understanding your specific requirements during our free initial consultation.",
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes! We offer a free initial consultation to understand your needs, discuss potential solutions, and provide preliminary recommendations. This helps us create an accurate proposal and ensures we're the right fit for your project.",
      },
      {
        question: "What is your refund policy?",
        answer: "We work on a milestone-based payment system. If you're not satisfied with a deliverable at any milestone, we'll work with you to make necessary revisions. Our goal is 100% client satisfaction. Specific refund terms are outlined in our service agreements.",
      },
      {
        question: "Do you require long-term contracts?",
        answer: "No, we don't require long-term commitments. While we offer discounted rates for long-term partnerships, we're happy to work on individual projects or short-term engagements. We believe in earning your continued business through excellent results.",
      },
    ],
  },
  {
    category: "Getting Started",
    faqs: [
      {
        question: "How do I get started with OrynTel?",
        answer: "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule a free consultation to discuss your needs, after which we'll provide a detailed proposal. Once approved, we'll kick off the project with a comprehensive planning session.",
      },
      {
        question: "What information do you need from us to start?",
        answer: "To get started, we'll need information about your business goals, current data sources, existing systems, specific challenges you're facing, and desired outcomes. Don't worry if you don't have all the details – we'll help you identify and organize this information during our initial consultation.",
      },
      {
        question: "Can you work with remote teams?",
        answer: "Absolutely! We're experienced in working with remote and distributed teams. We use collaborative tools like Slack, Microsoft Teams, Zoom, and project management platforms to ensure smooth communication and project execution regardless of location.",
      },
      {
        question: "What makes OrynTel different from competitors?",
        answer: "OrynTel combines technical expertise with business acumen. We don't just build dashboards – we deliver insights that drive decisions. Our team has deep experience across multiple industries, we use cutting-edge AI and ML techniques, provide exceptional customer service, and focus on measurable ROI for every project.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full mb-8">
            <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Find Answers Quickly
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Got questions? We've got answers. Browse our FAQ or contact us for more information.
          </p>
        </motion.div>
      </section>

      {/* FAQ Sections */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: faqIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl"
        >
          <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Still Have Questions?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our team is here to help. Contact us and we'll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Support
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
