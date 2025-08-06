interface SpecialtyTagsProps {
  specialties: string[] | unknown;
  maxVisible?: number;
}

export default function SpecialtyTags({
  specialties,
  maxVisible = 2,
}: SpecialtyTagsProps) {
  if (!Array.isArray(specialties) || specialties.length === 0) {
    return <span className="text-gray-500 italic">No specialties listed</span>;
  }

  return (
    <div className="space-y-1">
      {specialties.slice(0, maxVisible).map((specialty, i) => (
        <div key={i} className="inline-block mr-2 mb-1">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
            {specialty}
          </span>
        </div>
      ))}
      {specialties.length > maxVisible && (
        <div className="inline-block">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-500">
            +{specialties.length - maxVisible} more
          </span>
        </div>
      )}
    </div>
  );
}
