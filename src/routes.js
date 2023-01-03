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

const authRoutes = [
    { path: "/login", name: "Login", component: <Login /> },
];

const siteRoutes = [
  
    // salary type
    { path: "/salary-type", name: "SalaryTypeList", component: <SalaryTypeList /> },
    { path: "/salary-type/add", name: "SalaryTypeAdd", component: <SalaryTypeAdd /> },
    // { path: "/salary-type/:id", exact: true, name: "SalaryTypeDetail", component: StudentTypeDetail },
    { path: "/salary-type/:id/edit", name: "SalaryTypeEdit", component: SalaryTypeEdit },
  
  ];

  export {
    authRoutes,
    siteRoutes
};