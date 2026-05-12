import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx"
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Service from "../pages/Service.jsx"
import Course from "../pages/Course.jsx"
import MainLayout from "../layout/MainLayout.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

const Router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "service",
        element: <Service />
      },
      {
        path: "course",
        element: <Course />
      },

      // {
      //   path: "auth",
      //   element: <AuthLayout />,
      //   children: [
      //     {
      //       path: "login",
      //       element: <Login />
      //     },
      //     {
      //       path: "register",
      //       element: <Register />
      //     }
      //   ]
      // },
    ],

  },

  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },


])

export default Router