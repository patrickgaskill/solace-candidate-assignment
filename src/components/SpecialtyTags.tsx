import { useState } from "react";

interface SpecialtyTagsProps {
  specialties: string[] | unknown;
  maxVisible?: number;
}

export default function SpecialtyTags({
  specialties,
  maxVisible = 2,
}: SpecialtyTagsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!Array.isArray(specialties) || specialties.length === 0) {
    return <span className="text-gray-500 italic">No specialties listed</span>;
  }

  const displayedSpecialties = isExpanded
    ? specialties
    : specialties.slice(0, maxVisible);
  const hasMore = specialties.length > maxVisible;

  return (
    <div className="space-y-1">
      {displayedSpecialties.map((specialty, i) => (
        <div key={i} className="inline-block mr-2 mb-1">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
            {specialty}
          </span>
        </div>
      ))}
      {hasMore && !isExpanded && (
        <div className="inline-block">
          <button
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-solace-primary-50 text-solace-primary hover:bg-solace-primary-100 hover:text-solace-primary-dark transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-solace-primary focus:ring-offset-1"
          >
            +{specialties.length - maxVisible} more
          </button>
        </div>
      )}
      {isExpanded && hasMore && (
        <div className="inline-block">
          <button
            onClick={() => setIsExpanded(false)}
            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-solace-primary-100 text-solace-primary hover:bg-solace-primary-200 hover:text-solace-primary-dark transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-solace-primary focus:ring-offset-1"
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
}
