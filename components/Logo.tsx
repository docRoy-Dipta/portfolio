import Image from "next/image";
import logoImage from "@/components/figma/Designer.jpg";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

const sizeMap = {
  sm: 40,
  md: 70,
  lg: 120,
  xl: 180,
  "2xl": 240,   // ⭐ new bigger size for your home page
};

export default function Logo({ size = "md", className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <Image
        src={logoImage}
        alt="OrynTel Logo"
        width={sizeMap[size]}
        height={sizeMap[size]}
        className="object-contain"
      />
    </div>
  );
}
