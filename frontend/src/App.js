import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Staff from "./Staff";
import StaffForm from "./StaffForm";
import StaffList from "./StaffList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Staff />} />
                <Route path="/staff-form" element={<StaffForm />} />
                <Route path="/staff-list" element={<StaffList />} />


            </Routes>
        </Router>
    );
}

export default App;
