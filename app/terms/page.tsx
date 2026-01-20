"use client";

import { motion } from "framer-motion";
import { FileText, AlertCircle, Scale, Ban, Shield, Mail } from "lucide-react";
import Link from "next/link";

export default function TermsOfUse() {
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
          <div className="inline-flex items-center gap-3 bg-purple-100 dark:bg-purple-900/30 px-6 py-3 rounded-full mb-8">
            <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Legal Terms & Conditions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Last Updated: January 20, 2026
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 space-y-10 border border-gray-100 dark:border-gray-700"
        >
          {/* Introduction */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Welcome to OrynTel. These Terms of Use ("Terms") govern your access to and use of our website, services, and products. By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Acceptance of Terms
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing and using OrynTel's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services following any changes constitutes your acceptance of the new Terms.
              </p>
            </div>
          </div>

          {/* Services Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Description of Services
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OrynTel provides professional data analytics, visualization, business intelligence, and related services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Data analysis and interpretation</li>
                <li>Data visualization and dashboard creation</li>
                <li>Business development support and consulting</li>
                <li>Power BI dashboard development</li>
                <li>Python-based automation and analytics</li>
                <li>Software quality assurance services</li>
                <li>Website development and design</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </div>
          </div>

          {/* User Responsibilities */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                User Responsibilities
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>
          </div>

          {/* Prohibited Activities */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Ban className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Prohibited Activities
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You may not use our services to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Engage in any illegal or fraudulent activities</li>
                <li>Transmit malicious code, viruses, or harmful software</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or harvest information about other users</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Engage in any activity that could damage our reputation</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Intellectual Property Rights
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All content on our website and services, including but not limited to text, graphics, logos, images, software, and data compilations, is the property of OrynTel or its licensors and is protected by intellectual property laws.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our express written permission. Any unauthorized use of our intellectual property may result in legal action.
              </p>
            </div>
          </div>

          {/* Client Data */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Client Data and Confidentiality
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When you provide data to us for analysis or other services, you retain all ownership rights to your data. By providing your data, you grant us a limited license to use, process, and analyze the data solely for the purpose of providing our services to you.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We treat all client data as confidential and will not share it with third parties except as necessary to provide our services, comply with legal obligations, or with your explicit consent. For more details, please refer to our <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>

          {/* Service Level and Availability */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Service Level and Availability
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                While we strive to maintain high availability and quality of our services, we do not guarantee that our services will be uninterrupted, timely, secure, or error-free. We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Perform scheduled and emergency maintenance</li>
                <li>Modify or update our services</li>
                <li>Temporarily suspend services for technical reasons</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                We will make reasonable efforts to notify you of any significant service interruptions.
              </p>
            </div>
          </div>

          {/* Payment Terms */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Payment Terms
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                For paid services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Pay all fees as specified in your service agreement</li>
                <li>Provide accurate billing information</li>
                <li>Pay invoices within the specified time period</li>
                <li>Be responsible for all applicable taxes</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                Failure to pay may result in suspension or termination of services. All fees are non-refundable unless otherwise stated in your service agreement.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Limitation of Liability
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, OrynTel shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>Any bugs, viruses, or other harmful code</li>
                <li>Any errors or omissions in any content</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                Our total liability to you for any claims arising from or relating to these Terms or our services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </div>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Indemnification
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless OrynTel, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of our services, your violation of these Terms, or your infringement of any intellectual property or other rights of any third party.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Termination
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Breach of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>At our sole discretion</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Governing Law and Dispute Resolution
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Good faith negotiation between the parties</li>
                <li>Mediation, if negotiation is unsuccessful</li>
                <li>Binding arbitration in accordance with applicable arbitration rules</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                You agree to waive any right to a jury trial or to participate in a class action lawsuit.
              </p>
            </div>
          </div>

          {/* Severability */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Severability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.
            </p>
          </div>

          {/* Entire Agreement */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Entire Agreement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and OrynTel regarding the use of our services and supersede all prior agreements and understandings, whether written or oral.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Questions About These Terms?
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions or concerns about these Terms of Use, please contact us:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> legal@oryntel.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> OrynTel Data Solutions, 123 Analytics Drive, Data City, DC 12345</p>
            </div>
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Additional Info */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For more information about our services and policies:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/services"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Our Services
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/about"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              About Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
