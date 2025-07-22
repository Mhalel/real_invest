import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { LangProvider } from "./hooks/LangContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <LangProvider>
        <App />
      </LangProvider>
    </Router>
  </StrictMode>
);
