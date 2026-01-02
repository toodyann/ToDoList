import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Logo from "./Components/logo.jsx";
import "../css/main.css";
import "../css/mobile.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Logo />
    <App />
  </StrictMode>
);

// Add a class to body to trigger CSS transition (ensures page becomes visible)
document.body.classList.add('loaded');
