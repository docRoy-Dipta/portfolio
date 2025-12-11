// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OrynTel - Data and Analytics Solutions",
  description: "OrynTel provides professional data analysis, visualization, business development, Power BI dashboards, Python automation, and quality assurance services.",
  keywords: "data analysis, data visualization, Power BI, Python analytics, business development, software quality assurance, H2O.ai, OrynTel",
  openGraph: {
    title: "OrynTel - Data and Analytics Solutions",
    description: "Leading data analytics company specializing in transforming data into actionable insights.",
    url: "https://oryntel.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen bg-background dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}