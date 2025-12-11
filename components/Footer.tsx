// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-blue-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} OrynTel. All rights reserved.</p>
      </div>
    </footer>
  );
}