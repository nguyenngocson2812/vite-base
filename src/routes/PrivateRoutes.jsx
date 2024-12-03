import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
    const { isLogin, status } = useSelector((state) => state.auth);
    console.log('isLogin: ', isLogin);

    if (isLogin) {
        return <Outlet />;
    }
    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    return <Navigate to="/login" />;
}

export default PrivateRoutes;
