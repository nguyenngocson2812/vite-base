import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
    const isAuthenticated = true; // Thay bằng logic kiểm tra thực tế

    if (!isAuthenticated) {
        return <Navigate to="/login" />; // Điều hướng đến login nếu chưa đăng nhập
    }

    return <Outlet />; // Render các route con nếu đã đăng nhập
}

export default PrivateRoutes;
