// src/components/Spreadsheet.tsx
type SpreadsheetProps = {
  data: Record<string, string | number>[];
};

export const Spreadsheet = ({ data }: SpreadsheetProps) => {
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto w-full bg-white border border-gray-300 rounded-lg shadow-md">
      <table className="w-full min-w-[600px] table-auto text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-2 font-semibold text-gray-700 border-b whitespace-nowrap"
              >
                {header.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => console.log("Row clicked:", row)}
            >
              {headers.map((key) => (
                <td
                  key={key}
                  className="px-4 py-2 border-b whitespace-nowrap"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Cell [${rowIdx}, ${key}]`, row[key as keyof typeof row]);
                  }}
                >
                  {row[key as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
