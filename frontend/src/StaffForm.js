import React, { useState } from "react";
import axios from "axios";

const StaffForm = () => {
  const [formData, setFormData] = useState({
    index_number: "",
    full_names: "",
    email: "",
    current_location: "",
    highest_level_of_education: "",
    duty_station: "",
    availability_for_remote_work: false,
    software_expertise: "",
    software_expertise_level: "",
    language: "",
    level_of_responsibility: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/staff_api.php",
        formData
      );

      alert(response.data.message);
    } catch (error) {
      console.error("Error adding staff:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Add Staff Member</h2>

      <input
        type="text"
        name="index_number"
        value={formData.index_number}
        onChange={handleChange}
        placeholder="Index Number"
        required
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="text"
        name="full_names"
        value={formData.full_names}
        onChange={handleChange}
        placeholder="Full Names"
        required
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="text"
        name="current_location"
        value={formData.current_location}
        onChange={handleChange}
        placeholder="Current Location"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="text"
        name="highest_level_of_education"
        value={formData.highest_level_of_education}
        onChange={handleChange}
        placeholder="Highest Level of Education"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="text"
        name="duty_station"
        value={formData.duty_station}
        onChange={handleChange}
        placeholder="Duty Station"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          name="availability_for_remote_work"
          checked={formData.availability_for_remote_work}
          onChange={() =>
            setFormData({
              ...formData,
              availability_for_remote_work:
                !formData.availability_for_remote_work,
            })
          }
        />
        Available for Remote Work
      </label>

      <input
        type="text"
        name="software_expertise"
        value={formData.software_expertise}
        onChange={handleChange}
        placeholder="Software Expertise"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="text"
        name="software_expertise_level"
        value={formData.software_expertise_level}
        onChange={handleChange}
        placeholder="Software Expertise Level"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="text"
        name="language"
        value={formData.language}
        onChange={handleChange}
        placeholder="Language"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="text"
        name="level_of_responsibility"
        value={formData.level_of_responsibility}
        onChange={handleChange}
        placeholder="Level of Responsibility"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Add Staff
      </button>
    </form>
  );
};

export default StaffForm;
