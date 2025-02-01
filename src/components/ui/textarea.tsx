// src/components/ui/textarea.tsx
import React from "react";

// Define the props interface for the Textarea component
interface TextareaProps {
  value: string; 
  onChange: (value: string) => void; 
  placeholder?: string;  // Optional placeholder text
  rows?: number;        // Optional number of rows
  cols?: number;        // Optional number of columns
  className?: string;   // Optional className for custom styling
}

export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder = "",
  rows = 4,
  cols = 50,
  className = "",
}) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)} // Ensure value is updated when user types
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      className={`resize-none p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};
