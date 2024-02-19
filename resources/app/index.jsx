import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// <!-- Bootstrap CSS -->
import "@/styles/bootstrap/css/bootstrap.min.css"
{/* <!-- Linear icons CSS--> */}
import "@/styles/linearicons/css/icon-font.min.css" 
{/* <!-- Font Awesome CSS--> */}
import "@/styles/font-awesome/css/font-awesome.min.css"
{/* <!-- Animate CSS --> */}
import "@/styles/animate/animate.css"
{/* <!-- Owl Carousel --> */}
import "@/styles/owl-carousel/css/owl.carousel.css"
import "@/styles/owl-carousel/css/owl.theme.css"
{/* <!-- Custom CSS --> */}
import "@/styles/scss/style.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// console.log(import.meta.env.VITE_APP_URL);
