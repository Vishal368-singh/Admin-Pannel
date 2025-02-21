import React, { useState } from "react";

function UserData({ users }) {
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="card p-3 shadow-sm mt-4">
      <h5 className="text-center fw-bold">User Details</h5>

      {users.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          <i className="bi bi-exclamation-circle"></i> No users found. Add some
          users to see details here.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark text-center">
              <tr>
                <th
                  onClick={() => handleSort("_id")}
                  style={{ cursor: "pointer" }}
                >
                  ID{" "}
                  {sortField === "_id" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                </th>
                <th
                  onClick={() => handleSort("name")}
                  style={{ cursor: "pointer" }}
                >
                  Name{" "}
                  {sortField === "name"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : ""}
                </th>
                <th
                  onClick={() => handleSort("email")}
                  style={{ cursor: "pointer" }}
                >
                  Email{" "}
                  {sortField === "email"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : ""}
                </th>
                <th
                  onClick={() => handleSort("role")}
                  style={{ cursor: "pointer" }}
                >
                  Role{" "}
                  {sortField === "role"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : ""}
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {sortedUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user._id.substring(0, 6)}...</td>
                  <td
                    title={user.name}
                    style={{
                      maxWidth: "150px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {user.name}
                  </td>
                  <td
                    title={user.email}
                    style={{
                      maxWidth: "200px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {user.email}
                  </td>
                  <td className="fw-bold">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserData;
