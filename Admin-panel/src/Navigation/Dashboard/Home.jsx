import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "../Footer/Footer";
import Profile from "../UserManagement/Profile";
import Buttons from "../CRUD/Buttons";
import Livelocation from "../LiveLocationSection/Livelocation";
import UserData from "../UserManagement/UersData";
import UserDetails from "../UserManagement/UserDetails";
import DataExport from "../DataExportSection/DataExport";
import axios from "axios";

function Home() {
   const [users, setUsers] = useState([]);

   // Fetch users from backend
   const fetchUsers = async () => {
     try {
       const response = await axios.get(
         "https://backend-admin-pannel.onrender.com/users"
       );
       setUsers(response.data);
     } catch (error) {
       console.error("Error fetching users:", error);
     }
   };

   useEffect(() => {
     fetchUsers(); // Fetch users on component mount
   }, []);

  return (
    <>
      <Header />
      <div className="container-fluid my-4">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4 col-lg-3">
            <div className="d-flex flex-column gap-3">
              <Profile />
              <Buttons users={users} fetchUsers={fetchUsers} />
              <Livelocation />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-8 col-lg-9">
            <div className="d-flex flex-column gap-3">
              <UserDetails />
              <UserData users={users} />
              <DataExport />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
