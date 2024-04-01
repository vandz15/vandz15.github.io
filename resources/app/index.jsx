import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@/styles/scss/style.scss";

// Use the body element with id "app" as the container
const appContainer = document.getElementById("app");

ReactDOM.createRoot(appContainer).render(<App />);
