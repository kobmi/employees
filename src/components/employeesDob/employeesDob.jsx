import React from "react";
import EmployeesDobList from "../employeesDobList";
import "./employeesDob.css";

const EmployeesDob = ({ checkedEmployees }) => {
    return (
        <div className="employees-dob">
            <div className="employees-dob-header">Employees birthday</div>
            {checkedEmployees.length === 0 ? (
                <div className="no-selected-employyes">
                    No selected employees
                </div>
            ) : (
                <EmployeesDobList checkedEmployees={checkedEmployees} />
            )}
        </div>
    );
};

export default EmployeesDob;
