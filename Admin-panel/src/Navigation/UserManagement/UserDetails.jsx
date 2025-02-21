import React from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function UserDetails() {
  const summaryData = {
    usersIn: 120,
    usersOut: 45,
    totalSales: "$15,230",
    pendingOrders: 12,
    completedOrders: 98,
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center fw-bold mb-4">Dashboard Summary</h4>
      <div className="row g-3">
        {/* Users In */}
        <div className="col-md-4">
          <div className="card text-center p-3 shadow-sm border-success">
            <FaUsers className="text-success fs-2 mb-2" />
            <h6>Users In</h6>
            <p className="fs-3 fw-bold text-success">{summaryData.usersIn}</p>
          </div>
        </div>

        {/* Users Out */}
        <div className="col-md-4">
          <div className="card text-center p-3 shadow-sm border-danger">
            <FaUsers className="text-danger fs-2 mb-2" />
            <h6>Users Out</h6>
            <p className="fs-3 fw-bold text-danger">{summaryData.usersOut}</p>
          </div>
        </div>

        {/* Total Sales */}
        <div className="col-md-4">
          <div className="card text-center p-3 shadow-sm border-primary">
            <FaDollarSign className="text-primary fs-2 mb-2" />
            <h6>Total Sales</h6>
            <p className="fs-3 fw-bold text-primary">
              {summaryData.totalSales}
            </p>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-2">
        {/* Pending Orders */}
        <div className="col-md-6">
          <div className="card text-center p-3 shadow-sm border-warning">
            <FaClock className="text-warning fs-2 mb-2" />
            <h6>Pending Orders</h6>
            <p className="fs-3 fw-bold text-warning">
              {summaryData.pendingOrders}
            </p>
          </div>
        </div>

        {/* Completed Orders */}
        <div className="col-md-6">
          <div className="card text-center p-3 shadow-sm border-info">
            <FaCheckCircle className="text-info fs-2 mb-2" />
            <h6>Completed Orders</h6>
            <p className="fs-3 fw-bold text-info">
              {summaryData.completedOrders}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
