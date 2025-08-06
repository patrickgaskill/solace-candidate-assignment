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

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse: ApiResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
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
              <tr>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s) => (
                    <div>{s}</div>
                  ))}
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
