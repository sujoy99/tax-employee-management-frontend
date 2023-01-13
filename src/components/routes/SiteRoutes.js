import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom"
import ProgressBar from "react-topbar-progress-indicator";
import PrivateOutlet from './PrivateOutlet';
import { siteRoutes } from '../../routes';

const SiteRoutes = () => {
    console.log("hello vai")
    return (
        <Suspense fallback={<ProgressBar />}>
            <Routes>
                <Route element={<PrivateOutlet />}>
                    {
                        siteRoutes.map(({ path, name, component }, idx) => {
                            return component && (
                                <Route
                                    key={name}
                                    path={path}
                                    element={component}
                                />
                            )
                        })
                    }
                </Route>
            </Routes>
        </Suspense>
    )
}

export default SiteRoutes
