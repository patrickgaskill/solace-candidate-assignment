"use client";

import {
  AdvocatesTable,
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
  ResultsCount,
  SearchSection,
} from "@/components";
import { Advocate } from "@/db/schema";
import { useAdvocates } from "@/hooks/useAdvocates";
import { useState } from "react";

function filterAdvocates(advocates: Advocate[], searchTerm: string) {
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();

  if (!normalizedSearchTerm) return advocates;

  const fieldsToCheck: (keyof Advocate)[] = [
    "firstName",
    "lastName",
    "city",
    "degree",
    "specialties",
    "yearsOfExperience",
  ];

  return advocates.filter((advocate) => {
    return fieldsToCheck.some((field) => {
      const value = advocate[field];
      if (field === "specialties" && Array.isArray(value)) {
        return value.some((v) =>
          String(v).toLowerCase().includes(normalizedSearchTerm)
        );
      }
      return String(value).toLowerCase().includes(normalizedSearchTerm);
    });
  });
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: advocates = [], isLoading, error, refetch } = useAdvocates();

  const handleSearchTermChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleResetClick = () => {
    setSearchTerm("");
  };

  const filteredAdvocates = filterAdvocates(advocates, searchTerm);

  if (isLoading) {
    return (
      <LoadingState title="Solace Advocates" message="Loading advocates..." />
    );
  }

  if (error) {
    return (
      <ErrorState title="Solace Advocates" error={error} onRetry={refetch} />
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader />

        <SearchSection
          searchTerm={searchTerm}
          onSearchChange={handleSearchTermChange}
          onClearSearch={handleResetClick}
          placeholder="Search by name, city, degree, specialty, or experience..."
          label="Search Advocates"
        />

        <ResultsCount
          filteredCount={filteredAdvocates.length}
          totalCount={advocates.length}
          itemName="advocates"
        />

        <AdvocatesTable advocates={filteredAdvocates} />

        <EmptyState
          searchTerm={searchTerm}
          onClearSearch={handleResetClick}
          title="No advocates found"
          description="Try adjusting your search criteria or"
        />
      </div>
    </main>
  );
}
