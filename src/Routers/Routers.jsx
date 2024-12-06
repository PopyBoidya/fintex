import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import About from "../Page/About";
import ContactPage from "../Page/ContactPage";
import Login from "../Page/Login";
import SignupPage from "../Page/SignupPage";
import Dashboard from "../Page/Dashboard";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about-us",
                element: <About />,
            },
            {
                path: "/contact-us",
                element: <ContactPage />,
            },
            {
                path: "/Login",
                element: <Login />,
            },
            {
                path: "/signUp",
                element: <SignupPage />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

export default Routers;