import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeConateiner from "../pages/Home/HomeConateiner";
import AppointmentBanner from "../pages/Appointment/AppointmentBanner";
import Appointment from "../pages/Appointment/Appointment";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomeConateiner />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      }
    ],
  },
]);

export default router;
