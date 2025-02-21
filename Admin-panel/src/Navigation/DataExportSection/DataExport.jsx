import React, { useState } from "react";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function DataExport() {
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://backend-admin-pannel.onrender.com/users"
      ); 
      const userData = response.data;

      if (!Array.isArray(userData) || userData.length === 0) {
        alert("No user data found to export!");
        setLoading(false);
        return;
      }

      // Convert JSON data to Excel format
      const worksheet = XLSX.utils.json_to_sheet(userData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

      // Download the Excel file
      XLSX.writeFile(workbook, "UserData.xlsx");
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Failed to fetch user data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4 shadow-sm text-center">
      <h5 className="fw-bold">Export Data</h5>
      <p className="text-muted">Download user data in Excel format.</p>
      <button
        className="btn btn-primary fw-semibold"
        onClick={fetchUserData}
        disabled={loading}
      >
        {loading ? (
          "Exporting..."
        ) : (
          <>
            <i className="fas fa-file-excel me-2"></i> Export to Excel
          </>
        )}
      </button>
    </div>
  );
}

export default DataExport;
