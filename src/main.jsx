import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#428CD1] h-screen flex justify-center py-9 ">
      <App />
    </div>
  </StrictMode>
);
