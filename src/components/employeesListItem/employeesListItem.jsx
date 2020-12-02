import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import "./employeesListItem.css";
const EmployeesListItem = ({ employee }) => {
    const [checked, setChecked] = useState(false);
    const { addToCheckedEmployees, removeFromCheckedEmployees } = useContext(
        Context
    );
    useEffect(() => {
        getLocalChecked();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        saveLocalChecked();
        // eslint-disable-next-line
    }, [checked]);

    const toggleChecked = () => {
        setChecked(!checked);
    };

    // get checked from local
    const getLocalChecked = () => {
        if (localStorage.getItem(`${employee.id}`) === null) {
            localStorage.setItem(`${employee.id}`, false);
        } else {
            setChecked(JSON.parse(localStorage.getItem(`${employee.id}`)));
        }
    };
    // save checked to local
    const saveLocalChecked = () => {
        localStorage.setItem(`${employee.id}`, JSON.stringify(checked));
    };
    const employeeInfo = `${employee.lastName} ${employee.firstName}`;
    return (
        <div className="employees-list-item">
            <span>{employeeInfo}</span>
            <span>
                <input
                    type="checkbox"
                    onChange={() => {
                        toggleChecked();
                        checked
                            ? removeFromCheckedEmployees(employee.id)
                            : addToCheckedEmployees(employee);
                    }}
                    checked={checked}
                />
            </span>
        </div>
    );
};

export default EmployeesListItem;
