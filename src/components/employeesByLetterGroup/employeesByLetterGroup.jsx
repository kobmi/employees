import React from "react";
import EmployeesListItem from "../employeesListItem";
import "./employeesByLetterGroup.css";
const EmployeesByLetterGroup = ({ letter, employeesByLetterGroup }) => {
    return (
        <div className="employees-by-letter-group">
            <div className="employees-by-letter-group-header">{letter}</div>
            {employeesByLetterGroup.length === 0 ? (
                <span>- - -</span>
            ) : (
                employeesByLetterGroup.map((employee) => (
                    <EmployeesListItem key={employee.id} employee={employee} />
                ))
            )}
        </div>
    );
};

export default EmployeesByLetterGroup;
