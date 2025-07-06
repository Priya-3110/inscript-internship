// src/App.tsx
import { Spreadsheet } from "./components/Spreadsheet";
import { Topbar } from "./components/Topbar";
import { useState } from "react";
import { mockData } from "./data/mockData";

function App() {
  const [activeSheet, setActiveSheet] = useState("Sheet 1");

  const [sheetDataMap, setSheetDataMap] = useState<Record<string, typeof mockData>>({
    "Sheet 1": mockData,
    "Sheet 2": mockData,
    "Sheet 3": mockData,
  });

  const handleAddSheet = (newSheet: string) => {
    setSheetDataMap((prev) => ({
      ...prev,
      [newSheet]: mockData,
    }));
    setActiveSheet(newSheet);
    console.log("Added new sheet:", newSheet);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans px-2 sm:px-4 py-4">
      <div className="max-w-7xl mx-auto bg-white rounded shadow overflow-hidden">
        <Topbar
          activeSheet={activeSheet}
          onSheetChange={setActiveSheet}
          onAddSheet={handleAddSheet}
        />
        <main className="p-4">
          <Spreadsheet data={sheetDataMap[activeSheet]} />
        </main>
      </div>
    </div>
  );
}

export default App;
