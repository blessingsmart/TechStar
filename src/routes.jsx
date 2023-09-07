import React, { lazy } from "react";
import Loading from "../src/component/loading";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home Page/Home"));

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Home />
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;
