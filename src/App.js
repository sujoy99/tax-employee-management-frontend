import React, {Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProgressBar from "react-topbar-progress-indicator";

import { authRoutes } from './routes';
import SiteRoutes from './components/routes/SiteRoutes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    <Suspense fallback={<ProgressBar/>}>
      <Routes>
        <Route path={authRoutes[0].path} element={authRoutes[0].component} />
        <Route path='/*' element={<SiteRoutes />} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
