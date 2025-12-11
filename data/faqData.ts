// data/faqData.ts
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const homeFAQData: FAQItem[] = [
  {
    id: "what-is-oryntel",
    question: "What is ORYNTEL and what services do you provide?",
    answer: "ORYNTEL is a leading data analytics company specializing in transforming raw data into actionable business insights. We provide comprehensive services including data analysis, visualization, Power BI dashboard development, Python analytics, business intelligence solutions, and software quality assurance."
  },
  {
    id: "industries-served",
    question: "What industries do you work with?",
    answer: "We work across various industries including healthcare, finance, retail, manufacturing, technology, and e-commerce. Our data analytics solutions are adaptable to any industry that needs to make data-driven decisions and improve operational efficiency."
  },
  {
    id: "project-timeline",
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. Simple dashboard projects typically take 2-4 weeks, while comprehensive analytics solutions can take 6-12 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout the process."
  },
  {
    id: "data-security",
    question: "How do you ensure data security and privacy?",
    answer: "Data security is our top priority. We implement industry-standard encryption, secure data transfer protocols, and strict access controls. We're compliant with GDPR, HIPAA, and other relevant data protection regulations. All team members sign comprehensive NDAs, and we can work within your existing security frameworks."
  },
  {
    id: "tools-technologies",
    question: "What tools and technologies do you use?",
    answer: "We use a comprehensive suite of modern tools including Python, Power BI, SQL, Excel, Tableau, H2O.ai, and various machine learning libraries like Pandas, NumPy, and Scikit-learn. We select the best tools based on your specific requirements and existing infrastructure."
  },
  {
    id: "pricing-model",
    question: "How do you structure your pricing?",
    answer: "We offer flexible pricing models including project-based fixed pricing, hourly consulting rates, and retainer agreements for ongoing support. Pricing depends on project complexity, timeline, and required resources. We provide detailed quotes after understanding your specific needs during our free consultation."
  },
  {
    id: "getting-started",
    question: "How do I get started with ORYNTEL?",
    answer: "Getting started is easy! Contact us through our website or phone to schedule a free consultation. We'll discuss your needs, assess your current data infrastructure, and propose a customized solution. There's no obligation, and we'll provide you with a clear roadmap and timeline for your project."
  },
  {
    id: "ongoing-support",
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive ongoing support including dashboard maintenance, data updates, user training, and system optimization. We provide different support tiers to match your needs, from basic maintenance to full-service data management and continuous improvement."
  }
];
