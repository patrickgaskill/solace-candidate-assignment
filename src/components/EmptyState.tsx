interface EmptyStateProps {
  searchTerm: string;
  onClearSearch: () => void;
  title?: string;
  description?: string;
}

export default function EmptyState({
  searchTerm,
  onClearSearch,
  title = "No results found",
  description = "Try adjusting your search criteria or",
}: EmptyStateProps) {
  if (!searchTerm) return null;

  return (
    <div className="text-center py-12">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">
        {description}{" "}
        <button
          onClick={onClearSearch}
          className="text-solace-primary hover:text-solace-primary-dark"
        >
          clear your search
        </button>
        .
      </p>
    </div>
  );
}
