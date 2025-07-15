import React from "react";
import ReactDOM from "react-dom/client";
import createRoot from "react-dom/client";

import "./index.css";
import App from "./App";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";
import LandingPage from "./Pages/LandingPage";
import WaitlistPage from "./Pages/WaitlistPage";
import AboutPage from "./Pages/AboutPage";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFoundPage /> },
  { path: "/profiles/:profileId", element: <ProfilePage /> },
  { path: "/landing", element: <LandingPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/waitlist", element: <WaitlistPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
