import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/darkMode.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Toaster />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
