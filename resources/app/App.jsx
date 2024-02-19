import React, { Fragment, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Fragment>
            <RouterProvider router={router}></RouterProvider>
        </Fragment>
    );
}

export default App;
