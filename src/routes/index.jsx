import { useRoutes, Outlet, useParams } from "react-router-dom";
import LayoutDefault from "../layouts/LayoutDefault/LayoutDefault";
import PrivateRouts from "./PrivateRouts";

function Home() {
    return <h2>Home Page</h2>; // Changed to "Home Page"
}

function About() {
    return (
        <div>
            <h2>About Page</h2>
            <Outlet />
        </div>
    );
}

function About2() {
    return <h2>About Page 2</h2>;
}

function Contact() {
    return (
        <div>
            <h2>Contact Page</h2>
            <Outlet />
        </div>
    );
}

function ContactDetail() {
    const params = useParams();
    console.log(params);
    return <h2>ContactDetail Page: {JSON.stringify(params)}</h2>;
}

function NoPage() {
    return <h2>404 - Page Not Found</h2>;
}
function AppRoutes() {
    const routes = [
        {
            path: '/',
            element: <LayoutDefault />,
            children: [
                { path: '/', element: <Home /> }, // Use '' for the Home route instead of '/'
                {
                    path: 'about',
                    element: <About />,
                    children: [{ path: 'about2', element: <About2 /> }],
                },
                {
                    path: 'contact',
                    element: <Contact />,
                    children: [{ path: ':id', element: <ContactDetail /> }],
                },
                {
                    element: <PrivateRouts />,
                    children: [
                        {
                        }
                    ]
                }
            ],
        },
        { path: '*', element: <NoPage /> }, // Wildcard route for 404
    ];

    return useRoutes(routes);
}

export default AppRoutes;
