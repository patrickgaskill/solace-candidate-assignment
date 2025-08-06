import { Advocate } from "@/db/schema";

interface AdvocateAvatarProps {
  advocate: Advocate;
  size?: "sm" | "md" | "lg";
}

export default function AdvocateAvatar({
  advocate,
  size = "md",
}: AdvocateAvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0`}
    >
      <span className="font-medium text-blue-600">
        {advocate.firstName[0]}
        {advocate.lastName[0]}
      </span>
    </div>
  );
}
