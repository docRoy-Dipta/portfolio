"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/components/ui/utils';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCompactProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQCompact({ items, className = "" }: FAQCompactProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-4 py-3 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={openItem === item.id}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900 dark:text-white text-sm">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openItem === item.id ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {openItem === item.id ? (
                  <Minus className="w-4 h-4 text-gray-500" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-500" />
                )}
              </motion.div>
            </div>
          </button>
          
          <AnimatePresence>
            {openItem === item.id && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-gray-50 dark:bg-gray-700"
              >
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
