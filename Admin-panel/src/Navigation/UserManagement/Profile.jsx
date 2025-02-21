import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile({ imageUrl }) {
  const defaultAvatar = (
    <div
      className="d-flex align-items-center justify-content-center rounded-circle bg-secondary text-white"
      style={{
        width: "100px",
        height: "100px",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      ADMIN
    </div>
  );

  return (
    <div className="card text-center p-4 shadow-sm">
      <div className="d-flex justify-content-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Profile"
            className="rounded-circle"
            width="100"
            height="100"
          />
        ) : (
          defaultAvatar
        )}
      </div>
      <h5 className="mt-3 fw-bold">Admin</h5>
      <p className="text-muted">Administrator</p>
      <button className="btn btn-primary btn-sm mt-2">View Profile</button>
    </div>
  );
}

export default Profile;
