import React, { useState } from "react";
import CrudModal from "./CrudModal";
import axios from "axios";

function Buttons({ users, fetchUsers }) {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [loading, setLoading] = useState({
    create: false,
    update: false,
    delete: false,
  });
  const [error, setError] = useState(null);

  const selectedUser =
    users.find((user) => user._id === selectedUserId) || null;

  const handleShow = (actionType) => {
    setAction(actionType);
    setShowModal(true);
  };

  const handleSave = async (actionType, formData) => {
    try {
      setLoading((prev) => ({ ...prev, [actionType.toLowerCase()]: true }));
      setError(null);

      const apiURL = "https://backend-admin-pannel.onrender.com/users";
      if (actionType === "Create") {
        await axios.post(apiURL, formData);
      } else if (actionType === "Update" && selectedUserId) {
        await axios.put(`${apiURL}/${selectedUserId}`, formData);
      } else if (actionType === "Delete" && selectedUserId) {
        await axios.delete(`${apiURL}/${selectedUserId}`);
      }

      await fetchUsers();
      setShowModal(false);
      setSelectedUserId("");
    } catch (error) {
      setError(
        `Error in ${actionType} operation: ${
          error.response?.data?.message || error.message
        }`
      );
      console.error(error);
    } finally {
      setLoading((prev) => ({ ...prev, [actionType.toLowerCase()]: false }));
    }
  };

  return (
    <div className="card p-3 shadow-sm">
      <h5 className="text-center fw-bold">Manage Records</h5>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={() => handleShow("Create")}
          disabled={loading.create}
        >
          {loading.create ? "Processing..." : "Create"}
        </button>

        {users.length > 0 && (
          <select
            className="form-select my-2"
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.email} ({user.role})
              </option>
            ))}
          </select>
        )}

        <button
          className="btn btn-secondary"
          onClick={() => handleShow("Read")}
          disabled={!selectedUserId}
        >
          Read
        </button>

        <button
          className="btn btn-warning text-white"
          onClick={() => handleShow("Update")}
          disabled={!selectedUserId || loading.update}
        >
          {loading.update ? "Processing..." : "Update"}
        </button>

        <button
          className="btn btn-danger"
          onClick={() => handleShow("Delete")}
          disabled={!selectedUserId || loading.delete}
        >
          {loading.delete ? "Processing..." : "Delete"}
        </button>
      </div>

      <CrudModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        action={action}
        selectedUser={selectedUser}
        handleSave={handleSave}
      />
    </div>
  );
}

export default Buttons;
