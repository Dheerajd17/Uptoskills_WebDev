import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const internshipData = [
  { name: "DATA ANALYST", date: "2025-01-17 11:06:54", status: "selected" },
  { name: "CYBER SECURITY INTERN", date: "2025-01-17 11:07:12", status: "Called For Interview" },
  { name: "WEB DEVELOPMENT", date: "2025-01-17 11:07:18", status: "selected" },
  { name: "MOBILE APP DEVELOPMENT", date: "2025-01-17 11:08:22", status: "Under Review" },
  { name: "UI/UX DESIGN", date: "2025-01-17 11:09:15", status: "Called For Interview" },
];

const InternshipStatus = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Check Your Internship Status</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Internship Name</TableHead>
              <TableHead>Date of Application</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {internshipData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      item.status === "selected"
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
      </div>
    </div>
  );
};

export default InternshipStatus;
