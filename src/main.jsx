import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { FiltersProvider } from "./context/Filters.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </BrowserRouter>
  </StrictMode>,
);
