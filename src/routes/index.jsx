import LayoutDefault from "../layouts/LayoutDefault/LayoutDefault.jsx";
import Home from "../pages/Home/index.jsx";
import About from "../pages/About/index.jsx";
import About2 from "../pages/About2/index.jsx";
import Contact from "../pages/Contact/index.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import PublicRoutes from "./PublicRoutes.jsx";
import Register from "../pages/Register/index.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Login from "../pages/Login/index.jsx";
import {useParams, useRoutes} from "react-router-dom";

function ContactDetail() {
    const value = useParams();
    return <>
        {JSON.stringify(value)}
    </>
}
function AppRoutes() {
    const routes = [
        {
            path: '/',
            element: <LayoutDefault />,
            children: [
                { index: true, element: <Home /> },
                { path: 'about', element: <About /> },
                { path: 'about/about2', element: <About2 /> },
                {
                    path: 'contact',
                    element: <Contact />,
                    children: [{ path: ':id', element: <ContactDetail /> }],
                },
                {
                    element: <PrivateRoutes />,
                    children: [
                    ],
                },
            ],
        },
        {
            element: <PublicRoutes />,
            children: [
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
            ],
        },
        { path: '*', element: <NotFound /> },
    ];

    return useRoutes(routes);
}

export default AppRoutes;

