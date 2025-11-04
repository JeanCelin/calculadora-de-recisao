type IconProps = {
  size?: number;
  color?: string;
};

export default function ClockIcon({
  size = 16,
  color = "text-blue-600",
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide  lucide-calculator w-${size} h-${size} ${color} `}
      aria-hidden="true">
      <path d="M12 6v6l4 2"></path>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
}
