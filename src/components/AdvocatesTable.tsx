import { Advocate } from "@/db/schema";
import AdvocateAvatar from "./AdvocateAvatar";
import DegreeBadge from "./DegreeBadge";
import SpecialtyTags from "./SpecialtyTags";

interface AdvocatesTableProps {
  advocates: Advocate[];
}

function formatPhoneNumber(phoneNumber: number): string {
  return phoneNumber.toString().replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

export default function AdvocatesTable({ advocates }: AdvocatesTableProps) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Credentials
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Specialties
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Experience
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Contact
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {advocates.map((advocate) => (
              <tr
                key={advocate.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <AdvocateAvatar advocate={advocate} />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {advocate.firstName} {advocate.lastName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{advocate.city}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <DegreeBadge degree={advocate.degree} />
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    <SpecialtyTags specialties={advocate.specialties} />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {advocate.yearsOfExperience} years
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {formatPhoneNumber(advocate.phoneNumber)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
