import React from "react";

/*
|--------------------------------------------------------------------------
| Auth routes
|--------------------------------------------------------------------------
*/

const Login = React.lazy(() => import ("./views/login/Login"));

/*
|--------------------------------------------------------------------------
| Site routes
|--------------------------------------------------------------------------
*/

// Salary Type
const SalaryTypeList = React.lazy(() => import("./views/salary_type/SalaryTypeList"));
const SalaryTypeAdd = React.lazy(() => import("./views/salary_type/SalaryTypeAdd"));
// const StudentTypeDetail = React.lazy(() => import("./views/portal/settings/student_type/StudentTypeDetail"));
const SalaryTypeEdit = React.lazy(() => import("./views/salary_type/SalaryTypeEdit"));

// Employee Salary 
const EmployeeSalaryAdd = React.lazy(() => import("./views/employee_salary/EmployeeSalaryAdd"));

//Employee
const EmployeeList = React.lazy(() => import("./views/employee_info/EmployeeList"));
const EmployeeAdd = React.lazy(() => import("./views/employee_info/EmployeeAdd"));


const UserList = React.lazy(() => import("./views/user/UserList"))

const SalaryStructureAdd = React.lazy(() => import("./views/salary_structure/SalaryStructureAdd"));

const authRoutes = [
    { path: "/login", name: "Login", component: <Login /> },
];

const siteRoutes = [
  
    // salary type
    { path: "/salary-type", name: "SalaryTypeList", component: <SalaryTypeList /> },
    { path: "/salary-type/add", name: "SalaryTypeAdd", component: <SalaryTypeAdd /> },
    // { path: "/salary-type/:id", exact: true, name: "SalaryTypeDetail", component: StudentTypeDetail },
    { path: "/salary-type/:id/edit", name: "SalaryTypeEdit", component: SalaryTypeEdit },
    
    //employee salary 
    { path: "/employee-salary/add", name: "EmployeeSalaryAdd", component: <EmployeeSalaryAdd /> },

    //employee Info
    { path: "/employee/add", name: "EmployeeAdd", component: <EmployeeAdd /> },
    { path: "/employee", name: "EmployeeList", component: <EmployeeList /> },
    // user
    { path: "/user/list", name: "UserList", component: <UserList /> },

     //employee Info
     { path: "/salary-structure/add", name: "SalaryStructureAdd", component: <SalaryStructureAdd /> },
  
  ];

  export {
    authRoutes,
    siteRoutes
};