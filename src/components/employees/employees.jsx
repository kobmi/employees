import React from "react";
import EmployeesList from "../employeesList";
import "./employees.css";
const Employees = ({ employees }) => {
    return (
        <div className="employees">
            <div className="employees-header">Employees</div>
            <EmployeesList employees={employees} />
        </div>
    );
};
export default Employees;
