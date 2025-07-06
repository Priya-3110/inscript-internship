// src/components/Topbar.tsx
import { useState } from "react";

interface TopbarProps {
  activeSheet: string;
  onSheetChange: (sheetName: string) => void;
  onAddSheet: (sheetName: string) => void;
}

export const Topbar = ({ activeSheet, onSheetChange, onAddSheet }: TopbarProps) => {
  const [tabs, setTabs] = useState(["Sheet 1", "Sheet 2", "Sheet 3"]);

  const handleAddSheet = () => {
    const newSheet = `Sheet ${tabs.length + 1}`;
    const updatedTabs = [...tabs, newSheet];
    setTabs(updatedTabs);
    onAddSheet(newSheet);
  };

  return (
    <div className="bg-white border-b shadow-sm px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div className="flex flex-wrap gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1 rounded text-sm ${
              activeSheet === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
            onClick={() => {
              onSheetChange(tab);
              console.log("Switched to:", tab);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <button
        onClick={handleAddSheet}
        className="bg-green-500 text-white px-3 py-1 rounded text-sm self-start sm:self-auto"
      >
        + Add Sheet
      </button>
    </div>
  );
};
