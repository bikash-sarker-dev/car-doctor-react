import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/Login/Login";
import RegisterPage from "../auth/register/RegisterPage";
import Details from "../components/details/Details";
import { DetailsLayout } from "../Layouts/DetailsLayout";
import RootsLayouts from "../Layouts/RootsLayouts";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootsLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },

      // auth
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/details/:id",
    element: <DetailsLayout />,
    children: [
      {
        path: "/details/:id",
        element: <Details />,
        loader: async ({ params }) =>
          axios.get(
            `https://car-doctor-server-nine-delta-13.vercel.app/cars/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
