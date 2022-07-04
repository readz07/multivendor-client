import React from 'react'
import { Navigate, useLocation } from "react-router-dom";
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading, error] = useAuthState (auth);

    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }
    

    if (!user) {

        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;