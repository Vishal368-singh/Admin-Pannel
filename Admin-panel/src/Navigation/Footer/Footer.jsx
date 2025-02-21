import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </p>
      <p className="mb-3">
        Email:{" "}
        <a
          href="mailto:contact@yourcompany.com"
          className="text-light fw-semibold"
        >
          contact@yourcompany.com
        </a>
      </p>
      <div className="d-flex justify-content-center gap-3">
        <a href="#" className="text-white social-icon">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-white social-icon">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-white social-icon">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
