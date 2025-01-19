import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LoginLandingPage } from "./screens/LoginLandingPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <LoginLandingPage />
  </StrictMode>,
);
