import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location =  useLocation();

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>;
    }
    if(user){
        return children;
    }
    
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;