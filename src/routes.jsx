import React, { lazy } from "react";
import Loading from "../src/component/loading";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/login"));
const Signup  = lazy(() => import("./pages/signup"));

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
