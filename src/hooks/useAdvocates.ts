import { Advocate } from "@/db/schema";
import { useQuery } from "@tanstack/react-query";

type ApiResponse = {
  data: Advocate[];
};

async function fetchAdvocates(): Promise<Advocate[]> {
  const response = await fetch("/api/advocates");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const jsonResponse: ApiResponse = await response.json();
  return jsonResponse.data;
}

export function useAdvocates() {
  return useQuery({
    queryKey: ["advocates"],
    queryFn: fetchAdvocates,
  });
}
