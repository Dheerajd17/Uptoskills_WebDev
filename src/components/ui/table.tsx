// src/components/ui/table.tsx
import React from "react";

interface TableProps {
  headers?: string[]; // Made headers optional and added a default value
  data?: string[][];  // Made data optional and added a default value
}

export const Table: React.FC<TableProps> = ({ headers = [], data = [] }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {Array.isArray(headers) && headers.length > 0 ? (
            headers.map((header, index) => <th key={index} className="border border-gray-300 px-4 py-2">{header}</th>)
          ) : (
            <th className="border border-gray-300 px-4 py-2">No Headers</th>
          )}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-200">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={headers.length || 1} className="text-center py-4">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

// Additional Table Components
export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <td>{children}</td>;
};

export const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <thead>{children}</thead>;
};

export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <th>{children}</th>;
};

export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <tr>{children}</tr>;
};
