import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import "./employeesListItem.css";
const EmployeesListItem = ({ employee }) => {
    const [checked, setChecked] = useState(false);
    const { addToCheckedEmployees, deleteFromCheckedEmployees } = useContext(
        Context
    );
    const { id, firstName, lastName } = employee;

    const toggleChecked = () => {
        setChecked(!checked);
    };

    useEffect(() => {
        getLocalChecked();
    }, []);
    useEffect(() => {
        saveLocalChecked();
    }, [checked]);

    // get checked from local
    const getLocalChecked = () => {
        if (localStorage.getItem(`${id}`) === null) {
            localStorage.setItem(`${id}`, false);
        } else {
            setChecked(JSON.parse(localStorage.getItem(`${id}`)));
        }
    };
    // save checked to local
    const saveLocalChecked = () => {
        localStorage.setItem(`${id}`, JSON.stringify(checked));
    };
    const employeeInfo = `${lastName} ${firstName}`;
    return (
        <div className="employees-list-item">
            <span>{employeeInfo}</span>
            <span>
                <input
                    type="checkbox"
                    onChange={() => {
                        toggleChecked();
                        checked
                            ? deleteFromCheckedEmployees(id)
                            : addToCheckedEmployees(employee);
                    }}
                    checked={checked}
                />
            </span>
        </div>
    );
};

export default EmployeesListItem;
