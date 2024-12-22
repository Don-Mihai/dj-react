import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageWrapper from "./pages/PageWrapper";
import Main from "./pages/Main";
import About from "./pages/About";
import Artists from "./pages/Artists";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Equipment from "./pages/Equipment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "artists",
        element: <Artists />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "equipment",
        element: <Equipment />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider basename="/dj-react" router={router} />);
