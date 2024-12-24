import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoute from "./PrivateRoute";
import AllVolunteers from "../pages/AllVolunteers";
import VolunteerDetails from "../pages/VolunteerDetails";
import BeAVolunteer from "../pages/BeAVolunteer";
import ManageMyVolunteers from "../pages/ManageMyVolunteers";
import UpdateVolunteer from "../pages/UpdateVolunteer";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-volunteer",
        element: (
          <PrivateRoute>
            <AddVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-volunteers",
        element: <AllVolunteers />,
      },
      {
        path: "/volunteer/:id",
        element: (
          <PrivateRoute>
            <VolunteerDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/be-a-volunteer/:id",
        element: (
          <PrivateRoute>
            <BeAVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-posts",
        element: (
          <PrivateRoute>
            <ManageMyVolunteers />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteer />
          </PrivateRoute>
        ),
      }
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
];
const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default router;
