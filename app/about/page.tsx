// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Database, 
  Code2, 
  Table2, 
  FileSpreadsheet,
  Building2,
  Sparkles,
  ShieldCheck,
  Brain,
  Users,
  Mail,
  Linkedin,
  LucideIcon
} from "lucide-react";
import Logo from "@/components/Logo";

// Type definition for better type safety
interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
}

interface Tool {
  name: string;
  icon: LucideIcon;
  color: string;
}

interface Employee {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const skills: Skill[] = [
  {
    name: "Data Analysis",
    icon: BarChart3,
    description: "Extracting insights from complex datasets"
  },
  {
    name: "Data Visualization",
    icon: PieChart,
    description: "Creating compelling visual stories"
  },
  {
    name: "Business Development",
    icon: TrendingUp,
    description: "Data-driven growth strategies"
  },
  {
    name: "Power BI Dashboards",
    icon: Sparkles,
    description: "Interactive business intelligence"
  },
  {
    name: "Python Analytics",
    icon: Code2,
    description: "Automation and advanced analytics"
  },
  {
    name: "Software Quality Assurance",
    icon: ShieldCheck,
    description: "Ensuring software reliability and quality"
  }
];

const tools: Tool[] = [
  { name: "Python", icon: Code2, color: "text-blue-500" },
  { name: "Power BI", icon: Sparkles, color: "text-yellow-500" },
  { name: "SQL", icon: Database, color: "text-green-500" },
  { name: "Excel", icon: FileSpreadsheet, color: "text-emerald-600" },
  { name: "Tableau", icon: Table2, color: "text-orange-500" },
  { name: "H2O.ai", icon: Brain, color: "text-purple-500" }
];

const employees: Employee[] = [
  {
    name: "John Doe",
    role: "Lead Data Scientist",
    bio: "10+ years of experience in machine learning and AI solutions",
    image: "https://i.pravatar.cc/150?u=johndoe"
  },
  {
    name: "Jane Smith",
    role: "Senior Business Analyst",
    bio: "Expert in translating business needs into data-driven solutions",
    image: "https://i.pravatar.cc/150?u=janesmith"
  },
  {
    name: "Mike Johnson",
    role: "QA Manager",
    bio: "Specialized in quality assurance and testing automation",
    image: "https://i.pravatar.cc/150?u=mikejohnson"
  },
  {
    name: "Sarah Williams",
    role: "Power BI Specialist",
    bio: "Creating impactful dashboards and visual analytics",
    image: "https://i.pravatar.cc/150?u=sarahwilliams"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8 inline-block">
            <div className="mx-auto flex items-center justify-center">
              <Logo 
                width={160} 
                height={200} 
                className="drop-shadow-lg"
                showText={true}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About ORYNTEL
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We are a leading data analytics company with expertise in transforming data into actionable insights. We specialize in helping businesses make data-driven decisions through advanced analytics, visualization, and quality assurance.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Tools Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Tools & Technologies
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    {IconComponent && (
                      <IconComponent className={`w-12 h-12 mb-3 ${tool.color}`} />
                    )}
                    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Additional Tools List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl"
            >
              <p className="text-center text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Also proficient in:</span> Pandas, NumPy, Scikit-learn, and other data science libraries
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Meet Our Top Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              The experts driving our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {employees.map((employee, index) => (
              <motion.div
                key={employee.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                    <img 
                      src={employee.image} 
                      alt={employee.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=3b82f6&color=fff`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {employee.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {employee.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {employee.bio}
                  </p>
                  <div className="flex justify-center gap-3">
                    <button 
                      className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      aria-label={`Email ${employee.name}`}
                    >
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </button>
                    <button 
                      className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      aria-label={`LinkedIn profile of ${employee.name}`}
                    >
                      <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Partner With Us
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Ready to transform your business with data-driven solutions? Let's discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}