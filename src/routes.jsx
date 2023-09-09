import React, { lazy } from "react";
import Loading from "./pages/Home Page/component/loading";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home Page/Home"));
const Login = lazy(() => import("./pages/Registration_Login/component/login"));
const Signup  = lazy(() => import("./pages/Registration_Login/component/signup"));

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Home />
            </React.Suspense>
        ),
    },
    {
        path: "/login",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Login />
            </React.Suspense>
        ),
    },
    {
        path: "/signup",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Signup />
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;
