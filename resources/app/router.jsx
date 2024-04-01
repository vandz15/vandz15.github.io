import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Error404 from "@/pages/404";

const Home = React.lazy(() => import("@/pages/Home"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Error404 />} />
        </Route>
    )
);

export default router;
