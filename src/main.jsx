import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";
import { router } from "./Page/Routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      {/* <App /> */}
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
