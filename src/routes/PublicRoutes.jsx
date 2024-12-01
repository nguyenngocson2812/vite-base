import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes() {
    const isAuthenticated = false;

    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return <Outlet />;
}

export default PublicRoutes;
