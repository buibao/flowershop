import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./screens/Home/Home";
import "./styles.css";
import "./motion/motion.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
