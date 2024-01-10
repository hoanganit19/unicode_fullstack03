import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
ReactDOM.createRoot(document.getElementById("root"), {
  identifierPrefix: "unicode_",
}).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
