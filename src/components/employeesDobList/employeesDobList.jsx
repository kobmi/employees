import React, { useContext } from "react";
import EmployeesDobByMonthGroup from "../employeesDobByMonthGroup";
import { Context } from "../context/Context";
import "./employeesDobList.css";

const EmployeesDobList = ({ checkedEmployees }) => {
    const { _MONTHS, getEmployeeDobMonth } = useContext(Context);

    return (
        <div className="employees-dob-list">
            {_MONTHS.map((month) => {
                const checkedEmployeesByMonthGroup = checkedEmployees.filter(
                    (checkedEmployee) =>
                        getEmployeeDobMonth(checkedEmployee.dob) === month
                );
                return checkedEmployeesByMonthGroup.length === 0 ? null : (
                    <EmployeesDobByMonthGroup
                        key={month}
                        month={month}
                        checkedEmployeesByMonthGroup={
                            checkedEmployeesByMonthGroup
                        }
                    />
                );
            })}
        </div>
    );
};

export default EmployeesDobList;
