"use client";

import { useState } from "react";
import { Phone, FileText, Building2, CircleHelp, BookOpen, Download } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";

const helpfulLinks = [
  {
    icon: FileText,
    title: "Looking for project documentation?",
    description: "Please visit our ",
    linkText: "Projects page",
    linkHref: "/projects",
    additionalText: ". If the information you're looking for isn't there, please wait 1-2 days and try again.",
  },
  {
    icon: Building2,
    title: "Need a phone number or address for our office?",
    description: "Please visit our ",
    linkText: "About page",
    linkHref: "/about",
    additionalText: ".",
  },
  {
    icon: BookOpen,
    title: "Would you like to learn more about our services?",
    description: "Please visit our ",
    linkText: "Services page",
    linkHref: "/services",
    additionalText: ".",
  },
  {
    icon: Download,
    title: "Are you looking for valuable resources?",
    description: "Explore our resources page for a collection of case studies, infographics, and more.",
  },
];

export default function Contact() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div 
          className="relative h-[400px] bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1599692061996-0323fb50a160?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwb3IlMjBidXNpbmVzcyUyMGxhbmRzY2FwZSUyMGZvciUyMGNvbnRhY3QlMjBwYWdlJTIwaGVybyUyMGJhY2tncm91bmQlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzY4ODUyNjAzfDA&ixlib=rb-4.1.0&q=85')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Helpful Links */}
              {helpfulLinks.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-primary dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        {item.description}
                        {item.linkText && (
                          <Link 
                            href={item.linkHref || "#"} 
                            className="text-primary hover:underline"
                          >
                            {item.linkText}
                          </Link>
                        )}
                        {item.additionalText}
                      </p>
                    </div>
                  </div>
                  {index < helpfulLinks.length - 1 && (
                    <div className="border-b border-border dark:border-gray-700 mt-6"></div>
                  )}
                </div>
              ))}

              {/* Have Another Question */}
              <div className="pt-4">
                <div className="flex items-start gap-3">
                  <CircleHelp className="h-5 w-5 text-primary dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">Have another question?</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3">
                      You can always call us during normal business hours (9 a.m. to 5 p.m. EST) at{" "}
                      <a href="tel:+15551234567" className="font-semibold text-foreground dark:text-white hover:text-primary dark:hover:text-blue-400">
                        +1 (555) 123-4567
                      </a>{" "}
                      and speak to one of our customer service team members.
                    </p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      Or you can fill out our contact form and we'll make sure your message gets to the right person.
                    </p>
                    <p className="text-xs text-muted-foreground dark:text-gray-400 mt-4">
                      Your personal information will never be shared with third parties. Read our{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      to learn more about our commitment to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
