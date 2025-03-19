import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Import CSS for styling

const API_URL = "http://localhost:8000/api/staff_api.php";

const StaffManagement = () => {
  const [staff, setStaff] = useState([]);
  const [formData, setFormData] = useState({
    index_number: "",
    full_names: "",
    email: "",
    current_location: "",
    highest_level_of_education: "",
    duty_station: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Fetch staff data
  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = () => {
    axios.get(API_URL)
      .then((response) => {
        setStaff(response.data);
      })
      .catch((error) => console.error("Error fetching staff data:", error));
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Add/Edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    const method = editingIndex !== null ? "PUT" : "POST";
    
    axios({
      method,
      url: API_URL,
      data: formData,
    })
      .then(() => {
        fetchStaff();
        setFormData({
          index_number: "",
          full_names: "",
          email: "",
          current_location: "",
          highest_level_of_education: "",
          duty_station: "",
        });
        setEditingIndex(null);
      })
      .catch((error) => console.error("Error adding/editing staff:", error));
  };

  // Edit staff
  const handleEdit = (staffMember) => {
    setFormData(staffMember);
    setEditingIndex(staffMember.index_number);
  };

  // Delete staff
  const handleDelete = (index_number) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      axios.delete(API_URL, { data: { index_number } })
        .then(() => fetchStaff())
        .catch((error) => console.error("Error deleting staff:", error));
    }
  };

  return (
    <div className="staff-container">
      <h2>Staff Management</h2>
      
      {/* Add/Edit Form */}
      <form className="staff-form" onSubmit={handleSubmit}>
        <input type="text" name="index_number" value={formData.index_number} onChange={handleChange} placeholder="Index Number" required />
        <input type="text" name="full_names" value={formData.full_names} onChange={handleChange} placeholder="Full Names" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="current_location" value={formData.current_location} onChange={handleChange} placeholder="Current Location" />
        <input type="text" name="highest_level_of_education" value={formData.highest_level_of_education} onChange={handleChange} placeholder="Education Level" />
        <input type="text" name="duty_station" value={formData.duty_station} onChange={handleChange} placeholder="Duty Station" />
        
        <button type="submit">{editingIndex !== null ? "Update" : "Add"} Staff</button>
      </form>

      {/* Staff Table */}
      <table className="staff-table">
        <thead>
          <tr>
            <th>Index Number</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Education</th>
            <th>Duty Station</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((staffMember) => (
            <tr key={staffMember.index_number}>
              <td>{staffMember.index_number}</td>
              <td>{staffMember.full_names}</td>
              <td>{staffMember.email}</td>
              <td>{staffMember.current_location}</td>
              <td>{staffMember.highest_level_of_education}</td>
              <td>{staffMember.duty_station}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(staffMember)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(staffMember.index_number)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffManagement;
