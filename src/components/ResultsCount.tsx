interface ResultsCountProps {
  filteredCount: number;
  totalCount: number;
  itemName?: string;
}

export default function ResultsCount({
  filteredCount,
  totalCount,
  itemName = "items",
}: ResultsCountProps) {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-600">
        Showing {filteredCount} of {totalCount} {itemName}
      </p>
    </div>
  );
}
