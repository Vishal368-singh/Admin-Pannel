import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
      <a className="navbar-brand fw-bold" href="#">
        Admin Panel
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Settings
            </a>
          </li>

          {/* User Profile Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center active"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaUserCircle size={20} className="me-1" /> Admin
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item text-danger fw-bold" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
