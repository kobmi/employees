import React, { useEffect, useState } from "react";
import axios from "axios";
// import Components
import Employees from "../employees";
import EmployeesDob from "../employeesDob";
import Loading from "../loading";
import Err from "../err";
// import Context
import { Context } from "../context/Context";
// import Css
import "./app.css";

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [checkedEmployees, setCheckedEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // get checked employees from local
    useEffect(() => {
        getLocalCheckedEmpls();
        // eslint-disable-next-line
    }, []);
    // get employees from yalantis api
    useEffect(() => {
        getEmployees();
    }, []);
    // save checked employees to local when checkedEmployees chenges
    useEffect(() => {
        saveLocalCheckedEmpls();
        // eslint-disable-next-line
    }, [checkedEmployees]);

    // get employees from api
    const getEmployees = () => {
        return axios
            .get(
                `https://yalantis-react-school-api.yalantis.com/api/task0/users`
            )
            .then((response) => {
                // setLoading(true);
                setEmployees(response.data);
            })
            .catch(function (error) {
                setLoading(false);
                setIsError(true);
                console.log(error);
            })
            .then(() => {
                setLoading(false);
            });
    };
    // add employyes to local
    const saveLocalCheckedEmpls = () => {
        localStorage.setItem(
            "checkedEmployees",
            JSON.stringify(checkedEmployees)
        );
    };
    // get employees from local
    const getLocalCheckedEmpls = () => {
        if (localStorage.getItem(`checkedEmployees`) === null) {
            localStorage.setItem(
                `checkedEmployees`,
                JSON.stringify(checkedEmployees)
            );
        } else {
            let checkedEmployeesLocal = JSON.parse(
                localStorage.getItem(`checkedEmployees`)
            );
            setCheckedEmployees(checkedEmployeesLocal);
        }
    };
    // add employees to checked
    const addToCheckedEmployees = (employee) => {
        setCheckedEmployees((checkedEmployees) => [
            ...checkedEmployees,
            employee,
        ]);
    };
    // delete employye from checked
    const deleteFromCheckedEmployees = (id) => {
        setCheckedEmployees(checkedEmployees.filter((item) => item.id !== id));
    };

    // Utils
    // alphabet
    const _ALPHABETLETTERS = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    // months
    const _MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    // defing month from emplyyes dob
    const defineMonth = (month) => {
        switch (month + 1) {
            case 1:
                return "January";
            case 2:
                return "February";
            case 3:
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
            default:
                return null;
        }
    };
    // format date
    const formatDate = (date) => {
        const d = new Date(Date.parse(date));
        return `${d.getDate()} ${defineMonth(
            d.getMonth()
        )}, ${d.getFullYear()} year`;
    };
    // get month from employyes dob
    const getEmployeeDobMonth = (employeeDob) => {
        const d = new Date(Date.parse(employeeDob));
        return `${defineMonth(d.getMonth())}`;
    };

    const view = (
        <Context.Provider
            value={{
                // state
                addToCheckedEmployees,
                deleteFromCheckedEmployees,
                // constants
                _ALPHABETLETTERS,
                _MONTHS,
                //work with date
                formatDate,
                getEmployeeDobMonth,
            }}
        >
            <Employees employees={employees} />
            <EmployeesDob checkedEmployees={checkedEmployees} />
        </Context.Provider>
    );

    // error loading content determinant
    const errorMessage = isError ? <Err /> : null;
    const loadingMessage = loading ? <Loading /> : null;
    const content = !(loading || isError) ? view : null;

    return (
        <div className="app">
            {errorMessage}
            {loadingMessage}
            {content}
        </div>
    );
};

export default App;
