import React from 'react'
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import SiteLayout from '../../layouts/site/SiteLayout'

const PrivateOutlet = () => {
    const auth = useAuth();

    return auth ? <SiteLayout /> : <Navigate to="/login" />;
}

export default PrivateOutlet
