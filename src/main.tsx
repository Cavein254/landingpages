import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import PageOne from "./pages/PageOne.tsx";
import PageTwo from "./pages/PageTwo.tsx";
import Store from "./components/commedestore/index";
const router = createBrowserRouter([
  {
    path: "/pagetwo",
    element: <PageTwo />,
  },
  {
    path: "/pageone",
    element: <PageOne />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/commestore",
    element: <Store />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
