interface DegreeBadgeProps {
  degree: string;
  variant?: "blue" | "green" | "purple" | "gray";
}

export default function DegreeBadge({
  degree,
  variant = "blue",
}: DegreeBadgeProps) {
  const variantClasses = {
    blue: "bg-solace-primary-100 text-solace-primary-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    gray: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}
    >
      {degree}
    </span>
  );
}
