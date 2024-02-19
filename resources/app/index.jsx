import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@/styles/bootstrap/css/bootstrap.min.css";
import "@/styles/linearicons/css/icon-font.min.css";
import "@/styles/font-awesome/css/font-awesome.min.css";
import "@/styles/animate/animate.css";
import "@/styles/owl-carousel/css/owl.carousel.css";
import "@/styles/owl-carousel/css/owl.theme.css";
import "@/styles/scss/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// console.log(import.meta.env.VITE_APP_URL);
