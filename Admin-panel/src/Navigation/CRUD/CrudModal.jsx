import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

function CrudModal({ show, handleClose, action, selectedUser, handleSave }) {
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    email: "",
    role: "user", // Default role to prevent empty values
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (action === "Create") {
      setFormData({ _id: "", name: "", email: "", role: "user" });
    } else if (selectedUser) {
      setFormData({
        _id: selectedUser._id || "",
        name: selectedUser.name || "",
        email: selectedUser.email || "",
        role: selectedUser.role || "user",
      });
    }
    setError("");
  }, [selectedUser, action, show]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (action === "Delete") return true;
    if (!formData.name.trim() || !formData.email.trim() || !formData.role) {
      setError("All fields are required!");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    if (action === "Delete") {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete ${selectedUser?.name}?`
      );
      if (!confirmDelete) return;
    }
    await handleSave(action, { ...formData, email: formData.email.trim() });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{action} User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {action === "Delete" ? (
          <p className="text-danger">
            Are you sure you want to delete{" "}
            <strong>{selectedUser?.name}</strong>?
          </p>
        ) : (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                {["admin", "editor", "user"].map((role) => (
                  <option key={role} value={role}>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant={action === "Delete" ? "danger" : "primary"}
          onClick={handleSubmit}
          disabled={
            !formData.name.trim() || !formData.email.trim() || !formData.role
          }
        >
          {action}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CrudModal;
