// src/components/ui/select.tsx

import React from "react";

interface SelectProps {
  options?: string[]; // Made options optional and added a default
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ options = [], value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>
        Select an option
      </option>
      {options.length > 0 ? (
        options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))
      ) : (
        <option disabled>No options available</option>
      )}
    </select>
  );
};

// Additional UI Components for Select
export const SelectContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const SelectItem = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const SelectTrigger = ({ children }: { children: React.ReactNode }) => <button>{children}</button>;
export const SelectValue = ({ value }: { value: string }) => <span>{value}</span>;
