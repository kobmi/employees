import React, { useContext } from "react";
import { Context } from "../context/Context";
import "./employeesDobListItem.css";

const EmployeesDobListItem = ({ checkedEmployee }) => {
    const { formatDate } = useContext(Context);
    const { firstName, lastName, dob } = checkedEmployee;
    const employeeDobInfo = `${lastName} ${firstName} - ${formatDate(dob)}`;
    return <li className="employees-dob-list-item">{employeeDobInfo}</li>;
};

export default EmployeesDobListItem;
