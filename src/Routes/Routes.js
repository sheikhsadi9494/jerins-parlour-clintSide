import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeConateiner from "../pages/Home/HomeConateiner";
import AppointmentBanner from "../pages/Appointment/AppointmentBanner";
import Appointment from "../pages/Appointment/Appointment";

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
    ],
  },
]);

export default router;
