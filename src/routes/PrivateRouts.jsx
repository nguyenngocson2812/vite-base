import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouts() {
    const isLogin = true;
    return (<>
        {isLogin ? (<Outlet />) : (<Navigate to={"/login"} />)}
    </>)
}

export default PrivateRouts