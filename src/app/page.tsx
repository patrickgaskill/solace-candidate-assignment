"use client";

import { Advocate } from "@/db/schema";
import { useEffect, useState } from "react";

type ApiResponse = {
  data: Advocate[];
};

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
      if (Array.isArray(value)) {
        return value.some((v) =>
          String(v).toLowerCase().includes(normalizedSearchTerm)
        );
      }
      return String(value).toLowerCase().includes(normalizedSearchTerm);
    });
  });
}

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdvocates = async () => {
      try {
        console.log("fetching advocates...");
        const response = await fetch("/api/advocates");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse: ApiResponse = await response.json();
        setAdvocates(jsonResponse.data);
      } catch (err) {
        console.error("Error fetching advocates:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch advocates"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAdvocates();
  }, []);

  const handleSearchTermChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSearchTerm(e.target.value);
  };

  const handleResetClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSearchTerm("");
  };

  const filteredAdvocates = filterAdvocates(advocates, searchTerm);

  if (loading) {
    return (
      <main style={{ margin: "24px" }}>
        <h1>Solace Advocates</h1>
        <p>Loading advocates...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main style={{ margin: "24px" }}>
        <h1>Solace Advocates</h1>
        <div
          style={{
            color: "red",
            padding: "16px",
            border: "1px solid red",
            borderRadius: "4px",
          }}
        >
          <p>
            <strong>Error:</strong> {error}
          </p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <p>
          Searching for: <span id="search-term"></span>
        </p>
        <input
          style={{ border: "1px solid black" }}
          onChange={handleSearchTermChange}
          value={searchTerm}
        />
        <button onClick={handleResetClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr key={advocate.id}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {Array.isArray(advocate.specialties)
                    ? advocate.specialties.map((s, i) => <div key={i}>{s}</div>)
                    : "No specialties listed"}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
