import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Page/Routes/Router";
import AuthProvider from "./Providers/AuthProviders";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
