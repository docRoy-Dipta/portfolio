// components/Navbar.tsx
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="bg-primary dark:bg-blue-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Logo width={40} height={50} showText={false} className="text-white" />
          <span className="text-2xl font-bold">OrynTel</span>
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}