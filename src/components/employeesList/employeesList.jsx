import React, { useContext } from "react";
import EmployeesByLetterGroup from "../employeesByLetterGroup";
import { Context } from "../context/Context";
import "./employeesList.css";

const EmployeesList = ({ employees }) => {
    const { _ALPHABETLETTERS } = useContext(Context);
    return (
        <div className="employees-list">
            {_ALPHABETLETTERS.map((letter) => {
                const employeesByLetterGroup = employees.filter(
                    (employee) => employee.lastName[0] === letter
                );
                return (
                    <EmployeesByLetterGroup
                        key={letter}
                        letter={letter}
                        employeesByLetterGroup={employeesByLetterGroup}
                    />
                );
            })}
        </div>
    );
};
export default EmployeesList;
