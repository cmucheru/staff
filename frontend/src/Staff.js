import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Import the CSS file

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/staff_api.php")
      .then((response) => {
        console.log(response.data);
        setStaff(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="staff-container">
      <h1>Staff List</h1>
      <div className="buttons">
        <button onClick={() => navigate("/staff-form")} className="btn">
          Add Staff
        </button>
        <button onClick={() => navigate("/staff-list")} className="btn">
          View Staff List
        </button>
      </div>
      <ul className="staff-list">
        {staff.map((person, index) => (
          <li key={index} className="staff-item">
            {person.full_names} - {person.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Staff;
