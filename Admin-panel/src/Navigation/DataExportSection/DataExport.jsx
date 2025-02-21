import React from "react";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";

function DataExport() {
  const sampleData = [
    { Name: "John Doe", Email: "john@example.com", Role: "Admin" },
    { Name: "Jane Smith", Email: "jane@example.com", Role: "Editor" },
    { Name: "Alice Brown", Email: "alice@example.com", Role: "Viewer" },
  ];

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(sampleData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "UserData.xlsx");
  };

  return (
    <div className="card p-4 shadow-sm text-center">
      <h5 className="fw-bold">Export Data</h5>
      <p className="text-muted">Download user data in Excel format.</p>
      <button className="btn btn-primary fw-semibold" onClick={exportToExcel}>
        <i className="fas fa-file-excel me-2"></i> Export to Excel
      </button>
    </div>
  );
}

export default DataExport;
