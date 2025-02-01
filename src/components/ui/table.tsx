"use client";

import React from "react";

// ✅ Table Wrapper Component
export default function Table({ children }: { children: React.ReactNode }) {
  return <table className="w-full border-collapse border border-gray-300">{children}</table>;
}

// ✅ Table Head Component
export const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead className="bg-gray-100">{children}</thead>
);

// ✅ Table Header Component (Column Titles)
export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th className="border border-gray-300 px-4 py-2">{children}</th>
);

// ✅ Table Body Component
export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => <tbody>{children}</tbody>;

// ✅ Table Row Component
export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tr className="hover:bg-gray-200">{children}</tr>
);

// ✅ Table Cell Component
export const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <td className="border border-gray-300 px-4 py-2">{children}</td>
);
