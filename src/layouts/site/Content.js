// import React, { Suspense } from 'react'
// import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
// import ProgressBar from "react-topbar-progress-indicator";
// import { authRoutes, siteRoutes } from '../../routes';
// import Cookies from 'js-cookie';
// import SalaryTypeAdd from '../../views/salary_type/SalaryTypeAdd';

// const Content = () => {
//     let accessToken = Cookies.get('access_token');
//     let location = useLocation();  
//     return (
//         <main>
//             <div className="container">
//                 <Suspense fallback={<ProgressBar />}>

//                     <Route path={siteRoutes[0].path} element={siteRoutes[0].component} />
                    
//                     <Routes>
//                         {/* {
//                             accessToken != null ? (
//                                 siteRoutes.map(({ exact, path, name, component }, idx) => {
//                                     return (
//                                         component && (
//                                             <Route  
//                                                 key={name}
//                                                 exact={exact}
//                                                 path={path}
//                                                 element={component}
//                                             // element={React.lazy(() => import(`../../views/${component}`))}
//                                             />
//                                             // <Route path='/salary-type/add' element={<SalaryTypeAdd />} />
//                                         )
//                                     )

//                                 })
//                             ) : ( 
//                                     // <Link to={'/login'} />
//                                     <Navigate to="/login" replace />
//                                 )
//                         } */}
//                     </Routes>
//                 </Suspense>
//             </div>
//         </main>
//     );
// }

// export default Content;

// // const Content = () => {

// //     return (
// //         <h1>This is Content</h1>
// //     );
// // }
// // export default Content;
