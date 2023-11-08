import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*

Diba after mo iinstall ung react-router-dom
need mo pumunta sa main.jsx tapos ilagay mo ung

 <BrowserRouter>

</BrowserRouter>

ilagay mo sa gitna ung <App />
para gumana ung mga routes 

dito sa gagawin ko dito ka matututo
sa routing sa frontend.....

so dito oks na ung configuration natin punta 
tayo sa App.jsx



*/
