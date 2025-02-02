"use client";

import { useEffect, useState } from "react";
import Table, { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // ✅ Correct Imports
interface Internship {
  _id: string;
  name: string;
  email: string;
  universityType: string;
  branch: string;
  qualification: string;
  mobileNumber: string;
  startDate: Date;
  message: string;
  appliedAt: Date;
  status: string;
  // Add other fields as needed
}
const InternshipStatus = () => {
  const [internshipData, setInternshipData] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/internships"); // ✅ Correct API URL
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setInternshipData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Internship Submissions : Status</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : internshipData.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>University Type</TableHeader>
              <TableHeader>Branch</TableHeader>
              <TableHeader>Mobile Number</TableHeader>
              <TableHeader>Qualification</TableHeader>
              <TableHeader>Start Date</TableHeader>
              <TableHeader>Message</TableHeader>
              <TableHeader>Applied On</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {internshipData.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.name || "N/A"}</TableCell>
                <TableCell>{item.email || "N/A"}</TableCell>
                <TableCell>{item.universityType || "N/A"}</TableCell>
                <TableCell>{item.branch || "N/A"}</TableCell>
                <TableCell>{item.mobileNumber || "N/A"}</TableCell>
                <TableCell>{item.qualification || "N/A"}</TableCell>
                <TableCell>{item.startDate ? new Date(item.startDate).toLocaleDateString() : "N/A"}</TableCell>
                <TableCell>{item.message || "N/A"}</TableCell>
                <TableCell>{new Date(item.appliedAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      item.status === "Selected"
                        ? "bg-green-100 text-green-800"
                        : item.status === "Called For Interview"
                        ? "bg-blue-100 text-blue-800"
                        : item.status === "Under Review"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
export async function getStaticProps() {
  try {
    const res = await fetch("https://your-api.com/data");
    const data = await res.json();

    return {
      props: { initialData: data },
      revalidate: 10, // ✅ ISR: Revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: { initialData: [] },
      revalidate: 10, // ✅ Ensures page regenerates even if error occurs
    };
  }
}


export default InternshipStatus;
