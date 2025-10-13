// components/ServiceCard.tsx (Updated for visually soothing design)
interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary dark:text-blue-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}