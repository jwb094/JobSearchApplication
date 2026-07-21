import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { FiltersProvider } from "./context/Filters.jsx";
import { JobsProvider } from "./context/Jobs.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <JobsProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
      </JobsProvider>
    </BrowserRouter>
  </StrictMode>,
);
