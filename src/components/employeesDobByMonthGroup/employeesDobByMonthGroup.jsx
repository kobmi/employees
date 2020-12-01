import React from "react";
import EmployeesDobListItem from "../employeesDobListItem";
import "./employeesDobByMonthGroup.css";
const EmployeesDobByMonthGroup = ({ month, checkedEmployeesByMonthGroup }) => {
    return (
        <div className="employees-dob-by-month-group">
            <div className="employees-dob-by-month-group-header">{month}</div>
            {checkedEmployeesByMonthGroup.map((checkedEmployee) => (
                <EmployeesDobListItem
                    key={checkedEmployee.id}
                    checkedEmployee={checkedEmployee}
                />
            ))}
        </div>
    );
};
export default EmployeesDobByMonthGroup;
