import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PagesProvider } from "./contextApi/PagesContext";
import { HelmetProvider } from "react-helmet-async";
import { LocationProvider } from "./contextApi/LocationContext";
import { AuthProvider } from "./contextApi/AuthContext";
import ReactGA from "react-ga";
import { RegionProvider } from "./contextApi/RegionContext";

ReactGA.initialize("G-BCL6E9YC4N");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PagesProvider>
        <AuthProvider>
          <LocationProvider>
            <HelmetProvider>
              <RegionProvider>
                <App />
              </RegionProvider>
            </HelmetProvider>
          </LocationProvider>
        </AuthProvider>
      </PagesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
