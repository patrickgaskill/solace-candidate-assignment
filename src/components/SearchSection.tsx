interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onClearSearch: () => void;
  placeholder?: string;
  label?: string;
}

export default function SearchSection({
  searchTerm,
  onSearchChange,
  onClearSearch,
  placeholder = "Search...",
  label = "Search",
}: SearchSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <div className="max-w-2xl mx-auto">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
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
          </div>
          <input
            id="search"
            type="text"
            placeholder={placeholder}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-solace-primary focus:border-solace-primary text-sm"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        {searchTerm && (
          <div className="flex items-center justify-between mt-3">
            <p className="text-sm text-gray-600">
              Searching for:{" "}
              <span className="font-medium text-gray-900">"{searchTerm}"</span>
            </p>
            <button
              onClick={onClearSearch}
              className="text-sm text-solace-primary hover:text-solace-primary-dark font-medium focus:outline-none focus:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
